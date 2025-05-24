"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import {
  InvestmentContractAbi,
  InvestmentContractBytecode,
} from "@/contract/InvestmentContract";
import {
  InvestmentPoolAbi,
  InvestmentPoolBytecode,
} from "@/contract/InvestmentPool";
import { DEFUND_PROTOCOL_ADDRESS } from "@/config";
import { CHAINS } from "@/config/chains";

const IntroPaper = styled(Paper)(({ theme }) => ({
  width: "100hv",
  height: "100hv",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  marginBottom: theme.spacing(5),
  backgroundColor: "#f2f2f2",
  ul: {
    paddingLeft: "20px",
    ol: {
      paddingLeft: "20px",
      li: {
        listStyle: "circle",
      },
    },
    li: {
      marginBottom: "10px",
      listStyle: "disc",
    },
  },
  h1: {
    color: "#000",
    fontSize: "24px",
    lineHeight: "1.8",
  },
  h2: {
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#000",
    lineHeight: "1.8",
  },
}));

export default function Docs() {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <main className="flex flex-col">
      <Container
        fixed
        style={{
          color: "#000",
          maxWidth: "100%",
          paddingLeft: 0,
          paddingRight: 0,
          height: "100%",
        }}
      >
        <Box
          sx={{
            bgcolor: "#FFF",
            minHeight: "80vh",
            mt: 5,
            p: 5,
          }}
        >
          <IntroPaper elevation={0}>
            <h1
              style={{
                color: "#000",
                fontSize: "24px",
                lineHeight: "1.8",
                marginBottom: "10px",
              }}
            >
              Technical Documentation for DeFund Protocol Smart Contracts
            </h1>
            <h2 style={{ color: "#000", fontSize: "16px", lineHeight: "1.8" }}>
              This document outlines the technical details of the
              <b>InvestmentContract</b> and <b>InvestmentPool</b> smart
              contracts, which form the backbone of the DeFund Protocol, a
              decentralized investment platform on Ethereum. These contracts
              manage individual and pooled investments, respectively, with
              features like deposits, withdrawals, profit distribution, and
              emergency controls.
            </h2>
          </IntroPaper>
          <IntroPaper elevation={0}>
            <h1 style={{}}>System Architecture</h1>
            <ul>
              <li>
                <b>Blockchain Layer</b>: Built on Ethereum using Solidity
                ^0.8.20, leveraging OpenZeppelin&apos;s libraries for ERC20 token
                handling and security.
              </li>
              <li>
                <b>Smart Contracts</b>:
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>
                    <b>InvestmentContract</b>: Manages individual investments.
                  </li>
                  <li>
                    <b>InvestmentPool</b>: Extends functionality for pooled
                    investments with tokenized shares via <b>FlowToken</b>.
                  </li>
                  <li>
                    <b>MarketPlace</b>: A decentralized marketplace for listing,
                    managing, and updating funds created by{" "}
                    <b>InvestmentContract</b> or <b>InvestmentPool</b>.
                  </li>
                </ol>
              </li>
            </ul>
          </IntroPaper>
          <IntroPaper elevation={0}>
            <h1>Smart Contract Overview</h1>
            <h2>
              <b>1. InvestmentContract</b>
              <br />
              This contract allows users to create and manage individual
              investment funds with customizable parameters.
            </h2>
            <ul>
              <li>
                <b>Key Features</b>:
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>
                    <b>Fund Creation</b>: Initialize a fund with a name, token,
                    deposit limits, withdrawal freeze period, and commission
                    rate.
                  </li>
                  <li>
                    <b>Deposits</b>: Users deposit ERC20 tokens within set
                    limits.
                  </li>
                  <li>
                    <b>Withdrawals</b>: Users request withdrawals subject to a
                    freeze period; investors can withdraw funds for external
                    investments.
                  </li>
                  <li>
                    <b>Profit Distribution</b>: Investors distribute profits or
                    losses, with commission and creator tax deducted.
                  </li>
                  <li>
                    <b>Emergency Controls</b>: Pausable by a designated pauser
                    in emergencies.
                  </li>
                </ol>
              </li>
            </ul>
            <h2>
              <b>2. InvestmentPool</b>
              <br />
              This contract extends <b>InvestmentContract</b> for pooled
              investments, using <b>FlowToken</b> (an ERC20 token) to represent
              shares.
            </h2>
            <ul>
              <li>
                <b>Key Features</b>:
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>
                    <b>Pooled Investments</b>: Multiple users contribute to a
                    shared fund.
                  </li>
                  <li>
                    <b>Tokenized Shares</b>: Deposits mint <b>FlowToken</b>{" "}
                    shares; withdrawals burn them.
                  </li>
                  <li>
                    <b>Profit Distribution</b>: Adjusts total deposits without
                    direct user deposit updates.
                  </li>
                  <li>
                    Inherits deposit, withdrawal, and emergency features from{" "}
                    <b>InvestmentContract</b>.
                  </li>
                </ol>
              </li>
            </ul>
            <h2>
              <b>3. MarketPlace</b>
              <br />
              This contract serves as a decentralized marketplace for listing
              and managing funds created by <b>InvestmentContract</b> or{" "}
              <b>InvestmentPool</b>. Fund owners can list their contracts with
              an IPFS hash for additional information, and users can query and
              manage listed funds.
            </h2>
            <ul>
              <li>
                <b>Key Features</b>:
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>
                    <b>List Funds</b>: Fund owners list their contracts with an
                    IPFS hash.
                  </li>
                  <li>
                    <b>Remove Funds</b>: Marketplace owner or fund owner can
                    remove listed funds.
                  </li>
                  <li>
                    <b>Update Funds</b>: Update the IPFS hash of a listed fund.
                  </li>
                  <li>
                    <b>Query Funds</b>: Retrieve lists of funds or specific fund
                    details by address.
                  </li>
                  <li>
                    Ensures only valid, active funds (with deposits, positive
                    annual return rate, and contract balance) can be listed.
                  </li>
                </ol>
              </li>
            </ul>
          </IntroPaper>
          <IntroPaper elevation={0}>
            <h1>Smart Contract Functions</h1>
            <h2>
              <b>InvestmentContract</b>
            </h2>
            <ul>
              <li>
                <b>
                  constructor(string memory _fundName, address _tokenAddress,
                  uint256 _minDeposit, uint256 _maxDeposit, uint256
                  _withdrawalFreezePeriod, address _owner, address _pauser,
                  address _investor, uint256 _commissionRate)
                </b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>Initializes the contract with fund parameters.</li>
                  <li>
                    Requirements: Non-empty fund name, valid token address,{" "}
                    <b>minDeposit &gt; 0</b>, <b>maxDeposit &gt;= minDeposit</b>
                    , <b>withdrawalFreezePeriod &gt;= 1 hour</b>,{" "}
                    <b>commissionRate &lt;= 100</b>.
                  </li>
                </ol>
              </li>
              <li>
                <b>deposit(uint256 amount)</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>Deposits tokens into the fund.</li>
                  <li>
                    Requirements: <b>amount</b> between <b>minDeposit</b> and{" "}
                    <b>maxDeposit</b>, contract not paused.
                  </li>
                  <li>
                    Events: <b>Deposit(address user, uint256 amount)</b>.
                  </li>
                </ol>
              </li>
              <li>
                <b>
                  withdrawForInvestment(uint256 amount, string memory protocol)
                </b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>Investor withdraws tokens for external investment.</li>
                  <li>
                    Requirements: Caller is investor, sufficient balance after
                    pending withdrawals, not paused.
                  </li>
                  <li>
                    Events:{" "}
                    <b>
                      InvestmentWithdrawn(address investor, uint256 amount,
                      string protocol)
                    </b>
                    .
                  </li>
                </ol>
              </li>
              <li>
                <b>distributeProfit(int256 profit)</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>Distributes profits or losses.</li>
                  <li>
                    For profits: Deducts commission and creator tax (1%),
                    distributes remainder proportionally.
                  </li>
                  <li>For losses: Reduces user deposits proportionally.</li>
                  <li>
                    Requirements: Caller is investor, non-zero profit,
                    sufficient balance for profits.
                  </li>
                  <li>
                    Events:{" "}
                    <b>
                      ProfitDistributed(int256 totalProfit, uint256 commission,
                      uint256 creatorTax, uint256 timestamp)
                    </b>
                    .
                  </li>
                </ol>
              </li>
              <li>
                <b>requestWithdrawal(uint256 amount)</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>
                    Requests a withdrawal, locking funds until the freeze period
                    elapses.
                  </li>
                  <li>Requirements: Sufficient user deposit, not paused.</li>
                  <li>
                    Events:{" "}
                    <b>
                      WithdrawalRequested(address user, uint256 amount, uint256
                      unlockTime)
                    </b>
                    .
                  </li>
                </ol>
              </li>
              <li>
                <b>withdrawShare(uint256 index)</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>
                    Processes a withdrawal request after the freeze period.
                  </li>
                  <li>
                    Requirements: Valid index, unprocessed request, freeze
                    period elapsed, not paused.
                  </li>
                  <li>
                    Events:{" "}
                    <b>WithdrawalProcessed(address user, uint256 amount)</b>.
                  </li>
                </ol>
              </li>
              <li>
                <b>depositTokens(uint256 amount)</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>Investor deposits tokens into the contract.</li>
                  <li>
                    Requirements: Caller is investor, <b>amount &gt; 0</b>.
                  </li>
                  <li>
                    Events: <b>TokensDeposited(uint256 amount)</b>.
                  </li>
                </ol>
              </li>
              <li>
                <b>emergencyPause(string memory reason)</b> /{" "}
                <b>emergencyUnpause()</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>Pauses or unpauses the contract.</li>
                  <li>Requirements: Caller is pauser.</li>
                  <li>
                    Events:{" "}
                    <b>EmergencyPaused(address pauser, string reason)</b> /{" "}
                    <b>EmergencyUnpaused(address pauser)</b>.
                  </li>
                </ol>
              </li>
              <li>
                <b>Setters</b>:
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>
                    <b>setWithdrawalFreezePeriod(uint256 newPeriod)</b>: Updates
                    freeze period (min 1 hour).
                  </li>
                  <li>
                    <b>setMinDeposit(uint256 newMin)</b> /{" "}
                    <b>setMaxDeposit(uint256 newMax)</b>: Updates deposit
                    limits.
                  </li>
                  <li>
                    <b>setCommissionRate(uint256 newRate)</b>: Updates
                    commission (0-100).
                  </li>
                  <li>
                    <b>setInvestor(address newInvestor)</b> /{" "}
                    <b>setPauser(address newPauser)</b> /{" "}
                    <b>setFundName(string memory newFundName)</b>: Updates roles
                    or fund name.
                  </li>
                  <li>Requirements: Caller is owner, valid inputs.</li>
                  <li>
                    Events:{" "}
                    <b>ParameterUpdated(string parameter, uint256 newValue)</b>/{" "}
                    <b>
                      RoleUpdated(string role, address member, bool granted)
                    </b>{" "}
                    /<b>FundNameUpdated(string newFundName)</b>.
                  </li>
                </ol>
              </li>
              <li>
                <b>
                  Getters: Retrieve contract state (e.g.,{" "}
                  <b>getTotalDeposits()</b>, <b>getAnnualReturnRate()</b>).
                </b>
              </li>
            </ul>
            <h2>
              <b>InvestmentPool</b>
            </h2>
            <ul>
              <li>
                Inherits most functions from <b>InvestmentContract</b> with
                modifications for pooled investments.
              </li>
              <li>
                <b>setFlowToken(address _flowTokenAddress)</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>
                    Sets the <b>FlowToken</b> address for share representation.
                  </li>
                  <li>
                    Requirements: Caller is owner, valid address, not previously
                    set.
                  </li>
                  <li>
                    Events: <b>FlowTokenSet(address flowTokenAddress)</b>.
                  </li>
                </ol>
              </li>
              <li>
                <b>deposit(uint256 amount)</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>
                    Deposits tokens and mints proportional <b>FlowToken</b>{" "}
                    shares.
                  </li>
                  <li>
                    Requirements: <b>FlowToken</b> set, <b>amount</b> within
                    limits, not paused.
                  </li>
                  <li>
                    Events:{" "}
                    <b>
                      Deposit(address user, uint256 amount, uint256 flowAmount)
                    </b>
                    .
                  </li>
                </ol>
              </li>
              <li>
                <b>requestWithdrawal(uint256 flowAmount)</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>
                    Requests withdrawal by burning <b>FlowToken</b> shares.
                  </li>
                  <li>
                    Requirements: Sufficient user balance, <b>FlowToken</b> set,
                    not paused.
                  </li>
                  <li>
                    Events:{" "}
                    <b>
                      WithdrawalProcessed(address user, uint256 flowAmount, 0)
                    </b>
                    .
                  </li>
                </ol>
              </li>
              <li>
                <b>withdrawShare(uint256 index)</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>
                    Processes withdrawal, transferring tokens after burning
                    shares.
                  </li>
                  <li>
                    Requirements: Valid index, freeze period elapsed, sufficient
                    balance, not paused.
                  </li>
                  <li>
                    Events:{" "}
                    <b>
                      WithdrawalProcessed(address user, uint256 flowAmount,
                      uint256 amount)
                    </b>
                    .
                  </li>
                </ol>
              </li>
              <li>
                <b>distributeProfit(int256 profit)</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>
                    Adjusts <b>totalDeposits</b> without updating individual
                    balances.
                  </li>
                  <li>
                    For profits: Transfers commission and creator tax directly;
                    remainder increases <b>totalDeposits</b>.
                  </li>
                  <li>
                    For losses: Reduces <b>totalDeposits</b>.
                  </li>
                  <li>
                    Requirements: Caller is investor, <b>FlowToken</b> set.
                  </li>
                </ol>
              </li>
            </ul>
            <h2>
              <b>MarketPlace</b>
            </h2>
            <ul>
              <li>
                <b>constructor(address initialOwner)</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>Sets the initial owner of the marketplace.</li>
                </ol>
              </li>
              <li>
                <b>listFund(address fundAddress, string memory ipfsHash)</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>
                    Lists a fund with its contract address and an IPFS hash.
                  </li>
                  <li>
                    Requirements:
                    <li>Caller must be the fund owner.</li>
                    <li>Fund must not already be listed.</li>
                    <li>
                      Fund must have deposits, a positive annual return rate,
                      and a non-zero contract balance.
                    </li>
                  </li>
                  <li>
                    Event:{" "}
                    <b>
                      FundListed(uint fundId, address fundAddress, string
                      ipfsHash)
                    </b>
                    .
                  </li>
                </ol>
              </li>
              <li>
                <b>removeFund(uint fundId)</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>Removes a fund from the marketplace.</li>
                  <li>
                    <b>Requirements</b>: Caller is the marketplace owner or fund
                    owner; valid fund ID.
                  </li>
                  <li>
                    <b>Event</b>
                    <b>FundRemoved(uint fundId, address fundAddress)</b>.
                  </li>
                </ol>
              </li>
              <li>
                <b>updateFund(uint fundId, string memory newIpfsHash)</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>Updates the IPFS hash of a listed fund.</li>
                  <li>
                    <b>Requirements</b>: Caller is the marketplace owner or fund
                    owner; valid fund ID.
                  </li>
                  <li>
                    <b>Event</b>:{" "}
                    <b>
                      FundUpdated(uint fundId, address fundAddress, string
                      newIpfsHash)
                    </b>
                    .
                  </li>
                </ol>
              </li>
              <li>
                <b>getAllFunds(uint start, uint limit)</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>
                    Returns a paginated list of funds as an array of{" "}
                    <b>ExtendedFund</b> structs (includes detailed fund data).
                  </li>
                </ol>
              </li>
              <li>
                <b>getFundByAddress(address fundAddress)</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>
                    Returns details of a specific fund (<b>Fund</b> struct, fund
                    ID, and listing status).
                  </li>
                </ol>
              </li>
              <li>
                <b>getFundCount()</b>
                <ol
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                    marginLeft: "20px",
                  }}
                >
                  <li>Returns the total number of listed funds.</li>
                </ol>
              </li>
            </ul>
          </IntroPaper>
          <h1
            style={{
              color: "#000",
              fontSize: "24px",
              lineHeight: "1.8",
              marginBottom: "10px",
            }}
          >
            <b>Click here to copy conteact abi and bytecode</b>:
          </h1>
          <Button
            variant="outlined"
            className="mb-2"
            style={{
              color: "#000",
              cursor: "pointer",
              border: "1px solid #000",
              marginRight: "10px",
            }}
            onClick={() => handleCopy(JSON.stringify(InvestmentContractAbi))}
          >
            InvestmentContract ABI
          </Button>
          <Button
            variant="outlined"
            className="mb-2"
            style={{
              color: "#000",
              cursor: "pointer",
              border: "1px solid #000",
              marginRight: "10px",
            }}
            onClick={() => handleCopy(InvestmentContractBytecode)}
          >
            InvestmentContract Bytecode
          </Button>
          <Button
            variant="outlined"
            className="mb-2"
            style={{
              color: "#000",
              cursor: "pointer",
              border: "1px solid #000",
              marginRight: "10px",
            }}
            onClick={() => handleCopy(JSON.stringify(InvestmentPoolAbi))}
          >
            InvestmentPool ABI
          </Button>
          <Button
            variant="outlined"
            className="mb-2"
            style={{
              color: "#000",
              cursor: "pointer",
              border: "1px solid #000",
              marginRight: "10px",
            }}
            onClick={() => handleCopy(InvestmentPoolBytecode)}
          >
            InvestmentPool Bytecode
          </Button>
          <h1
            style={{
              color: "#000",
              fontSize: "24px",
              lineHeight: "1.8",
              marginBottom: "10px",
            }}
          >
            <b>Market Place Contract Address ({CHAINS[0].label})</b>:
          </h1>
          <h2>{CHAINS[0].market_place_contract_address}</h2>
          <h1
            style={{
              color: "#000",
              fontSize: "24px",
              lineHeight: "1.8",
              marginBottom: "10px",
            }}
          >
            <b>DeFund Protocol Address</b>:
          </h1>
          <h2>{DEFUND_PROTOCOL_ADDRESS}</h2>
        </Box>
      </Container>
    </main>
  );
}
