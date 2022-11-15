/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PoolTransferControllerInterface extends ethers.utils.Interface {
  functions: {
    "ADD_LIQUIDITY_ROLE()": FunctionFragment;
    "MISC_OPERATION_ROLE()": FunctionFragment;
    "REMOVE_LIQUIDITY_ROLE()": FunctionFragment;
    "accessControl()": FunctionFragment;
    "addressRegistry()": FunctionFragment;
    "manager()": FunctionFragment;
    "transferToPool(address[],uint256[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ADD_LIQUIDITY_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MISC_OPERATION_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REMOVE_LIQUIDITY_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "accessControl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addressRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferToPool",
    values: [string[], BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "ADD_LIQUIDITY_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MISC_OPERATION_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REMOVE_LIQUIDITY_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accessControl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferToPool",
    data: BytesLike
  ): Result;

  events: {};
}

export class PoolTransferController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PoolTransferControllerInterface;

  functions: {
    ADD_LIQUIDITY_ROLE(overrides?: CallOverrides): Promise<[string]>;

    MISC_OPERATION_ROLE(overrides?: CallOverrides): Promise<[string]>;

    REMOVE_LIQUIDITY_ROLE(overrides?: CallOverrides): Promise<[string]>;

    accessControl(overrides?: CallOverrides): Promise<[string]>;

    addressRegistry(overrides?: CallOverrides): Promise<[string]>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    transferToPool(
      pools: string[],
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ADD_LIQUIDITY_ROLE(overrides?: CallOverrides): Promise<string>;

  MISC_OPERATION_ROLE(overrides?: CallOverrides): Promise<string>;

  REMOVE_LIQUIDITY_ROLE(overrides?: CallOverrides): Promise<string>;

  accessControl(overrides?: CallOverrides): Promise<string>;

  addressRegistry(overrides?: CallOverrides): Promise<string>;

  manager(overrides?: CallOverrides): Promise<string>;

  transferToPool(
    pools: string[],
    amounts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ADD_LIQUIDITY_ROLE(overrides?: CallOverrides): Promise<string>;

    MISC_OPERATION_ROLE(overrides?: CallOverrides): Promise<string>;

    REMOVE_LIQUIDITY_ROLE(overrides?: CallOverrides): Promise<string>;

    accessControl(overrides?: CallOverrides): Promise<string>;

    addressRegistry(overrides?: CallOverrides): Promise<string>;

    manager(overrides?: CallOverrides): Promise<string>;

    transferToPool(
      pools: string[],
      amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    ADD_LIQUIDITY_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    MISC_OPERATION_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    REMOVE_LIQUIDITY_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    accessControl(overrides?: CallOverrides): Promise<BigNumber>;

    addressRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    transferToPool(
      pools: string[],
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADD_LIQUIDITY_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MISC_OPERATION_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    REMOVE_LIQUIDITY_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    accessControl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addressRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferToPool(
      pools: string[],
      amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
