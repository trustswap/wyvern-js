/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
import { TxData } from '@0xproject/types';
import { BigNumber } from '@0xproject/utils';
import * as Web3 from 'web3';
import { BaseContract } from './base_contract';
export declare class WyvernExchangeContract extends BaseContract {
    INVERSE_BASIS_POINT: {
        callAsync(txData?: TxData): Promise<BigNumber>;
    };
    approveOrder: {
        sendTransactionAsync(order_0: {
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
        }, orderbookInclusionDesired_1: boolean, txData?: TxData): Promise<string>;
        estimateGasAsync(order_0: {
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
        }, orderbookInclusionDesired_1: boolean, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(order_0: {
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
        }, orderbookInclusionDesired_1: boolean): string;
    };
    approvedOrders: {
        callAsync(index_0_0: string, txData?: TxData): Promise<boolean>;
    };
    atomicMatch: {
        sendTransactionAsync(buy_0: {
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
        }, buySig_1: {
            v: number | BigNumber;
            r: string;
            s: string;
        }, sell_2: {
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
        }, sellSig_3: {
            v: number | BigNumber;
            r: string;
            s: string;
        }, metadata_4: string, txData?: TxData): Promise<string>;
        estimateGasAsync(buy_0: {
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
        }, buySig_1: {
            v: number | BigNumber;
            r: string;
            s: string;
        }, sell_2: {
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
        }, sellSig_3: {
            v: number | BigNumber;
            r: string;
            s: string;
        }, metadata_4: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(buy_0: {
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
        }, buySig_1: {
            v: number | BigNumber;
            r: string;
            s: string;
        }, sell_2: {
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
        }, sellSig_3: {
            v: number | BigNumber;
            r: string;
            s: string;
        }, metadata_4: string): string;
    };
    calculateCurrentPrice: {
        callAsync(order_0: {
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
        }, txData?: TxData): Promise<BigNumber>;
    };
    calculateFinalPrice: {
        callAsync(side_0: number | BigNumber, saleKind_1: number | BigNumber, basePrice_2: BigNumber, extra_3: BigNumber, listingTime_4: BigNumber, expirationTime_5: BigNumber, txData?: TxData): Promise<BigNumber>;
    };
    calculateMatchPrice: {
        callAsync(buy_0: {
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
        }, sell_1: {
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
        }, txData?: TxData): Promise<BigNumber>;
    };
    cancelOrder: {
        sendTransactionAsync(order_0: {
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
        }, sig_1: {
            v: number | BigNumber;
            r: string;
            s: string;
        }, txData?: TxData): Promise<string>;
        estimateGasAsync(order_0: {
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
        }, sig_1: {
            v: number | BigNumber;
            r: string;
            s: string;
        }, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(order_0: {
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
        }, sig_1: {
            v: number | BigNumber;
            r: string;
            s: string;
        }): string;
    };
    cancelledOrFinalized: {
        callAsync(index_0_0: string, txData?: TxData): Promise<boolean>;
    };
    changeDevWalletAddress: {
        sendTransactionAsync(newDevWalletAddress_0: string, txData?: TxData): Promise<string>;
        estimateGasAsync(newDevWalletAddress_0: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(newDevWalletAddress_0: string): string;
    };
    changeMinimumMakerProtocolFee: {
        sendTransactionAsync(newMinimumMakerProtocolFee_0: BigNumber, txData?: TxData): Promise<string>;
        estimateGasAsync(newMinimumMakerProtocolFee_0: BigNumber, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(newMinimumMakerProtocolFee_0: BigNumber): string;
    };
    changeMinimumTakerProtocolFee: {
        sendTransactionAsync(newMinimumTakerProtocolFee_0: BigNumber, txData?: TxData): Promise<string>;
        estimateGasAsync(newMinimumTakerProtocolFee_0: BigNumber, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(newMinimumTakerProtocolFee_0: BigNumber): string;
    };
    changeProtocolFeeRecipient: {
        sendTransactionAsync(newProtocolFeeRecipient_0: string, txData?: TxData): Promise<string>;
        estimateGasAsync(newProtocolFeeRecipient_0: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(newProtocolFeeRecipient_0: string): string;
    };
    codename: {
        callAsync(txData?: TxData): Promise<string>;
    };
    devWallet: {
        callAsync(txData?: TxData): Promise<string>;
    };
    exchangeToken: {
        callAsync(txData?: TxData): Promise<string>;
    };
    guardedArrayReplace: {
        callAsync(array_0: string, desired_1: string, mask_2: string, txData?: TxData): Promise<string>;
    };
    hashOrder: {
        callAsync(order_0: {
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
        }, txData?: TxData): Promise<string>;
    };
    hashToSign: {
        callAsync(order_0: {
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
        }, txData?: TxData): Promise<string>;
    };
    initialize: {
        sendTransactionAsync(registryAddress_0: string, tokenTransferProxyAddress_1: string, tokenAddress_2: string, protocolFeeAddress_3: string, devWalletAddress_4: string, txData?: TxData): Promise<string>;
        estimateGasAsync(registryAddress_0: string, tokenTransferProxyAddress_1: string, tokenAddress_2: string, protocolFeeAddress_3: string, devWalletAddress_4: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(registryAddress_0: string, tokenTransferProxyAddress_1: string, tokenAddress_2: string, protocolFeeAddress_3: string, devWalletAddress_4: string): string;
    };
    minimumMakerProtocolFee: {
        callAsync(txData?: TxData): Promise<BigNumber>;
    };
    minimumTakerProtocolFee: {
        callAsync(txData?: TxData): Promise<BigNumber>;
    };
    name: {
        callAsync(txData?: TxData): Promise<string>;
    };
    orderCalldataCanMatch: {
        callAsync(buyCalldata_0: string, buyReplacementPattern_1: string, sellCalldata_2: string, sellReplacementPattern_3: string, txData?: TxData): Promise<boolean>;
    };
    ordersCanMatch: {
        callAsync(buy_0: {
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
        }, sell_1: {
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
        }, txData?: TxData): Promise<boolean>;
    };
    owner: {
        callAsync(txData?: TxData): Promise<string>;
    };
    protocolFeeRecipient: {
        callAsync(txData?: TxData): Promise<string>;
    };
    registry: {
        callAsync(txData?: TxData): Promise<string>;
    };
    renounceOwnership: {
        sendTransactionAsync(txData?: TxData): Promise<string>;
        estimateGasAsync(txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(): string;
    };
    staticCall: {
        callAsync(target_0: string, calldatas_1: string, extradata_2: string, txData?: TxData): Promise<boolean>;
    };
    testCopy: {
        callAsync(arrToCopy_0: string, txData?: TxData): Promise<string>;
    };
    testCopyAddress: {
        callAsync(addr_0: string, txData?: TxData): Promise<string>;
    };
    tokenTransferProxy: {
        callAsync(txData?: TxData): Promise<string>;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner_0: string, txData?: TxData): Promise<string>;
        estimateGasAsync(newOwner_0: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(newOwner_0: string): string;
    };
    validateOrder: {
        callAsync(hash_0: string, order_1: {
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
        }, sig_2: {
            v: number | BigNumber;
            r: string;
            s: string;
        }, txData?: TxData): Promise<boolean>;
    };
    validateOrderParameters: {
        callAsync(order_0: {
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
        }, txData?: TxData): Promise<boolean>;
    };
    version: {
        callAsync(txData?: TxData): Promise<string>;
    };
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>);
}
