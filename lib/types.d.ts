import { TransactionReceipt } from '@0xproject/types';
import { BigNumber } from '@0x/utils';
import * as Web3 from 'web3';
export interface WyvernProtocolConfig {
    network: Network;
    gasPrice?: BigNumber;
    wyvernExchangeContractAddress?: string;
    wyvernExchangeV1ContractAddress?: string;
    wyvernProxyRegistryContractAddress?: string;
    wyvernDAOContractAddress?: string;
    wyvernTokenContractAddress?: string;
    wyvernAtomicizerContractAddress?: string;
}
export declare type AsyncMethod = (...args: any[]) => Promise<any>;
export declare type SyncMethod = (...args: any[]) => any;
export declare enum Network {
    Main = "main",
    Goerli = "goerli",
    Matic = "matic",
    Mumbai = "mumbai"
}
export declare enum SaleKind {
    FixedPrice = 0,
    EnglishAuction = 1,
    DutchAuction = 2
}
export declare enum HowToCall {
    Call = 0,
    DelegateCall = 1,
    StaticCall = 2,
    Create = 3
}
export declare enum AbiType {
    Function = "function",
    Constructor = "constructor",
    Event = "event",
    Fallback = "fallback"
}
export declare enum WyvernProtocolError {
    InvalidSignature = "INVALID_SIGNATURE",
    TransactionMiningTimeout = "TRANSACTION_MINING_TIMEOUT",
    InvalidJump = "INVALID_JUMP",
    OutOfGas = "OUT_OF_GAS"
}
export interface ECSignature {
    v: number;
    r: string;
    s: string;
}
export declare type LogEvent = Web3.LogEntryEvent;
export interface DecodedLogEvent<ArgsType> {
    isRemoved: boolean;
    log: LogWithDecodedArgs<ArgsType>;
}
export declare type ContractEventArg = string | BigNumber;
export interface DecodedLogArgs {
    [argName: string]: ContractEventArg;
}
export interface LogWithDecodedArgs<ArgsType> extends Web3.DecodedLogEntry<ArgsType> {
}
export interface TransactionReceiptWithDecodedLogs extends TransactionReceipt {
    logs: Array<LogWithDecodedArgs<DecodedLogArgs> | Web3.LogEntry>;
}
export declare type EventCallback<ArgsType> = (err: null | Error, log?: DecodedLogEvent<ArgsType>) => void;
export declare type EventWatcherCallback = (log: LogEvent) => void;
export declare enum SolidityTypes {
    Address = "address",
    Uint256 = "uint256",
    Uint8 = "uint8",
    Uint = "uint",
    Bytes = "bytes",
    String = "string",
    Bytes4 = "bytes4",
    Bytes32 = "bytes32"
}
export declare type RawLog = Web3.LogEntry;
export interface ContractEvent {
    logIndex: number;
    transactionIndex: number;
    transactionHash: string;
    blockHash: string;
    blockNumber: number;
    address: string;
    type: string;
    event: string;
    args: ContractEventArgs;
}
export declare type ContractEventArgs = string;
export interface Order {
    exchange: string;
    maker: string;
    taker: string;
    makerRelayerFee: BigNumber;
    takerRelayerFee: BigNumber;
    makerProtocolFee: BigNumber;
    takerProtocolFee: BigNumber;
    feeRecipient: string;
    feeMethod: number;
    side: number;
    saleKind: number;
    target: string;
    howToCall: number;
    calldata: string;
    replacementPattern: string;
    staticTarget: string;
    staticExtradata: string;
    paymentToken: string;
    basePrice: BigNumber;
    extra: BigNumber;
    listingTime: BigNumber;
    expirationTime: BigNumber;
    salt: BigNumber;
    dataType: string;
    data: string;
}
export interface SignedOrder extends Order {
    ecSignature: ECSignature;
}
export declare enum StateMutability {
    Pure = "pure",
    View = "view",
    Payable = "payable",
    Nonpayable = "nonpayable"
}
export declare enum FunctionInputKind {
    Replaceable = "replaceable",
    Asset = "asset",
    Owner = "owner",
    Index = "index",
    Count = "count",
    Data = "data"
}
export interface AnnotatedFunctionInput {
    name: string;
    type: string;
    kind: FunctionInputKind;
    value?: any;
}
export declare enum FunctionOutputKind {
    Owner = "owner",
    Asset = "asset",
    Count = "count",
    Other = "other"
}
export interface AnnotatedFunctionOutput {
    name: string;
    type: string;
    kind: FunctionOutputKind;
}
export interface AnnotatedFunctionABI {
    type: AbiType;
    name: string;
    target: string;
    inputs: AnnotatedFunctionInput[];
    outputs: AnnotatedFunctionOutput[];
    constant: boolean;
    stateMutability: StateMutability;
    payable: boolean;
}
export declare type ReplacementEncoder = (abi: AnnotatedFunctionABI, kind?: FunctionInputKind, encodeToBytes?: boolean) => string;
export declare type AtomicizedReplacementEncoder = (abis: AnnotatedFunctionABI[], kind?: FunctionInputKind) => string;
export declare type Web3Provider = Web3.Provider;
export declare type Part = {
    account: string;
    value: number;
};
export declare type OrderData = OrderV1Data;
export declare type OrderV1Data = {
    dataType: "ORDER_DATA_TYPE_V1";
    payouts: Array<Part>;
    originFees: Array<Part>;
};
