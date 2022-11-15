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

interface ICryptoSwapPoolInterface extends ethers.utils.Interface {
  functions: {
    "add_liquidity(uint256[4],uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "calc_withdraw_one_coin(uint256,uint256)": FunctionFragment;
    "coins(uint256)": FunctionFragment;
    "remove_liquidity(uint256,uint256[2])": FunctionFragment;
    "remove_liquidity_one_coin(uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "add_liquidity",
    values: [
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "calc_withdraw_one_coin",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "coins", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "remove_liquidity",
    values: [BigNumberish, [BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "remove_liquidity_one_coin",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "add_liquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calc_withdraw_one_coin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "coins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "remove_liquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "remove_liquidity_one_coin",
    data: BytesLike
  ): Result;

  events: {};
}

export class ICryptoSwapPool extends BaseContract {
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

  interface: ICryptoSwapPoolInterface;

  functions: {
    "add_liquidity(uint256[4],uint256)"(
      amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "add_liquidity(uint256[2],uint256)"(
      amounts: [BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "add_liquidity(uint256[3],uint256)"(
      amounts: [BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calc_withdraw_one_coin(
      token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    coins(
      i: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "remove_liquidity(uint256,uint256[2])"(
      amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "remove_liquidity(uint256,uint256[4])"(
      amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "remove_liquidity(uint256,uint256[3])"(
      amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    remove_liquidity_one_coin(
      token_amount: BigNumberish,
      i: BigNumberish,
      min_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  "add_liquidity(uint256[4],uint256)"(
    amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    min_mint_amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "add_liquidity(uint256[2],uint256)"(
    amounts: [BigNumberish, BigNumberish],
    min_mint_amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "add_liquidity(uint256[3],uint256)"(
    amounts: [BigNumberish, BigNumberish, BigNumberish],
    min_mint_amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calc_withdraw_one_coin(
    token_amount: BigNumberish,
    i: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  coins(
    i: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "remove_liquidity(uint256,uint256[2])"(
    amount: BigNumberish,
    min_amounts: [BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "remove_liquidity(uint256,uint256[4])"(
    amount: BigNumberish,
    min_amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "remove_liquidity(uint256,uint256[3])"(
    amount: BigNumberish,
    min_amounts: [BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  remove_liquidity_one_coin(
    token_amount: BigNumberish,
    i: BigNumberish,
    min_amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    "add_liquidity(uint256[4],uint256)"(
      amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "add_liquidity(uint256[2],uint256)"(
      amounts: [BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "add_liquidity(uint256[3],uint256)"(
      amounts: [BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    calc_withdraw_one_coin(
      token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    coins(i: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "remove_liquidity(uint256,uint256[2])"(
      amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    "remove_liquidity(uint256,uint256[4])"(
      amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    "remove_liquidity(uint256,uint256[3])"(
      amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    remove_liquidity_one_coin(
      token_amount: BigNumberish,
      i: BigNumberish,
      min_amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    "add_liquidity(uint256[4],uint256)"(
      amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "add_liquidity(uint256[2],uint256)"(
      amounts: [BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "add_liquidity(uint256[3],uint256)"(
      amounts: [BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calc_withdraw_one_coin(
      token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    coins(
      i: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "remove_liquidity(uint256,uint256[2])"(
      amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "remove_liquidity(uint256,uint256[4])"(
      amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "remove_liquidity(uint256,uint256[3])"(
      amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    remove_liquidity_one_coin(
      token_amount: BigNumberish,
      i: BigNumberish,
      min_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "add_liquidity(uint256[4],uint256)"(
      amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "add_liquidity(uint256[2],uint256)"(
      amounts: [BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "add_liquidity(uint256[3],uint256)"(
      amounts: [BigNumberish, BigNumberish, BigNumberish],
      min_mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calc_withdraw_one_coin(
      token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    coins(
      i: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "remove_liquidity(uint256,uint256[2])"(
      amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "remove_liquidity(uint256,uint256[4])"(
      amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "remove_liquidity(uint256,uint256[3])"(
      amount: BigNumberish,
      min_amounts: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    remove_liquidity_one_coin(
      token_amount: BigNumberish,
      i: BigNumberish,
      min_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
