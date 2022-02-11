"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WyvernExchangeContract = void 0;
// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma enum-naming
// tslint:disable:whitespace no-unbound-method no-trailing-whitespace
// tslint:disable:no-unused-variable
const base_contract_1 = require("@0x/base-contract");
const utils_1 = require("@0x/utils");
const assert_1 = require("@0x/assert");
// tslint:enable:no-unused-variable
/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
class WyvernExchangeContract extends base_contract_1.BaseContract {
    constructor(address, supportedProvider, txDefaults, logDecodeDependencies, deployedBytecode = WyvernExchangeContract.deployedBytecode, encoderOverrides) {
        super('WyvernExchange', WyvernExchangeContract.ABI(), address, supportedProvider, txDefaults, logDecodeDependencies, deployedBytecode, encoderOverrides);
        this._methodABIIndex = {};
        utils_1.classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
        WyvernExchangeContract.ABI().forEach((item, index) => {
            if (item.type === 'function') {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    /**
     * @returns      The contract ABI
     */
    static ABI() {
        const abi = [
            {
                constant: true,
                inputs: [],
                name: 'name',
                outputs: [
                    {
                        name: '',
                        type: 'string',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'tokenTransferProxy',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'target',
                        type: 'address',
                    },
                    {
                        name: 'calldata',
                        type: 'bytes',
                    },
                    {
                        name: 'extradata',
                        type: 'bytes',
                    },
                ],
                name: 'staticCall',
                outputs: [
                    {
                        name: 'result',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'newMinimumMakerProtocolFee',
                        type: 'uint256',
                    },
                ],
                name: 'changeMinimumMakerProtocolFee',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'newMinimumTakerProtocolFee',
                        type: 'uint256',
                    },
                ],
                name: 'changeMinimumTakerProtocolFee',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'array',
                        type: 'bytes',
                    },
                    {
                        name: 'desired',
                        type: 'bytes',
                    },
                    {
                        name: 'mask',
                        type: 'bytes',
                    },
                ],
                name: 'guardedArrayReplace',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'minimumTakerProtocolFee',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'codename',
                outputs: [
                    {
                        name: '',
                        type: 'string',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'addr',
                        type: 'address',
                    },
                ],
                name: 'testCopyAddress',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'arrToCopy',
                        type: 'bytes',
                    },
                ],
                name: 'testCopy',
                outputs: [
                    {
                        name: '',
                        type: 'bytes',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'addrs',
                        type: 'address[7]',
                    },
                    {
                        name: 'uints',
                        type: 'uint256[9]',
                    },
                    {
                        name: 'feeMethod',
                        type: 'uint8',
                    },
                    {
                        name: 'side',
                        type: 'uint8',
                    },
                    {
                        name: 'saleKind',
                        type: 'uint8',
                    },
                    {
                        name: 'howToCall',
                        type: 'uint8',
                    },
                    {
                        name: 'calldata',
                        type: 'bytes',
                    },
                    {
                        name: 'replacementPattern',
                        type: 'bytes',
                    },
                    {
                        name: 'staticExtradata',
                        type: 'bytes',
                    },
                ],
                name: 'calculateCurrentPrice_',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'newDevWalletAddress',
                        type: 'address',
                    },
                ],
                name: 'changeDevWalletAddress',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'newProtocolFeeRecipient',
                        type: 'address',
                    },
                ],
                name: 'changeProtocolFeeRecipient',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'version',
                outputs: [
                    {
                        name: '',
                        type: 'string',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'buyCalldata',
                        type: 'bytes',
                    },
                    {
                        name: 'buyReplacementPattern',
                        type: 'bytes',
                    },
                    {
                        name: 'sellCalldata',
                        type: 'bytes',
                    },
                    {
                        name: 'sellReplacementPattern',
                        type: 'bytes',
                    },
                ],
                name: 'orderCalldataCanMatch',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'addrs',
                        type: 'address[7]',
                    },
                    {
                        name: 'uints',
                        type: 'uint256[9]',
                    },
                    {
                        name: 'feeMethod',
                        type: 'uint8',
                    },
                    {
                        name: 'side',
                        type: 'uint8',
                    },
                    {
                        name: 'saleKind',
                        type: 'uint8',
                    },
                    {
                        name: 'howToCall',
                        type: 'uint8',
                    },
                    {
                        name: 'calldata',
                        type: 'bytes',
                    },
                    {
                        name: 'replacementPattern',
                        type: 'bytes',
                    },
                    {
                        name: 'staticExtradata',
                        type: 'bytes',
                    },
                    {
                        name: 'v',
                        type: 'uint8',
                    },
                    {
                        name: 'r',
                        type: 'bytes32',
                    },
                    {
                        name: 's',
                        type: 'bytes32',
                    },
                ],
                name: 'validateOrder_',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'side',
                        type: 'uint8',
                    },
                    {
                        name: 'saleKind',
                        type: 'uint8',
                    },
                    {
                        name: 'basePrice',
                        type: 'uint256',
                    },
                    {
                        name: 'extra',
                        type: 'uint256',
                    },
                    {
                        name: 'listingTime',
                        type: 'uint256',
                    },
                    {
                        name: 'expirationTime',
                        type: 'uint256',
                    },
                ],
                name: 'calculateFinalPrice',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'protocolFeeRecipient',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [],
                name: 'renounceOwnership',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'addrs',
                        type: 'address[7]',
                    },
                    {
                        name: 'uints',
                        type: 'uint256[9]',
                    },
                    {
                        name: 'feeMethod',
                        type: 'uint8',
                    },
                    {
                        name: 'side',
                        type: 'uint8',
                    },
                    {
                        name: 'saleKind',
                        type: 'uint8',
                    },
                    {
                        name: 'howToCall',
                        type: 'uint8',
                    },
                    {
                        name: 'calldata',
                        type: 'bytes',
                    },
                    {
                        name: 'replacementPattern',
                        type: 'bytes',
                    },
                    {
                        name: 'staticExtradata',
                        type: 'bytes',
                    },
                ],
                name: 'hashOrder_',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'addrs',
                        type: 'address[14]',
                    },
                    {
                        name: 'uints',
                        type: 'uint256[18]',
                    },
                    {
                        name: 'feeMethodsSidesKindsHowToCalls',
                        type: 'uint8[8]',
                    },
                    {
                        name: 'calldataBuy',
                        type: 'bytes',
                    },
                    {
                        name: 'calldataSell',
                        type: 'bytes',
                    },
                    {
                        name: 'replacementPatternBuy',
                        type: 'bytes',
                    },
                    {
                        name: 'replacementPatternSell',
                        type: 'bytes',
                    },
                    {
                        name: 'staticExtradataBuy',
                        type: 'bytes',
                    },
                    {
                        name: 'staticExtradataSell',
                        type: 'bytes',
                    },
                ],
                name: 'ordersCanMatch_',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'addrs',
                        type: 'address[7]',
                    },
                    {
                        name: 'uints',
                        type: 'uint256[9]',
                    },
                    {
                        name: 'feeMethod',
                        type: 'uint8',
                    },
                    {
                        name: 'side',
                        type: 'uint8',
                    },
                    {
                        name: 'saleKind',
                        type: 'uint8',
                    },
                    {
                        name: 'howToCall',
                        type: 'uint8',
                    },
                    {
                        name: 'calldata',
                        type: 'bytes',
                    },
                    {
                        name: 'replacementPattern',
                        type: 'bytes',
                    },
                    {
                        name: 'staticExtradata',
                        type: 'bytes',
                    },
                    {
                        name: 'orderbookInclusionDesired',
                        type: 'bool',
                    },
                ],
                name: 'approveOrder_',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'registry',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'minimumMakerProtocolFee',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'addrs',
                        type: 'address[7]',
                    },
                    {
                        name: 'uints',
                        type: 'uint256[9]',
                    },
                    {
                        name: 'feeMethod',
                        type: 'uint8',
                    },
                    {
                        name: 'side',
                        type: 'uint8',
                    },
                    {
                        name: 'saleKind',
                        type: 'uint8',
                    },
                    {
                        name: 'howToCall',
                        type: 'uint8',
                    },
                    {
                        name: 'calldata',
                        type: 'bytes',
                    },
                    {
                        name: 'replacementPattern',
                        type: 'bytes',
                    },
                    {
                        name: 'staticExtradata',
                        type: 'bytes',
                    },
                ],
                name: 'hashToSign_',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'bytes32',
                    },
                ],
                name: 'cancelledOrFinalized',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'owner',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'devWallet',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'exchangeToken',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'addrs',
                        type: 'address[7]',
                    },
                    {
                        name: 'uints',
                        type: 'uint256[9]',
                    },
                    {
                        name: 'feeMethod',
                        type: 'uint8',
                    },
                    {
                        name: 'side',
                        type: 'uint8',
                    },
                    {
                        name: 'saleKind',
                        type: 'uint8',
                    },
                    {
                        name: 'howToCall',
                        type: 'uint8',
                    },
                    {
                        name: 'calldata',
                        type: 'bytes',
                    },
                    {
                        name: 'replacementPattern',
                        type: 'bytes',
                    },
                    {
                        name: 'staticExtradata',
                        type: 'bytes',
                    },
                    {
                        name: 'v',
                        type: 'uint8',
                    },
                    {
                        name: 'r',
                        type: 'bytes32',
                    },
                    {
                        name: 's',
                        type: 'bytes32',
                    },
                ],
                name: 'cancelOrder_',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'addrs',
                        type: 'address[14]',
                    },
                    {
                        name: 'uints',
                        type: 'uint256[18]',
                    },
                    {
                        name: 'feeMethodsSidesKindsHowToCalls',
                        type: 'uint8[8]',
                    },
                    {
                        name: 'calldataBuy',
                        type: 'bytes',
                    },
                    {
                        name: 'calldataSell',
                        type: 'bytes',
                    },
                    {
                        name: 'replacementPatternBuy',
                        type: 'bytes',
                    },
                    {
                        name: 'replacementPatternSell',
                        type: 'bytes',
                    },
                    {
                        name: 'staticExtradataBuy',
                        type: 'bytes',
                    },
                    {
                        name: 'staticExtradataSell',
                        type: 'bytes',
                    },
                    {
                        name: 'vs',
                        type: 'uint8[2]',
                    },
                    {
                        name: 'rssMetadata',
                        type: 'bytes32[5]',
                    },
                ],
                name: 'atomicMatch_',
                outputs: [],
                payable: true,
                stateMutability: 'payable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'addrs',
                        type: 'address[7]',
                    },
                    {
                        name: 'uints',
                        type: 'uint256[9]',
                    },
                    {
                        name: 'feeMethod',
                        type: 'uint8',
                    },
                    {
                        name: 'side',
                        type: 'uint8',
                    },
                    {
                        name: 'saleKind',
                        type: 'uint8',
                    },
                    {
                        name: 'howToCall',
                        type: 'uint8',
                    },
                    {
                        name: 'calldata',
                        type: 'bytes',
                    },
                    {
                        name: 'replacementPattern',
                        type: 'bytes',
                    },
                    {
                        name: 'staticExtradata',
                        type: 'bytes',
                    },
                ],
                name: 'validateOrderParameters_',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'INVERSE_BASIS_POINT',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'addrs',
                        type: 'address[14]',
                    },
                    {
                        name: 'uints',
                        type: 'uint256[18]',
                    },
                    {
                        name: 'feeMethodsSidesKindsHowToCalls',
                        type: 'uint8[8]',
                    },
                    {
                        name: 'calldataBuy',
                        type: 'bytes',
                    },
                    {
                        name: 'calldataSell',
                        type: 'bytes',
                    },
                    {
                        name: 'replacementPatternBuy',
                        type: 'bytes',
                    },
                    {
                        name: 'replacementPatternSell',
                        type: 'bytes',
                    },
                    {
                        name: 'staticExtradataBuy',
                        type: 'bytes',
                    },
                    {
                        name: 'staticExtradataSell',
                        type: 'bytes',
                    },
                ],
                name: 'calculateMatchPrice_',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'bytes32',
                    },
                ],
                name: 'approvedOrders',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: '_newOwner',
                        type: 'address',
                    },
                ],
                name: 'transferOwnership',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'registryAddress',
                        type: 'address',
                    },
                    {
                        name: 'tokenTransferProxyAddress',
                        type: 'address',
                    },
                    {
                        name: 'tokenAddress',
                        type: 'address',
                    },
                    {
                        name: 'protocolFeeAddress',
                        type: 'address',
                    },
                    {
                        name: 'devWalletAddress',
                        type: 'address',
                    },
                ],
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'hash',
                        type: 'bytes32',
                        indexed: true,
                    },
                    {
                        name: 'exchange',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'maker',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'taker',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'makerRelayerFee',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'takerRelayerFee',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'makerProtocolFee',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'takerProtocolFee',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'feeRecipient',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'feeMethod',
                        type: 'uint8',
                        indexed: false,
                    },
                    {
                        name: 'side',
                        type: 'uint8',
                        indexed: false,
                    },
                    {
                        name: 'saleKind',
                        type: 'uint8',
                        indexed: false,
                    },
                    {
                        name: 'target',
                        type: 'address',
                        indexed: false,
                    },
                ],
                name: 'OrderApprovedPartOne',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'hash',
                        type: 'bytes32',
                        indexed: true,
                    },
                    {
                        name: 'howToCall',
                        type: 'uint8',
                        indexed: false,
                    },
                    {
                        name: 'calldata',
                        type: 'bytes',
                        indexed: false,
                    },
                    {
                        name: 'replacementPattern',
                        type: 'bytes',
                        indexed: false,
                    },
                    {
                        name: 'staticTarget',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'staticExtradata',
                        type: 'bytes',
                        indexed: false,
                    },
                    {
                        name: 'paymentToken',
                        type: 'address',
                        indexed: false,
                    },
                    {
                        name: 'basePrice',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'extra',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'listingTime',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'expirationTime',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'salt',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'orderbookInclusionDesired',
                        type: 'bool',
                        indexed: false,
                    },
                ],
                name: 'OrderApprovedPartTwo',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'hash',
                        type: 'bytes32',
                        indexed: true,
                    },
                ],
                name: 'OrderCancelled',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'buyHash',
                        type: 'bytes32',
                        indexed: false,
                    },
                    {
                        name: 'sellHash',
                        type: 'bytes32',
                        indexed: false,
                    },
                    {
                        name: 'maker',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'taker',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'price',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'metadata',
                        type: 'bytes32',
                        indexed: true,
                    },
                ],
                name: 'OrdersMatched',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'previousOwner',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'OwnershipRenounced',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'previousOwner',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'newOwner',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'OwnershipTransferred',
                outputs: [],
                type: 'event',
            },
        ];
        return abi;
    }
    getFunctionSignature(methodName) {
        const index = this._methodABIIndex[methodName];
        const methodAbi = WyvernExchangeContract.ABI()[index]; // tslint:disable-line:no-unnecessary-type-assertion
        const functionSignature = base_contract_1.methodAbiToFunctionSignature(methodAbi);
        return functionSignature;
    }
    getABIDecodedTransactionData(methodName, callData) {
        const functionSignature = this.getFunctionSignature(methodName);
        const self = this;
        const abiEncoder = self._lookupAbiEncoder(functionSignature);
        const abiDecodedCallData = abiEncoder.strictDecode(callData);
        return abiDecodedCallData;
    }
    getABIDecodedReturnData(methodName, callData) {
        if (this._encoderOverrides.decodeOutput) {
            return this._encoderOverrides.decodeOutput(methodName, callData);
        }
        const functionSignature = this.getFunctionSignature(methodName);
        const self = this;
        const abiEncoder = self._lookupAbiEncoder(functionSignature);
        const abiDecodedCallData = abiEncoder.strictDecodeReturnValue(callData);
        return abiDecodedCallData;
    }
    getSelector(methodName) {
        const functionSignature = this.getFunctionSignature(methodName);
        const self = this;
        const abiEncoder = self._lookupAbiEncoder(functionSignature);
        return abiEncoder.getSelector();
    }
    name() {
        const self = this;
        const functionSignature = 'name()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    }
    ;
    tokenTransferProxy() {
        const self = this;
        const functionSignature = 'tokenTransferProxy()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    }
    ;
    staticCall(target, calldata, extradata) {
        const self = this;
        assert_1.assert.isString('target', target);
        assert_1.assert.isString('calldata', calldata);
        assert_1.assert.isString('extradata', extradata);
        const functionSignature = 'staticCall(address,bytes,bytes)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [target.toLowerCase(),
                    calldata,
                    extradata
                ]);
            },
        };
    }
    ;
    changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee) {
        const self = this;
        assert_1.assert.isBigNumber('newMinimumMakerProtocolFee', newMinimumMakerProtocolFee);
        const functionSignature = 'changeMinimumMakerProtocolFee(uint256)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync(txData, opts = { shouldValidate: true }) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this));
                    if (opts.shouldValidate !== false) {
                        yield this.callAsync(txDataWithDefaults);
                    }
                    return self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
                });
            },
            awaitTransactionSuccessAsync(txData, opts = { shouldValidate: true }) {
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync(txData) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
                });
            },
            createAccessListAsync(txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock);
                });
            },
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [newMinimumMakerProtocolFee
                ]);
            },
        };
    }
    ;
    changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee) {
        const self = this;
        assert_1.assert.isBigNumber('newMinimumTakerProtocolFee', newMinimumTakerProtocolFee);
        const functionSignature = 'changeMinimumTakerProtocolFee(uint256)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync(txData, opts = { shouldValidate: true }) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this));
                    if (opts.shouldValidate !== false) {
                        yield this.callAsync(txDataWithDefaults);
                    }
                    return self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
                });
            },
            awaitTransactionSuccessAsync(txData, opts = { shouldValidate: true }) {
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync(txData) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
                });
            },
            createAccessListAsync(txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock);
                });
            },
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [newMinimumTakerProtocolFee
                ]);
            },
        };
    }
    ;
    guardedArrayReplace(array, desired, mask) {
        const self = this;
        assert_1.assert.isString('array', array);
        assert_1.assert.isString('desired', desired);
        assert_1.assert.isString('mask', mask);
        const functionSignature = 'guardedArrayReplace(bytes,bytes,bytes)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    let rawCallResult;
                    if (self._deployedBytecodeIfExists) {
                        rawCallResult = yield self._evmExecAsync(this.getABIEncodedTransactionData());
                    }
                    else {
                        rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    }
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [array,
                    desired,
                    mask
                ]);
            },
        };
    }
    ;
    minimumTakerProtocolFee() {
        const self = this;
        const functionSignature = 'minimumTakerProtocolFee()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    }
    ;
    codename() {
        const self = this;
        const functionSignature = 'codename()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    }
    ;
    testCopyAddress(addr) {
        const self = this;
        assert_1.assert.isString('addr', addr);
        const functionSignature = 'testCopyAddress(address)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    let rawCallResult;
                    if (self._deployedBytecodeIfExists) {
                        rawCallResult = yield self._evmExecAsync(this.getABIEncodedTransactionData());
                    }
                    else {
                        rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    }
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [addr.toLowerCase()
                ]);
            },
        };
    }
    ;
    testCopy(arrToCopy) {
        const self = this;
        assert_1.assert.isString('arrToCopy', arrToCopy);
        const functionSignature = 'testCopy(bytes)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    let rawCallResult;
                    if (self._deployedBytecodeIfExists) {
                        rawCallResult = yield self._evmExecAsync(this.getABIEncodedTransactionData());
                    }
                    else {
                        rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    }
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [arrToCopy
                ]);
            },
        };
    }
    ;
    calculateCurrentPrice_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata) {
        const self = this;
        assert_1.assert.isArray('addrs', addrs);
        assert_1.assert.isArray('uints', uints);
        assert_1.assert.isNumberOrBigNumber('feeMethod', feeMethod);
        assert_1.assert.isNumberOrBigNumber('side', side);
        assert_1.assert.isNumberOrBigNumber('saleKind', saleKind);
        assert_1.assert.isNumberOrBigNumber('howToCall', howToCall);
        assert_1.assert.isString('calldata', calldata);
        assert_1.assert.isString('replacementPattern', replacementPattern);
        assert_1.assert.isString('staticExtradata', staticExtradata);
        const functionSignature = 'calculateCurrentPrice_(address[7],uint256[9],uint8,uint8,uint8,uint8,bytes,bytes,bytes)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [addrs,
                    uints,
                    feeMethod,
                    side,
                    saleKind,
                    howToCall,
                    calldata,
                    replacementPattern,
                    staticExtradata
                ]);
            },
        };
    }
    ;
    changeDevWalletAddress(newDevWalletAddress) {
        const self = this;
        assert_1.assert.isString('newDevWalletAddress', newDevWalletAddress);
        const functionSignature = 'changeDevWalletAddress(address)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync(txData, opts = { shouldValidate: true }) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this));
                    if (opts.shouldValidate !== false) {
                        yield this.callAsync(txDataWithDefaults);
                    }
                    return self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
                });
            },
            awaitTransactionSuccessAsync(txData, opts = { shouldValidate: true }) {
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync(txData) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
                });
            },
            createAccessListAsync(txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock);
                });
            },
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [newDevWalletAddress.toLowerCase()
                ]);
            },
        };
    }
    ;
    changeProtocolFeeRecipient(newProtocolFeeRecipient) {
        const self = this;
        assert_1.assert.isString('newProtocolFeeRecipient', newProtocolFeeRecipient);
        const functionSignature = 'changeProtocolFeeRecipient(address)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync(txData, opts = { shouldValidate: true }) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this));
                    if (opts.shouldValidate !== false) {
                        yield this.callAsync(txDataWithDefaults);
                    }
                    return self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
                });
            },
            awaitTransactionSuccessAsync(txData, opts = { shouldValidate: true }) {
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync(txData) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
                });
            },
            createAccessListAsync(txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock);
                });
            },
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [newProtocolFeeRecipient.toLowerCase()
                ]);
            },
        };
    }
    ;
    version() {
        const self = this;
        const functionSignature = 'version()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    }
    ;
    orderCalldataCanMatch(buyCalldata, buyReplacementPattern, sellCalldata, sellReplacementPattern) {
        const self = this;
        assert_1.assert.isString('buyCalldata', buyCalldata);
        assert_1.assert.isString('buyReplacementPattern', buyReplacementPattern);
        assert_1.assert.isString('sellCalldata', sellCalldata);
        assert_1.assert.isString('sellReplacementPattern', sellReplacementPattern);
        const functionSignature = 'orderCalldataCanMatch(bytes,bytes,bytes,bytes)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    let rawCallResult;
                    if (self._deployedBytecodeIfExists) {
                        rawCallResult = yield self._evmExecAsync(this.getABIEncodedTransactionData());
                    }
                    else {
                        rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    }
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [buyCalldata,
                    buyReplacementPattern,
                    sellCalldata,
                    sellReplacementPattern
                ]);
            },
        };
    }
    ;
    validateOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, v, r, s) {
        const self = this;
        assert_1.assert.isArray('addrs', addrs);
        assert_1.assert.isArray('uints', uints);
        assert_1.assert.isNumberOrBigNumber('feeMethod', feeMethod);
        assert_1.assert.isNumberOrBigNumber('side', side);
        assert_1.assert.isNumberOrBigNumber('saleKind', saleKind);
        assert_1.assert.isNumberOrBigNumber('howToCall', howToCall);
        assert_1.assert.isString('calldata', calldata);
        assert_1.assert.isString('replacementPattern', replacementPattern);
        assert_1.assert.isString('staticExtradata', staticExtradata);
        assert_1.assert.isNumberOrBigNumber('v', v);
        assert_1.assert.isString('r', r);
        assert_1.assert.isString('s', s);
        const functionSignature = 'validateOrder_(address[7],uint256[9],uint8,uint8,uint8,uint8,bytes,bytes,bytes,uint8,bytes32,bytes32)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [addrs,
                    uints,
                    feeMethod,
                    side,
                    saleKind,
                    howToCall,
                    calldata,
                    replacementPattern,
                    staticExtradata,
                    v,
                    r,
                    s
                ]);
            },
        };
    }
    ;
    calculateFinalPrice(side, saleKind, basePrice, extra, listingTime, expirationTime) {
        const self = this;
        assert_1.assert.isNumberOrBigNumber('side', side);
        assert_1.assert.isNumberOrBigNumber('saleKind', saleKind);
        assert_1.assert.isBigNumber('basePrice', basePrice);
        assert_1.assert.isBigNumber('extra', extra);
        assert_1.assert.isBigNumber('listingTime', listingTime);
        assert_1.assert.isBigNumber('expirationTime', expirationTime);
        const functionSignature = 'calculateFinalPrice(uint8,uint8,uint256,uint256,uint256,uint256)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [side,
                    saleKind,
                    basePrice,
                    extra,
                    listingTime,
                    expirationTime
                ]);
            },
        };
    }
    ;
    protocolFeeRecipient() {
        const self = this;
        const functionSignature = 'protocolFeeRecipient()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    }
    ;
    renounceOwnership() {
        const self = this;
        const functionSignature = 'renounceOwnership()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync(txData, opts = { shouldValidate: true }) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this));
                    if (opts.shouldValidate !== false) {
                        yield this.callAsync(txDataWithDefaults);
                    }
                    return self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
                });
            },
            awaitTransactionSuccessAsync(txData, opts = { shouldValidate: true }) {
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync(txData) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
                });
            },
            createAccessListAsync(txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock);
                });
            },
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    }
    ;
    hashOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata) {
        const self = this;
        assert_1.assert.isArray('addrs', addrs);
        assert_1.assert.isArray('uints', uints);
        assert_1.assert.isNumberOrBigNumber('feeMethod', feeMethod);
        assert_1.assert.isNumberOrBigNumber('side', side);
        assert_1.assert.isNumberOrBigNumber('saleKind', saleKind);
        assert_1.assert.isNumberOrBigNumber('howToCall', howToCall);
        assert_1.assert.isString('calldata', calldata);
        assert_1.assert.isString('replacementPattern', replacementPattern);
        assert_1.assert.isString('staticExtradata', staticExtradata);
        const functionSignature = 'hashOrder_(address[7],uint256[9],uint8,uint8,uint8,uint8,bytes,bytes,bytes)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    let rawCallResult;
                    if (self._deployedBytecodeIfExists) {
                        rawCallResult = yield self._evmExecAsync(this.getABIEncodedTransactionData());
                    }
                    else {
                        rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    }
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [addrs,
                    uints,
                    feeMethod,
                    side,
                    saleKind,
                    howToCall,
                    calldata,
                    replacementPattern,
                    staticExtradata
                ]);
            },
        };
    }
    ;
    ordersCanMatch_(addrs, uints, feeMethodsSidesKindsHowToCalls, calldataBuy, calldataSell, replacementPatternBuy, replacementPatternSell, staticExtradataBuy, staticExtradataSell) {
        const self = this;
        assert_1.assert.isArray('addrs', addrs);
        assert_1.assert.isArray('uints', uints);
        assert_1.assert.isArray('feeMethodsSidesKindsHowToCalls', feeMethodsSidesKindsHowToCalls);
        assert_1.assert.isString('calldataBuy', calldataBuy);
        assert_1.assert.isString('calldataSell', calldataSell);
        assert_1.assert.isString('replacementPatternBuy', replacementPatternBuy);
        assert_1.assert.isString('replacementPatternSell', replacementPatternSell);
        assert_1.assert.isString('staticExtradataBuy', staticExtradataBuy);
        assert_1.assert.isString('staticExtradataSell', staticExtradataSell);
        const functionSignature = 'ordersCanMatch_(address[14],uint256[18],uint8[8],bytes,bytes,bytes,bytes,bytes,bytes)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [addrs,
                    uints,
                    feeMethodsSidesKindsHowToCalls,
                    calldataBuy,
                    calldataSell,
                    replacementPatternBuy,
                    replacementPatternSell,
                    staticExtradataBuy,
                    staticExtradataSell
                ]);
            },
        };
    }
    ;
    approveOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, orderbookInclusionDesired) {
        const self = this;
        assert_1.assert.isArray('addrs', addrs);
        assert_1.assert.isArray('uints', uints);
        assert_1.assert.isNumberOrBigNumber('feeMethod', feeMethod);
        assert_1.assert.isNumberOrBigNumber('side', side);
        assert_1.assert.isNumberOrBigNumber('saleKind', saleKind);
        assert_1.assert.isNumberOrBigNumber('howToCall', howToCall);
        assert_1.assert.isString('calldata', calldata);
        assert_1.assert.isString('replacementPattern', replacementPattern);
        assert_1.assert.isString('staticExtradata', staticExtradata);
        assert_1.assert.isBoolean('orderbookInclusionDesired', orderbookInclusionDesired);
        const functionSignature = 'approveOrder_(address[7],uint256[9],uint8,uint8,uint8,uint8,bytes,bytes,bytes,bool)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync(txData, opts = { shouldValidate: true }) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this));
                    if (opts.shouldValidate !== false) {
                        yield this.callAsync(txDataWithDefaults);
                    }
                    return self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
                });
            },
            awaitTransactionSuccessAsync(txData, opts = { shouldValidate: true }) {
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync(txData) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
                });
            },
            createAccessListAsync(txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock);
                });
            },
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [addrs,
                    uints,
                    feeMethod,
                    side,
                    saleKind,
                    howToCall,
                    calldata,
                    replacementPattern,
                    staticExtradata,
                    orderbookInclusionDesired
                ]);
            },
        };
    }
    ;
    registry() {
        const self = this;
        const functionSignature = 'registry()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    }
    ;
    minimumMakerProtocolFee() {
        const self = this;
        const functionSignature = 'minimumMakerProtocolFee()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    }
    ;
    hashToSign_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata) {
        const self = this;
        assert_1.assert.isArray('addrs', addrs);
        assert_1.assert.isArray('uints', uints);
        assert_1.assert.isNumberOrBigNumber('feeMethod', feeMethod);
        assert_1.assert.isNumberOrBigNumber('side', side);
        assert_1.assert.isNumberOrBigNumber('saleKind', saleKind);
        assert_1.assert.isNumberOrBigNumber('howToCall', howToCall);
        assert_1.assert.isString('calldata', calldata);
        assert_1.assert.isString('replacementPattern', replacementPattern);
        assert_1.assert.isString('staticExtradata', staticExtradata);
        const functionSignature = 'hashToSign_(address[7],uint256[9],uint8,uint8,uint8,uint8,bytes,bytes,bytes)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    let rawCallResult;
                    if (self._deployedBytecodeIfExists) {
                        rawCallResult = yield self._evmExecAsync(this.getABIEncodedTransactionData());
                    }
                    else {
                        rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    }
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [addrs,
                    uints,
                    feeMethod,
                    side,
                    saleKind,
                    howToCall,
                    calldata,
                    replacementPattern,
                    staticExtradata
                ]);
            },
        };
    }
    ;
    cancelledOrFinalized(index_0) {
        const self = this;
        assert_1.assert.isString('index_0', index_0);
        const functionSignature = 'cancelledOrFinalized(bytes32)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [index_0
                ]);
            },
        };
    }
    ;
    owner() {
        const self = this;
        const functionSignature = 'owner()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    }
    ;
    devWallet() {
        const self = this;
        const functionSignature = 'devWallet()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    }
    ;
    exchangeToken() {
        const self = this;
        const functionSignature = 'exchangeToken()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    }
    ;
    cancelOrder_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata, v, r, s) {
        const self = this;
        assert_1.assert.isArray('addrs', addrs);
        assert_1.assert.isArray('uints', uints);
        assert_1.assert.isNumberOrBigNumber('feeMethod', feeMethod);
        assert_1.assert.isNumberOrBigNumber('side', side);
        assert_1.assert.isNumberOrBigNumber('saleKind', saleKind);
        assert_1.assert.isNumberOrBigNumber('howToCall', howToCall);
        assert_1.assert.isString('calldata', calldata);
        assert_1.assert.isString('replacementPattern', replacementPattern);
        assert_1.assert.isString('staticExtradata', staticExtradata);
        assert_1.assert.isNumberOrBigNumber('v', v);
        assert_1.assert.isString('r', r);
        assert_1.assert.isString('s', s);
        const functionSignature = 'cancelOrder_(address[7],uint256[9],uint8,uint8,uint8,uint8,bytes,bytes,bytes,uint8,bytes32,bytes32)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync(txData, opts = { shouldValidate: true }) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this));
                    if (opts.shouldValidate !== false) {
                        yield this.callAsync(txDataWithDefaults);
                    }
                    return self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
                });
            },
            awaitTransactionSuccessAsync(txData, opts = { shouldValidate: true }) {
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync(txData) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
                });
            },
            createAccessListAsync(txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock);
                });
            },
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [addrs,
                    uints,
                    feeMethod,
                    side,
                    saleKind,
                    howToCall,
                    calldata,
                    replacementPattern,
                    staticExtradata,
                    v,
                    r,
                    s
                ]);
            },
        };
    }
    ;
    atomicMatch_(addrs, uints, feeMethodsSidesKindsHowToCalls, calldataBuy, calldataSell, replacementPatternBuy, replacementPatternSell, staticExtradataBuy, staticExtradataSell, vs, rssMetadata) {
        const self = this;
        assert_1.assert.isArray('addrs', addrs);
        assert_1.assert.isArray('uints', uints);
        assert_1.assert.isArray('feeMethodsSidesKindsHowToCalls', feeMethodsSidesKindsHowToCalls);
        assert_1.assert.isString('calldataBuy', calldataBuy);
        assert_1.assert.isString('calldataSell', calldataSell);
        assert_1.assert.isString('replacementPatternBuy', replacementPatternBuy);
        assert_1.assert.isString('replacementPatternSell', replacementPatternSell);
        assert_1.assert.isString('staticExtradataBuy', staticExtradataBuy);
        assert_1.assert.isString('staticExtradataSell', staticExtradataSell);
        assert_1.assert.isArray('vs', vs);
        assert_1.assert.isArray('rssMetadata', rssMetadata);
        const functionSignature = 'atomicMatch_(address[14],uint256[18],uint8[8],bytes,bytes,bytes,bytes,bytes,bytes,uint8[2],bytes32[5])';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync(txData, opts = { shouldValidate: true }) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this));
                    if (opts.shouldValidate !== false) {
                        yield this.callAsync(txDataWithDefaults);
                    }
                    return self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
                });
            },
            awaitTransactionSuccessAsync(txData, opts = { shouldValidate: true }) {
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync(txData) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
                });
            },
            createAccessListAsync(txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock);
                });
            },
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [addrs,
                    uints,
                    feeMethodsSidesKindsHowToCalls,
                    calldataBuy,
                    calldataSell,
                    replacementPatternBuy,
                    replacementPatternSell,
                    staticExtradataBuy,
                    staticExtradataSell,
                    vs,
                    rssMetadata
                ]);
            },
        };
    }
    ;
    validateOrderParameters_(addrs, uints, feeMethod, side, saleKind, howToCall, calldata, replacementPattern, staticExtradata) {
        const self = this;
        assert_1.assert.isArray('addrs', addrs);
        assert_1.assert.isArray('uints', uints);
        assert_1.assert.isNumberOrBigNumber('feeMethod', feeMethod);
        assert_1.assert.isNumberOrBigNumber('side', side);
        assert_1.assert.isNumberOrBigNumber('saleKind', saleKind);
        assert_1.assert.isNumberOrBigNumber('howToCall', howToCall);
        assert_1.assert.isString('calldata', calldata);
        assert_1.assert.isString('replacementPattern', replacementPattern);
        assert_1.assert.isString('staticExtradata', staticExtradata);
        const functionSignature = 'validateOrderParameters_(address[7],uint256[9],uint8,uint8,uint8,uint8,bytes,bytes,bytes)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [addrs,
                    uints,
                    feeMethod,
                    side,
                    saleKind,
                    howToCall,
                    calldata,
                    replacementPattern,
                    staticExtradata
                ]);
            },
        };
    }
    ;
    INVERSE_BASIS_POINT() {
        const self = this;
        const functionSignature = 'INVERSE_BASIS_POINT()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    }
    ;
    calculateMatchPrice_(addrs, uints, feeMethodsSidesKindsHowToCalls, calldataBuy, calldataSell, replacementPatternBuy, replacementPatternSell, staticExtradataBuy, staticExtradataSell) {
        const self = this;
        assert_1.assert.isArray('addrs', addrs);
        assert_1.assert.isArray('uints', uints);
        assert_1.assert.isArray('feeMethodsSidesKindsHowToCalls', feeMethodsSidesKindsHowToCalls);
        assert_1.assert.isString('calldataBuy', calldataBuy);
        assert_1.assert.isString('calldataSell', calldataSell);
        assert_1.assert.isString('replacementPatternBuy', replacementPatternBuy);
        assert_1.assert.isString('replacementPatternSell', replacementPatternSell);
        assert_1.assert.isString('staticExtradataBuy', staticExtradataBuy);
        assert_1.assert.isString('staticExtradataSell', staticExtradataSell);
        const functionSignature = 'calculateMatchPrice_(address[14],uint256[18],uint8[8],bytes,bytes,bytes,bytes,bytes,bytes)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [addrs,
                    uints,
                    feeMethodsSidesKindsHowToCalls,
                    calldataBuy,
                    calldataSell,
                    replacementPatternBuy,
                    replacementPatternSell,
                    staticExtradataBuy,
                    staticExtradataSell
                ]);
            },
        };
    }
    ;
    approvedOrders(index_0) {
        const self = this;
        assert_1.assert.isString('index_0', index_0);
        const functionSignature = 'approvedOrders(bytes32)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [index_0
                ]);
            },
        };
    }
    ;
    transferOwnership(_newOwner) {
        const self = this;
        assert_1.assert.isString('_newOwner', _newOwner);
        const functionSignature = 'transferOwnership(address)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync(txData, opts = { shouldValidate: true }) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this));
                    if (opts.shouldValidate !== false) {
                        yield this.callAsync(txDataWithDefaults);
                    }
                    return self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
                });
            },
            awaitTransactionSuccessAsync(txData, opts = { shouldValidate: true }) {
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync(txData) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
                });
            },
            createAccessListAsync(txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const txDataWithDefaults = yield self._applyDefaultsToTxDataAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, txData));
                    return self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock);
                });
            },
            callAsync(callData = {}, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                    const rawCallResult = yield self._performCallAsync(Object.assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock);
                    const abiEncoder = self._lookupAbiEncoder(functionSignature);
                    base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                    return abiEncoder.strictDecodeReturnValue(rawCallResult);
                });
            },
            getABIEncodedTransactionData() {
                return self._strictEncodeArguments(functionSignature, [_newOwner.toLowerCase()
                ]);
            },
        };
    }
    ;
}
exports.WyvernExchangeContract = WyvernExchangeContract;
WyvernExchangeContract.contractName = 'WyvernExchange';
// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
//# sourceMappingURL=wyvern_exchange.js.map