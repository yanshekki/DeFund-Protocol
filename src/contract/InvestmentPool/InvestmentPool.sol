// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./FlowToken.sol";

contract InvestmentPool is ReentrancyGuard {
    using SafeERC20 for IERC20;

    string public constant VERSION = "1.0.0";
    string public constant NAME = "InvestmentPool";

    string public fundName;
    address public owner;
    address public pauser;
    address public investor;
    address public immutable creator = 0x2Cd1B9b6e315a60E075ab710D8b0b3A58dc3A157;
    IERC20 public token;
    FlowToken public flowToken;
    uint256 public totalDeposits;
    uint256 public lastProfitDistributionTime;
    bool public paused = false;
    uint256 public minDeposit;
    uint256 public maxDeposit;
    uint256 public withdrawalFreezePeriod;
    uint256 public commissionRate;
    uint256 public totalPendingWithdrawals;

    struct WithdrawalRequest {
        uint256 flowAmount;
        uint256 tokenAmount;
        uint256 requestTime;
        bool processed;
    }
    mapping(address => WithdrawalRequest[]) public withdrawalRequests;
    mapping(address => uint256) public pendingRequestCount;

    struct ProfitRecord {
        uint256 timestamp;
        int256 profit;
    }
    ProfitRecord[] public profitHistory;

    struct DepositSnapshot {
        uint256 timestamp;
        uint256 totalDeposits;
    }
    DepositSnapshot[] public depositSnapshots;

    event FundNameUpdated(string newFundName);
    event Deposit(address indexed user, uint256 amount, uint256 flowAmount);
    event ProfitDistributed(int256 totalProfit, uint256 commission, uint256 creatorTax, uint256 timestamp);
    event WithdrawalProcessed(address indexed user, uint256 flowAmount, uint256 amount);
    event InvestmentWithdrawn(address indexed investor, uint256 amount, string protocol);
    event EmergencyPaused(address indexed pauser, string reason);
    event EmergencyUnpaused(address indexed pauser);
    event ParameterUpdated(string parameter, uint256 newValue);
    event RoleUpdated(string role, address member, bool granted);
    event FlowTokenSet(address flowTokenAddress);
    event TokensDeposited(uint256 amount);

    constructor(
        string memory _fundName,
        address _tokenAddress,
        uint256 _minDeposit,
        uint256 _maxDeposit,
        uint256 _withdrawalFreezePeriod,
        address _owner,
        address _pauser,
        address _investor,
        uint256 _commissionRate
    ) {
        require(bytes(_fundName).length > 0, "Fund name cannot be empty");
        require(_tokenAddress != address(0), "Invalid token address");
        require(_minDeposit > 0, "Min deposit must be greater than 0");
        require(_maxDeposit >= _minDeposit, "Max deposit must be >= min deposit");
        require(_withdrawalFreezePeriod >= 1 hours, "Freeze period too short");
        require(_commissionRate <= 100, "Commission rate must be <= 100");
        require(_commissionRate >= 0, "Commission rate must be > 0");

        fundName = _fundName;
        owner = _owner;
        pauser = _pauser;
        investor = _investor;
        token = IERC20(_tokenAddress);
        minDeposit = _minDeposit;
        maxDeposit = _maxDeposit;
        withdrawalFreezePeriod = _withdrawalFreezePeriod;
        commissionRate = _commissionRate;
        totalPendingWithdrawals = 0;
    }

    modifier whenNotPaused() {
        require(!paused);
        _;
    }

    modifier onlyInvestor() {
        require(msg.sender == investor);
        _;
    }

    modifier onlyPauser() {
        require(msg.sender == pauser);
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    modifier flowTokenSet() {
        require(address(flowToken) != address(0));
        _;
    }

    function setFlowToken(address _flowTokenAddress) external onlyOwner {
        require(_flowTokenAddress != address(0));
        require(address(flowToken) == address(0));
        require(IERC20(_flowTokenAddress).totalSupply() >= 0);
        flowToken = FlowToken(_flowTokenAddress);
        emit FlowTokenSet(_flowTokenAddress);
    }

    function deposit(uint256 amount) public whenNotPaused nonReentrant flowTokenSet {
        require(amount >= minDeposit);
        require(amount <= maxDeposit);
        require(totalDeposits <= type(uint256).max - amount);

        token.safeTransferFrom(msg.sender, address(this), amount);
        uint256 flowAmount = calculateFlowAmount(amount);
        flowToken.mint(msg.sender, flowAmount);
        totalDeposits = totalDeposits + amount;

        emit Deposit(msg.sender, amount, flowAmount);
    }

    function calculateFlowAmount(uint256 amount) internal view returns (uint256) {
        if (totalDeposits == 0) {
            return amount;
        }
        uint256 totalFlow = flowToken.totalSupply();
        return (amount * totalFlow) / totalDeposits;
    }

    function withdrawForInvestment(uint256 amount, string memory protocol)
        public
        onlyInvestor
        whenNotPaused
        nonReentrant
    {
        require(amount > 0);
        uint256 contractBalance = token.balanceOf(address(this));
        require(contractBalance >= totalPendingWithdrawals + amount);

        token.safeTransfer(msg.sender, amount);
        emit InvestmentWithdrawn(msg.sender, amount, protocol);
    }

    function distributeProfit(int256 profit) public onlyInvestor nonReentrant flowTokenSet {
        require(profit != 0);

        uint256 commission;
        uint256 creatorTax;
        uint256 profitToDistribute;
        uint256 totalTransfer;

        if (profit > 0) {
            uint256 uProfit = uint256(profit);

            commission = uProfit * commissionRate / 100;
            creatorTax = uProfit * 1 / 100;
            profitToDistribute = uProfit - commission - creatorTax;
            totalTransfer = commission + creatorTax;

            require(token.balanceOf(address(this)) >= totalTransfer);

            token.safeTransfer(owner, commission);
            token.safeTransfer(creator, creatorTax);
            totalDeposits = totalDeposits + profitToDistribute;
        } else {
            uint256 loss = uint256(-profit);
            require(totalDeposits >= loss);
            totalDeposits = totalDeposits - loss;
        }

        lastProfitDistributionTime = block.timestamp;

        uint256 oneYearAgo = block.timestamp - 365 days;
        while (profitHistory.length > 0 && (profitHistory[0].timestamp < oneYearAgo || profitHistory.length >= 100)) {
            for (uint256 i = 0; i < profitHistory.length - 1; i++) {
                profitHistory[i] = profitHistory[i + 1];
            }
            profitHistory.pop();
        }

        profitHistory.push(ProfitRecord(block.timestamp, profit));

        if (depositSnapshots.length >= 100) {
            for (uint256 i = 0; i < depositSnapshots.length - 1; i++) {
                depositSnapshots[i] = depositSnapshots[i + 1];
            }
            depositSnapshots.pop();
        }
        depositSnapshots.push(DepositSnapshot(block.timestamp, totalDeposits));
        emit ProfitDistributed(profit, commission, creatorTax, block.timestamp);
    }

    function requestWithdrawal(uint256 flowAmount) public whenNotPaused flowTokenSet {
        require(flowAmount > 0, "Withdraw amount must be greater than 0");
        require(flowToken.balanceOf(msg.sender) >= flowAmount, "Insufficient balance");

        uint256 tokenAmount = calculateTokenAmount(flowAmount);
        withdrawalRequests[msg.sender].push(WithdrawalRequest({
            flowAmount: flowAmount,
            tokenAmount: tokenAmount,
            requestTime: block.timestamp,
            processed: false
        }));

        pendingRequestCount[msg.sender] = pendingRequestCount[msg.sender] + 1;
        flowToken.transferFrom(msg.sender, address(this), flowAmount);
        totalPendingWithdrawals = totalPendingWithdrawals + tokenAmount;
        emit WithdrawalProcessed(msg.sender, flowAmount, 0);
    }

    function withdrawShare(uint256 index) public whenNotPaused nonReentrant flowTokenSet {
        WithdrawalRequest[] storage requests = withdrawalRequests[msg.sender];
        require(index < requests.length);
        WithdrawalRequest storage request = requests[index];

        require(!request.processed);
        require(block.timestamp >= request.requestTime + withdrawalFreezePeriod);

        uint256 tokenAmount = request.tokenAmount;
        require(tokenAmount <= token.balanceOf(address(this)));

        flowToken.burn(address(this), request.flowAmount);
        totalDeposits = totalDeposits - tokenAmount;
        totalPendingWithdrawals = totalPendingWithdrawals - tokenAmount;
        request.processed = true;
        pendingRequestCount[msg.sender] = pendingRequestCount[msg.sender] - 1;

        token.safeTransfer(msg.sender, tokenAmount);
        emit WithdrawalProcessed(msg.sender, request.flowAmount, tokenAmount);

        if (flowToken.balanceOf(msg.sender) == 0 || pendingRequestCount[msg.sender] == 0) {
            delete withdrawalRequests[msg.sender];
            pendingRequestCount[msg.sender] = 0;
        }
    }

    function calculateTokenAmount(uint256 flowAmount) internal view returns (uint256) {
        uint256 totalFlow = flowToken.totalSupply();
        if (totalFlow == 0) {
            return 0;
        }
        return (flowAmount * totalDeposits) / totalFlow;
    }

    function getPendingWithdrawalTotal() public view returns (uint256) {
        return totalPendingWithdrawals;
    }

    function getAnnualReturnRate() public view returns (int256) {
        if (depositSnapshots.length == 0 || totalDeposits == 0) return 0;

        uint256 oneYearAgo = block.timestamp - 365 days;
        int256 annualProfit = 0;
        uint256 weightedDeposits = 0;
        uint256 totalTime = 0;

        for (uint256 i = depositSnapshots.length - 1; i >= 0; i--) {
            if (depositSnapshots[i].timestamp < oneYearAgo) break;

            uint256 timeDiff;
            if (i == 0 || depositSnapshots[i-1].timestamp < oneYearAgo) {
                timeDiff = block.timestamp - depositSnapshots[i].timestamp;
            } else {
                timeDiff = depositSnapshots[i].timestamp - depositSnapshots[i-1].timestamp;
            }
            weightedDeposits += depositSnapshots[i].totalDeposits * timeDiff;
            totalTime += timeDiff;
            if (i == 0) break;
        }

        if (totalTime == 0) return 0;
        uint256 averageDeposits = weightedDeposits / totalTime;
        if (averageDeposits == 0) return 0;

        for (uint256 i = profitHistory.length - 1; i >= 0; i--) {
            if (profitHistory[i].timestamp < oneYearAgo) break;
            annualProfit += profitHistory[i].profit;
            if (i == 0) break;
        }

        return (annualProfit * 100) / int256(averageDeposits);
    }

    function depositTokens(uint256 amount) public onlyInvestor {
        require(amount > 0);
        token.safeTransferFrom(msg.sender, address(this), amount);
        emit TokensDeposited(amount);
    }

    function emergencyPause(string memory reason) public onlyPauser {
        paused = true;
        emit EmergencyPaused(msg.sender, reason);
    }

    function emergencyUnpause() public onlyPauser {
        paused = false;
        emit EmergencyUnpaused(msg.sender);
    }

    function setWithdrawalFreezePeriod(uint256 newPeriod) public onlyOwner {
        require(newPeriod >= 1 hours);
        withdrawalFreezePeriod = newPeriod;
        emit ParameterUpdated("WithdrawalFreezePeriod", newPeriod);
    }

    function setMinDeposit(uint256 newMin) public onlyOwner {
        require(newMin > 0);
        require(newMin <= maxDeposit);
        minDeposit = newMin;
        emit ParameterUpdated("MinDeposit", newMin);
    }

    function setMaxDeposit(uint256 newMax) public onlyOwner {
        require(newMax >= minDeposit);
        maxDeposit = newMax;
        emit ParameterUpdated("MaxDeposit", newMax);
    }

    function setCommissionRate(uint256 newRate) public onlyOwner {
        require(newRate <= 100);
        require(newRate >= 0);
        commissionRate = newRate;
        emit ParameterUpdated("CommissionRate", newRate);
    }

    function setInvestor(address newInvestor) public onlyOwner {
        require(newInvestor != address(0));
        address oldInvestor = investor;
        investor = newInvestor;
        emit RoleUpdated("Investor", oldInvestor, false);
        emit RoleUpdated("Investor", newInvestor, true);
    }

    function setPauser(address newPauser) public onlyOwner {
        require(newPauser != address(0));
        address oldPauser = pauser;
        pauser = newPauser;
        emit RoleUpdated("Pauser", oldPauser, false);
        emit RoleUpdated("Pauser", newPauser, true);
    }

    function setFundName(string memory newFundName) public onlyOwner {
        require(bytes(newFundName).length > 0, "Fund name cannot be empty");
        fundName = newFundName;
        emit FundNameUpdated(newFundName);
    }

    function getUserWithdrawalRequestCount(address user) public view returns (uint256) {
        return withdrawalRequests[user].length;
    }

    function getWithdrawalRequest(address user, uint256 index) 
        public view 
        returns (uint256 amount, uint256 unlockTime, bool processed, uint256 tokenAmount) 
    {
        require(index < withdrawalRequests[user].length);
        WithdrawalRequest memory request = withdrawalRequests[user][index];
        return (request.tokenAmount, request.requestTime + withdrawalFreezePeriod, request.processed, request.tokenAmount);
    }

    function getFlowTokenName() public view flowTokenSet returns (string memory) {
        return flowToken.name();
    }

    function getFlowTokenSymbol() public view flowTokenSet returns (string memory) {
        return flowToken.symbol();
    }

    function getVersion() public pure returns (string memory) { return VERSION; }
    function getName() public pure returns (string memory) { return NAME; }
    function getFundName() public view returns (string memory) { return fundName; }
    function getPaused() public view returns (bool) { return paused; }
    function getOwner() public view returns (address) { return owner; }
    function getPauser() public view returns (address) { return pauser; }
    function getInvestor() public view returns (address) { return investor; }
    function getToken() public view returns (address) { return address(token); }
    function getCommissionRate() public view returns (uint256) { return commissionRate; }
    function getMinDeposit() public view returns (uint256) { return minDeposit; }
    function getMaxDeposit() public view returns (uint256) { return maxDeposit; }
    function getWithdrawalFreezePeriod() public view returns (uint256) { return withdrawalFreezePeriod; }
    function getTotalDeposits() public view returns (uint256) { return totalDeposits; }
    function getLastProfitDistributionTime() public view returns (uint256) { return lastProfitDistributionTime; }
    function getContractBalance() public view returns (uint256) { return token.balanceOf(address(this)); }
    function getInvestorBalance() public view returns (uint256) { return token.balanceOf(investor); }
    function getFlowTokenAddress() public view returns (address) { return address(flowToken); }
    function getUserFlowBalance(address user) public view returns (uint256) { return flowToken.balanceOf(user); }
    function getTotalFlowSupply() public view returns (uint256) { return flowToken.totalSupply(); }
}