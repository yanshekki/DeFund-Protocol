import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Bar from "@/components/Bar";
import Footer from "@/components/Footer";
import AppConnectWallet from "@/components/AppConnectWallet";
import { ReactElement } from "react";
import { GoogleAnalytics } from '@next/third-parties/google'

type RootLayoutProps = { children: ReactElement; };

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoSansTc = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeFund Protocol",
  description:
    "DeFund Protocol is a decentralized platform empowering individuals and organizations to create and manage their own investment funds in a trustless and transparent environment. By leveraging blockchain technology and smart contracts, DeFund Protocol eliminates intermediaries, allowing fund managers to launch their own funds while enabling investors to participate in diverse investment opportunities securely and efficiently.",
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${notoSans.variable} ${notoSansTc.variable} antialiased`}
        suppressHydrationWarning
      >
        <AppConnectWallet>
          <Bar />
          {children}
          <Footer />
        </AppConnectWallet>
      </body>
      <GoogleAnalytics gaId="G-VFFRWVNG7F" />
    </html>
  );
}
