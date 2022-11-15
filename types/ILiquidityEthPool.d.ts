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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ILiquidityEthPoolInterface extends ethers.utils.Interface {
  functions: {
    "approveManager(uint256)": FunctionFragment;
    "approveRebalancer(uint256)": FunctionFragment;
    "controlledBurn(uint256,address)": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "depositFor(address,uint256)": FunctionFragment;
    "pause()": FunctionFragment;
    "registerBurner(address,bool)": FunctionFragment;
    "requestWithdrawal(uint256)": FunctionFragment;
    "requestedWithdrawals(address)": FunctionFragment;
    "setRebalancer(address)": FunctionFragment;
    "underlyer()": FunctionFragment;
    "unpause()": FunctionFragment;
    "weth()": FunctionFragment;
    "withdraw(uint256,bool)": FunctionFragment;
    "withheldLiquidity()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approveManager",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approveRebalancer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "controlledBurn",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFor",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerBurner",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "requestWithdrawal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestedWithdrawals",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRebalancer",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "underlyer", values?: undefined): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "withheldLiquidity",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "approveManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveRebalancer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "controlledBurn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerBurner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestedWithdrawals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRebalancer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "underlyer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withheldLiquidity",
    data: BytesLike
  ): Result;

  events: {
    "Burned(address,address,uint256)": EventFragment;
    "BurnerRegistered(address,bool)": EventFragment;
    "RebalancerSet(address)": EventFragment;
    "WithdrawalRequested(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BurnerRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RebalancerSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawalRequested"): EventFragment;
}

export type BurnedEvent = TypedEvent<
  [string, string, BigNumber] & {
    account: string;
    burner: string;
    amount: BigNumber;
  }
>;

export type BurnerRegisteredEvent = TypedEvent<
  [string, boolean] & { burner: string; allowed: boolean }
>;

export type RebalancerSetEvent = TypedEvent<[string] & { rebalancer: string }>;

export type WithdrawalRequestedEvent = TypedEvent<
  [string, BigNumber] & { requestor: string; amount: BigNumber }
>;

export class ILiquidityEthPool extends BaseContract {
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

  interface: ILiquidityEthPoolInterface;

  functions: {
    approveManager(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveRebalancer(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    controlledBurn(
      amount: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositFor(
      account: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerBurner(
      burner: string,
      allowedBurner: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestWithdrawal(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestedWithdrawals(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    setRebalancer(
      rebalancer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    underlyer(overrides?: CallOverrides): Promise<[string]>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    weth(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      amount: BigNumberish,
      asEth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withheldLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  approveManager(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveRebalancer(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  controlledBurn(
    amount: BigNumberish,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositFor(
    account: string,
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerBurner(
    burner: string,
    allowedBurner: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestWithdrawal(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestedWithdrawals(
    account: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  setRebalancer(
    rebalancer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  underlyer(overrides?: CallOverrides): Promise<string>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  weth(overrides?: CallOverrides): Promise<string>;

  withdraw(
    amount: BigNumberish,
    asEth: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withheldLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    approveManager(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    approveRebalancer(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    controlledBurn(
      amount: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    depositFor(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pause(overrides?: CallOverrides): Promise<void>;

    registerBurner(
      burner: string,
      allowedBurner: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    requestWithdrawal(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    requestedWithdrawals(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    setRebalancer(rebalancer: string, overrides?: CallOverrides): Promise<void>;

    underlyer(overrides?: CallOverrides): Promise<string>;

    unpause(overrides?: CallOverrides): Promise<void>;

    weth(overrides?: CallOverrides): Promise<string>;

    withdraw(
      amount: BigNumberish,
      asEth: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    withheldLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Burned(address,address,uint256)"(
      account?: string | null,
      burner?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { account: string; burner: string; amount: BigNumber }
    >;

    Burned(
      account?: string | null,
      burner?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { account: string; burner: string; amount: BigNumber }
    >;

    "BurnerRegistered(address,bool)"(
      burner?: null,
      allowed?: null
    ): TypedEventFilter<
      [string, boolean],
      { burner: string; allowed: boolean }
    >;

    BurnerRegistered(
      burner?: null,
      allowed?: null
    ): TypedEventFilter<
      [string, boolean],
      { burner: string; allowed: boolean }
    >;

    "RebalancerSet(address)"(
      rebalancer?: null
    ): TypedEventFilter<[string], { rebalancer: string }>;

    RebalancerSet(
      rebalancer?: null
    ): TypedEventFilter<[string], { rebalancer: string }>;

    "WithdrawalRequested(address,uint256)"(
      requestor?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { requestor: string; amount: BigNumber }
    >;

    WithdrawalRequested(
      requestor?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { requestor: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    approveManager(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveRebalancer(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    controlledBurn(
      amount: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositFor(
      account: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerBurner(
      burner: string,
      allowedBurner: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestWithdrawal(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestedWithdrawals(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setRebalancer(
      rebalancer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    underlyer(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      asEth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withheldLiquidity(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    approveManager(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveRebalancer(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    controlledBurn(
      amount: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositFor(
      account: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerBurner(
      burner: string,
      allowedBurner: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestWithdrawal(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestedWithdrawals(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setRebalancer(
      rebalancer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    underlyer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      asEth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withheldLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
