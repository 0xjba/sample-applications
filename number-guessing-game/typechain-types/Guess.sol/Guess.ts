/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface GuessInterface extends utils.Interface {
  functions: {
    "attempt(uint8)": FunctionFragment;
    "close()": FunctionFragment;
    "erc20()": FunctionFragment;
    "guessRange()": FunctionFragment;
    "prizePool()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "attempt"
      | "close"
      | "erc20"
      | "guessRange"
      | "prizePool"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "attempt",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "close", values?: undefined): string;
  encodeFunctionData(functionFragment: "erc20", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "guessRange",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "prizePool", values?: undefined): string;

  decodeFunctionResult(functionFragment: "attempt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "erc20", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "guessRange", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prizePool", data: BytesLike): Result;

  events: {
    "Colder(address,uint8,uint256,uint256)": EventFragment;
    "Correct(address,uint8,uint256,uint256)": EventFragment;
    "Incorrect(address,uint8,uint256,uint256)": EventFragment;
    "Same(address,uint8,uint256,uint256)": EventFragment;
    "Warmer(address,uint8,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Colder"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Correct"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Incorrect"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Same"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Warmer"): EventFragment;
}

export interface ColderEventObject {
  player: string;
  guess: number;
  prize: BigNumber;
  allowance: BigNumber;
}
export type ColderEvent = TypedEvent<
  [string, number, BigNumber, BigNumber],
  ColderEventObject
>;

export type ColderEventFilter = TypedEventFilter<ColderEvent>;

export interface CorrectEventObject {
  player: string;
  guess: number;
  prize: BigNumber;
  allowance: BigNumber;
}
export type CorrectEvent = TypedEvent<
  [string, number, BigNumber, BigNumber],
  CorrectEventObject
>;

export type CorrectEventFilter = TypedEventFilter<CorrectEvent>;

export interface IncorrectEventObject {
  player: string;
  guess: number;
  prize: BigNumber;
  allowance: BigNumber;
}
export type IncorrectEvent = TypedEvent<
  [string, number, BigNumber, BigNumber],
  IncorrectEventObject
>;

export type IncorrectEventFilter = TypedEventFilter<IncorrectEvent>;

export interface SameEventObject {
  player: string;
  guess: number;
  prize: BigNumber;
  allowance: BigNumber;
}
export type SameEvent = TypedEvent<
  [string, number, BigNumber, BigNumber],
  SameEventObject
>;

export type SameEventFilter = TypedEventFilter<SameEvent>;

export interface WarmerEventObject {
  player: string;
  guess: number;
  prize: BigNumber;
  allowance: BigNumber;
}
export type WarmerEvent = TypedEvent<
  [string, number, BigNumber, BigNumber],
  WarmerEventObject
>;

export type WarmerEventFilter = TypedEventFilter<WarmerEvent>;

export interface Guess extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GuessInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    attempt(
      guess: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    close(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    erc20(overrides?: CallOverrides): Promise<[string]>;

    guessRange(overrides?: CallOverrides): Promise<[number]>;

    prizePool(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  attempt(
    guess: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  close(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  erc20(overrides?: CallOverrides): Promise<string>;

  guessRange(overrides?: CallOverrides): Promise<number>;

  prizePool(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    attempt(
      guess: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    close(overrides?: CallOverrides): Promise<void>;

    erc20(overrides?: CallOverrides): Promise<string>;

    guessRange(overrides?: CallOverrides): Promise<number>;

    prizePool(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Colder(address,uint8,uint256,uint256)"(
      player?: PromiseOrValue<string> | null,
      guess?: null,
      prize?: null,
      allowance?: null
    ): ColderEventFilter;
    Colder(
      player?: PromiseOrValue<string> | null,
      guess?: null,
      prize?: null,
      allowance?: null
    ): ColderEventFilter;

    "Correct(address,uint8,uint256,uint256)"(
      player?: PromiseOrValue<string> | null,
      guess?: null,
      prize?: null,
      allowance?: null
    ): CorrectEventFilter;
    Correct(
      player?: PromiseOrValue<string> | null,
      guess?: null,
      prize?: null,
      allowance?: null
    ): CorrectEventFilter;

    "Incorrect(address,uint8,uint256,uint256)"(
      player?: PromiseOrValue<string> | null,
      guess?: null,
      prize?: null,
      allowance?: null
    ): IncorrectEventFilter;
    Incorrect(
      player?: PromiseOrValue<string> | null,
      guess?: null,
      prize?: null,
      allowance?: null
    ): IncorrectEventFilter;

    "Same(address,uint8,uint256,uint256)"(
      player?: PromiseOrValue<string> | null,
      guess?: null,
      prize?: null,
      allowance?: null
    ): SameEventFilter;
    Same(
      player?: PromiseOrValue<string> | null,
      guess?: null,
      prize?: null,
      allowance?: null
    ): SameEventFilter;

    "Warmer(address,uint8,uint256,uint256)"(
      player?: PromiseOrValue<string> | null,
      guess?: null,
      prize?: null,
      allowance?: null
    ): WarmerEventFilter;
    Warmer(
      player?: PromiseOrValue<string> | null,
      guess?: null,
      prize?: null,
      allowance?: null
    ): WarmerEventFilter;
  };

  estimateGas: {
    attempt(
      guess: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    close(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    erc20(overrides?: CallOverrides): Promise<BigNumber>;

    guessRange(overrides?: CallOverrides): Promise<BigNumber>;

    prizePool(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    attempt(
      guess: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    close(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    erc20(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    guessRange(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prizePool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
