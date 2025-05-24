"use client";

import { useEffect, useState } from "react";
import { useConnectWallet } from "@web3-onboard/react";
import { ethers } from "ethers";
import type { TokenSymbol } from "@web3-onboard/common";

interface Account {
  address: string;
  balance: Record<TokenSymbol, string> | null;
  ens: { name: string | undefined; avatar: string | undefined };
}

export default function ConnectWallet() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [ethersProvider, setEthersProvider] =
    useState<ethers.providers.Web3Provider | null>(null);
  const [account, setAccount] = useState<Account | null>(null);

  const updateAccount = (walletData: any) => {
    if (walletData?.provider && walletData.accounts?.[0]) {
      const { name, avatar } = walletData.accounts[0].ens ?? {};
      setAccount({
        address: walletData.accounts[0].address,
        balance: walletData.accounts[0].balance,
        ens: { name, avatar: avatar || (avatar as { url?: string })?.url },
      });
      const provider = new ethers.providers.Web3Provider(
        walletData.provider,
        "any"
      );
      setEthersProvider(provider);
    } else {
      setAccount(null);
      setEthersProvider(null);
    }
  };

  useEffect(() => {
    const previouslyConnectedWallet = localStorage.getItem("connectedWallet");
    if (!wallet && previouslyConnectedWallet && !connecting) {
      connect({
        autoSelect: { label: previouslyConnectedWallet, disableModals: true },
      }).catch((error: Error) => {
        console.error("Failed to auto-connect wallet:", error);
        localStorage.removeItem("connectedWallet");
      });
    }
  }, [wallet, connecting, connect]);

  useEffect(() => {
    if (wallet?.provider) {
      updateAccount(wallet);
      localStorage.setItem("connectedWallet", wallet.label);
    } else {
      setAccount(null);
      setEthersProvider(null);
      localStorage.removeItem("connectedWallet");
    }
  }, [wallet]);

  useEffect(() => {
    if (wallet?.provider) {
      const provider = wallet.provider;

      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          updateAccount(wallet);
        } else {
          disconnect({ label: wallet.label });
        }
      };

      const handleDisconnect = () => {
        disconnect({ label: wallet.label });
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        provider.removeListener("accountsChanged", handleAccountsChanged);
        provider.removeListener("disconnect", handleDisconnect);
      };
    }
  }, [wallet, disconnect]);

  if (wallet?.provider && account) {
    return (
      <div>
        [
        {account.ens?.name ? account.ens.name : account.address.substring(0, 6)}
        ]{" "}
        <button onClick={() => disconnect({ label: wallet.label })}>
          [Disconnect]
        </button>
      </div>
    );
  }

  return (
    <div>
      <button disabled={connecting} onClick={() => connect()}>
        Connect
      </button>
    </div>
  );
}
