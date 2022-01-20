/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
import { TxData } from '@0xproject/types';
import * as Web3 from 'web3';
import { BaseContract } from './base_contract';
export declare class WyvernProxyRegistryContract extends BaseContract {
    DELAY_PERIOD: {
        sendTransactionAsync(txData?: TxData): Promise<string>;
        estimateGasAsync(txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(): string;
    };
    contracts: {
        sendTransactionAsync(index_0_0: string, txData?: TxData): Promise<string>;
        estimateGasAsync(index_0_0: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(index_0_0: string): string;
    };
    delegateProxyImplementation: {
        sendTransactionAsync(txData?: TxData): Promise<string>;
        estimateGasAsync(txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(): string;
    };
    endGrantAuthentication: {
        sendTransactionAsync(addr_0: string, txData?: TxData): Promise<string>;
        estimateGasAsync(addr_0: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(addr_0: string): string;
    };
    initialAddressSet: {
        sendTransactionAsync(txData?: TxData): Promise<string>;
        estimateGasAsync(txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(): string;
    };
    name: {
        sendTransactionAsync(txData?: TxData): Promise<string>;
        estimateGasAsync(txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(): string;
    };
    owner: {
        sendTransactionAsync(txData?: TxData): Promise<string>;
        estimateGasAsync(txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(): string;
    };
    pending: {
        sendTransactionAsync(index_0_0: string, txData?: TxData): Promise<string>;
        estimateGasAsync(index_0_0: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(index_0_0: string): string;
    };
    proxies: {
        callAsync(index_0_0: string, txData?: TxData): Promise<string>;
    };
    registerProxy: {
        sendTransactionAsync(txData?: TxData): Promise<string>;
        estimateGasAsync(txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(): string;
    };
    renounceOwnership: {
        sendTransactionAsync(txData?: TxData): Promise<string>;
        estimateGasAsync(txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(): string;
    };
    revokeAuthentication: {
        sendTransactionAsync(addr_0: string, txData?: TxData): Promise<string>;
        estimateGasAsync(addr_0: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(addr_0: string): string;
    };
    startGrantAuthentication: {
        sendTransactionAsync(addr_0: string, txData?: TxData): Promise<string>;
        estimateGasAsync(addr_0: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(addr_0: string): string;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner_0: string, txData?: TxData): Promise<string>;
        estimateGasAsync(newOwner_0: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(newOwner_0: string): string;
    };
    grantInitialAuthentication: {
        sendTransactionAsync(authAddress_0: string, txData?: TxData): Promise<string>;
        estimateGasAsync(authAddress_0: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(authAddress_0: string): string;
    };
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>);
}
