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

interface CurveControllerV2Pool3Interface extends ethers.utils.Interface {
  functions: {
    "ADD_LIQUIDITY_ROLE()": FunctionFragment;
    "MISC_OPERATION_ROLE()": FunctionFragment;
    "N_COINS()": FunctionFragment;
    "REMOVE_LIQUIDITY_ROLE()": FunctionFragment;
    "accessControl()": FunctionFragment;
    "addressProvider()": FunctionFragment;
    "addressRegistry()": FunctionFragment;
    "deploy(address,uint256[3],uint256)": FunctionFragment;
    "manager()": FunctionFragment;
    "withdraw(address,uint256,uint256[3])": FunctionFragment;
    "withdrawOneCoin(address,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ADD_LIQUIDITY_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MISC_OPERATION_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "N_COINS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "REMOVE_LIQUIDITY_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "accessControl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addressProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addressRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deploy",
    values: [string, [BigNumberish, BigNumberish, BigNumberish], BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish, [BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawOneCoin",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "ADD_LIQUIDITY_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MISC_OPERATION_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "N_COINS", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "REMOVE_LIQUIDITY_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accessControl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawOneCoin",
    data: BytesLike
  ): Result;

  events: {
    "AddLiquidity(address,uint256[3],uint256,uint256)": EventFragment;
    "RemoveLiquidity(address,uint256[3],uint256,uint256[3])": EventFragment;
    "RemoveLiquidityOne(address,uint256,uint256,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveLiquidityOne"): EventFragment;
}

export type AddLiquidityEvent = TypedEvent<
  [string, [BigNumber, BigNumber, BigNumber], BigNumber, BigNumber] & {
    provider: string;
    token_amounts: [BigNumber, BigNumber, BigNumber];
    token_supply: BigNumber;
    lp_token_amount: BigNumber;
  }
>;

export type RemoveLiquidityEvent = TypedEvent<
  [
    string,
    [BigNumber, BigNumber, BigNumber],
    BigNumber,
    [BigNumber, BigNumber, BigNumber]
  ] & {
    provider: string;
    token_amounts: [BigNumber, BigNumber, BigNumber];
    token_supply: BigNumber;
    amounts: [BigNumber, BigNumber, BigNumber];
  }
>;

export type RemoveLiquidityOneEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, string] & {
    provider: string;
    token_amount: BigNumber;
    coin_index: BigNumber;
    coin_amount: BigNumber;
    coin_address: string;
  }
>;

export class CurveControllerV2Pool3 extends BaseContract {
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

  interface: CurveControllerV2Pool3Interface;

  functions: {
    ADD_LIQUIDITY_ROLE(overrides?: CallOverrides): Promise<[string]>;

    MISC_OPERATION_ROLE(overrides?: CallOverrides): Promise<[string]>;

    N_COINS(overrides?: CallOverrides): Promise<[BigNumber]>;

    REMOVE_LIQUIDITY_ROLE(overrides?: CallOverrides): Promise<[string]>;

    accessControl(overrides?: CallOverrides): Promise<[string]>;

    addressProvider(overrides?: CallOverrides): Promise<[string]>;

    addressRegistry(overrides?: CallOverrides): Promise<[string]>;

    deploy(
      poolAddress: string,
      amounts: [BigNumberish, BigNumberish, BigNumberish],
      minMintAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      poolAddress: string,
      amount: BigNumberish,
      minAmounts: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawOneCoin(
      poolAddress: string,
      tokenAmount: BigNumberish,
      i: BigNumberish,
      minAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ADD_LIQUIDITY_ROLE(overrides?: CallOverrides): Promise<string>;

  MISC_OPERATION_ROLE(overrides?: CallOverrides): Promise<string>;

  N_COINS(overrides?: CallOverrides): Promise<BigNumber>;

  REMOVE_LIQUIDITY_ROLE(overrides?: CallOverrides): Promise<string>;

  accessControl(overrides?: CallOverrides): Promise<string>;

  addressProvider(overrides?: CallOverrides): Promise<string>;

  addressRegistry(overrides?: CallOverrides): Promise<string>;

  deploy(
    poolAddress: string,
    amounts: [BigNumberish, BigNumberish, BigNumberish],
    minMintAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  manager(overrides?: CallOverrides): Promise<string>;

  withdraw(
    poolAddress: string,
    amount: BigNumberish,
    minAmounts: [BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawOneCoin(
    poolAddress: string,
    tokenAmount: BigNumberish,
    i: BigNumberish,
    minAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ADD_LIQUIDITY_ROLE(overrides?: CallOverrides): Promise<string>;

    MISC_OPERATION_ROLE(overrides?: CallOverrides): Promise<string>;

    N_COINS(overrides?: CallOverrides): Promise<BigNumber>;

    REMOVE_LIQUIDITY_ROLE(overrides?: CallOverrides): Promise<string>;

    accessControl(overrides?: CallOverrides): Promise<string>;

    addressProvider(overrides?: CallOverrides): Promise<string>;

    addressRegistry(overrides?: CallOverrides): Promise<string>;

    deploy(
      poolAddress: string,
      amounts: [BigNumberish, BigNumberish, BigNumberish],
      minMintAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    manager(overrides?: CallOverrides): Promise<string>;

    withdraw(
      poolAddress: string,
      amount: BigNumberish,
      minAmounts: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawOneCoin(
      poolAddress: string,
      tokenAmount: BigNumberish,
      i: BigNumberish,
      minAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddLiquidity(address,uint256[3],uint256,uint256)"(
      provider?: string | null,
      token_amounts?: null,
      token_supply?: null,
      lp_token_amount?: null
    ): TypedEventFilter<
      [string, [BigNumber, BigNumber, BigNumber], BigNumber, BigNumber],
      {
        provider: string;
        token_amounts: [BigNumber, BigNumber, BigNumber];
        token_supply: BigNumber;
        lp_token_amount: BigNumber;
      }
    >;

    AddLiquidity(
      provider?: string | null,
      token_amounts?: null,
      token_supply?: null,
      lp_token_amount?: null
    ): TypedEventFilter<
      [string, [BigNumber, BigNumber, BigNumber], BigNumber, BigNumber],
      {
        provider: string;
        token_amounts: [BigNumber, BigNumber, BigNumber];
        token_supply: BigNumber;
        lp_token_amount: BigNumber;
      }
    >;

    "RemoveLiquidity(address,uint256[3],uint256,uint256[3])"(
      provider?: string | null,
      token_amounts?: null,
      token_supply?: null,
      amounts?: null
    ): TypedEventFilter<
      [
        string,
        [BigNumber, BigNumber, BigNumber],
        BigNumber,
        [BigNumber, BigNumber, BigNumber]
      ],
      {
        provider: string;
        token_amounts: [BigNumber, BigNumber, BigNumber];
        token_supply: BigNumber;
        amounts: [BigNumber, BigNumber, BigNumber];
      }
    >;

    RemoveLiquidity(
      provider?: string | null,
      token_amounts?: null,
      token_supply?: null,
      amounts?: null
    ): TypedEventFilter<
      [
        string,
        [BigNumber, BigNumber, BigNumber],
        BigNumber,
        [BigNumber, BigNumber, BigNumber]
      ],
      {
        provider: string;
        token_amounts: [BigNumber, BigNumber, BigNumber];
        token_supply: BigNumber;
        amounts: [BigNumber, BigNumber, BigNumber];
      }
    >;

    "RemoveLiquidityOne(address,uint256,uint256,uint256,address)"(
      provider?: string | null,
      token_amount?: null,
      coin_index?: null,
      coin_amount?: null,
      coin_address?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, string],
      {
        provider: string;
        token_amount: BigNumber;
        coin_index: BigNumber;
        coin_amount: BigNumber;
        coin_address: string;
      }
    >;

    RemoveLiquidityOne(
      provider?: string | null,
      token_amount?: null,
      coin_index?: null,
      coin_amount?: null,
      coin_address?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, string],
      {
        provider: string;
        token_amount: BigNumber;
        coin_index: BigNumber;
        coin_amount: BigNumber;
        coin_address: string;
      }
    >;
  };

  estimateGas: {
    ADD_LIQUIDITY_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    MISC_OPERATION_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    N_COINS(overrides?: CallOverrides): Promise<BigNumber>;

    REMOVE_LIQUIDITY_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    accessControl(overrides?: CallOverrides): Promise<BigNumber>;

    addressProvider(overrides?: CallOverrides): Promise<BigNumber>;

    addressRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    deploy(
      poolAddress: string,
      amounts: [BigNumberish, BigNumberish, BigNumberish],
      minMintAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      poolAddress: string,
      amount: BigNumberish,
      minAmounts: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawOneCoin(
      poolAddress: string,
      tokenAmount: BigNumberish,
      i: BigNumberish,
      minAmount: BigNumberish,
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

    N_COINS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REMOVE_LIQUIDITY_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    accessControl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addressProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addressRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deploy(
      poolAddress: string,
      amounts: [BigNumberish, BigNumberish, BigNumberish],
      minMintAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      poolAddress: string,
      amount: BigNumberish,
      minAmounts: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawOneCoin(
      poolAddress: string,
      tokenAmount: BigNumberish,
      i: BigNumberish,
      minAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
