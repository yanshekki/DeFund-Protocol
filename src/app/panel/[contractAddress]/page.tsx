"use client";

import { useState, useEffect, Fragment } from "react";
import { useParams } from "next/navigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ethers } from "ethers";
import { useConnectWallet } from "@web3-onboard/react";
import { InvestmentContractAbi } from "@/contract/InvestmentContract";
import { InvestmentPoolAbi } from "@/contract/InvestmentPool";
import { FlowTokenAbi, FlowTokenBytecode } from "@/contract/FlowToken";
import { MarketPlaceAbi } from "@/contract/MarketPlace";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { AvaxTokenAddress, AvaxTokenDecimals } from "@/enums/token.enum";
import { Link as MUILink, Button, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid2";
import { NumericFormat } from "react-number-format";
import { VariantType, useSnackbar } from "notistack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  showNumber,
  showContractAddress,
  EvmBigNumber,
  showTokenName,
  showTokenNumber,
} from "@/utils/format";
import ConnectWallet from "@/components/ConnectWallet";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TipsAndUpdatesOutlined from "@mui/icons-material/TipsAndUpdatesOutlined";
import {
  DEFAULT_ADDRESS,
  BASE_ABI,
  BASE_TOKEN_ABI,
} from "@/config";
import { CHAINS } from "@/config/chains";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const InfoPaper = styled(Paper)(({ theme }) => ({
  width: 240,
  height: 80,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  color: "#000",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  "&.info": {
    height: 160,
  },
  "&.button": {
    height: 160,
  },
  "&.setting": {
    height: 160,
  },
  button: {
    width: "100%",
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "18px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#000",
    backgroundColor: "#fff",
    border: "1px solid #000",
    borderRadius: "4px",
    marginTop: "10px",
  },
  border: "1px solid #ccc",
}));

export default function Home() {
  const { contractAddress } = useParams<{ contractAddress: string }>();
  const { enqueueSnackbar } = useSnackbar();
  const [{ wallet }] = useConnectWallet();
  const [ethersProvider, setEthersProvider] =
    useState<ethers.providers.Web3Provider | null>();
  const [abi, setAbi] = useState<object[]>(BASE_ABI);
  const [contract, setContract] = useState<ethers.Contract>();
  const [contractMarketPlace, setContractMarketPlace] =
    useState<ethers.Contract>();
  const [contractName, setContractName] = useState<string>("");
  const [contractFundName, setContractFundName] = useState<string>("");
  const [contractPaused, setContractPaused] = useState<boolean>(false);
  const [contractVersion, setContractVersion] = useState<string>("");
  const [contractOwner, setContractOwner] = useState<string>("");
  const [contractInvestor, setContractInvestor] = useState<string>("");
  const [contractPauser, setContractPauser] = useState<string>("");
  const [contractToken, setContractToken] = useState<string>("");
  const [contractCommissionRate, setContractCommissionRate] =
    useState<EvmBigNumber>();
  const [contractMinDeposit, setContractMinDeposit] = useState<EvmBigNumber>();
  const [contractMaxDeposit, setContractMaxDeposit] = useState<EvmBigNumber>();
  const [contractWithdrawalFreezePeriod, setContractWithdrawalFreezePeriod] =
    useState<EvmBigNumber>();
  const [contractUserDeposit, setContractUserDeposit] =
    useState<EvmBigNumber>();
  const [contractTotalDeposits, setContractTotalDeposits] =
    useState<EvmBigNumber>();
  const [
    contractLastProfitDistributionTime,
    setContractLastProfitDistributionTime,
  ] = useState<EvmBigNumber>();
  const [contractContractBalance, setContractContractBalance] =
    useState<EvmBigNumber>();
  const [contractWithdrawalRequest, setContractWithdrawalRequest] =
    useState<[EvmBigNumber, EvmBigNumber, boolean, EvmBigNumber?][]>();
  const [
    contractUserWithdrawalRequestCount,
    setContractUserWithdrawalRequestCount,
  ] = useState<EvmBigNumber>();
  const [contractPendingWithdrawalTotal, setContractPendingWithdrawalTotal] =
    useState<EvmBigNumber>();
  const [contractAnnualReturnRate, setContractAnnualReturnRate] =
    useState<EvmBigNumber>();
  const [contractFlowTokenAddress, setContractFlowTokenAddress] =
    useState<string>("");
  const [contractFlowTokenName, setContractFlowTokenName] =
    useState<string>("");
  const [contractFlowTokenSymbol, setContractFlowTokenSymbol] =
    useState<string>("");
  const [contractUserFlowBalance, setContractUserFlowBalance] =
    useState<EvmBigNumber>();
  const [loading, setLoading] = useState<boolean>(false);
  const [withdrawalFreezePeriod, setWithdrawalFreezePeriod] =
    useState<number>(259200);
  const [minDeposit, setMinDeposit] = useState<string>("0.001");
  const [maxDeposit, setMaxDeposit] = useState<string>("100000000");
  const [commissionRate, setCommissionRate] = useState<string>("10");
  const [fundName, setFundName] = useState<string>("");
  const [pauser, setPauser] = useState<string>(DEFAULT_ADDRESS);
  const [investor, setInvestor] = useState<string>(DEFAULT_ADDRESS);
  const [withdrawForInvestmentAmount, setWithdrawForInvestmentAmount] =
    useState<string>("0");
  const [withdrawForInvestmentProtocol, setWithdrawForInvestmentProtocol] =
    useState<string>("");
  const [distributeProfit, setDistributeProfit] = useState<string>("0");
  const [depositTokens, setDepositTokens] = useState<string>("0");
  const [deposit, setDeposit] = useState<string>("0");
  const [requestWithdrawal, setRequestWithdrawal] = useState<string>("0");
  const [tokenContract, setTokenContract] = useState<ethers.Contract>();
  const [decimal, setDecimal] = useState<number>();
  const [balanceOf, setBalanceOf] = useState<number>(0);
  const [liquidityTokenName, setLiquidityTokenName] = useState<string>("");
  const [liquidityTokenSymbol, setLiquidityTokenSymbol] = useState<string>("");
  const [flowToken, setFlowToken] = useState<string>();
  const [emergencyPauseReason, setEmergencyPauseReason] = useState<string>("");
  const [fundIpfsHash, setFundIpfsHash] = useState<string>("");
  const [marketPlaceIpfsHash, setMarketPlaceIpfsHash] = useState<string>("");
  const [marketPlaceFundId, setMarketPlaceFundId] = useState<string>("");
  const [marketPlaceExists, setMarketPlaceExists] = useState<string>("");

  useEffect(() => {
    setFlowToken(contractFlowTokenAddress);
  }, [contractFlowTokenAddress]);

  useEffect(() => {
    setFundIpfsHash(marketPlaceIpfsHash);
  }, [marketPlaceIpfsHash]);

  useEffect(() => {
    if (ethersProvider) {
      const signer = ethersProvider.getSigner();
      const tokenContract = new ethers.Contract(
        contractToken,
        BASE_TOKEN_ABI,
        signer
      );
      setTokenContract(tokenContract);
    }
    setDecimal(
      AvaxTokenDecimals[
        AvaxTokenAddress.map((i) => i.toLocaleLowerCase()).indexOf(
          contractToken.toLocaleLowerCase()
        )
      ]
    );
  }, [contractToken]);

  useEffect(() => {
    contractMinDeposit &&
      setMinDeposit(String(showTokenNumber(contractMinDeposit, contractToken)));
  }, [contractMinDeposit]);

  useEffect(() => {
    contractMaxDeposit &&
      setMaxDeposit(String(showTokenNumber(contractMaxDeposit, contractToken)));
  }, [contractMaxDeposit]);

  useEffect(() => {
    contractCommissionRate &&
      setCommissionRate(String(showNumber(contractCommissionRate)));
  }, [contractCommissionRate]);

  useEffect(() => {
    contractFundName && setFundName(contractFundName);
  }, [contractFundName]);

  useEffect(() => {
    contractInvestor && setInvestor(contractInvestor);
  }, [contractInvestor]);

  useEffect(() => {
    contractPauser && setPauser(contractPauser);
  }, [contractPauser]);

  useEffect(() => {
    if (contract && contractUserWithdrawalRequestCount) {
      const number = showNumber(contractUserWithdrawalRequestCount);
      (async () => {
        if (number && number > 0) {
          const data = [];
          for (let i = 0; i < number; i++) {
            const withdrawalRequest = await contract.getWithdrawalRequest(
              wallet?.accounts[0].address,
              i
            );
            data.push(withdrawalRequest);
          }
          setContractWithdrawalRequest(data);
        } else {
          setContractWithdrawalRequest([]);
        }
      })();
    }
  }, [contractUserWithdrawalRequestCount]);

  useEffect(() => {
    if (wallet?.provider) {
      setEthersProvider(
        new ethers.providers.Web3Provider(wallet.provider, "any")
      );
    }
  }, [wallet]);

  useEffect(() => {
    if (ethersProvider) {
      (async () => {
        const signer = ethersProvider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        const name = await contract.getName();
        setContractName(name);
        const version = await contract.getVersion();
        setContractVersion(version);
        if (name === "InvestmentContract") {
          setAbi(InvestmentContractAbi);
        } else if (name === "InvestmentPool") {
          setAbi(InvestmentPoolAbi);
        }
      })();
    }
  }, [ethersProvider]);

  useEffect(() => {
    if (ethersProvider) {
      (async () => {
        const signer = ethersProvider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        setContract(contract);
        const contractMarketPlace = new ethers.Contract(
          CHAINS[
            CHAINS.map((i) => i.id16).indexOf(wallet?.chains[0]?.id || "")
          ].market_place_contract_address,
          MarketPlaceAbi,
          signer
        );
        setContractMarketPlace(contractMarketPlace);
      })();
    }
  }, [abi, contractName, contractVersion]);

  useEffect(() => {
    getBalanceOf();
  }, [tokenContract]);

  const getBalanceOf = async () => {
    if (tokenContract) {
      const balanceOf = await tokenContract.balanceOf(
        wallet?.accounts[0]?.address
      );
      const number = showTokenNumber(balanceOf, contractToken);
      setBalanceOf(number);
      return number;
    }
    return balanceOf;
  };

  const getInfo = async () => {
    if (contract) {
      (async () => {
        if (contractName === "InvestmentContract" && contract.getOwner) {
          try {
            const fundName =
              contract.getFundName && (await contract.getFundName());
            setContractFundName(fundName || "");
            const owner = contract.getOwner && (await contract.getOwner());
            setContractOwner(owner || "");
            const investor =
              contract.getInvestor && (await contract.getInvestor());
            setContractInvestor(investor);
            const pauser = contract.getPauser && (await contract.getPauser());
            setContractPauser(pauser);
            const paused = contract.getPaused && (await contract.getPaused());
            setContractPaused(paused);
            const token = contract.getToken && (await contract.getToken());
            setContractToken(token);
            const commissionRate = await contract.getCommissionRate();
            setContractCommissionRate(commissionRate);
            const minDeposit = await contract.getMinDeposit();
            setContractMinDeposit(minDeposit);
            const maxDeposit = await contract.getMaxDeposit();
            setContractMaxDeposit(maxDeposit);
            const withdrawalFreezePeriod =
              await contract.getWithdrawalFreezePeriod();
            setContractWithdrawalFreezePeriod(withdrawalFreezePeriod);
            setWithdrawalFreezePeriod(showNumber(withdrawalFreezePeriod));
            const userDeposit = await contract.getUserDeposit(
              wallet?.accounts[0].address
            );
            setContractUserDeposit(userDeposit);
            const totalDeposits = await contract.getTotalDeposits();
            setContractTotalDeposits(totalDeposits);
            const lastProfitDistributionTime =
              await contract.getLastProfitDistributionTime();
            setContractLastProfitDistributionTime(lastProfitDistributionTime);
            const contractBalance = await contract.getContractBalance();
            setContractContractBalance(contractBalance);
            const userWithdrawalRequestCount =
              await contract.getUserWithdrawalRequestCount(
                wallet?.accounts[0].address
              );
            setContractUserWithdrawalRequestCount(userWithdrawalRequestCount);
            const pendingWithdrawalTotal =
              await contract.getPendingWithdrawalTotal();
            setContractPendingWithdrawalTotal(pendingWithdrawalTotal);
            const annualReturnRate = await contract.getAnnualReturnRate();
            setContractAnnualReturnRate(annualReturnRate);
          } catch (error: { message: string } | any) {
            error?.message && errorMessage(error?.message);
          }
        } else if (contractName === "InvestmentPool" && contract.getOwner) {
          try {
            const fundName =
              contract.getFundName && (await contract.getFundName());
            setContractFundName(fundName || "");
            const owner = contract.getOwner && (await contract.getOwner());
            setContractOwner(owner);
            const investor =
              contract.getOwner && (await contract.getInvestor());
            setContractInvestor(investor);
            const pauser = contract.getOwner && (await contract.getPauser());
            setContractPauser(pauser);
            const paused = contract.getPaused && (await contract.getPaused());
            setContractPaused(paused);
            const token = contract.getToken && (await contract.getToken());
            setContractToken(token);
            const commissionRate = await contract.getCommissionRate();
            setContractCommissionRate(commissionRate);
            const minDeposit = await contract.getMinDeposit();
            setContractMinDeposit(minDeposit);
            const maxDeposit = await contract.getMaxDeposit();
            setContractMaxDeposit(maxDeposit);
            const withdrawalFreezePeriod =
              await contract.getWithdrawalFreezePeriod();
            setContractWithdrawalFreezePeriod(withdrawalFreezePeriod);
            setWithdrawalFreezePeriod(showNumber(withdrawalFreezePeriod));
            const totalDeposits = await contract.getTotalDeposits();
            setContractTotalDeposits(totalDeposits);
            const lastProfitDistributionTime =
              await contract.getLastProfitDistributionTime();
            setContractLastProfitDistributionTime(lastProfitDistributionTime);
            const contractBalance = await contract.getContractBalance();
            setContractContractBalance(contractBalance);
            const flowTokenAddress = await contract.getFlowTokenAddress();
            setContractFlowTokenAddress(flowTokenAddress);
            if (
              flowTokenAddress.toLocaleLowerCase() !==
              DEFAULT_ADDRESS.toLocaleLowerCase()
            ) {
              const flowTokenName = await contract.getFlowTokenName();
              setContractFlowTokenName(flowTokenName);
              const flowTokenSymbol = await contract.getFlowTokenSymbol();
              setContractFlowTokenSymbol(flowTokenSymbol);
              const userFlowBalance = await contract.getUserFlowBalance(
                wallet?.accounts[0].address
              );
              setContractUserFlowBalance(userFlowBalance);
              const userWithdrawalRequestCount =
                await contract.getUserWithdrawalRequestCount(
                  wallet?.accounts[0].address
                );
              setContractUserWithdrawalRequestCount(userWithdrawalRequestCount);
            }
            const pendingWithdrawalTotal =
              await contract.getPendingWithdrawalTotal();
            setContractPendingWithdrawalTotal(pendingWithdrawalTotal);
            const annualReturnRate = await contract.getAnnualReturnRate();
            setContractAnnualReturnRate(annualReturnRate);
          } catch (error: { message: string } | any) {
            error?.message && errorMessage(error?.message);
          }
        }
        if (contractMarketPlace) {
          const [fund, fundId, exists] =
            await contractMarketPlace.getFundByAddress(contractAddress);
          setMarketPlaceIpfsHash(fund.ipfsHash);
          setMarketPlaceFundId(fundId);
          setMarketPlaceExists(exists);
        }
        getBalanceOf();
      })();
    }
  };

  useEffect(() => {
    getInfo();
  }, [wallet, contract, contractMarketPlace]);

  const urlContract = (address: string) =>
    address && wallet
      ? `${
          CHAINS[CHAINS.map((i) => i.id16).indexOf(wallet?.chains[0]?.id || "")]
            .explorer
        }address/${address}`
      : "";

  const displyDayOrHour = (second: number) => {
    if (second > 86400) {
      const num = Math.floor(second / 86400);
      return num > 1 ? `${num} days` : `${num} day`;
    } else {
      const num = Math.floor(second / 3600);
      return num > 1 ? `${num} hours` : `${num} hour`;
    }
  };

  const callSetWithdrawalFreezePeriod = async () => {
    if (!(Number(withdrawalFreezePeriod) >= 3600)) {
      errorMessage("Withdrawal freeze period must be more than 3600 seconds");
    } else if (contract) {
      setLoading(true);
      try {
        const tx = await contract.setWithdrawalFreezePeriod(
          withdrawalFreezePeriod
        );
        await tx.wait();
        getInfo();
        successMessage("Withdrawal freeze period set success!");
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const callSetCommissionRate = async () => {
    if (!(Number(commissionRate) >= 0 && Number(commissionRate) <= 100)) {
      errorMessage("Commission rate must be between 0 and 100");
    } else if (contract) {
      setLoading(true);
      try {
        const tx = await contract.setCommissionRate(commissionRate);
        await tx.wait();
        getInfo();
        successMessage("Commission rate set success!");
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const callSetMinDeposit = async () => {
    if (contract) {
      setLoading(true);
      try {
        const tx = await contract.setMinDeposit(
          ethers.utils.parseUnits(`${minDeposit}`, decimal)
        );
        await tx.wait();
        getInfo();
        successMessage("Min deposit set success!");
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const callSetMaxDeposit = async () => {
    if (contract) {
      setLoading(true);
      try {
        const tx = await contract.setMaxDeposit(
          ethers.utils.parseUnits(`${maxDeposit}`, decimal)
        );
        await tx.wait();
        getInfo();
        successMessage("Max deposit set success!");
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const callSetPauser = async () => {
    if (investor.toLocaleLowerCase() === contractPauser.toLocaleLowerCase()) {
      errorMessage("Pauser is the same as the current pauser!");
    } else if (contract) {
      setLoading(true);
      try {
        const tx = await contract.setPauser(pauser);
        await tx.wait();
        getInfo();
        successMessage("Pauser set success!");
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const callSetFundName = async () => {
    if (fundName === contractFundName) {
      errorMessage("Fund name is the same as the current fund name!");
    } else if (contract) {
      setLoading(true);
      try {
        const tx = await contract.setFundName(fundName);
        await tx.wait();
        getInfo();
        successMessage("Fund name set success!");
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const callSetInvestor = async () => {
    if (investor.toLocaleLowerCase() === contractInvestor.toLocaleLowerCase()) {
      errorMessage("Investor is the same as the current investor!");
    } else if (contract) {
      setLoading(true);
      try {
        const tx = await contract.setInvestor(investor);
        await tx.wait();
        getInfo();
        successMessage("Investor set success!");
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const callWithdrawForInvestment = async () => {
    if (contractPaused === true) {
      errorMessage("Contract is paused!");
    } else if (Number(withdrawForInvestmentAmount) <= 0) {
      errorMessage("Amount must be greater than 0!");
    } else if (contract) {
      setLoading(true);
      try {
        const tx = await contract.withdrawForInvestment(
          ethers.utils.parseUnits(`${withdrawForInvestmentAmount}`, decimal),
          withdrawForInvestmentProtocol
        );
        await tx.wait();
        getInfo();
        successMessage("Withdraw for investment success!");
        setWithdrawForInvestmentAmount("0");
        setWithdrawForInvestmentProtocol("");
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const callDistributeProfit = async () => {
    if (
      !(
        contractContractBalance &&
        contractCommissionRate &&
        showTokenNumber(contractContractBalance, contractToken) >=
          Number(distributeProfit) *
            ((showNumber(contractCommissionRate) + 1) / 100)
      )
    ) {
      errorMessage(
        "Profit must be less than or equal to the contract balance multiplied by the commission rate plus 1% of the contract balance!"
      );
    } else if (Number(distributeProfit) === 0) {
      errorMessage("Profit cannot be zero!");
    } else if (
      !contractTotalDeposits ||
      (contractTotalDeposits &&
        showTokenNumber(contractTotalDeposits, contractToken) === 0)
    ) {
      errorMessage("No deposits to distribute profit!");
    } else if (contract) {
      setLoading(true);
      try {
        const tx = await contract.distributeProfit(
          ethers.utils.parseUnits(`${distributeProfit}`, decimal)
        );
        await tx.wait();
        getInfo();
        successMessage("Distribute profit success!");
        setDistributeProfit("0");
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const callDepositTokens = async () => {
    if (Number(depositTokens) <= 0) {
      errorMessage("Amount must be greater than 0!");
    } else if (contract) {
      setLoading(true);
      try {
        const tx = await contract.depositTokens(
          ethers.utils.parseUnits(`${depositTokens}`, decimal)
        );
        await tx.wait();
        getInfo();
        successMessage("Deposit tokens success!");
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const callEmergencyPause = async () => {
    if (contract) {
      setLoading(true);
      try {
        const tx = await contract.emergencyPause(emergencyPauseReason);
        await tx.wait();
        getInfo();
        successMessage("Emergency pause success!");
        setEmergencyPauseReason("");
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const callEmergencyUnpause = async () => {
    if (contract) {
      setLoading(true);
      try {
        const tx = await contract.emergencyUnpause();
        await tx.wait();
        getInfo();
        successMessage("Emergency unpause success!");
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const callDeposit = async () => {
    if (contractPaused === true) {
      errorMessage("Contract is paused!");
    } else if (Number(deposit) <= 0) {
      errorMessage("Please enter a valid amount!");
    } else if (Number(deposit) > Number(maxDeposit)) {
      errorMessage("Deposit amount exceeds max deposit!");
    } else if (Number(deposit) < Number(minDeposit)) {
      errorMessage("Deposit amount is less than min deposit!");
    } else if (contract && tokenContract) {
      setLoading(true);
      try {
        const balanceOf = await getBalanceOf();
        if (balanceOf > 0) {
          const allowance = await tokenContract.allowance(
            wallet?.accounts[0]?.address,
            contractAddress
          );
          if (showTokenNumber(allowance, contractToken) < Number(deposit)) {
            infoMessage(
              `Approval for ${deposit} ${showTokenName(contractToken)}!`
            );
            const approveTx = await tokenContract.approve(
              contractAddress,
              ethers.utils.parseEther(`${deposit}`)
            );
            await approveTx.wait();
          }
          infoMessage(
            `Deposit for ${deposit} ${showTokenName(contractToken)}!`
          );
          const depositTx = await contract.deposit(
            ethers.utils.parseUnits(`${deposit}`, decimal)
          );
          await depositTx.wait();
          getInfo();
          successMessage("Deposit success!");
          setDeposit("0");
        } else {
          errorMessage("Insufficient balance!");
        }
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const callRequestWithdrawal = async () => {
    if (contractPaused === true) {
      errorMessage("Contract is paused!");
    } else if (Number(requestWithdrawal) <= 0) {
      errorMessage("Withdraw amount must be greater than 0!");
    } else if (
      contractUserDeposit &&
      Number(requestWithdrawal) >
        showTokenNumber(contractUserDeposit, contractToken)
    ) {
      errorMessage("Insufficient deposit!");
    } else if (
      (contract && contractUserDeposit) ||
      (contract && contractUserFlowBalance)
    ) {
      setLoading(true);
      try {
        if (ethersProvider && contractName === "InvestmentPool") {
          if (
            contractUserFlowBalance &&
            showTokenNumber(contractUserFlowBalance, contractToken) > 0
          ) {
            const signer = ethersProvider.getSigner();
            const flowTokenContract = new ethers.Contract(
              contractFlowTokenAddress,
              BASE_TOKEN_ABI,
              signer
            );
            const allowance = await flowTokenContract.allowance(
              wallet?.accounts[0]?.address,
              contractAddress
            );
            if (
              showTokenNumber(allowance, contractToken) <
              Number(requestWithdrawal)
            ) {
              infoMessage(
                `Approval for ${requestWithdrawal} ${contractFlowTokenName} ($${contractFlowTokenSymbol})!`
              );
              const approveTx = await flowTokenContract.approve(
                contractAddress,
                ethers.utils.parseEther(`${requestWithdrawal}`)
              );
              await approveTx.wait();
            }
            infoMessage(
              `Deposit for ${requestWithdrawal} ${contractFlowTokenName} (${contractFlowTokenSymbol})!`
            );
            const tx = await contract.requestWithdrawal(
              ethers.utils.parseUnits(`${requestWithdrawal}`, decimal)
            );
            await tx.wait();
            getInfo();
            successMessage("Request withdrawal success!");
            setRequestWithdrawal("0");
          } else {
            errorMessage("Insufficient allowance!");
          }
        } else {
          const tx = await contract.requestWithdrawal(
            ethers.utils.parseUnits(`${requestWithdrawal}`, decimal)
          );
          await tx.wait();
          getInfo();
          successMessage("Request withdrawal success!");
        }
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const callWithdrawShare = async (index: number) => {
    if (
      contractWithdrawalRequest &&
      contractContractBalance &&
      contractWithdrawalRequest[index] &&
      showTokenNumber(contractWithdrawalRequest[index][0], contractToken) >
        showTokenNumber(contractContractBalance, contractToken)
    ) {
      errorMessage("Insufficient contract balance!");
    } else if (contractPaused === true) {
      errorMessage("Contract is paused!");
    } else if (contract) {
      setLoading(true);
      try {
        const tx = await contract.withdrawShare(index);
        await tx.wait();
        getInfo();
        successMessage("Withdraw share success!");
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const callSetFlowToken = async (address = flowToken) => {
    if (contract) {
      setLoading(true);
      try {
        const tx = await contract.setFlowToken(address);
        await tx.wait();
        getInfo();
        successMessage("Set flow token success!");
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const callMarketPlaceListFund = async () => {
    if (
      !(
        contractTotalDeposits &&
        contractAnnualReturnRate &&
        contractContractBalance &&
        showTokenNumber(contractTotalDeposits, contractToken) > 0 &&
        showNumber(contractAnnualReturnRate) > 0 &&
        showTokenNumber(contractContractBalance, contractToken) > 0
      )
    ) {
      errorMessage(
        "Please ensure your fund is active, with the Commission Rate, Contract Balance, and Annual Return Rate all greater than zero!"
      );
    } else if (ethersProvider) {
      setLoading(true);
      try {
        if (contractMarketPlace) {
          if (marketPlaceExists) {
            const tx = await contractMarketPlace.updateFund(
              marketPlaceFundId,
              fundIpfsHash
            );
            await tx.wait();
            getInfo();
            successMessage("Market place update fund success!");
          } else {
            const tx = await contractMarketPlace.listFund(
              contractAddress,
              fundIpfsHash
            );
            await tx.wait();
            getInfo();
            successMessage("Market place list fund success!");
          }
        }
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const deployFlowToken = async () => {
    if (liquidityTokenName === "" && liquidityTokenSymbol === "") {
      errorMessage("Please set liquidity token name and symbol!");
    } else if (ethersProvider) {
      setLoading(true);
      try {
        const signer = ethersProvider.getSigner();
        const contractFactory = new ethers.ContractFactory(
          FlowTokenAbi,
          FlowTokenBytecode,
          signer
        );
        contractFactory
          .deploy(
            liquidityTokenName,
            liquidityTokenSymbol,
            contractAddress,
            decimal
          )
          .then(async (contract) => {
            await contract.deployed();
            successMessage(`Flow token deployed at ${contract.address}!`);
            infoMessage(`Set flow token to contract!`);
            await callSetFlowToken(contract.address);
            setFlowToken(contract.address);
          })
          .catch((error) => {
            errorMessage(error.message);
          });
      } catch (error: { message: string } | any) {
        error?.message && errorMessage(error?.message);
      }
    }
  };

  const handleClickVariant = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant });
    setLoading(false);
  };

  const handleChangeWithdrawalFreezePeriod = (event: SelectChangeEvent) => {
    setWithdrawalFreezePeriod(Number(event.target.value));
  };

  const handleChangeCommissionRate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCommissionRate(event.target.value);
  };

  const handleChangeMinDeposit = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMinDeposit(event.target.value);
  };

  const handleChangeMaxDeposit = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMaxDeposit(event.target.value);
  };

  const handleChangePauser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPauser(event.target.value);
  };

  const handleChangeFundName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFundName(event.target.value);
  };

  const handleChangeInvestor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvestor(event.target.value);
  };

  const handleChangeWithdrawForInvestmentAmount = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWithdrawForInvestmentAmount(event.target.value);
  };

  const handleChangeWithdrawForInvestmentProtocol = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setWithdrawForInvestmentProtocol(event.target.value);
  };

  const handleChangeDistributeProfit = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDistributeProfit(event.target.value);
  };

  const handleChangeDepositTokens = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDepositTokens(event.target.value);
  };

  const handleChangeDeposit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeposit(event.target.value);
  };

  const handleChangeRequestWithdrawal = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRequestWithdrawal(event.target.value);
  };

  const handleChangeLiquidityTokenName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLiquidityTokenName(event.target.value);
  };

  const handleChangeLiquidityTokenSymbol = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLiquidityTokenSymbol(event.target.value.toLocaleUpperCase());
  };

  const handleChangeFlowToken = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFlowToken(event.target.value);
  };

  const handleEmergencyPauseReason = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmergencyPauseReason(event.target.value);
  };

  const handleChangeFundIpfsHash = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFundIpfsHash(event.target.value);
  };

  const infoMessage = (message: string) => {
    handleClickVariant(message, "info");
  };

  const successMessage = (message: string) => {
    handleClickVariant(message, "success");
  };

  const errorMessage = (message: string) => {
    handleClickVariant(message, "error");
  };

  const PanelTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));

  const WrapTooltop = (title: string, content: string) => (
    <div style={{ position: "relative", alignItems: "center" }}>
      <PanelTooltip
        style={{
          width: 25,
          height: 25,
          border: 0,
          position: "absolute",
          top: -30,
          right: -20,
          zIndex: 1000,
          backgroundColor: "transparent",
        }}
        title={
          <Fragment>
            <Typography color="inherit">{title}</Typography>
            <em>{content}</em>
          </Fragment>
        }
      >
        <IconButton>
          <TipsAndUpdatesOutlined />
        </IconButton>
      </PanelTooltip>
    </div>
  );

  const withdrawalTable = () => {
    if (contractName === "InvestmentPool") {
      return (
        contractWithdrawalRequest &&
        contractWithdrawalRequest.length > 0 && (
          <TableContainer component={Paper} className="mt-10">
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    {contractFlowTokenName} (${contractFlowTokenSymbol})
                  </StyledTableCell>
                  <StyledTableCell>
                    Amount (${showTokenName(contractToken)})
                  </StyledTableCell>
                  <StyledTableCell>Unlock Time</StyledTableCell>
                  <StyledTableCell>Process</StyledTableCell>
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contractWithdrawalRequest.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {showTokenNumber(row[0], contractToken)}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row[3] && showTokenNumber(row[3], contractToken)}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {new Date(showNumber(row[1]) * 1000).toLocaleString()}
                    </StyledTableCell>
                    <StyledTableCell>
                      {row[2] === false ? "Processing" : "Processed"}
                    </StyledTableCell>
                    <StyledTableCell>
                      <Button
                        variant="outlined"
                        className="mb-2"
                        onClick={() => callWithdrawShare(index)}
                        disabled={
                          loading ||
                          new Date(showNumber(row[1]) * 1000) > new Date() ||
                          row[2] ||
                          contractPaused
                        }
                      >
                        Withdrawal
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      );
    } else {
      return (
        contractWithdrawalRequest &&
        contractWithdrawalRequest.length > 0 && (
          <TableContainer component={Paper} className="mt-10">
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    Amount (${showTokenName(contractToken)})
                  </StyledTableCell>
                  <StyledTableCell>Unlock Time</StyledTableCell>
                  <StyledTableCell>Process</StyledTableCell>
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contractWithdrawalRequest.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {showTokenNumber(row[0], contractToken)}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {new Date(showNumber(row[1]) * 1000).toLocaleString()}
                    </StyledTableCell>
                    <StyledTableCell>
                      {row[2] === false ? "Processing" : "Processed"}
                    </StyledTableCell>
                    <StyledTableCell>
                      {!row[2] && (
                        <Button
                          variant="outlined"
                          className="mb-2"
                          onClick={() => callWithdrawShare(index)}
                          disabled={
                            loading ||
                            new Date(showNumber(row[1]) * 1000) > new Date() ||
                            row[2]
                          }
                        >
                          Withdrawal
                        </Button>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )
      );
    }
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
        {wallet && (
          <Box sx={{ bgcolor: "#FFF", minHeight: "80vh", mt: 5, p: 2 }}>
            <h1 className="text-3xl font-bold mb-5">Contract Infomation</h1>
            <Stack
              spacing={{ xs: 1, sm: 2 }}
              direction="row"
              useFlexGap
              sx={{ flexWrap: "wrap" }}
            >
              {contractName !== "" && (
                <InfoPaper elevation={0}>
                  <b>{contractName}</b>
                  <h6>Contract Name</h6>
                </InfoPaper>
              )}
              {contractVersion !== "" && (
                <InfoPaper elevation={0}>
                  <b>{contractVersion}</b>
                  <h6>Contract Version</h6>
                </InfoPaper>
              )}
              {contractOwner !== "" && (
                <InfoPaper elevation={0}>
                  <MUILink
                    href={`${urlContract(contractOwner)}`}
                    target="_blank"
                  >
                    <b>{showContractAddress(contractOwner)}</b>
                  </MUILink>
                  <h6>Owner</h6>
                </InfoPaper>
              )}
              {contractInvestor !== "" && (
                <InfoPaper elevation={0}>
                  <MUILink
                    href={`${urlContract(contractInvestor)}`}
                    target="_blank"
                  >
                    <b>{showContractAddress(contractInvestor)}</b>
                  </MUILink>
                  <h6>Investor</h6>
                </InfoPaper>
              )}
              {contractPauser !== "" && (
                <InfoPaper elevation={0}>
                  <MUILink
                    href={`${urlContract(contractPauser)}`}
                    target="_blank"
                  >
                    <b>{showContractAddress(contractPauser)}</b>
                  </MUILink>
                  <h6>Pauser</h6>
                </InfoPaper>
              )}
              {contractToken !== "" && (
                <InfoPaper elevation={0}>
                  <MUILink
                    href={`${urlContract(contractToken)}`}
                    target="_blank"
                  >
                    <b>${showTokenName(contractToken)}</b>
                  </MUILink>
                  <h6>Settlement Token</h6>
                </InfoPaper>
              )}
              {contractCommissionRate && (
                <InfoPaper elevation={0}>
                  <b>{showNumber(contractCommissionRate)} %</b>
                  <h6>Commission Rate</h6>
                </InfoPaper>
              )}
              {contractMinDeposit && (
                <InfoPaper elevation={0}>
                  <b>
                    {showTokenNumber(
                      contractMinDeposit,
                      contractToken
                    ).toLocaleString("en-US", { minimumFractionDigits: 6 })}
                  </b>
                  <h6>Min Deposit</h6>
                </InfoPaper>
              )}
              {contractMaxDeposit && (
                <InfoPaper elevation={0}>
                  <b>
                    {showTokenNumber(
                      contractMaxDeposit,
                      contractToken
                    ).toLocaleString("en-US", { minimumFractionDigits: 6 })}
                  </b>
                  <h6>Max Deposit</h6>
                </InfoPaper>
              )}
              {contractWithdrawalFreezePeriod && (
                <InfoPaper elevation={0}>
                  <b>
                    {displyDayOrHour(
                      showNumber(contractWithdrawalFreezePeriod)
                    )}
                  </b>
                  <h6>Withdrawal Freeze Period</h6>
                </InfoPaper>
              )}
              {contractTotalDeposits && (
                <InfoPaper elevation={0}>
                  <b>
                    {showTokenNumber(
                      contractTotalDeposits,
                      contractToken
                    ).toLocaleString("en-US", { minimumFractionDigits: 6 })}
                  </b>
                  <h6>Total Deposits</h6>
                </InfoPaper>
              )}
              {contractLastProfitDistributionTime &&
                showNumber(contractLastProfitDistributionTime) > 0 && (
                  <InfoPaper elevation={0}>
                    <b>
                      {new Date(
                        showNumber(contractLastProfitDistributionTime) * 1000
                      ).toLocaleString()}
                    </b>
                    <h6>Last Profit Distribution Time</h6>
                  </InfoPaper>
                )}
              {contractContractBalance && (
                <InfoPaper elevation={0}>
                  <b>
                    {showTokenNumber(
                      contractContractBalance,
                      contractToken
                    ).toLocaleString("en-US", { minimumFractionDigits: 6 })}
                  </b>
                  <h6>Contract Balance</h6>
                </InfoPaper>
              )}
              {contractPendingWithdrawalTotal && (
                <InfoPaper elevation={0}>
                  <b>
                    {showTokenNumber(
                      contractPendingWithdrawalTotal,
                      contractToken
                    ).toLocaleString("en-US", { minimumFractionDigits: 6 })}
                  </b>
                  <h6>Pending Withdrawal Total</h6>
                </InfoPaper>
              )}
              {contractAnnualReturnRate && (
                <InfoPaper elevation={0}>
                  <b>{showNumber(contractAnnualReturnRate)} %</b>
                  <h6>Annual Return Rate</h6>
                </InfoPaper>
              )}
            </Stack>
            {contractName === "InvestmentPool" && (
              <>
                <h1 className="text-3xl font-bold mt-5 mb-5">Flow Token</h1>
                {flowToken &&
                  flowToken.toLocaleLowerCase() ===
                    DEFAULT_ADDRESS.toLocaleLowerCase() && (
                    <h6
                      className="text-7xl= mt-5 mb-5"
                      style={{
                        color: "red",
                      }}
                    >
                      <i>
                        Please generate a flow token and configure it to
                        prioritize the contract first.
                      </i>
                    </h6>
                  )}
                <Stack
                  spacing={{ xs: 1, sm: 2 }}
                  direction="row"
                  useFlexGap
                  sx={{ flexWrap: "wrap" }}
                >
                  {
                    <InfoPaper elevation={0} className="setting">
                      {WrapTooltop(
                        "Create Liquidity Token",
                        "Create a new liquidity token for the fund. This token represents shares in the fund."
                      )}
                      <Grid container spacing={0}>
                        <Grid size={{ xs: 6, md: 6 }}>
                          <TextField
                            id="liquidityTokenName"
                            value={liquidityTokenName}
                            onChange={handleChangeLiquidityTokenName}
                            style={{
                              marginTop: 5,
                              width: "100%",
                              color: "#000",
                            }}
                            variant="outlined"
                            label="Name"
                          />
                        </Grid>
                        <Grid size={{ xs: 6, md: 6 }}>
                          <TextField
                            id="liquidityTokenSymbol"
                            value={liquidityTokenSymbol}
                            onChange={handleChangeLiquidityTokenSymbol}
                            style={{
                              marginTop: 5,
                              width: "100%",
                              color: "#000",
                            }}
                            variant="outlined"
                            label="Symbol"
                          />
                        </Grid>
                      </Grid>
                      <Button
                        variant="outlined"
                        className="mb-2"
                        onClick={() => deployFlowToken()}
                        disabled={loading}
                      >
                        Create Liquidity Token
                      </Button>
                    </InfoPaper>
                  }
                  {
                    <InfoPaper elevation={0} className="setting">
                      {WrapTooltop(
                        "Set Flow Token",
                        "Set the flow token for the fund. This token is used to represent shares in the fund. Only the owner role can perform this action."
                      )}
                      <TextField
                        id="flowToken"
                        value={flowToken}
                        onChange={handleChangeFlowToken}
                        style={{
                          marginTop: 5,
                          width: "100%",
                          color: "#000",
                        }}
                        variant="outlined"
                      />
                      <Button
                        variant="outlined"
                        className="mb-2"
                        onClick={() => callSetFlowToken()}
                        disabled={
                          loading ||
                          !!(
                            flowToken &&
                            flowToken.toLocaleLowerCase() ===
                              DEFAULT_ADDRESS.toLocaleLowerCase()
                          )
                        }
                      >
                        Set Flow Token
                      </Button>
                    </InfoPaper>
                  }
                </Stack>
              </>
            )}
            {contractOwner &&
              wallet?.accounts[0]?.address &&
              contractOwner.toLocaleLowerCase() ===
                wallet?.accounts[0].address.toLocaleLowerCase() && (
                <>
                  <h1 className="text-3xl font-bold mt-5 mb-5">
                    Owner Setting
                  </h1>
                  <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    sx={{ flexWrap: "wrap" }}
                  >
                    {
                      <InfoPaper elevation={0} className="setting">
                        {WrapTooltop(
                          "Post to Market Place",
                          "Post the fund to the marketplace with an IPFS hash for additional information."
                        )}
                        <TextField
                          id="fundIpfsHash"
                          label="IPFS Hash"
                          value={fundIpfsHash}
                          onChange={handleChangeFundIpfsHash}
                          style={{
                            marginTop: 5,
                            width: "100%",
                            color: "#000",
                          }}
                          variant="outlined"
                        />
                        <Button
                          variant="outlined"
                          className="mb-2"
                          onClick={() => callMarketPlaceListFund()}
                          disabled={loading}
                        >
                          Post to Market Place
                        </Button>
                      </InfoPaper>
                    }
                    {
                      <InfoPaper elevation={0} className="setting">
                        {WrapTooltop(
                          "Set Fund Name",
                          "Set a new name for the fund. Only the owner role can perform this action."
                        )}
                        <TextField
                          id="fundName"
                          label="Fund Name"
                          value={fundName}
                          onChange={handleChangeFundName}
                          style={{
                            marginTop: 5,
                            width: "100%",
                            color: "#000",
                          }}
                          variant="outlined"
                        />
                        <Button
                          variant="outlined"
                          className="mb-2"
                          onClick={() => callSetFundName()}
                          disabled={loading}
                        >
                          Set Fund Name
                        </Button>
                      </InfoPaper>
                    }
                    {
                      <InfoPaper elevation={0} className="setting">
                        {WrapTooltop(
                          "Set Investor",
                          "Set a new investor for the fund. Only the owner role can perform this action."
                        )}
                        <TextField
                          id="investor"
                          label="Investor"
                          value={investor}
                          onChange={handleChangeInvestor}
                          style={{
                            marginTop: 5,
                            width: "100%",
                            color: "#000",
                          }}
                          variant="outlined"
                        />
                        <Button
                          variant="outlined"
                          className="mb-2"
                          onClick={() => callSetInvestor()}
                          disabled={loading}
                        >
                          Set Investor
                        </Button>
                      </InfoPaper>
                    }
                    {
                      <InfoPaper elevation={0} className="setting">
                        {WrapTooltop(
                          "Set Pauser",
                          "Set a new pauser for the fund. Only the owner role can perform this action."
                        )}
                        <TextField
                          id="pauser"
                          label="Pauser"
                          value={pauser}
                          onChange={handleChangePauser}
                          style={{
                            marginTop: 5,
                            width: "100%",
                            color: "#000",
                          }}
                          variant="outlined"
                        />
                        <Button
                          variant="outlined"
                          className="mb-2"
                          onClick={() => callSetPauser()}
                          disabled={loading}
                        >
                          Set Pauser
                        </Button>
                      </InfoPaper>
                    }
                    {
                      <InfoPaper elevation={0} className="setting">
                        {WrapTooltop(
                          "Set Commission Rate",
                          "Set the commission rate for the fund. Only the owner role can perform this action."
                        )}
                        <NumericFormat
                          label="Commission Rate"
                          customInput={TextField}
                          id="commissionRate"
                          value={commissionRate || ""}
                          onChange={handleChangeCommissionRate}
                          style={{
                            marginTop: 5,
                            width: "100%",
                            color: "#000",
                          }}
                          variant="outlined"
                        />
                        <Button
                          variant="outlined"
                          className="mb-2"
                          onClick={() => callSetCommissionRate()}
                          disabled={loading}
                        >
                          Set Commission Rate
                        </Button>
                      </InfoPaper>
                    }
                    {
                      <InfoPaper elevation={0} className="setting">
                        {WrapTooltop(
                          "Set Min Deposit",
                          "Set the minimum deposit amount for the fund. Only the owner role can perform this action."
                        )}
                        <NumericFormat
                          label="Max Deposit"
                          customInput={TextField}
                          id="minDeposit"
                          value={minDeposit || ""}
                          onChange={handleChangeMinDeposit}
                          style={{
                            marginTop: 5,
                            width: "100%",
                            color: "#000",
                          }}
                          variant="outlined"
                        />
                        <Button
                          variant="outlined"
                          className="mb-2"
                          onClick={() => callSetMinDeposit()}
                          disabled={loading}
                        >
                          Min Deposit
                        </Button>
                      </InfoPaper>
                    }
                    {
                      <InfoPaper elevation={0} className="setting">
                        {WrapTooltop(
                          "Set Max Deposit",
                          "Set the maximum deposit amount for the fund. Only the owner role can perform this action."
                        )}
                        <NumericFormat
                          label="Max Deposit"
                          customInput={TextField}
                          id="maxDeposit"
                          value={maxDeposit || ""}
                          onChange={handleChangeMaxDeposit}
                          style={{
                            marginTop: 5,
                            width: "100%",
                            color: "#000",
                          }}
                          variant="outlined"
                        />
                        <Button
                          variant="outlined"
                          className="mb-2"
                          onClick={() => callSetMaxDeposit()}
                          disabled={loading}
                        >
                          Max Deposit
                        </Button>
                      </InfoPaper>
                    }
                    {
                      <InfoPaper elevation={0} className="setting">
                        {WrapTooltop(
                          "Set Withdrawal Freeze Period",
                          "Set the duration of the withdrawal freeze period. Only the owner role can perform this action."
                        )}
                        <Select
                          labelId="withdrawal-freeze-period-select-label"
                          id="withdrawal-freeze-period-select"
                          value={String(withdrawalFreezePeriod)}
                          onChange={handleChangeWithdrawalFreezePeriod}
                          style={{
                            marginTop: 5,
                            width: "100%",
                            color: "#000",
                          }}
                        >
                          {[
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                            16, 17, 18, 19, 20, 21, 22, 23,
                          ].map((i) => (
                            <MenuItem
                              key={`${i}-hours`}
                              value={String(i * 3600)}
                            >
                              {i} {i === 1 ? "hour" : "hours"}
                            </MenuItem>
                          ))}
                          {[
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                            16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
                            29, 30,
                          ].map((i) => (
                            <MenuItem
                              key={`${i}-days`}
                              value={String(i * 86400)}
                            >
                              {i} {i === 1 ? "day" : "days"}
                            </MenuItem>
                          ))}
                        </Select>
                        <Button
                          variant="outlined"
                          className="mb-2"
                          onClick={() => callSetWithdrawalFreezePeriod()}
                          disabled={loading}
                        >
                          Set Withdrawal Freeze Period
                        </Button>
                      </InfoPaper>
                    }
                  </Stack>
                </>
              )}
            {contractInvestor &&
              wallet?.accounts[0]?.address &&
              contractInvestor.toLocaleLowerCase() ===
                wallet?.accounts[0].address.toLocaleLowerCase() && (
                <>
                  <h1 className="text-3xl font-bold mt-5 mb-5">
                    Investor Setting
                  </h1>
                  <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    sx={{ flexWrap: "wrap" }}
                  >
                    {
                      <InfoPaper elevation={0} className="setting">
                        {WrapTooltop(
                          "Withdraw for Investment",
                          "Withdraw tokens from the contract for investment purposes. Only the investor role can perform this action."
                        )}
                        <Grid container spacing={0}>
                          <Grid size={{ xs: 6, md: 6 }}>
                            <NumericFormat
                              customInput={TextField}
                              id="withdrawForInvestmentAmount"
                              value={withdrawForInvestmentAmount}
                              onChange={handleChangeWithdrawForInvestmentAmount}
                              style={{
                                marginTop: 5,
                                width: "100%",
                                color: "#000",
                              }}
                              variant="outlined"
                              label={"Amount"}
                            />
                          </Grid>
                          <Grid size={{ xs: 6, md: 6 }}>
                            <TextField
                              id="withdrawForInvestmentProtocol"
                              value={withdrawForInvestmentProtocol}
                              onChange={
                                handleChangeWithdrawForInvestmentProtocol
                              }
                              style={{
                                marginTop: 5,
                                width: "100%",
                                color: "#000",
                              }}
                              variant="outlined"
                              label={"Protocol"}
                            />
                          </Grid>
                        </Grid>
                        <Button
                          variant="outlined"
                          className="mb-2"
                          onClick={() => callWithdrawForInvestment()}
                          disabled={
                            loading ||
                            !contractContractBalance ||
                            !!(
                              contractContractBalance &&
                              showTokenNumber(
                                contractContractBalance,
                                contractToken
                              ) <= 0
                            ) ||
                            contractPaused
                          }
                        >
                          Withdraw For Investment
                        </Button>
                      </InfoPaper>
                    }
                    {
                      <InfoPaper elevation={0} className="setting">
                        {WrapTooltop(
                          "Distribute Profit",
                          "Distribute profits or losses to the fund participants based on the fund's performance."
                        )}
                        <NumericFormat
                          customInput={TextField}
                          id="distributeProfit"
                          value={distributeProfit}
                          onChange={handleChangeDistributeProfit}
                          style={{
                            marginTop: 5,
                            width: "100%",
                            color: "#000",
                          }}
                          variant="outlined"
                          label={"Profit"}
                        />
                        <Button
                          variant="outlined"
                          className="mb-2"
                          onClick={() => callDistributeProfit()}
                          disabled={
                            loading ||
                            !contractContractBalance ||
                            !!(
                              contractContractBalance &&
                              showTokenNumber(
                                contractContractBalance,
                                contractToken
                              ) <= 0
                            )
                          }
                        >
                          Distribute Profit
                        </Button>
                      </InfoPaper>
                    }
                    {
                      <InfoPaper elevation={0} className="setting">
                        {WrapTooltop(
                          "Deposit Tokens",
                          "Deposit tokens into the contract to increase the fund's balance. Only the investor role can perform this action."
                        )}
                        <NumericFormat
                          customInput={TextField}
                          id="depositTokens"
                          value={depositTokens}
                          onChange={handleChangeDepositTokens}
                          style={{
                            marginTop: 5,
                            width: "100%",
                            color: "#000",
                          }}
                          variant="outlined"
                          label={"Amount"}
                        />
                        <Button
                          variant="outlined"
                          className="mb-2"
                          onClick={() => callDepositTokens()}
                          disabled={loading}
                        >
                          Deposit Tokens
                        </Button>
                      </InfoPaper>
                    }
                  </Stack>
                </>
              )}
            {contractPauser &&
              wallet?.accounts[0]?.address &&
              contractPauser.toLocaleLowerCase() ===
                wallet?.accounts[0].address.toLocaleLowerCase() && (
                <>
                  <h1 className="text-3xl font-bold mt-5 mb-5">
                    Pauser Setting
                  </h1>
                  <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    sx={{ flexWrap: "wrap" }}
                  >
                    {
                      <InfoPaper elevation={0} className="setting">
                        {WrapTooltop(
                          "Emergency Pause",
                          "Pause the contract in case of an emergency. Only the pauser role can perform this action."
                        )}
                        <TextField
                          id="emergencyPauseReason"
                          value={emergencyPauseReason}
                          onChange={handleEmergencyPauseReason}
                          style={{
                            marginTop: 5,
                            width: "100%",
                            color: "#000",
                          }}
                          variant="outlined"
                          label={"Reason"}
                        />
                        <Button
                          variant="outlined"
                          className="mb-2"
                          onClick={() => callEmergencyPause()}
                          disabled={loading || contractPaused}
                        >
                          Emergency Pause
                        </Button>
                      </InfoPaper>
                    }
                    {
                      <InfoPaper elevation={0} className="setting">
                        {WrapTooltop(
                          "Emergency Unpause",
                          "Unpause the contract to resume normal operations. Only the pauser role can perform this action."
                        )}
                        <Button
                          variant="outlined"
                          className="mb-2"
                          onClick={() => callEmergencyUnpause()}
                          disabled={loading || !contractPaused}
                        >
                          Emergency Unpause
                        </Button>
                      </InfoPaper>
                    }
                  </Stack>
                </>
              )}
            <h1 className="text-3xl font-bold mt-5 mb-5">Invest Fund</h1>
            <Stack
              spacing={{ xs: 1, sm: 2 }}
              direction="row"
              useFlexGap
              sx={{ flexWrap: "wrap" }}
            >
              {
                <InfoPaper elevation={0} className="setting">
                  <b>
                    {balanceOf.toLocaleString("en-US", {
                      minimumFractionDigits: 6,
                    })}
                  </b>
                  <h6>Your Balance Of ${showTokenName(contractToken)}</h6>
                </InfoPaper>
              }
              {
                <InfoPaper elevation={0} className="setting">
                  {WrapTooltop(
                    "Deposit",
                    "Deposit your tokens into the fund. Ensure the amount is within the min and max deposit limits."
                  )}
                  <NumericFormat
                    customInput={TextField}
                    id="deposit"
                    value={deposit}
                    onChange={handleChangeDeposit}
                    style={{
                      marginTop: 5,
                      width: "100%",
                      color: "#000",
                    }}
                    variant="outlined"
                    label={"Deposit"}
                  />
                  <Grid container spacing={0}>
                    <Grid size={{ xs: 6, md: 6 }}>
                      <Button
                        variant="outlined"
                        className="mb-2"
                        onClick={() => callDeposit()}
                        disabled={loading || balanceOf <= 0 || contractPaused}
                      >
                        Deposit
                      </Button>
                    </Grid>
                    <Grid size={{ xs: 6, md: 6 }}>
                      <Button
                        variant="outlined"
                        className="mb-2"
                        onClick={() => setDeposit(String(balanceOf))}
                        disabled={loading}
                      >
                        Max
                      </Button>
                    </Grid>
                  </Grid>
                </InfoPaper>
              }
              {contractUserDeposit && (
                <InfoPaper elevation={0} className="setting">
                  <b>
                    {showTokenNumber(
                      contractUserDeposit,
                      contractToken
                    ).toLocaleString("en-US", { minimumFractionDigits: 6 })}
                  </b>
                  <h6>
                    Your Balance Of Deposit On Contract $
                    {showTokenName(contractToken)}
                  </h6>
                </InfoPaper>
              )}
              {contractUserFlowBalance &&
                contractFlowTokenName &&
                contractFlowTokenSymbol && (
                  <InfoPaper elevation={0} className="setting">
                    <b>
                      {showTokenNumber(
                        contractUserFlowBalance,
                        contractToken
                      ).toLocaleString("en-US", { minimumFractionDigits: 6 })}
                    </b>
                    <h6>
                      Your Balance Of {contractFlowTokenName} ($
                      {contractFlowTokenSymbol})
                    </h6>
                  </InfoPaper>
                )}
              {
                <InfoPaper elevation={0} className="setting">
                  {WrapTooltop(
                    "Request Withdrawal",
                    "Request to withdraw your share from the fund. The withdrawal will be processed after the freeze period."
                  )}
                  <NumericFormat
                    customInput={TextField}
                    id="requestWithdrawal"
                    value={requestWithdrawal}
                    onChange={handleChangeRequestWithdrawal}
                    style={{
                      marginTop: 5,
                      width: "100%",
                      color: "#000",
                    }}
                    variant="outlined"
                    label={"Withdraw"}
                  />
                  <Button
                    variant="outlined"
                    className="mb-2"
                    onClick={() => callRequestWithdrawal()}
                    disabled={
                      loading ||
                      (contractName === "InvestmentPool" &&
                        (!contractUserFlowBalance ||
                          (contractUserFlowBalance &&
                            showTokenNumber(
                              contractUserFlowBalance,
                              contractToken
                            ) === 0))) ||
                      contractPaused ||
                      !!(
                        flowToken &&
                        flowToken.toLocaleLowerCase() ===
                          DEFAULT_ADDRESS.toLocaleLowerCase()
                      ) ||
                      (contractName === "InvestmentContract" &&
                        (!contractUserDeposit ||
                          (contractUserDeposit &&
                            showTokenNumber(
                              contractUserDeposit,
                              contractToken
                            ) === 0)))
                    }
                  >
                    Request Withdrawal
                  </Button>
                </InfoPaper>
              }
              {fundIpfsHash !== "" && (
                <InfoPaper elevation={0} className="setting">
                  <MUILink
                    href={`https://ipfs.io/ipfs/${fundIpfsHash}`}
                    target="_blank"
                  >
                    <b>{showContractAddress(fundIpfsHash)}</b>
                  </MUILink>
                  <h6>IPFS Link</h6>
                  <h6>Project Introduction</h6>
                </InfoPaper>
              )}
            </Stack>
            {withdrawalTable()}
          </Box>
        )}
        {!wallet && (
          <Box
            sx={{
              bgcolor: "#FFF",
              minHeight: "80vh",
              mt: 5,
              p: 2,
            }}
          >
            <div
              className="flex flex-col items-center p-5 gap-4 justify-center text-center"
              style={{ height: "100%", fontSize: "20px" }}
            >
              <div>
                <h1>Please connect wallet first!</h1>
              </div>
              <div
                style={{
                  border: "1px solid #000",
                  borderRadius: "5px",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                <ConnectWallet />
              </div>
            </div>
          </Box>
        )}
      </Container>
    </main>
  );
}
