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

interface IEventProxyInterface extends ethers.utils.Interface {
  functions: {
    "getRegisteredDestinations(address,bytes32)": FunctionFragment;
    "processMessageFromRoot(uint256,address,bytes)": FunctionFragment;
    "registerDestinations(tuple[])": FunctionFragment;
    "setSenderRegistration(address,bool)": FunctionFragment;
    "unregisterDestination(address,address,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getRegisteredDestinations",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "processMessageFromRoot",
    values: [BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerDestinations",
    values: [{ sender: string; eventType: BytesLike; destinations: string[] }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setSenderRegistration",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "unregisterDestination",
    values: [string, string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getRegisteredDestinations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processMessageFromRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerDestinations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSenderRegistration",
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
    "RegisterDestinations(tuple[])": EventFragment;
    "SenderRegistered(address,bool)": EventFragment;
    "SenderRegistrationChanged(address,bool)": EventFragment;
    "SetGateway(bytes32,address)": EventFragment;
    "UnregisterDestination(address,address,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DestinationRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DestinationUnregistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EventSent"): EventFragment;
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

export class IEventProxy extends BaseContract {
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

  interface: IEventProxyInterface;

  functions: {
    getRegisteredDestinations(
      sender: string,
      eventType: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

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

    setSenderRegistration(
      sender: string,
      allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unregisterDestination(
      sender: string,
      l2Endpoint: string,
      eventType: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getRegisteredDestinations(
    sender: string,
    eventType: BytesLike,
    overrides?: CallOverrides
  ): Promise<string[]>;

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

  setSenderRegistration(
    sender: string,
    allowed: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unregisterDestination(
    sender: string,
    l2Endpoint: string,
    eventType: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getRegisteredDestinations(
      sender: string,
      eventType: BytesLike,
      overrides?: CallOverrides
    ): Promise<string[]>;

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

    setSenderRegistration(
      sender: string,
      allowed: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    unregisterDestination(
      sender: string,
      l2Endpoint: string,
      eventType: BytesLike,
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
    getRegisteredDestinations(
      sender: string,
      eventType: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    setSenderRegistration(
      sender: string,
      allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unregisterDestination(
      sender: string,
      l2Endpoint: string,
      eventType: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRegisteredDestinations(
      sender: string,
      eventType: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

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

    setSenderRegistration(
      sender: string,
      allowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unregisterDestination(
      sender: string,
      l2Endpoint: string,
      eventType: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
