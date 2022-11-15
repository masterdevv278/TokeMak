/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IFraxPoolRegistry,
  IFraxPoolRegistryInterface,
} from "../IFraxPoolRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "address",
        name: "stakingAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "stakingToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "rewardsAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_acccount",
        type: "address",
      },
    ],
    name: "vaultMap",
    outputs: [
      {
        internalType: "address",
        name: "vault",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFraxPoolRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IFraxPoolRegistryInterface {
    return new utils.Interface(_abi) as IFraxPoolRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFraxPoolRegistry {
    return new Contract(address, _abi, signerOrProvider) as IFraxPoolRegistry;
  }
}
