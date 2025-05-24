"use client";

import { Web3OnboardProvider, init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import infinityWalletModule from "@web3-onboard/infinity-wallet";
import fortmaticModule from "@web3-onboard/fortmatic";
import safeModule from "@web3-onboard/gnosis";
import keepkeyModule from "@web3-onboard/keepkey";
import keystoneModule from "@web3-onboard/keystone";
import portisModule from "@web3-onboard/portis";
import trezorModule from "@web3-onboard/trezor";
import walletConnectModule from "@web3-onboard/walletconnect";
import coinbaseModule from "@web3-onboard/coinbase";
import magicModule from "@web3-onboard/magic";
import dcentModule from "@web3-onboard/dcent";
import sequenceModule from "@web3-onboard/sequence";
import tahoModule from "@web3-onboard/taho";
import trustModule from "@web3-onboard/trust";
import okxModule from "@web3-onboard/okx";
import frontierModule from "@web3-onboard/frontier";
import { SnackbarProvider } from "notistack";
import { CHAINS } from "@/config/chains";

const injected = injectedModule();
const coinbase = coinbaseModule();
const dcent = dcentModule();
const walletConnect = walletConnectModule({
  projectId: "605ebf09f8de8febd5aa943ced58cf67",
});

const portis = portisModule({
  apiKey: "97ef6f6a-ad33-478e-b6f1-c0ace40191f",
});

const fortmatic = fortmaticModule({
  apiKey: "97ef6f6a-ad33-478e-b6f1-c0ace40191f",
});

const infinityWallet = infinityWalletModule();
const keystone = keystoneModule();
const keepkey = keepkeyModule();
const safe = safeModule();
const sequence = sequenceModule();
const taho = tahoModule();
const trust = trustModule();
const okx = okxModule();
const frontier = frontierModule();

const trezorOptions = {
  email: "email@ysk.cc",
  appUrl: "https://defund.pro/",
};

const trezor = trezorModule(trezorOptions);

const magic = magicModule({
  apiKey: "97ef6f6a-ad33-478e-b6f1-c0ace40191f",
});

const wallets = [
  injected,
  trust,
  safe,
  walletConnect,
  okx,
  coinbase,
  infinityWallet,
  keepkey,
  sequence,
  frontier,
  taho,
  dcent,
  trezor,
  magic,
  fortmatic,
  keystone,
  portis,
];

const web3Onboard = init({
  wallets,
  chains: CHAINS.map(chain => ({
    id: chain.id,
    token: chain.token,
    label: chain.label,
    rpcUrl: chain.rpcUrl,
  })),
});

function AppConnectWallet({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <SnackbarProvider>{children}</SnackbarProvider>
    </Web3OnboardProvider>
  );
}

export default AppConnectWallet;
