import { EncoderOverrides, ContractFunctionObj, ContractTxFunctionObj, BaseContract } from '@0x/base-contract';
import { ContractAbi, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
export declare class WyvernExchangeContract extends BaseContract {
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
    name(): ContractFunctionObj<string>;
    tokenTransferProxy(): ContractFunctionObj<string>;
    staticCall(target: string, calldata: string, extradata: string): ContractFunctionObj<boolean>;
    changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee: BigNumber): ContractTxFunctionObj<void>;
    changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee: BigNumber): ContractTxFunctionObj<void>;
    guardedArrayReplace(array: string, desired: string, mask: string): ContractFunctionObj<string>;
    minimumTakerProtocolFee(): ContractFunctionObj<BigNumber>;
    codename(): ContractFunctionObj<string>;
    testCopyAddress(addr: string): ContractFunctionObj<string>;
    testCopy(arrToCopy: string): ContractFunctionObj<string>;
    calculateCurrentPrice_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string): ContractFunctionObj<BigNumber>;
    changeDevWalletAddress(newDevWalletAddress: string): ContractTxFunctionObj<void>;
    changeProtocolFeeRecipient(newProtocolFeeRecipient: string): ContractTxFunctionObj<void>;
    version(): ContractFunctionObj<string>;
    orderCalldataCanMatch(buyCalldata: string, buyReplacementPattern: string, sellCalldata: string, sellReplacementPattern: string): ContractFunctionObj<boolean>;
    validateOrder_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string, v: number | BigNumber, r: string, s: string): ContractFunctionObj<boolean>;
    calculateFinalPrice(side: number | BigNumber, saleKind: number | BigNumber, basePrice: BigNumber, extra: BigNumber, listingTime: BigNumber, expirationTime: BigNumber): ContractFunctionObj<BigNumber>;
    protocolFeeRecipient(): ContractFunctionObj<string>;
    renounceOwnership(): ContractTxFunctionObj<void>;
    hashOrder_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string): ContractFunctionObj<string>;
    ordersCanMatch_(addrs: string[], uints: BigNumber[], feeMethodsSidesKindsHowToCalls: Array<number | BigNumber>, calldataBuy: string, calldataSell: string, replacementPatternBuy: string, replacementPatternSell: string, staticExtradataBuy: string, staticExtradataSell: string): ContractFunctionObj<boolean>;
    approveOrder_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string, orderbookInclusionDesired: boolean): ContractTxFunctionObj<void>;
    registry(): ContractFunctionObj<string>;
    minimumMakerProtocolFee(): ContractFunctionObj<BigNumber>;
    hashToSign_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string): ContractFunctionObj<string>;
    cancelledOrFinalized(index_0: string): ContractFunctionObj<boolean>;
    owner(): ContractFunctionObj<string>;
    devWallet(): ContractFunctionObj<string>;
    exchangeToken(): ContractFunctionObj<string>;
    cancelOrder_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string, v: number | BigNumber, r: string, s: string): ContractTxFunctionObj<void>;
    atomicMatch_(addrs: string[], uints: BigNumber[], feeMethodsSidesKindsHowToCalls: Array<number | BigNumber>, calldataBuy: string, calldataSell: string, replacementPatternBuy: string, replacementPatternSell: string, staticExtradataBuy: string, staticExtradataSell: string, vs: Array<number | BigNumber>, rssMetadata: string[]): ContractTxFunctionObj<void>;
    validateOrderParameters_(addrs: string[], uints: BigNumber[], feeMethod: number | BigNumber, side: number | BigNumber, saleKind: number | BigNumber, howToCall: number | BigNumber, calldata: string, replacementPattern: string, staticExtradata: string): ContractFunctionObj<boolean>;
    INVERSE_BASIS_POINT(): ContractFunctionObj<BigNumber>;
    calculateMatchPrice_(addrs: string[], uints: BigNumber[], feeMethodsSidesKindsHowToCalls: Array<number | BigNumber>, calldataBuy: string, calldataSell: string, replacementPatternBuy: string, replacementPatternSell: string, staticExtradataBuy: string, staticExtradataSell: string): ContractFunctionObj<BigNumber>;
    approvedOrders(index_0: string): ContractFunctionObj<boolean>;
    transferOwnership(_newOwner: string): ContractTxFunctionObj<void>;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, logDecodeDependencies?: {
        [contractName: string]: ContractAbi;
    }, deployedBytecode?: string | undefined, encoderOverrides?: Partial<EncoderOverrides>);
}
