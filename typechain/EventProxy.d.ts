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

interface EventProxyInterface extends ethers.utils.Interface {
  functions: {
    "STATE_SENDER()": FunctionFragment;
    "destinations(address,bytes32,uint256)": FunctionFragment;
    "getRegisteredDestinations(address,bytes32)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "lastProcessedStateId()": FunctionFragment;
    "owner()": FunctionFragment;
    "processMessageFromRoot(uint256,address,bytes)": FunctionFragment;
    "registerDestinations(tuple[])": FunctionFragment;
    "registeredSenders(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setSenderRegistration(address,bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unregisterDestination(address,address,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "STATE_SENDER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "destinations",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRegisteredDestinations",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "lastProcessedStateId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "processMessageFromRoot",
    values: [BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerDestinations",
    values: [{ sender: string; eventType: BytesLike; destinations: string[] }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "registeredSenders",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setSenderRegistration",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unregisterDestination",
    values: [string, string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "STATE_SENDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "destinations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRegisteredDestinations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastProcessedStateId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "processMessageFromRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerDestinations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registeredSenders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSenderRegistration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unregisterDestination",
    data: BytesLike
  ): Result;

  events: {
    "DestinationRegistered(address,address)": EventFragment;
    "DestinationUnregistered(address,address)": EventFragment;
    "EventSent(bytes32,address,address,bytes)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RegisterDestinations(tuple[])": EventFragment;
    "SenderRegistered(address,bool)": EventFragment;
    "SenderRegistrationChanged(address,bool)": EventFragment;
    "SetGateway(bytes32,address)": EventFragment;
    "UnregisterDestination(address,address,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DestinationRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DestinationUnregistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EventSent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegisterDestinations"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SenderRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SenderRegistrationChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetGateway"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnregisterDestination"): EventFragment;
}

export type DestinationRegisteredEvent = TypedEvent<
  [string, string] & { sender: string; destination: string }
>;

export type DestinationUnregisteredEvent = TypedEvent<
  [string, string] & { sender: string; destination: string }
>;

export type EventSentEvent = TypedEvent<
  [string, string, string, string] & {
    eventType: string;
    sender: string;
    destination: string;
    data: string;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RegisterDestinationsEvent = TypedEvent<
  [
    ([string, string, string[]] & {
      sender: string;
      eventType: string;
      destinations: string[];
    })[]
  ] & {
    arg0: ([string, string, string[]] & {
      sender: string;
      eventType: string;
      destinations: string[];
    })[];
  }
>;

export type SenderRegisteredEvent = TypedEvent<
  [string, boolean] & { sender: string; allowed: boolean }
>;

export type SenderRegistrationChangedEvent = TypedEvent<
  [string, boolean] & { sender: string; allowed: boolean }
>;

export type SetGatewayEvent = TypedEvent<
  [string, string] & { name: string; gateway: string }
>;

export type UnregisterDestinationEvent = TypedEvent<
  [string, string, string] & {
    sender: string;
    l2Endpoint: string;
    eventType: string;
  }
>;

export class EventProxy extends BaseContract {
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

  interface: EventProxyInterface;

  functions: {
    STATE_SENDER(overrides?: CallOverrides): Promise<[string]>;

    destinations(
      arg0: string,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRegisteredDestinations(
      sender: string,
      eventType: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    initialize(
      stateSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lastProcessedStateId(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    processMessageFromRoot(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerDestinations(
      destinationsBySenderAndEventType: {
        sender: string;
        eventType: BytesLike;
        destinations: string[];
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registeredSenders(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSenderRegistration(
      _sender: string,
      _allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unregisterDestination(
      _sender: string,
      _l2Endpoint: string,
      _eventType: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  STATE_SENDER(overrides?: CallOverrides): Promise<string>;

  destinations(
    arg0: string,
    arg1: BytesLike,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRegisteredDestinations(
    sender: string,
    eventType: BytesLike,
    overrides?: CallOverrides
  ): Promise<string[]>;

  initialize(
    stateSender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lastProcessedStateId(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  processMessageFromRoot(
    stateId: BigNumberish,
    rootMessageSender: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerDestinations(
    destinationsBySenderAndEventType: {
      sender: string;
      eventType: BytesLike;
      destinations: string[];
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registeredSenders(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSenderRegistration(
    _sender: string,
    _allowed: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unregisterDestination(
    _sender: string,
    _l2Endpoint: string,
    _eventType: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    STATE_SENDER(overrides?: CallOverrides): Promise<string>;

    destinations(
      arg0: string,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRegisteredDestinations(
      sender: string,
      eventType: BytesLike,
      overrides?: CallOverrides
    ): Promise<string[]>;

    initialize(stateSender: string, overrides?: CallOverrides): Promise<void>;

    lastProcessedStateId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    processMessageFromRoot(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    registerDestinations(
      destinationsBySenderAndEventType: {
        sender: string;
        eventType: BytesLike;
        destinations: string[];
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    registeredSenders(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setSenderRegistration(
      _sender: string,
      _allowed: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unregisterDestination(
      _sender: string,
      _l2Endpoint: string,
      _eventType: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DestinationRegistered(address,address)"(
      sender?: null,
      destination?: null
    ): TypedEventFilter<
      [string, string],
      { sender: string; destination: string }
    >;

    DestinationRegistered(
      sender?: null,
      destination?: null
    ): TypedEventFilter<
      [string, string],
      { sender: string; destination: string }
    >;

    "DestinationUnregistered(address,address)"(
      sender?: null,
      destination?: null
    ): TypedEventFilter<
      [string, string],
      { sender: string; destination: string }
    >;

    DestinationUnregistered(
      sender?: null,
      destination?: null
    ): TypedEventFilter<
      [string, string],
      { sender: string; destination: string }
    >;

    "EventSent(bytes32,address,address,bytes)"(
      eventType?: null,
      sender?: null,
      destination?: null,
      data?: null
    ): TypedEventFilter<
      [string, string, string, string],
      { eventType: string; sender: string; destination: string; data: string }
    >;

    EventSent(
      eventType?: null,
      sender?: null,
      destination?: null,
      data?: null
    ): TypedEventFilter<
      [string, string, string, string],
      { eventType: string; sender: string; destination: string; data: string }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "RegisterDestinations(tuple[])"(
      undefined?: null
    ): TypedEventFilter<
      [
        ([string, string, string[]] & {
          sender: string;
          eventType: string;
          destinations: string[];
        })[]
      ],
      {
        arg0: ([string, string, string[]] & {
          sender: string;
          eventType: string;
          destinations: string[];
        })[];
      }
    >;

    RegisterDestinations(
      undefined?: null
    ): TypedEventFilter<
      [
        ([string, string, string[]] & {
          sender: string;
          eventType: string;
          destinations: string[];
        })[]
      ],
      {
        arg0: ([string, string, string[]] & {
          sender: string;
          eventType: string;
          destinations: string[];
        })[];
      }
    >;

    "SenderRegistered(address,bool)"(
      sender?: null,
      allowed?: null
    ): TypedEventFilter<
      [string, boolean],
      { sender: string; allowed: boolean }
    >;

    SenderRegistered(
      sender?: null,
      allowed?: null
    ): TypedEventFilter<
      [string, boolean],
      { sender: string; allowed: boolean }
    >;

    "SenderRegistrationChanged(address,bool)"(
      sender?: null,
      allowed?: null
    ): TypedEventFilter<
      [string, boolean],
      { sender: string; allowed: boolean }
    >;

    SenderRegistrationChanged(
      sender?: null,
      allowed?: null
    ): TypedEventFilter<
      [string, boolean],
      { sender: string; allowed: boolean }
    >;

    "SetGateway(bytes32,address)"(
      name?: null,
      gateway?: null
    ): TypedEventFilter<[string, string], { name: string; gateway: string }>;

    SetGateway(
      name?: null,
      gateway?: null
    ): TypedEventFilter<[string, string], { name: string; gateway: string }>;

    "UnregisterDestination(address,address,bytes32)"(
      sender?: null,
      l2Endpoint?: null,
      eventType?: null
    ): TypedEventFilter<
      [string, string, string],
      { sender: string; l2Endpoint: string; eventType: string }
    >;

    UnregisterDestination(
      sender?: null,
      l2Endpoint?: null,
      eventType?: null
    ): TypedEventFilter<
      [string, string, string],
      { sender: string; l2Endpoint: string; eventType: string }
    >;
  };

  estimateGas: {
    STATE_SENDER(overrides?: CallOverrides): Promise<BigNumber>;

    destinations(
      arg0: string,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRegisteredDestinations(
      sender: string,
      eventType: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      stateSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lastProcessedStateId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    processMessageFromRoot(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerDestinations(
      destinationsBySenderAndEventType: {
        sender: string;
        eventType: BytesLike;
        destinations: string[];
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registeredSenders(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSenderRegistration(
      _sender: string,
      _allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unregisterDestination(
      _sender: string,
      _l2Endpoint: string,
      _eventType: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    STATE_SENDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    destinations(
      arg0: string,
      arg1: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRegisteredDestinations(
      sender: string,
      eventType: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      stateSender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lastProcessedStateId(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processMessageFromRoot(
      stateId: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerDestinations(
      destinationsBySenderAndEventType: {
        sender: string;
        eventType: BytesLike;
        destinations: string[];
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registeredSenders(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSenderRegistration(
      _sender: string,
      _allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unregisterDestination(
      _sender: string,
      _l2Endpoint: string,
      _eventType: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
