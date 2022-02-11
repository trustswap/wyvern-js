import { EncoderOverrides, ContractFunctionObj, ContractTxFunctionObj, BaseContract } from '@0x/base-contract';
import { ContractAbi, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
export declare class WyvernProxyRegistryContract extends BaseContract {
    /**
     * @ignore
     */
    static deployedBytecode: string | undefined;
    static contractName: string;
    private readonly _methodABIIndex;
    /**
     * @returns      The contract ABI
     */
    static ABI(): ContractAbi;
    getFunctionSignature(methodName: string): string;
    getABIDecodedTransactionData<T>(methodName: string, callData: string): T;
    getABIDecodedReturnData<T>(methodName: string, callData: string): T;
    getSelector(methodName: string): string;
    DELAY_PERIOD(): ContractTxFunctionObj<BigNumber>;
    contracts(index_0: string): ContractTxFunctionObj<boolean>;
    delegateProxyImplementation(): ContractTxFunctionObj<string>;
    endGrantAuthentication(addr: string): ContractTxFunctionObj<void>;
    initialAddressSet(): ContractTxFunctionObj<boolean>;
    name(): ContractTxFunctionObj<string>;
    owner(): ContractTxFunctionObj<string>;
    pending(index_0: string): ContractTxFunctionObj<BigNumber>;
    proxies(index_0: string): ContractFunctionObj<string>;
    registerProxy(): ContractTxFunctionObj<string>;
    renounceOwnership(): ContractTxFunctionObj<void>;
    revokeAuthentication(addr: string): ContractTxFunctionObj<void>;
    startGrantAuthentication(addr: string): ContractTxFunctionObj<void>;
    transferOwnership(newOwner: string): ContractTxFunctionObj<void>;
    grantInitialAuthentication(authAddress: string): ContractTxFunctionObj<void>;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, logDecodeDependencies?: {
        [contractName: string]: ContractAbi;
    }, deployedBytecode?: string | undefined, encoderOverrides?: Partial<EncoderOverrides>);
}
