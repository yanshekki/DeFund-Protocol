"use client";

import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import {
  AvaxTokenAddress,
  AvaxToken,
  AvaxTokenDecimals,
} from "@/enums/token.enum";
import { useConnectWallet } from "@web3-onboard/react";
import { ethers } from "ethers";
import {
  InvestmentContractAbi,
  InvestmentContractBytecode,
} from "@/contract/InvestmentContract";
import {
  InvestmentPoolAbi,
  InvestmentPoolBytecode,
} from "@/contract/InvestmentPool";
import Stack from "@mui/material/Stack";
import { VariantType, useSnackbar } from "notistack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { redirect } from "next/navigation";
import { DEFAULT_ADDRESS } from "@/config";

const IntroPaper = styled(Paper)(({ theme }) => ({
  width: "100hv",
  height: "100hv",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  marginTop: theme.spacing(5),
  backgroundColor: "#f2f2f2",
}));

export default function Create() {
  const [{ wallet }] = useConnectWallet();
  const { enqueueSnackbar } = useSnackbar();
  const [ethersProvider, setEthersProvider] =
    useState<ethers.providers.Web3Provider | null>();
  const [contractType, setContractType] = useState("InvestmentContract");
  const [settlementToken, setSettlementToken] = useState<number>(
    AvaxToken.WAVAX
  );
  const [minDeposit, setMinDeposit] = useState<string>("0.001");
  const [maxDeposit, setMaxDeposit] = useState<string>("100000000");
  const [withdrawalFreezePeriod, setWithdrawalFreezePeriod] =
    useState<number>(259200);
  const [contractOwner, setContractOwner] = useState<string>(DEFAULT_ADDRESS);
  const [commissionRate, setCommissionRate] = useState<string>("10");
  const [contractPauser, setContractPauser] = useState<string>(DEFAULT_ADDRESS);
  const [contractInvestor, setContractInvestor] =
    useState<string>(DEFAULT_ADDRESS);
  const [deployed, setDeployed] = useState<boolean>(false);
  const [deploying, setDeploying] = useState<boolean>(false);
  const [contractAddress, setContractAddress] = useState<string>("");
  const [fundName, setFundName] = useState<string>("");

  useEffect(() => {
    if (wallet?.provider) {
      setEthersProvider(
        new ethers.providers.Web3Provider(wallet.provider, "any")
      );
    }
    if (wallet?.accounts[0]) {
      if (contractOwner === DEFAULT_ADDRESS) {
        setContractOwner(wallet.accounts[0].address);
      }
      if (contractPauser === DEFAULT_ADDRESS) {
        setContractPauser(wallet.accounts[0].address);
      }
      if (contractInvestor === DEFAULT_ADDRESS) {
        setContractInvestor(wallet.accounts[0].address);
      }
    }
  }, [wallet]);

  useEffect(() => {
    if (deployed && contractAddress !== "") {
      setTimeout(() => {
        redirect("/panel/" + contractAddress);
      }, 3000);
    }
  }, [deployed]);

  const deploy = () => {
    setDeploying(true);
    if (fundName === "") {
      errorMessage("Please enter fund name!");
      setDeploying(false);
    } else if (minDeposit === "") {
      errorMessage("Please enter min deposit!");
      setDeploying(false);
    } else if (maxDeposit === "") {
      errorMessage("Please enter max deposit!");
      setDeploying(false);
    } else if (
      !(
        Number(minDeposit) < Number(maxDeposit) ||
        Number(maxDeposit) > Number(minDeposit)
      )
    ) {
      errorMessage("Min deposit must be less than max deposit!");
      setDeploying(false);
    } else if (
      commissionRate === "" ||
      Number(commissionRate) <= 0 ||
      Number(commissionRate) >= 100
    ) {
      errorMessage("Please enter commission rate!");
      setDeploying(false);
    } else {
      const abi =
        contractType === "InvestmentContract"
          ? InvestmentContractAbi
          : InvestmentPoolAbi;
      const bytecode =
        contractType === "InvestmentContract"
          ? InvestmentContractBytecode
          : InvestmentPoolBytecode;
      if (ethersProvider) {
        const signer = ethersProvider.getSigner();
        const contractFactory = new ethers.ContractFactory(
          abi,
          bytecode,
          signer
        );
        contractFactory
          .deploy(
            fundName,
            AvaxTokenAddress[settlementToken],
            ethers.utils.parseUnits(
              `${minDeposit}`,
              AvaxTokenDecimals[settlementToken]
            ),
            ethers.utils.parseUnits(
              `${maxDeposit}`,
              AvaxTokenDecimals[settlementToken]
            ),
            withdrawalFreezePeriod,
            contractOwner,
            contractPauser,
            contractInvestor,
            Number(commissionRate)
          )
          .then((contract) => {
            setContractAddress(contract.address);
            successMessage("Contract deployed successfully!");
            setDeploying(false);
            setDeployed(true);
          })
          .catch((error) => {
            errorMessage(error.message);
          });
      } else {
        errorMessage("Please connect your wallet first!");
      }
    }
  };

  const successMessage = (message: string) => {
    handleClickVariant(message, "success");
  };

  const errorMessage = (message: string) => {
    handleClickVariant(message, "error");
  };

  const handleClickVariant = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant });
    setDeploying(false);
  };

  const handleChangeSettlementToken = (event: SelectChangeEvent) => {
    setSettlementToken(Number(event.target.value) || 0);
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
  const handleChangeWithdrawalFreezePeriod = (event: SelectChangeEvent) => {
    setWithdrawalFreezePeriod(Number(event.target.value));
  };
  const handleChangeContractOwner = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContractOwner(event.target.value);
  };
  const handleChangeCommissionRate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCommissionRate(event.target.value);
  };
  const handleChangeContractPauser = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContractPauser(event.target.value);
  };
  const handleChangeContractInvestor = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContractInvestor(event.target.value);
  };
  const handleChangeFundName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFundName(event.target.value);
  };

  const buttonText = () => {
    if (!!!wallet?.provider) {
      return "Connect Wallet";
    } else if (deploying) {
      return "Deploying...";
    } else {
      return "Deploy";
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
        <Box
          sx={{
            bgcolor: "#FFF",
            minHeight: "80vh",
            mt: 5,
            p: 5,
          }}
        >
          {deployed && contractAddress !== "" && (
            <Stack sx={{ width: "100%" }} spacing={2} marginBottom={5}>
              <p>Contract Address: {contractAddress}</p>
              <Button
                variant="outlined"
                className="mb-2"
                style={{
                  color: "#000",
                  cursor: "pointer",
                  border: "1px solid #000",
                }}
                onClick={() => redirect(`/panel/${contractAddress}`)}
              >
                Control Your Own Contract Fund
              </Button>
            </Stack>
          )}
          {!deployed && (
            <div>
              <FormControl>
                <FormLabel
                  id="contract-type"
                  style={{
                    color: "#000",
                    fontSize: "20px",
                  }}
                >
                  Contract Type
                </FormLabel>
                <RadioGroup
                  aria-labelledby="contract-type"
                  defaultValue="InvestmentContract"
                  name="contract-type-group"
                  onChange={(e) => setContractType(e.target.value)}
                >
                  <FormControlLabel
                    value="InvestmentContract"
                    control={<Radio />}
                    label="Bookkeeping-style"
                  />
                  <FormControlLabel
                    value="InvestmentPool"
                    control={<Radio />}
                    label="Liquidity token"
                  />
                </RadioGroup>
              </FormControl>
              <hr
                style={{
                  height: "1px",
                  backgroundColor: "#000",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              />
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <InputLabel
                    id="settlement-token-select-label"
                    style={{
                      color: "#000",
                      fontSize: "20px",
                    }}
                  >
                    Settlement Token
                  </InputLabel>
                  <Select
                    labelId="settlement-token-select-label"
                    id="settlement-token-select"
                    value={String(settlementToken)}
                    onChange={handleChangeSettlementToken}
                    style={{
                      marginTop: 5,
                      width: "100%",
                      color: "#000",
                    }}
                  >
                    <MenuItem value={AvaxToken.WAVAX}>WAVAX</MenuItem>
                    <MenuItem value={AvaxToken.BTCB}>BTC.B</MenuItem>
                    <MenuItem value={AvaxToken.USDT}>USDT</MenuItem>
                    <MenuItem value={AvaxToken.USDC}>USDC</MenuItem>
                  </Select>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <InputLabel
                    id="Fund-Name-label"
                    style={{
                      color: "#000",
                      fontSize: "20px",
                    }}
                  >
                    Fund Name
                  </InputLabel>
                  <TextField
                    id="fundName"
                    value={fundName || ""}
                    onChange={handleChangeFundName}
                    inputMode={"numeric"}
                    style={{
                      marginTop: 5,
                      width: "100%",
                      color: "#000",
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <InputLabel
                    id="Commission-Rate-label"
                    style={{
                      color: "#000",
                      fontSize: "20px",
                    }}
                  >
                    Owner Commission Rate (%)
                  </InputLabel>
                  <TextField
                    id="commissionRate"
                    value={commissionRate || ""}
                    onChange={handleChangeCommissionRate}
                    inputMode={"numeric"}
                    style={{
                      marginTop: 5,
                      width: "100%",
                      color: "#000",
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <InputLabel
                    id="Min-Deposit-label"
                    style={{
                      color: "#000",
                      fontSize: "20px",
                    }}
                  >
                    Min Deposit
                  </InputLabel>
                  <TextField
                    id="minDeposit"
                    value={minDeposit}
                    onChange={handleChangeMinDeposit}
                    style={{
                      marginTop: 5,
                      width: "100%",
                      color: "#000",
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <InputLabel
                    id="Max-Deposit-label"
                    style={{
                      color: "#000",
                      fontSize: "20px",
                    }}
                  >
                    Max Deposit
                  </InputLabel>
                  <TextField
                    id="maxDeposit"
                    value={maxDeposit}
                    onChange={handleChangeMaxDeposit}
                    style={{
                      marginTop: 5,
                      width: "100%",
                      color: "#000",
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <InputLabel
                    id="withdrawal-freeze-period-select-label"
                    style={{
                      color: "#000",
                      fontSize: "20px",
                    }}
                  >
                    Withdrawal Freeze Period
                  </InputLabel>
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
                      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                      18, 19, 20, 21, 22, 23,
                    ].map((i) => (
                      <MenuItem key={`${i}-hours`} value={String(i * 3600)}>
                        {i} {i === 1 ? "hour" : "hours"}
                      </MenuItem>
                    ))}
                    {[
                      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                      18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                    ].map((i) => (
                      <MenuItem key={`${i}-days`} value={String(i * 86400)}>
                        {i} {i === 1 ? "day" : "days"}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <InputLabel
                    id="Contract-Owner-label"
                    style={{
                      color: "#000",
                      fontSize: "20px",
                    }}
                  >
                    Contract Owner
                  </InputLabel>
                  <TextField
                    id="contractOwner"
                    value={contractOwner}
                    onChange={handleChangeContractOwner}
                    style={{
                      marginTop: 5,
                      width: "100%",
                      color: "#000",
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <InputLabel
                    id="Contract-Pauser-label"
                    style={{
                      color: "#000",
                      fontSize: "20px",
                    }}
                  >
                    Contract Pauser
                  </InputLabel>
                  <TextField
                    id="contractPauser"
                    value={contractPauser}
                    onChange={handleChangeContractPauser}
                    style={{
                      marginTop: 5,
                      width: "100%",
                      color: "#000",
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <InputLabel
                    id="Contract-Investor-label"
                    style={{
                      color: "#000",
                      fontSize: "20px",
                    }}
                  >
                    Contract Investor
                  </InputLabel>
                  <TextField
                    id="contractInvestor"
                    value={contractInvestor}
                    onChange={handleChangeContractInvestor}
                    style={{
                      marginTop: 5,
                      width: "100%",
                      color: "#000",
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid size={12}>
                  <Button
                    variant="outlined"
                    onClick={() => deploy()}
                    disabled={!!!wallet?.provider || deploying}
                  >
                    {buttonText()}
                  </Button>
                </Grid>
              </Grid>
              <IntroPaper elevation={0}>
                <h1
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    lineHeight: "1.8",
                  }}
                >
                  Contract Type
                </h1>
                <h2
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  There are two options:
                </h2>
                <ul
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  <li>
                    <b>Bookkeeping-style</b>: No tokens are sent to the user's
                    wallet; all transactions and balances are recorded and
                    managed by the smart contract.
                  </li>
                  <li>
                    <b>Liquidity token</b>: Tokens are issued to the user's
                    wallet based on their share of the fund. Users can freely
                    transfer these tokens to anyone.
                  </li>
                </ul>
                <i>
                  <b>Note</b>: Once selected, this cannot be changed later.
                </i>
              </IntroPaper>
              <IntroPaper elevation={0}>
                <h1
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    lineHeight: "1.8",
                  }}
                >
                  Settlement Token
                </h1>
                <h2
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  This is the token used for investing and redeeming in the
                  fund. For example, if you choose WAVAX, users can only invest
                  or redeem using WAVAX.
                </h2>
                <i>
                  <b>Note</b>: Once selected, this cannot be changed, so choose
                  carefully.
                </i>
              </IntroPaper>
              <IntroPaper elevation={0}>
                <h1
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    lineHeight: "1.8",
                  }}
                >
                  Fund Name
                </h1>
                <h2
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  The name of your fund, which will be recorded in the smart
                  contract.
                </h2>
                <i>
                  <b>Feature</b>: Can be changed later.
                </i>
              </IntroPaper>
              <IntroPaper elevation={0}>
                <h1
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    lineHeight: "1.8",
                  }}
                >
                  Owner Commission Rate (%)
                </h1>
                <h2
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  The percentage of profit that the smart contract owner (you)
                  will take as commission.
                </h2>
                <ul
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  <li>
                    For example: If set to 10%, you will receive 10% of the
                    fund's profits.
                  </li>
                  <li>
                    <b>Additional fee</b>: DeFund Protocol will also take a
                    fixed 1% of the profits.
                  </li>
                  <li>
                    When profits are recorded, both you and DeFund Protocol will
                    receive your respective commissions.
                  </li>
                </ul>
                <i>
                  <b>Feature</b>: Can be adjusted later.
                </i>
              </IntroPaper>
              <IntroPaper elevation={0}>
                <h1
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    lineHeight: "1.8",
                  }}
                >
                  Min Deposit
                </h1>
                <h2
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  The minimum number of tokens a user must invest in the fund.
                </h2>
                <ul
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  <li>
                    For example: If set to 0.001 WAVAX, users must invest at
                    least 0.001 WAVAX.
                  </li>
                </ul>
                <i>
                  <b>Feature</b>: Can be adjusted later.
                </i>
              </IntroPaper>
              <IntroPaper elevation={0}>
                <h1
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    lineHeight: "1.8",
                  }}
                >
                  Max Deposit
                </h1>
                <h2
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  The maximum number of tokens a user can invest at once.
                </h2>
                <ul
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  <li>
                    For example: If set to 1,000,000 WAVAX, users can invest up
                    to 1,000,000 WAVAX per transaction.
                  </li>
                </ul>
                <i>
                  <b>Feature</b>: Can be adjusted later.
                </i>
              </IntroPaper>
              <IntroPaper elevation={0}>
                <h1
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    lineHeight: "1.8",
                  }}
                >
                  Withdrawal Freeze Period
                </h1>
                <h2
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  The waiting period after a user requests to redeem their
                  investment.
                </h2>
                <ul
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  <li>
                    For example: If set to 3 days, users must wait 3 days before
                    they can withdraw their tokens.
                  </li>
                  <li>
                    During this time, the contract owner must ensure there are
                    enough tokens in the contract for withdrawal.
                  </li>
                </ul>
                <i>
                  <b>Feature</b>: Can be adjusted later.
                </i>
              </IntroPaper>
              <IntroPaper elevation={0}>
                <h1
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    lineHeight: "1.8",
                  }}
                >
                  Contract Owner
                </h1>
                <h2
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  The address with the highest authority over the smart
                  contract, responsible for managing all settings.
                </h2>
                <i>
                  <b>Note</b>: Once set, this cannot be changed, so make sure
                  the address is correct.
                </i>
              </IntroPaper>
              <IntroPaper elevation={0}>
                <h1
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    lineHeight: "1.8",
                  }}
                >
                  Contract Pauser
                </h1>
                <h2
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  This address can pause the contract in emergencies, such as to
                  prevent exploitation of vulnerabilities.
                </h2>
                <i>
                  <b>Feature</b>: The address can be changed later.
                </i>
              </IntroPaper>
              <IntroPaper elevation={0}>
                <h1
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    lineHeight: "1.8",
                  }}
                >
                  Contract Investor
                </h1>
                <h2
                  style={{
                    color: "#000",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  The address responsible for withdrawing tokens from the
                  contract for investment purposes and depositing tokens back
                  into the contract for user redemptions.
                </h2>
                <i>
                  <b>Feature</b>: The address can be changed later.
                </i>
              </IntroPaper>
            </div>
          )}
        </Box>
      </Container>
    </main>
  );
}
