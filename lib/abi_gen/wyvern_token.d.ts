import { EncoderOverrides, ContractFunctionObj, ContractTxFunctionObj, BaseContract } from '@0x/base-contract';
import { ContractAbi, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
export declare class WyvernTokenContract extends BaseContract {
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
    MULTIPLIER(): ContractFunctionObj<BigNumber>;
    name(): ContractFunctionObj<string>;
    maximumRedeemable(): ContractFunctionObj<BigNumber>;
    approve(_spender: string, _value: BigNumber): ContractTxFunctionObj<boolean>;
    totalSupply(): ContractFunctionObj<BigNumber>;
    multiplier(): ContractFunctionObj<BigNumber>;
    transferFrom(_from: string, _to: string, _value: BigNumber): ContractTxFunctionObj<boolean>;
    decimals(): ContractFunctionObj<BigNumber>;
    burn(_value: BigNumber): ContractTxFunctionObj<void>;
    pubKeyToEthereumAddress(pubKey: string): ContractFunctionObj<string>;
    MINT_AMOUNT(): ContractFunctionObj<BigNumber>;
    decreaseApproval(_spender: string, _subtractedValue: BigNumber): ContractTxFunctionObj<boolean>;
    balanceOf(_owner: string): ContractFunctionObj<BigNumber>;
    redeemUTXO(txid: string, outputIndex: number | BigNumber, satoshis: BigNumber, proof: string[], pubKey: string, isCompressed: boolean, v: number | BigNumber, r: string, s: string): ContractTxFunctionObj<BigNumber>;
    canRedeemUTXOHash(merkleLeafHash: string, proof: string[]): ContractFunctionObj<boolean>;
    releaseTokens(destination: string): ContractTxFunctionObj<void>;
    symbol(): ContractFunctionObj<string>;
    transfer(_to: string, _value: BigNumber): ContractTxFunctionObj<boolean>;
    validateSignature(hash: string, v: number | BigNumber, r: string, s: string, expected: string): ContractFunctionObj<boolean>;
    verifyProof(proof: string[], merkleLeafHash: string): ContractFunctionObj<boolean>;
    canRedeemUTXO(txid: string, originalAddress: string, outputIndex: number | BigNumber, satoshis: BigNumber, proof: string[]): ContractFunctionObj<boolean>;
    ecdsaVerify(addr: string, pubKey: string, v: number | BigNumber, r: string, s: string): ContractFunctionObj<boolean>;
    increaseApproval(_spender: string, _addedValue: BigNumber): ContractTxFunctionObj<boolean>;
    allowance(_owner: string, _spender: string): ContractFunctionObj<BigNumber>;
    pubKeyToBitcoinAddress(pubKey: string, isCompressed: boolean): ContractFunctionObj<string>;
    rootUTXOMerkleTreeHash(): ContractFunctionObj<string>;
    totalRedeemed(): ContractFunctionObj<BigNumber>;
    SATS_TO_TOKENS(): ContractFunctionObj<BigNumber>;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, logDecodeDependencies?: {
        [contractName: string]: ContractAbi;
    }, deployedBytecode?: string | undefined, encoderOverrides?: Partial<EncoderOverrides>);
}
