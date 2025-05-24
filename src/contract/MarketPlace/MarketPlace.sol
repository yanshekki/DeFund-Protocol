// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IFundContract {
    function getOwner() external view returns (address);
    function getInvestor() external view returns (address);
    function getName() external view returns (string memory);
    function getVersion() external view returns (string memory);
    function getFundName() external view returns (string memory);
    function getToken() external view returns (address);
    function getTotalDeposits() external view returns (uint256);
    function getAnnualReturnRate() external view returns (int256);
    function getContractBalance() external view returns (uint256);
    function getInvestorBalance() external view returns (uint256);
}

contract MarketPlace is Ownable {
    struct Fund {
        address fundAddress;
        string ipfsHash;
    }

    struct ExtendedFund {
        address fundAddress;
        string ipfsHash;
        address contractOwner;
        address contractInvestor;
        string contractName;
        string contractVersion;
        string fundName;
        address token;
        uint256 totalDeposits;
        int256 annualReturnRate;
        uint256 contractBalance;
        uint256 investorBalance;
    }

    mapping(uint => Fund) public funds;
    mapping(address => bool) public isListed;
    mapping(address => uint) public fundIdByAddress;
    uint public fundCount;

    event FundListed(uint fundId, address fundAddress, string ipfsHash);
    event FundRemoved(uint fundId, address fundAddress);
    event FundUpdated(uint fundId, address fundAddress, string newIpfsHash);

    constructor(address initialOwner) Ownable(initialOwner) {}

    function listFund(address fundAddress, string memory ipfsHash) public {
        address contractOwner = IFundContract(fundAddress).getOwner();
        require(msg.sender == contractOwner, "Only contract owner can list");
        require(fundAddress != address(0), "Invalid fund address");
        require(fundAddress.code.length > 0, "fundAddress is not a contract");
        require(!isListed[fundAddress], "Fund already listed");
        IFundContract(fundAddress).getName();
        IFundContract(fundAddress).getVersion();
        IFundContract(fundAddress).getFundName();
        IFundContract(fundAddress).getToken();
        uint256 totalDeposits = IFundContract(fundAddress).getTotalDeposits();
        int256 annualReturnRate = IFundContract(fundAddress).getAnnualReturnRate();
        uint256 contractBalance = IFundContract(fundAddress).getContractBalance();
        require(totalDeposits > 0, "Fund has no deposits");
        require(annualReturnRate > 0, "Fund has no annual return rate");
        require(contractBalance > 0, "Fund has no contract balance");
        fundCount++;
        funds[fundCount] = Fund(fundAddress, ipfsHash);
        isListed[fundAddress] = true;
        fundIdByAddress[fundAddress] = fundCount;
        emit FundListed(fundCount, fundAddress, ipfsHash);
    }

    function removeFund(uint fundId) public {
        require(fundId > 0 && fundId <= fundCount, "Invalid fundId");
        Fund memory fund = funds[fundId];
        address contractOwner = IFundContract(fund.fundAddress).getOwner();
        require(msg.sender == owner() || msg.sender == contractOwner, "Only owner or contract owner can remove");
        delete isListed[fund.fundAddress];
        delete fundIdByAddress[fund.fundAddress];
        if (fundId != fundCount) {
            funds[fundId] = funds[fundCount];
            fundIdByAddress[funds[fundCount].fundAddress] = fundId;
        }
        delete funds[fundCount];
        fundCount--;
        emit FundRemoved(fundId, fund.fundAddress);
    }

    function updateFund(uint fundId, string memory newIpfsHash) public {
        require(fundId > 0 && fundId <= fundCount, "Invalid fundId");
        Fund memory fund = funds[fundId];
        address contractOwner = IFundContract(fund.fundAddress).getOwner();
        require(msg.sender == owner() || msg.sender == contractOwner, "Only owner or contract owner can update");
        funds[fundId].ipfsHash = newIpfsHash;
        emit FundUpdated(fundId, fund.fundAddress, newIpfsHash);
    }

    function getAllFunds(uint start, uint limit) public view returns (ExtendedFund[] memory) {
        require(start < fundCount, "Start index out of bounds");
        uint end = start + limit;
        if (end > fundCount) {
            end = fundCount;
        }
        ExtendedFund[] memory result = new ExtendedFund[](end - start);
        for (uint i = start; i < end; i++) {
            Fund memory fund = funds[i + 1];
            ExtendedFund memory extendedFund;
            extendedFund.fundAddress = fund.fundAddress;
            extendedFund.ipfsHash = fund.ipfsHash;
            extendedFund.contractOwner = IFundContract(fund.fundAddress).getOwner();
            extendedFund.contractInvestor = IFundContract(fund.fundAddress).getInvestor();
            extendedFund.contractName = IFundContract(fund.fundAddress).getName();
            extendedFund.contractVersion = IFundContract(fund.fundAddress).getVersion();
            extendedFund.fundName = IFundContract(fund.fundAddress).getFundName();
            IERC20 token = IERC20(IFundContract(fund.fundAddress).getToken());
            extendedFund.token = address(token);
            extendedFund.totalDeposits = IFundContract(fund.fundAddress).getTotalDeposits();
            extendedFund.annualReturnRate = IFundContract(fund.fundAddress).getAnnualReturnRate();
            extendedFund.contractBalance = IFundContract(fund.fundAddress).getContractBalance();
            extendedFund.investorBalance = IFundContract(fund.fundAddress).getInvestorBalance();
            result[i - start] = extendedFund;
        }
        return result;
    }

    function getFundByAddress(address fundAddress) public view returns (Fund memory, uint, bool) {
        uint fundId = fundIdByAddress[fundAddress];
        if (fundId == 0) {
            return (Fund(address(0), ""), 0, false);
        }
        return (funds[fundId], fundId, true);
    }

    function getFundCount() public view returns (uint256) { return fundCount; }
}