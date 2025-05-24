import { AvaxToken, AvaxTokenAddress, AvaxTokenDecimals } from "@/enums/token.enum";
import { ethers } from "ethers";

export interface EvmBigNumber {
  _isBigNumber: boolean;
  _hex: string;
}

export const showNumber = (evmBigNumber: EvmBigNumber) =>
  parseInt(evmBigNumber._hex, 16) || 0;

export const showContractAddress = (address: string) =>
  address?.substring(0, 6) || "";

export const showTokenName = (token: string) =>
  AvaxToken[
    AvaxTokenAddress.map((v) => v.toLocaleLowerCase()).indexOf(
      token.toLocaleLowerCase()
    )
  ] || "";

export const showTokenNumber = (evmBigNumber: EvmBigNumber, contractToken: string) =>
    parseFloat(
      ethers.utils.formatUnits(
        `${evmBigNumber}`,
        AvaxTokenDecimals[
          AvaxTokenAddress.map((v) => v.toLocaleLowerCase()).indexOf(
            contractToken?.toLocaleLowerCase()
          )
        ]
      )
    ) || 0;
