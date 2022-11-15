/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { EventReceiver, EventReceiverInterface } from "../EventReceiver";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "proxyAddress",
        type: "address",
      },
    ],
    name: "ProxyAddressSet",
    type: "event",
  },
  {
    inputs: [],
    name: "eventProxy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "eventProxyAddress",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "eventType",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onEventReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class EventReceiver__factory {
  static readonly abi = _abi;
  static createInterface(): EventReceiverInterface {
    return new utils.Interface(_abi) as EventReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EventReceiver {
    return new Contract(address, _abi, signerOrProvider) as EventReceiver;
  }
}
