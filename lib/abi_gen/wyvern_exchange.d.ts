import { EncoderOverrides, ContractFunctionObj, ContractTxFunctionObj, BaseContract } from '@0x/base-contract';
import { BlockRange, ContractAbi, ContractArtifact, DecodedLogArgs, LogWithDecodedArgs, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
import { EventCallback, IndexedFilterValues, SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
export declare type WyvernExchangeEventArgs = WyvernExchangeOrderApprovedPartOneEventArgs | WyvernExchangeOrderApprovedPartTwoEventArgs | WyvernExchangeOrderCancelledEventArgs | WyvernExchangeOrdersMatchedEventArgs | WyvernExchangeOwnershipTransferredEventArgs;
export declare enum WyvernExchangeEvents {
    OrderApprovedPartOne = "OrderApprovedPartOne",
    OrderApprovedPartTwo = "OrderApprovedPartTwo",
    OrderCancelled = "OrderCancelled",
    OrdersMatched = "OrdersMatched",
    OwnershipTransferred = "OwnershipTransferred"
}
export interface WyvernExchangeOrderApprovedPartOneEventArgs extends DecodedLogArgs {
    hash: string;
    exchange: string;
    maker: string;
    taker: string;
    makerRelayerFee: BigNumber;
    takerRelayerFee: BigNumber;
    makerProtocolFee: BigNumber;
    takerProtocolFee: BigNumber;
    feeRecipient: string;
    feeMethod: BigNumber;
    side: BigNumber;
    saleKind: BigNumber;
    target: string;
}
export interface WyvernExchangeOrderApprovedPartTwoEventArgs extends DecodedLogArgs {
    hash: string;
    howToCall: BigNumber;
    calldatas: string;
    replacementPattern: string;
    staticTarget: string;
    staticExtradata: string;
    paymentToken: string;
    basePrice: BigNumber;
    extra: BigNumber;
    listingTime: BigNumber;
    expirationTime: BigNumber;
    salt: BigNumber;
    orderbookInclusionDesired: boolean;
}
export interface WyvernExchangeOrderCancelledEventArgs extends DecodedLogArgs {
    hash: string;
}
export interface WyvernExchangeOrdersMatchedEventArgs extends DecodedLogArgs {
    buyHash: string;
    sellHash: string;
    maker: string;
    taker: string;
    price: BigNumber;
    metadata: string;
}
export interface WyvernExchangeOwnershipTransferredEventArgs extends DecodedLogArgs {
    previousOwner: string;
    newOwner: string;
}
export declare class WyvernExchangeContract extends BaseContract {
    /**
     * @ignore
     */
    static deployedBytecode: string | undefined;
    static contractName: string;
    private readonly _methodABIIndex;
    private readonly _subscriptionManager;
    static deployFrom0xArtifactAsync(artifact: ContractArtifact | SimpleContractArtifact, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, logDecodeDependencies: {
        [contractName: string]: ContractArtifact | SimpleContractArtifact;
    }): Promise<WyvernExchangeContract>;
    static deployWithLibrariesFrom0xArtifactAsync(artifact: ContractArtifact, libraryArtifacts: {
        [libraryName: string]: ContractArtifact;
    }, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, logDecodeDependencies: {
        [contractName: string]: ContractArtifact | SimpleContractArtifact;
    }): Promise<WyvernExchangeContract>;
    static deployAsync(bytecode: string, abi: ContractAbi, supportedProvider: SupportedProvider, txDefaults: Partial<TxData>, logDecodeDependencies: {
        [contractName: string]: ContractAbi;
    }): Promise<WyvernExchangeContract>;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    protected static _deployLibrariesAsync(artifact: ContractArtifact, libraryArtifacts: {
        [libraryName: string]: ContractArtifact;
    }, web3Wrapper: Web3Wrapper, txDefaults: Partial<TxData>, libraryAddresses?: {
        [libraryName: string]: string;
    }): Promise<{
        [libraryName: string]: string;
    }>;
    getFunctionSignature(methodName: string): string;
    getABIDecodedTransactionData<T>(methodName: string, callData: string): T;
    getABIDecodedReturnData<T>(methodName: string, callData: string): T;
    getSelector(methodName: string): string;
    INVERSE_BASIS_POINT(): ContractFunctionObj<BigNumber>;
    approveOrder(order: {
        exchange: string;
        maker: string;
        taker: string;
        makerRelayerFee: BigNumber;
        takerRelayerFee: BigNumber;
        makerProtocolFee: BigNumber;
        takerProtocolFee: BigNumber;
        feeRecipient: string;
        feeMethod: number | BigNumber;
        side: number | BigNumber;
        saleKind: number | BigNumber;
        target: string;
        howToCall: number | BigNumber;
        calldatas: string;
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
    }, orderbookInclusionDesired: boolean): ContractTxFunctionObj<void>;
    approvedOrders(index_0: string): ContractFunctionObj<boolean>;
    atomicMatch(buy: {
        exchange: string;
        maker: string;
        taker: string;
        makerRelayerFee: BigNumber;
        takerRelayerFee: BigNumber;
        makerProtocolFee: BigNumber;
        takerProtocolFee: BigNumber;
        feeRecipient: string;
        feeMethod: number | BigNumber;
        side: number | BigNumber;
        saleKind: number | BigNumber;
        target: string;
        howToCall: number | BigNumber;
        calldatas: string;
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
    }, buySig: {
        v: number | BigNumber;
        r: string;
        s: string;
    }, sell: {
        exchange: string;
        maker: string;
        taker: string;
        makerRelayerFee: BigNumber;
        takerRelayerFee: BigNumber;
        makerProtocolFee: BigNumber;
        takerProtocolFee: BigNumber;
        feeRecipient: string;
        feeMethod: number | BigNumber;
        side: number | BigNumber;
        saleKind: number | BigNumber;
        target: string;
        howToCall: number | BigNumber;
        calldatas: string;
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
    }, sellSig: {
        v: number | BigNumber;
        r: string;
        s: string;
    }, metadata: string): ContractTxFunctionObj<void>;
    calculateCurrentPrice(order: {
        exchange: string;
        maker: string;
        taker: string;
        makerRelayerFee: BigNumber;
        takerRelayerFee: BigNumber;
        makerProtocolFee: BigNumber;
        takerProtocolFee: BigNumber;
        feeRecipient: string;
        feeMethod: number | BigNumber;
        side: number | BigNumber;
        saleKind: number | BigNumber;
        target: string;
        howToCall: number | BigNumber;
        calldatas: string;
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
    }): ContractFunctionObj<BigNumber>;
    calculateFinalPrice(side: number | BigNumber, saleKind: number | BigNumber, basePrice: BigNumber, extra: BigNumber, listingTime: BigNumber, expirationTime: BigNumber): ContractFunctionObj<BigNumber>;
    calculateMatchPrice(buy: {
        exchange: string;
        maker: string;
        taker: string;
        makerRelayerFee: BigNumber;
        takerRelayerFee: BigNumber;
        makerProtocolFee: BigNumber;
        takerProtocolFee: BigNumber;
        feeRecipient: string;
        feeMethod: number | BigNumber;
        side: number | BigNumber;
        saleKind: number | BigNumber;
        target: string;
        howToCall: number | BigNumber;
        calldatas: string;
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
    }, sell: {
        exchange: string;
        maker: string;
        taker: string;
        makerRelayerFee: BigNumber;
        takerRelayerFee: BigNumber;
        makerProtocolFee: BigNumber;
        takerProtocolFee: BigNumber;
        feeRecipient: string;
        feeMethod: number | BigNumber;
        side: number | BigNumber;
        saleKind: number | BigNumber;
        target: string;
        howToCall: number | BigNumber;
        calldatas: string;
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
    }): ContractFunctionObj<BigNumber>;
    cancelOrder(order: {
        exchange: string;
        maker: string;
        taker: string;
        makerRelayerFee: BigNumber;
        takerRelayerFee: BigNumber;
        makerProtocolFee: BigNumber;
        takerProtocolFee: BigNumber;
        feeRecipient: string;
        feeMethod: number | BigNumber;
        side: number | BigNumber;
        saleKind: number | BigNumber;
        target: string;
        howToCall: number | BigNumber;
        calldatas: string;
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
    }, sig: {
        v: number | BigNumber;
        r: string;
        s: string;
    }): ContractTxFunctionObj<void>;
    cancelledOrFinalized(index_0: string): ContractFunctionObj<boolean>;
    changeDevWalletAddress(newDevWalletAddress: string): ContractTxFunctionObj<void>;
    changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee: BigNumber): ContractTxFunctionObj<void>;
    changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee: BigNumber): ContractTxFunctionObj<void>;
    changeProtocolFeeRecipient(newProtocolFeeRecipient: string): ContractTxFunctionObj<void>;
    codename(): ContractFunctionObj<string>;
    devWallet(): ContractFunctionObj<string>;
    exchangeToken(): ContractFunctionObj<string>;
    guardedArrayReplace(array: string, desired: string, mask: string): ContractFunctionObj<string>;
    hashOrder(order: {
        exchange: string;
        maker: string;
        taker: string;
        makerRelayerFee: BigNumber;
        takerRelayerFee: BigNumber;
        makerProtocolFee: BigNumber;
        takerProtocolFee: BigNumber;
        feeRecipient: string;
        feeMethod: number | BigNumber;
        side: number | BigNumber;
        saleKind: number | BigNumber;
        target: string;
        howToCall: number | BigNumber;
        calldatas: string;
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
    }): ContractFunctionObj<string>;
    hashToSign(order: {
        exchange: string;
        maker: string;
        taker: string;
        makerRelayerFee: BigNumber;
        takerRelayerFee: BigNumber;
        makerProtocolFee: BigNumber;
        takerProtocolFee: BigNumber;
        feeRecipient: string;
        feeMethod: number | BigNumber;
        side: number | BigNumber;
        saleKind: number | BigNumber;
        target: string;
        howToCall: number | BigNumber;
        calldatas: string;
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
    }): ContractFunctionObj<string>;
    initialize(registryAddress: string, tokenTransferProxyAddress: string, tokenAddress: string, protocolFeeAddress: string, devWalletAddress: string): ContractTxFunctionObj<void>;
    minimumMakerProtocolFee(): ContractFunctionObj<BigNumber>;
    minimumTakerProtocolFee(): ContractFunctionObj<BigNumber>;
    name(): ContractFunctionObj<string>;
    orderCalldataCanMatch(buyCalldata: string, buyReplacementPattern: string, sellCalldata: string, sellReplacementPattern: string): ContractFunctionObj<boolean>;
    ordersCanMatch(buy: {
        exchange: string;
        maker: string;
        taker: string;
        makerRelayerFee: BigNumber;
        takerRelayerFee: BigNumber;
        makerProtocolFee: BigNumber;
        takerProtocolFee: BigNumber;
        feeRecipient: string;
        feeMethod: number | BigNumber;
        side: number | BigNumber;
        saleKind: number | BigNumber;
        target: string;
        howToCall: number | BigNumber;
        calldatas: string;
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
    }, sell: {
        exchange: string;
        maker: string;
        taker: string;
        makerRelayerFee: BigNumber;
        takerRelayerFee: BigNumber;
        makerProtocolFee: BigNumber;
        takerProtocolFee: BigNumber;
        feeRecipient: string;
        feeMethod: number | BigNumber;
        side: number | BigNumber;
        saleKind: number | BigNumber;
        target: string;
        howToCall: number | BigNumber;
        calldatas: string;
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
    }): ContractFunctionObj<boolean>;
    owner(): ContractFunctionObj<string>;
    protocolFeeRecipient(): ContractFunctionObj<string>;
    registry(): ContractFunctionObj<string>;
    renounceOwnership(): ContractTxFunctionObj<void>;
    staticCall(target: string, calldatas: string, extradata: string): ContractFunctionObj<boolean>;
    testCopy(arrToCopy: string): ContractFunctionObj<string>;
    testCopyAddress(addr: string): ContractFunctionObj<string>;
    tokenTransferProxy(): ContractFunctionObj<string>;
    transferOwnership(newOwner: string): ContractTxFunctionObj<void>;
    validateOrder(hash: string, order: {
        exchange: string;
        maker: string;
        taker: string;
        makerRelayerFee: BigNumber;
        takerRelayerFee: BigNumber;
        makerProtocolFee: BigNumber;
        takerProtocolFee: BigNumber;
        feeRecipient: string;
        feeMethod: number | BigNumber;
        side: number | BigNumber;
        saleKind: number | BigNumber;
        target: string;
        howToCall: number | BigNumber;
        calldatas: string;
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
    }, sig: {
        v: number | BigNumber;
        r: string;
        s: string;
    }): ContractFunctionObj<boolean>;
    validateOrderParameters(order: {
        exchange: string;
        maker: string;
        taker: string;
        makerRelayerFee: BigNumber;
        takerRelayerFee: BigNumber;
        makerProtocolFee: BigNumber;
        takerProtocolFee: BigNumber;
        feeRecipient: string;
        feeMethod: number | BigNumber;
        side: number | BigNumber;
        saleKind: number | BigNumber;
        target: string;
        howToCall: number | BigNumber;
        calldatas: string;
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
    }): ContractFunctionObj<boolean>;
    version(): ContractFunctionObj<string>;
    /**
     * Subscribe to an event type emitted by the WyvernExchange contract.
     * @param eventName The WyvernExchange contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    subscribe<ArgsType extends WyvernExchangeEventArgs>(eventName: WyvernExchangeEvents, indexFilterValues: IndexedFilterValues, callback: EventCallback<ArgsType>, isVerbose?: boolean, blockPollingIntervalMs?: number): string;
    /**
     * Cancel a subscription
     * @param subscriptionToken Subscription token returned by `subscribe()`
     */
    unsubscribe(subscriptionToken: string): void;
    /**
     * Cancels all existing subscriptions
     */
    unsubscribeAll(): void;
    /**
     * Gets historical logs without creating a subscription
     * @param eventName The WyvernExchange contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    getLogsAsync<ArgsType extends WyvernExchangeEventArgs>(eventName: WyvernExchangeEvents, blockRange: BlockRange, indexFilterValues: IndexedFilterValues): Promise<Array<LogWithDecodedArgs<ArgsType>>>;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, logDecodeDependencies?: {
        [contractName: string]: ContractAbi;
    }, deployedBytecode?: string | undefined, encoderOverrides?: Partial<EncoderOverrides>);
}
