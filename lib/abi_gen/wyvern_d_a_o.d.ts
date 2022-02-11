import { EncoderOverrides, ContractFunctionObj, ContractTxFunctionObj, BaseContract } from '@0x/base-contract';
import { ContractAbi, TxData, SupportedProvider } from 'ethereum-types';
import { BigNumber } from '@0x/utils';
export declare class WyvernDAOContract extends BaseContract {
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
    proposals(index_0: BigNumber): ContractFunctionObj<[string, BigNumber, string, BigNumber, BigNumber, boolean, boolean, BigNumber, string]>;
    delegatesByDelegator(index_0: string): ContractFunctionObj<string>;
    name(): ContractFunctionObj<string>;
    REQUIRED_SHARES_TO_BE_BOARD_MEMBER(): ContractFunctionObj<BigNumber>;
    lockedDelegatingTokens(index_0: string): ContractFunctionObj<BigNumber>;
    countVotes(proposalNumber: BigNumber): ContractFunctionObj<[BigNumber, BigNumber, BigNumber]>;
    executeProposal(proposalNumber: BigNumber, transactionBytecode: string): ContractTxFunctionObj<void>;
    sharesTokenAddress(): ContractFunctionObj<string>;
    delegatedAmountsByDelegate(index_0: string): ContractFunctionObj<BigNumber>;
    numProposals(): ContractFunctionObj<BigNumber>;
    hasVoted(proposalNumber: BigNumber, shareholder: string): ContractFunctionObj<boolean>;
    TOKEN_DECIMALS(): ContractFunctionObj<BigNumber>;
    setDelegateAndLockTokens(tokensToLock: BigNumber, delegate: string): ContractTxFunctionObj<void>;
    clearDelegateAndUnlockTokens(): ContractTxFunctionObj<BigNumber>;
    debatingPeriodInMinutes(): ContractFunctionObj<BigNumber>;
    changeVotingRules(minimumSharesToPassAVote: BigNumber, minutesForDebate: BigNumber, sharesToBeBoardMember: BigNumber): ContractTxFunctionObj<void>;
    minimumQuorum(): ContractFunctionObj<BigNumber>;
    receiveApproval(from: string, value: BigNumber, token: string, extraData: string): ContractTxFunctionObj<void>;
    tokenLocker(): ContractFunctionObj<string>;
    MINIMUM_QUORUM(): ContractFunctionObj<BigNumber>;
    requiredSharesToBeBoardMember(): ContractFunctionObj<BigNumber>;
    vote(proposalNumber: BigNumber, supportsProposal: boolean): ContractTxFunctionObj<BigNumber>;
    newProposal(beneficiary: string, weiAmount: BigNumber, jobMetadataHash: string, transactionBytecode: string): ContractTxFunctionObj<BigNumber>;
    DEBATE_PERIOD_MINUTES(): ContractFunctionObj<BigNumber>;
    checkProposalCode(proposalNumber: BigNumber, beneficiary: string, weiAmount: BigNumber, transactionBytecode: string): ContractFunctionObj<boolean>;
    totalLockedTokens(): ContractFunctionObj<BigNumber>;
    constructor(address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>, logDecodeDependencies?: {
        [contractName: string]: ContractAbi;
    }, deployedBytecode?: string | undefined, encoderOverrides?: Partial<EncoderOverrides>);
}
