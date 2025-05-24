"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useConnectWallet } from "@web3-onboard/react";
import { ethers } from "ethers";
import { MarketPlaceAbi } from "@/contract/MarketPlace";
import {
  showNumber,
  EvmBigNumber,
  showTokenName,
  showTokenNumber,
} from "@/utils/format";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link as MUILink } from "@mui/material";
import { redirect } from "next/navigation";
import ConnectWallet from "@/components/ConnectWallet";
import { CHAINS } from "@/config/chains";

export default function Create() {
  const [{ wallet }] = useConnectWallet();
  const [ethersProvider, setEthersProvider] =
    useState<ethers.providers.Web3Provider | null>();
  const [contractMarketPlace, setContractMarketPlace] =
    useState<ethers.Contract>();
  const [total, setTotal] = useState(0);
  const [allFunds, setAllFunds] = useState<
    [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      EvmBigNumber,
      EvmBigNumber,
      EvmBigNumber,
      EvmBigNumber
    ][]
  >([]);

  useEffect(() => {
    if (ethersProvider) {
      (async () => {
        const signer = ethersProvider.getSigner();
        const contractMarketPlace = new ethers.Contract(
          CHAINS[CHAINS.map((i) => i.id16).indexOf(wallet?.chains[0]?.id || "")]
            .market_place_contract_address,
          MarketPlaceAbi,
          signer
        );
        setContractMarketPlace(contractMarketPlace);
      })();
    }
  }, [ethersProvider]);

  useEffect(() => {
    if (wallet?.provider) {
      setEthersProvider(
        new ethers.providers.Web3Provider(wallet.provider, "any")
      );
    }
  }, [wallet]);

  useEffect(() => {
    (async () => {
      if (contractMarketPlace) {
        const total = showNumber(await contractMarketPlace.getFundCount());
        setTotal(total);
        if (total > 0) {
          const allFunds = await contractMarketPlace.getAllFunds(0, 1000);
          setAllFunds(allFunds);
        } else {
          setAllFunds([]);
        }
      } else {
        setTotal(0);
        setAllFunds([]);
      }
    })();
  }, [contractMarketPlace]);

  const columns: GridColDef[] = [
    {
      field: "fundName",
      headerName: "Fund Name",
      minWidth: 180,
      maxWidth: 480,
      renderCell: ({ row }) => {
        return (
          <div
            style={{
              cursor: "pointer",
              fontSize: "16px",
            }}
            onClick={() => redirect(`/panel/${row.fundAddress}`)}
          >
            <strong>{row.fundName}</strong>
          </div>
        );
      },
    },
    {
      field: "settlementToken",
      headerName: "Settlement Token",
      width: 180,
      headerAlign: "right",
      renderCell: ({ row }) => (
        <div
          style={{
            textAlign: "right",
            fontSize: "16px",
          }}
        >
          <MUILink href={`${urlContract(row.settlementToken)}`} target="_blank">
            <strong>${showTokenName(row.settlementToken)}</strong>
          </MUILink>
        </div>
      ),
    },
    {
      field: "totalDeposits",
      headerName: "Total Deposits",
      width: 180,
      headerAlign: "right",
      renderCell: ({ row }) => {
        return (
          <div
            style={{
              cursor: "pointer",
              textAlign: "right",
              fontSize: "16px",
            }}
            onClick={() => redirect(`/panel/${row.fundAddress}`)}
          >
            <strong>
              {row.totalDeposits.toLocaleString("en-US", {
                maximumFractionDigits: 18,
              })}
            </strong>
          </div>
        );
      },
    },
    {
      field: "contractBalance",
      headerName: "Contract Balance",
      width: 180,
      headerAlign: "right",
      renderCell: ({ row }) => {
        return (
          <div
            style={{
              cursor: "pointer",
              textAlign: "right",
              fontSize: "16px",
            }}
            onClick={() => redirect(`/panel/${row.fundAddress}`)}
          >
            <strong>
              {row.contractBalance.toLocaleString("en-US", {
                maximumFractionDigits: 18,
              })}
            </strong>
          </div>
        );
      },
    },
    {
      field: "annualReturnRate",
      headerName: "Annual Return Rate",
      width: 180,
      headerAlign: "right",
      renderCell: ({ row }) => {
        return (
          <div
            style={{
              cursor: "pointer",
              textAlign: "right",
              fontSize: "16px",
            }}
            onClick={() => redirect(`/panel/${row.fundAddress}`)}
          >
            <strong>{`${row.annualReturnRate} %`}</strong>
          </div>
        );
      },
    },
    {
      field: "ipfsHash",
      headerName: "IPFS Hash",
      width: 180,
      headerAlign: "center",
      renderCell: ({ row }) => (
        row.ipfsHash && row.ipfsHash !== '' && <div style={{ textAlign: "center", fontSize: "16px" }}>
          <MUILink
            href={`https://ipfs.io/ipfs/${row.ipfsHash}`}
            target="_blank"
          >
            <strong>[IPFS]</strong>
          </MUILink>
        </div>
      ),
    },
    {
      field: "contractOwner",
      headerName: "Contract Owner",
      width: 180,
      headerAlign: "center",
      renderCell: ({ row }) => (
        <div style={{ textAlign: "center", fontSize: "16px" }}>
          <MUILink href={`${urlContract(row.contractOwner)}`} target="_blank">
            <strong>[Explorer]</strong>
          </MUILink>
        </div>
      ),
    },
  ];

  const urlContract = (address: string) =>
    address && wallet
      ? `${
          CHAINS[CHAINS.map((i) => i.id16).indexOf(wallet?.chains[0]?.id || "")]
            .explorer
        }address/${address}`
      : "";

  return (
    <main className="flex flex-col mt-10" style={{ height: "80vh" }}>
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
        <Box sx={{ bgcolor: "#FFF", height: "100%", p: 1 }}>
          <DataGrid
            rows={allFunds.map((v, i) => ({
              id: i,
              fundName: v[6],
              totalDeposits: showTokenNumber(v[8], v[7]),
              contractBalance: showTokenNumber(v[10], v[7]),
              settlementToken: v[7],
              annualReturnRate: showNumber(v[9]),
              ipfsHash: v[1],
              contractOwner: v[2],
              fundAddress: v[0],
            }))}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 100, page: 0 },
              },
              sorting: {
                sortModel: [{ field: "totalDeposits", sort: "desc" }],
              },
            }}
            pageSizeOptions={[50, 100]}
            disableRowSelectionOnClick
            disableDensitySelector
            disableColumnSelector
            sx={{
              border: 0,
              height: "100%",
              ".MuiDataGrid-cell:focus": {
                outline: "none",
              },
            }}
            slots={{
              noResultsOverlay: () =>
                !contractMarketPlace && (
                  <div
                    className="flex flex-col items-center p-5 gap-4 justify-center text-center"
                    style={{ height: "100%", fontSize: "20px" }}
                  >
                    <div>
                      <h1>Please connect wallet first!</h1>
                    </div>
                    <div>
                      <ConnectWallet />
                    </div>
                  </div>
                ),
              noRowsOverlay: () =>
                !contractMarketPlace && (
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
                ),
            }}
          />
        </Box>
      </Container>
    </main>
  );
}
