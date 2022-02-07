"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WyvernExchangeContract = exports.WyvernExchangeEvents = void 0;
// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma enum-naming
// tslint:disable:whitespace no-unbound-method no-trailing-whitespace
// tslint:disable:no-unused-variable
var base_contract_1 = require("@0x/base-contract");
var json_schemas_1 = require("@0x/json-schemas");
var utils_1 = require("@0x/utils");
var web3_wrapper_1 = require("@0x/web3-wrapper");
var assert_1 = require("@0x/assert");
var ethers = require("ethers");
var WyvernExchangeEvents;
(function (WyvernExchangeEvents) {
    WyvernExchangeEvents["OrderApprovedPartOne"] = "OrderApprovedPartOne";
    WyvernExchangeEvents["OrderApprovedPartTwo"] = "OrderApprovedPartTwo";
    WyvernExchangeEvents["OrderCancelled"] = "OrderCancelled";
    WyvernExchangeEvents["OrdersMatched"] = "OrdersMatched";
    WyvernExchangeEvents["OwnershipTransferred"] = "OwnershipTransferred";
})(WyvernExchangeEvents = exports.WyvernExchangeEvents || (exports.WyvernExchangeEvents = {}));
/* istanbul ignore next */
// tslint:disable:array-type
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
var WyvernExchangeContract = /** @class */ (function (_super) {
    __extends(WyvernExchangeContract, _super);
    function WyvernExchangeContract(address, supportedProvider, txDefaults, logDecodeDependencies, deployedBytecode, encoderOverrides) {
        if (deployedBytecode === void 0) { deployedBytecode = WyvernExchangeContract.deployedBytecode; }
        var _this = _super.call(this, 'WyvernExchange', WyvernExchangeContract.ABI(), address, supportedProvider, txDefaults, logDecodeDependencies, deployedBytecode, encoderOverrides) || this;
        _this._methodABIIndex = {};
        utils_1.classUtils.bindAll(_this, ['_abiEncoderByFunctionSignature', 'address', '_web3Wrapper']);
        _this._subscriptionManager = new base_contract_1.SubscriptionManager(WyvernExchangeContract.ABI(), _this._web3Wrapper);
        WyvernExchangeContract.ABI().forEach(function (item, index) {
            if (item.type === 'function') {
                var methodAbi = item;
                _this._methodABIIndex[methodAbi.name] = index;
            }
        });
        return _this;
    }
    WyvernExchangeContract.deployFrom0xArtifactAsync = function (artifact, supportedProvider, txDefaults, logDecodeDependencies) {
        return __awaiter(this, void 0, void 0, function () {
            var provider, bytecode, abi, logDecodeDependenciesAbiOnly, _i, _a, key;
            return __generator(this, function (_b) {
                assert_1.assert.doesConformToSchema('txDefaults', txDefaults, json_schemas_1.schemas.txDataSchema);
                if (artifact.compilerOutput === undefined) {
                    throw new Error('Compiler output not found in the artifact file');
                }
                provider = utils_1.providerUtils.standardizeOrThrow(supportedProvider);
                bytecode = artifact.compilerOutput.evm.bytecode.object;
                abi = artifact.compilerOutput.abi;
                logDecodeDependenciesAbiOnly = {};
                if (Object.keys(logDecodeDependencies) !== undefined) {
                    for (_i = 0, _a = Object.keys(logDecodeDependencies); _i < _a.length; _i++) {
                        key = _a[_i];
                        logDecodeDependenciesAbiOnly[key] = logDecodeDependencies[key].compilerOutput.abi;
                    }
                }
                return [2 /*return*/, WyvernExchangeContract.deployAsync(bytecode, abi, provider, txDefaults, logDecodeDependenciesAbiOnly)];
            });
        });
    };
    WyvernExchangeContract.deployWithLibrariesFrom0xArtifactAsync = function (artifact, libraryArtifacts, supportedProvider, txDefaults, logDecodeDependencies) {
        return __awaiter(this, void 0, void 0, function () {
            var provider, abi, logDecodeDependenciesAbiOnly, _i, _a, key, libraryAddresses, bytecode;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        assert_1.assert.doesConformToSchema('txDefaults', txDefaults, json_schemas_1.schemas.txDataSchema);
                        if (artifact.compilerOutput === undefined) {
                            throw new Error('Compiler output not found in the artifact file');
                        }
                        provider = utils_1.providerUtils.standardizeOrThrow(supportedProvider);
                        abi = artifact.compilerOutput.abi;
                        logDecodeDependenciesAbiOnly = {};
                        if (Object.keys(logDecodeDependencies) !== undefined) {
                            for (_i = 0, _a = Object.keys(logDecodeDependencies); _i < _a.length; _i++) {
                                key = _a[_i];
                                logDecodeDependenciesAbiOnly[key] = logDecodeDependencies[key].compilerOutput.abi;
                            }
                        }
                        return [4 /*yield*/, WyvernExchangeContract._deployLibrariesAsync(artifact, libraryArtifacts, new web3_wrapper_1.Web3Wrapper(provider), txDefaults)];
                    case 1:
                        libraryAddresses = _b.sent();
                        bytecode = base_contract_1.linkLibrariesInBytecode(artifact, libraryAddresses);
                        return [2 /*return*/, WyvernExchangeContract.deployAsync(bytecode, abi, provider, txDefaults, logDecodeDependenciesAbiOnly)];
                }
            });
        });
    };
    WyvernExchangeContract.deployAsync = function (bytecode, abi, supportedProvider, txDefaults, logDecodeDependencies) {
        return __awaiter(this, void 0, void 0, function () {
            var provider, constructorAbi, iface, deployInfo, txData, web3Wrapper, txDataWithDefaults, txHash, txReceipt, contractInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assert_1.assert.isHexString('bytecode', bytecode);
                        assert_1.assert.doesConformToSchema('txDefaults', txDefaults, json_schemas_1.schemas.txDataSchema);
                        provider = utils_1.providerUtils.standardizeOrThrow(supportedProvider);
                        constructorAbi = base_contract_1.BaseContract._lookupConstructorAbi(abi);
                        base_contract_1.BaseContract._formatABIDataItemList(constructorAbi.inputs, [], base_contract_1.BaseContract._bigNumberToString);
                        iface = new ethers.utils.Interface(abi);
                        deployInfo = iface.deployFunction;
                        txData = deployInfo.encode(bytecode, []);
                        web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider);
                        return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToContractTxDataAsync(__assign({ data: txData }, txDefaults), web3Wrapper.estimateGasAsync.bind(web3Wrapper))];
                    case 1:
                        txDataWithDefaults = _a.sent();
                        return [4 /*yield*/, web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                    case 2:
                        txHash = _a.sent();
                        utils_1.logUtils.log("transactionHash: " + txHash);
                        return [4 /*yield*/, web3Wrapper.awaitTransactionSuccessAsync(txHash)];
                    case 3:
                        txReceipt = _a.sent();
                        utils_1.logUtils.log("WyvernExchange successfully deployed at " + txReceipt.contractAddress);
                        contractInstance = new WyvernExchangeContract(txReceipt.contractAddress, provider, txDefaults, logDecodeDependencies);
                        contractInstance.constructorArgs = [];
                        return [2 /*return*/, contractInstance];
                }
            });
        });
    };
    /**
     * @returns      The contract ABI
     */
    WyvernExchangeContract.ABI = function () {
        var abi = [
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
                        name: 'calldatas',
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
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'exchange',
                                type: 'address',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'taker',
                                type: 'address',
                            },
                            {
                                name: 'makerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'feeRecipient',
                                type: 'address',
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
                                name: 'target',
                                type: 'address',
                            },
                            {
                                name: 'howToCall',
                                type: 'uint8',
                            },
                            {
                                name: 'calldatas',
                                type: 'bytes',
                            },
                            {
                                name: 'replacementPattern',
                                type: 'bytes',
                            },
                            {
                                name: 'staticTarget',
                                type: 'address',
                            },
                            {
                                name: 'staticExtradata',
                                type: 'bytes',
                            },
                            {
                                name: 'paymentToken',
                                type: 'address',
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
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'dataType',
                                type: 'bytes4',
                            },
                            {
                                name: 'data',
                                type: 'bytes',
                            },
                        ]
                    },
                    {
                        name: 'orderbookInclusionDesired',
                        type: 'bool',
                    },
                ],
                name: 'approveOrder',
                outputs: [],
                stateMutability: 'nonpayable',
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
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'buy',
                        type: 'tuple',
                        components: [
                            {
                                name: 'exchange',
                                type: 'address',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'taker',
                                type: 'address',
                            },
                            {
                                name: 'makerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'feeRecipient',
                                type: 'address',
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
                                name: 'target',
                                type: 'address',
                            },
                            {
                                name: 'howToCall',
                                type: 'uint8',
                            },
                            {
                                name: 'calldatas',
                                type: 'bytes',
                            },
                            {
                                name: 'replacementPattern',
                                type: 'bytes',
                            },
                            {
                                name: 'staticTarget',
                                type: 'address',
                            },
                            {
                                name: 'staticExtradata',
                                type: 'bytes',
                            },
                            {
                                name: 'paymentToken',
                                type: 'address',
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
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'dataType',
                                type: 'bytes4',
                            },
                            {
                                name: 'data',
                                type: 'bytes',
                            },
                        ]
                    },
                    {
                        name: 'buySig',
                        type: 'tuple',
                        components: [
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
                        ]
                    },
                    {
                        name: 'sell',
                        type: 'tuple',
                        components: [
                            {
                                name: 'exchange',
                                type: 'address',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'taker',
                                type: 'address',
                            },
                            {
                                name: 'makerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'feeRecipient',
                                type: 'address',
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
                                name: 'target',
                                type: 'address',
                            },
                            {
                                name: 'howToCall',
                                type: 'uint8',
                            },
                            {
                                name: 'calldatas',
                                type: 'bytes',
                            },
                            {
                                name: 'replacementPattern',
                                type: 'bytes',
                            },
                            {
                                name: 'staticTarget',
                                type: 'address',
                            },
                            {
                                name: 'staticExtradata',
                                type: 'bytes',
                            },
                            {
                                name: 'paymentToken',
                                type: 'address',
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
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'dataType',
                                type: 'bytes4',
                            },
                            {
                                name: 'data',
                                type: 'bytes',
                            },
                        ]
                    },
                    {
                        name: 'sellSig',
                        type: 'tuple',
                        components: [
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
                        ]
                    },
                    {
                        name: 'metadata',
                        type: 'bytes32',
                    },
                ],
                name: 'atomicMatch',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'exchange',
                                type: 'address',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'taker',
                                type: 'address',
                            },
                            {
                                name: 'makerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'feeRecipient',
                                type: 'address',
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
                                name: 'target',
                                type: 'address',
                            },
                            {
                                name: 'howToCall',
                                type: 'uint8',
                            },
                            {
                                name: 'calldatas',
                                type: 'bytes',
                            },
                            {
                                name: 'replacementPattern',
                                type: 'bytes',
                            },
                            {
                                name: 'staticTarget',
                                type: 'address',
                            },
                            {
                                name: 'staticExtradata',
                                type: 'bytes',
                            },
                            {
                                name: 'paymentToken',
                                type: 'address',
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
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'dataType',
                                type: 'bytes4',
                            },
                            {
                                name: 'data',
                                type: 'bytes',
                            },
                        ]
                    },
                ],
                name: 'calculateCurrentPrice',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
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
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'buy',
                        type: 'tuple',
                        components: [
                            {
                                name: 'exchange',
                                type: 'address',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'taker',
                                type: 'address',
                            },
                            {
                                name: 'makerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'feeRecipient',
                                type: 'address',
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
                                name: 'target',
                                type: 'address',
                            },
                            {
                                name: 'howToCall',
                                type: 'uint8',
                            },
                            {
                                name: 'calldatas',
                                type: 'bytes',
                            },
                            {
                                name: 'replacementPattern',
                                type: 'bytes',
                            },
                            {
                                name: 'staticTarget',
                                type: 'address',
                            },
                            {
                                name: 'staticExtradata',
                                type: 'bytes',
                            },
                            {
                                name: 'paymentToken',
                                type: 'address',
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
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'dataType',
                                type: 'bytes4',
                            },
                            {
                                name: 'data',
                                type: 'bytes',
                            },
                        ]
                    },
                    {
                        name: 'sell',
                        type: 'tuple',
                        components: [
                            {
                                name: 'exchange',
                                type: 'address',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'taker',
                                type: 'address',
                            },
                            {
                                name: 'makerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'feeRecipient',
                                type: 'address',
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
                                name: 'target',
                                type: 'address',
                            },
                            {
                                name: 'howToCall',
                                type: 'uint8',
                            },
                            {
                                name: 'calldatas',
                                type: 'bytes',
                            },
                            {
                                name: 'replacementPattern',
                                type: 'bytes',
                            },
                            {
                                name: 'staticTarget',
                                type: 'address',
                            },
                            {
                                name: 'staticExtradata',
                                type: 'bytes',
                            },
                            {
                                name: 'paymentToken',
                                type: 'address',
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
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'dataType',
                                type: 'bytes4',
                            },
                            {
                                name: 'data',
                                type: 'bytes',
                            },
                        ]
                    },
                ],
                name: 'calculateMatchPrice',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'exchange',
                                type: 'address',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'taker',
                                type: 'address',
                            },
                            {
                                name: 'makerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'feeRecipient',
                                type: 'address',
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
                                name: 'target',
                                type: 'address',
                            },
                            {
                                name: 'howToCall',
                                type: 'uint8',
                            },
                            {
                                name: 'calldatas',
                                type: 'bytes',
                            },
                            {
                                name: 'replacementPattern',
                                type: 'bytes',
                            },
                            {
                                name: 'staticTarget',
                                type: 'address',
                            },
                            {
                                name: 'staticExtradata',
                                type: 'bytes',
                            },
                            {
                                name: 'paymentToken',
                                type: 'address',
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
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'dataType',
                                type: 'bytes4',
                            },
                            {
                                name: 'data',
                                type: 'bytes',
                            },
                        ]
                    },
                    {
                        name: 'sig',
                        type: 'tuple',
                        components: [
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
                        ]
                    },
                ],
                name: 'cancelOrder',
                outputs: [],
                stateMutability: 'nonpayable',
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
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'newDevWalletAddress',
                        type: 'address',
                    },
                ],
                name: 'changeDevWalletAddress',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'newMinimumMakerProtocolFee',
                        type: 'uint256',
                    },
                ],
                name: 'changeMinimumMakerProtocolFee',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'newMinimumTakerProtocolFee',
                        type: 'uint256',
                    },
                ],
                name: 'changeMinimumTakerProtocolFee',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'newProtocolFeeRecipient',
                        type: 'address',
                    },
                ],
                name: 'changeProtocolFeeRecipient',
                outputs: [],
                stateMutability: 'nonpayable',
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
                stateMutability: 'view',
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
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'exchange',
                                type: 'address',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'taker',
                                type: 'address',
                            },
                            {
                                name: 'makerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'feeRecipient',
                                type: 'address',
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
                                name: 'target',
                                type: 'address',
                            },
                            {
                                name: 'howToCall',
                                type: 'uint8',
                            },
                            {
                                name: 'calldatas',
                                type: 'bytes',
                            },
                            {
                                name: 'replacementPattern',
                                type: 'bytes',
                            },
                            {
                                name: 'staticTarget',
                                type: 'address',
                            },
                            {
                                name: 'staticExtradata',
                                type: 'bytes',
                            },
                            {
                                name: 'paymentToken',
                                type: 'address',
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
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'dataType',
                                type: 'bytes4',
                            },
                            {
                                name: 'data',
                                type: 'bytes',
                            },
                        ]
                    },
                ],
                name: 'hashOrder',
                outputs: [
                    {
                        name: 'hash',
                        type: 'bytes32',
                    },
                ],
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'exchange',
                                type: 'address',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'taker',
                                type: 'address',
                            },
                            {
                                name: 'makerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'feeRecipient',
                                type: 'address',
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
                                name: 'target',
                                type: 'address',
                            },
                            {
                                name: 'howToCall',
                                type: 'uint8',
                            },
                            {
                                name: 'calldatas',
                                type: 'bytes',
                            },
                            {
                                name: 'replacementPattern',
                                type: 'bytes',
                            },
                            {
                                name: 'staticTarget',
                                type: 'address',
                            },
                            {
                                name: 'staticExtradata',
                                type: 'bytes',
                            },
                            {
                                name: 'paymentToken',
                                type: 'address',
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
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'dataType',
                                type: 'bytes4',
                            },
                            {
                                name: 'data',
                                type: 'bytes',
                            },
                        ]
                    },
                ],
                name: 'hashToSign',
                outputs: [
                    {
                        name: '',
                        type: 'bytes32',
                    },
                ],
                stateMutability: 'pure',
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
                name: 'initialize',
                outputs: [],
                stateMutability: 'nonpayable',
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
                stateMutability: 'view',
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
                stateMutability: 'view',
                type: 'function',
            },
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
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'buy',
                        type: 'tuple',
                        components: [
                            {
                                name: 'exchange',
                                type: 'address',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'taker',
                                type: 'address',
                            },
                            {
                                name: 'makerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'feeRecipient',
                                type: 'address',
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
                                name: 'target',
                                type: 'address',
                            },
                            {
                                name: 'howToCall',
                                type: 'uint8',
                            },
                            {
                                name: 'calldatas',
                                type: 'bytes',
                            },
                            {
                                name: 'replacementPattern',
                                type: 'bytes',
                            },
                            {
                                name: 'staticTarget',
                                type: 'address',
                            },
                            {
                                name: 'staticExtradata',
                                type: 'bytes',
                            },
                            {
                                name: 'paymentToken',
                                type: 'address',
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
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'dataType',
                                type: 'bytes4',
                            },
                            {
                                name: 'data',
                                type: 'bytes',
                            },
                        ]
                    },
                    {
                        name: 'sell',
                        type: 'tuple',
                        components: [
                            {
                                name: 'exchange',
                                type: 'address',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'taker',
                                type: 'address',
                            },
                            {
                                name: 'makerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'feeRecipient',
                                type: 'address',
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
                                name: 'target',
                                type: 'address',
                            },
                            {
                                name: 'howToCall',
                                type: 'uint8',
                            },
                            {
                                name: 'calldatas',
                                type: 'bytes',
                            },
                            {
                                name: 'replacementPattern',
                                type: 'bytes',
                            },
                            {
                                name: 'staticTarget',
                                type: 'address',
                            },
                            {
                                name: 'staticExtradata',
                                type: 'bytes',
                            },
                            {
                                name: 'paymentToken',
                                type: 'address',
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
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'dataType',
                                type: 'bytes4',
                            },
                            {
                                name: 'data',
                                type: 'bytes',
                            },
                        ]
                    },
                ],
                name: 'ordersCanMatch',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
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
                stateMutability: 'view',
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
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [],
                name: 'renounceOwnership',
                outputs: [],
                stateMutability: 'nonpayable',
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
                        name: 'calldatas',
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
                stateMutability: 'view',
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
                stateMutability: 'pure',
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
                stateMutability: 'pure',
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
                stateMutability: 'view',
                type: 'function',
            },
            {
                inputs: [
                    {
                        name: 'newOwner',
                        type: 'address',
                    },
                ],
                name: 'transferOwnership',
                outputs: [],
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'hash',
                        type: 'bytes32',
                    },
                    {
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'exchange',
                                type: 'address',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'taker',
                                type: 'address',
                            },
                            {
                                name: 'makerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'feeRecipient',
                                type: 'address',
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
                                name: 'target',
                                type: 'address',
                            },
                            {
                                name: 'howToCall',
                                type: 'uint8',
                            },
                            {
                                name: 'calldatas',
                                type: 'bytes',
                            },
                            {
                                name: 'replacementPattern',
                                type: 'bytes',
                            },
                            {
                                name: 'staticTarget',
                                type: 'address',
                            },
                            {
                                name: 'staticExtradata',
                                type: 'bytes',
                            },
                            {
                                name: 'paymentToken',
                                type: 'address',
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
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'dataType',
                                type: 'bytes4',
                            },
                            {
                                name: 'data',
                                type: 'bytes',
                            },
                        ]
                    },
                    {
                        name: 'sig',
                        type: 'tuple',
                        components: [
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
                        ]
                    },
                ],
                name: 'validateOrder',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'order',
                        type: 'tuple',
                        components: [
                            {
                                name: 'exchange',
                                type: 'address',
                            },
                            {
                                name: 'maker',
                                type: 'address',
                            },
                            {
                                name: 'taker',
                                type: 'address',
                            },
                            {
                                name: 'makerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerRelayerFee',
                                type: 'uint256',
                            },
                            {
                                name: 'makerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'takerProtocolFee',
                                type: 'uint256',
                            },
                            {
                                name: 'feeRecipient',
                                type: 'address',
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
                                name: 'target',
                                type: 'address',
                            },
                            {
                                name: 'howToCall',
                                type: 'uint8',
                            },
                            {
                                name: 'calldatas',
                                type: 'bytes',
                            },
                            {
                                name: 'replacementPattern',
                                type: 'bytes',
                            },
                            {
                                name: 'staticTarget',
                                type: 'address',
                            },
                            {
                                name: 'staticExtradata',
                                type: 'bytes',
                            },
                            {
                                name: 'paymentToken',
                                type: 'address',
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
                            {
                                name: 'salt',
                                type: 'uint256',
                            },
                            {
                                name: 'dataType',
                                type: 'bytes4',
                            },
                            {
                                name: 'data',
                                type: 'bytes',
                            },
                        ]
                    },
                ],
                name: 'validateOrderParameters',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                stateMutability: 'view',
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
                stateMutability: 'view',
                type: 'function',
            },
        ];
        return abi;
    };
    WyvernExchangeContract._deployLibrariesAsync = function (artifact, libraryArtifacts, web3Wrapper, txDefaults, libraryAddresses) {
        if (libraryAddresses === void 0) { libraryAddresses = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var links, _i, _a, link, _b, _c, libraryName, libraryArtifact, linkedLibraryBytecode, txDataWithDefaults, txHash, contractAddress;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        links = artifact.compilerOutput.evm.bytecode.linkReferences;
                        _i = 0, _a = Object.values(links);
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        link = _a[_i];
                        _b = 0, _c = Object.keys(link);
                        _d.label = 2;
                    case 2:
                        if (!(_b < _c.length)) return [3 /*break*/, 8];
                        libraryName = _c[_b];
                        if (!!libraryAddresses[libraryName]) return [3 /*break*/, 7];
                        libraryArtifact = libraryArtifacts[libraryName];
                        if (!libraryArtifact) {
                            throw new Error("Missing artifact for linked library \"" + libraryName + "\"");
                        }
                        // Deploy any dependent libraries used by this library.
                        return [4 /*yield*/, WyvernExchangeContract._deployLibrariesAsync(libraryArtifact, libraryArtifacts, web3Wrapper, txDefaults, libraryAddresses)];
                    case 3:
                        // Deploy any dependent libraries used by this library.
                        _d.sent();
                        linkedLibraryBytecode = base_contract_1.linkLibrariesInBytecode(libraryArtifact, libraryAddresses);
                        return [4 /*yield*/, base_contract_1.BaseContract._applyDefaultsToContractTxDataAsync(__assign({ data: linkedLibraryBytecode }, txDefaults), web3Wrapper.estimateGasAsync.bind(web3Wrapper))];
                    case 4:
                        txDataWithDefaults = _d.sent();
                        return [4 /*yield*/, web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                    case 5:
                        txHash = _d.sent();
                        utils_1.logUtils.log("transactionHash: " + txHash);
                        return [4 /*yield*/, web3Wrapper.awaitTransactionSuccessAsync(txHash)];
                    case 6:
                        contractAddress = (_d.sent()).contractAddress;
                        utils_1.logUtils.log(libraryArtifact.contractName + " successfully deployed at " + contractAddress);
                        libraryAddresses[libraryArtifact.contractName] = contractAddress;
                        _d.label = 7;
                    case 7:
                        _b++;
                        return [3 /*break*/, 2];
                    case 8:
                        _i++;
                        return [3 /*break*/, 1];
                    case 9: return [2 /*return*/, libraryAddresses];
                }
            });
        });
    };
    WyvernExchangeContract.prototype.getFunctionSignature = function (methodName) {
        var index = this._methodABIIndex[methodName];
        var methodAbi = WyvernExchangeContract.ABI()[index]; // tslint:disable-line:no-unnecessary-type-assertion
        var functionSignature = base_contract_1.methodAbiToFunctionSignature(methodAbi);
        return functionSignature;
    };
    WyvernExchangeContract.prototype.getABIDecodedTransactionData = function (methodName, callData) {
        var functionSignature = this.getFunctionSignature(methodName);
        var self = this;
        var abiEncoder = self._lookupAbiEncoder(functionSignature);
        var abiDecodedCallData = abiEncoder.strictDecode(callData);
        return abiDecodedCallData;
    };
    WyvernExchangeContract.prototype.getABIDecodedReturnData = function (methodName, callData) {
        if (this._encoderOverrides.decodeOutput) {
            return this._encoderOverrides.decodeOutput(methodName, callData);
        }
        var functionSignature = this.getFunctionSignature(methodName);
        var self = this;
        var abiEncoder = self._lookupAbiEncoder(functionSignature);
        var abiDecodedCallData = abiEncoder.strictDecodeReturnValue(callData);
        return abiDecodedCallData;
    };
    WyvernExchangeContract.prototype.getSelector = function (methodName) {
        var functionSignature = this.getFunctionSignature(methodName);
        var self = this;
        var abiEncoder = self._lookupAbiEncoder(functionSignature);
        return abiEncoder.getSelector();
    };
    WyvernExchangeContract.prototype.INVERSE_BASIS_POINT = function () {
        var self = this;
        var functionSignature = 'INVERSE_BASIS_POINT()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.approveOrder = function (order, orderbookInclusionDesired) {
        var self = this;
        assert_1.assert.isBoolean('orderbookInclusionDesired', orderbookInclusionDesired);
        var functionSignature = 'approveOrder((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes),bool)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                if (!(opts.shouldValidate !== false)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.callAsync(txDataWithDefaults)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync: function (txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            createAccessListAsync: function (txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock)];
                        }
                    });
                });
            },
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [order,
                    orderbookInclusionDesired
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.approvedOrders = function (index_0) {
        var self = this;
        assert_1.assert.isString('index_0', index_0);
        var functionSignature = 'approvedOrders(bytes32)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [index_0
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.atomicMatch = function (buy, buySig, sell, sellSig, metadata) {
        var self = this;
        assert_1.assert.isString('metadata', metadata);
        var functionSignature = 'atomicMatch((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes),(uint8,bytes32,bytes32),(address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes),(uint8,bytes32,bytes32),bytes32)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                if (!(opts.shouldValidate !== false)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.callAsync(txDataWithDefaults)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync: function (txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            createAccessListAsync: function (txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock)];
                        }
                    });
                });
            },
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [buy,
                    buySig,
                    sell,
                    sellSig,
                    metadata
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.calculateCurrentPrice = function (order) {
        var self = this;
        var functionSignature = 'calculateCurrentPrice((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes))';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [order
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.calculateFinalPrice = function (side, saleKind, basePrice, extra, listingTime, expirationTime) {
        var self = this;
        assert_1.assert.isNumberOrBigNumber('side', side);
        assert_1.assert.isNumberOrBigNumber('saleKind', saleKind);
        assert_1.assert.isBigNumber('basePrice', basePrice);
        assert_1.assert.isBigNumber('extra', extra);
        assert_1.assert.isBigNumber('listingTime', listingTime);
        assert_1.assert.isBigNumber('expirationTime', expirationTime);
        var functionSignature = 'calculateFinalPrice(uint8,uint8,uint256,uint256,uint256,uint256)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [side,
                    saleKind,
                    basePrice,
                    extra,
                    listingTime,
                    expirationTime
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.calculateMatchPrice = function (buy, sell) {
        var self = this;
        var functionSignature = 'calculateMatchPrice((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes),(address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes))';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [buy,
                    sell
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.cancelOrder = function (order, sig) {
        var self = this;
        var functionSignature = 'cancelOrder((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes),(uint8,bytes32,bytes32))';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                if (!(opts.shouldValidate !== false)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.callAsync(txDataWithDefaults)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync: function (txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            createAccessListAsync: function (txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock)];
                        }
                    });
                });
            },
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [order,
                    sig
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.cancelledOrFinalized = function (index_0) {
        var self = this;
        assert_1.assert.isString('index_0', index_0);
        var functionSignature = 'cancelledOrFinalized(bytes32)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [index_0
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.changeDevWalletAddress = function (newDevWalletAddress) {
        var self = this;
        assert_1.assert.isString('newDevWalletAddress', newDevWalletAddress);
        var functionSignature = 'changeDevWalletAddress(address)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                if (!(opts.shouldValidate !== false)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.callAsync(txDataWithDefaults)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync: function (txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            createAccessListAsync: function (txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock)];
                        }
                    });
                });
            },
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [newDevWalletAddress.toLowerCase()
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.changeMinimumMakerProtocolFee = function (newMinimumMakerProtocolFee) {
        var self = this;
        assert_1.assert.isBigNumber('newMinimumMakerProtocolFee', newMinimumMakerProtocolFee);
        var functionSignature = 'changeMinimumMakerProtocolFee(uint256)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                if (!(opts.shouldValidate !== false)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.callAsync(txDataWithDefaults)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync: function (txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            createAccessListAsync: function (txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock)];
                        }
                    });
                });
            },
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [newMinimumMakerProtocolFee
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.changeMinimumTakerProtocolFee = function (newMinimumTakerProtocolFee) {
        var self = this;
        assert_1.assert.isBigNumber('newMinimumTakerProtocolFee', newMinimumTakerProtocolFee);
        var functionSignature = 'changeMinimumTakerProtocolFee(uint256)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                if (!(opts.shouldValidate !== false)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.callAsync(txDataWithDefaults)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync: function (txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            createAccessListAsync: function (txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock)];
                        }
                    });
                });
            },
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [newMinimumTakerProtocolFee
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.changeProtocolFeeRecipient = function (newProtocolFeeRecipient) {
        var self = this;
        assert_1.assert.isString('newProtocolFeeRecipient', newProtocolFeeRecipient);
        var functionSignature = 'changeProtocolFeeRecipient(address)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                if (!(opts.shouldValidate !== false)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.callAsync(txDataWithDefaults)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync: function (txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            createAccessListAsync: function (txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock)];
                        }
                    });
                });
            },
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [newProtocolFeeRecipient.toLowerCase()
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.codename = function () {
        var self = this;
        var functionSignature = 'codename()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.devWallet = function () {
        var self = this;
        var functionSignature = 'devWallet()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.exchangeToken = function () {
        var self = this;
        var functionSignature = 'exchangeToken()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.guardedArrayReplace = function (array, desired, mask) {
        var self = this;
        assert_1.assert.isString('array', array);
        assert_1.assert.isString('desired', desired);
        assert_1.assert.isString('mask', mask);
        var functionSignature = 'guardedArrayReplace(bytes,bytes,bytes)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [array,
                    desired,
                    mask
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.hashOrder = function (order) {
        var self = this;
        var functionSignature = 'hashOrder((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes))';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [order
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.hashToSign = function (order) {
        var self = this;
        var functionSignature = 'hashToSign((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes))';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [order
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.initialize = function (registryAddress, tokenTransferProxyAddress, tokenAddress, protocolFeeAddress, devWalletAddress) {
        var self = this;
        assert_1.assert.isString('registryAddress', registryAddress);
        assert_1.assert.isString('tokenTransferProxyAddress', tokenTransferProxyAddress);
        assert_1.assert.isString('tokenAddress', tokenAddress);
        assert_1.assert.isString('protocolFeeAddress', protocolFeeAddress);
        assert_1.assert.isString('devWalletAddress', devWalletAddress);
        var functionSignature = 'initialize(address,address,address,address,address)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                if (!(opts.shouldValidate !== false)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.callAsync(txDataWithDefaults)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync: function (txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            createAccessListAsync: function (txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock)];
                        }
                    });
                });
            },
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [registryAddress.toLowerCase(),
                    tokenTransferProxyAddress.toLowerCase(),
                    tokenAddress.toLowerCase(),
                    protocolFeeAddress.toLowerCase(),
                    devWalletAddress.toLowerCase()
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.minimumMakerProtocolFee = function () {
        var self = this;
        var functionSignature = 'minimumMakerProtocolFee()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.minimumTakerProtocolFee = function () {
        var self = this;
        var functionSignature = 'minimumTakerProtocolFee()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.name = function () {
        var self = this;
        var functionSignature = 'name()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.orderCalldataCanMatch = function (buyCalldata, buyReplacementPattern, sellCalldata, sellReplacementPattern) {
        var self = this;
        assert_1.assert.isString('buyCalldata', buyCalldata);
        assert_1.assert.isString('buyReplacementPattern', buyReplacementPattern);
        assert_1.assert.isString('sellCalldata', sellCalldata);
        assert_1.assert.isString('sellReplacementPattern', sellReplacementPattern);
        var functionSignature = 'orderCalldataCanMatch(bytes,bytes,bytes,bytes)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [buyCalldata,
                    buyReplacementPattern,
                    sellCalldata,
                    sellReplacementPattern
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.ordersCanMatch = function (buy, sell) {
        var self = this;
        var functionSignature = 'ordersCanMatch((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes),(address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes))';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [buy,
                    sell
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.owner = function () {
        var self = this;
        var functionSignature = 'owner()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.protocolFeeRecipient = function () {
        var self = this;
        var functionSignature = 'protocolFeeRecipient()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.registry = function () {
        var self = this;
        var functionSignature = 'registry()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.renounceOwnership = function () {
        var self = this;
        var functionSignature = 'renounceOwnership()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                if (!(opts.shouldValidate !== false)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.callAsync(txDataWithDefaults)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync: function (txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            createAccessListAsync: function (txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock)];
                        }
                    });
                });
            },
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.staticCall = function (target, calldatas, extradata) {
        var self = this;
        assert_1.assert.isString('target', target);
        assert_1.assert.isString('calldatas', calldatas);
        assert_1.assert.isString('extradata', extradata);
        var functionSignature = 'staticCall(address,bytes,bytes)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [target.toLowerCase(),
                    calldatas,
                    extradata
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.testCopy = function (arrToCopy) {
        var self = this;
        assert_1.assert.isString('arrToCopy', arrToCopy);
        var functionSignature = 'testCopy(bytes)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [arrToCopy
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.testCopyAddress = function (addr) {
        var self = this;
        assert_1.assert.isString('addr', addr);
        var functionSignature = 'testCopyAddress(address)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                if (!self._deployedBytecodeIfExists) return [3 /*break*/, 2];
                                return [4 /*yield*/, self._evmExecAsync(this.getABIEncodedTransactionData())];
                            case 1:
                                rawCallResult = _a.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 3:
                                rawCallResult = _a.sent();
                                _a.label = 4;
                            case 4:
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [addr.toLowerCase()
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.tokenTransferProxy = function () {
        var self = this;
        var functionSignature = 'tokenTransferProxy()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.transferOwnership = function (newOwner) {
        var self = this;
        assert_1.assert.isString('newOwner', newOwner);
        var functionSignature = 'transferOwnership(address)';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            sendTransactionAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData), this.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                if (!(opts.shouldValidate !== false)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.callAsync(txDataWithDefaults)];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/, self._web3Wrapper.sendTransactionAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            awaitTransactionSuccessAsync: function (txData, opts) {
                if (opts === void 0) { opts = { shouldValidate: true }; }
                return self._promiseWithTransactionHash(this.sendTransactionAsync(txData, opts), opts);
            },
            estimateGasAsync: function (txData) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.estimateGasAsync(txDataWithDefaults)];
                        }
                    });
                });
            },
            createAccessListAsync: function (txData, defaultBlock) {
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, self._applyDefaultsToTxDataAsync(__assign({ data: this.getABIEncodedTransactionData() }, txData))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, self._web3Wrapper.createAccessListAsync(txDataWithDefaults, defaultBlock)];
                        }
                    });
                });
            },
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [newOwner.toLowerCase()
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.validateOrder = function (hash, order, sig) {
        var self = this;
        assert_1.assert.isString('hash', hash);
        var functionSignature = 'validateOrder(bytes32,(address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes),(uint8,bytes32,bytes32))';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [hash,
                    order,
                    sig
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.validateOrderParameters = function (order) {
        var self = this;
        var functionSignature = 'validateOrderParameters((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes))';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, [order
                ]);
            },
        };
    };
    ;
    WyvernExchangeContract.prototype.version = function () {
        var self = this;
        var functionSignature = 'version()';
        return {
            selector: self._lookupAbiEncoder(functionSignature).getSelector(),
            callAsync: function (callData, defaultBlock) {
                if (callData === void 0) { callData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var rawCallResult, abiEncoder;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                base_contract_1.BaseContract._assertCallParams(callData, defaultBlock);
                                return [4 /*yield*/, self._performCallAsync(__assign({ data: this.getABIEncodedTransactionData() }, callData), defaultBlock)];
                            case 1:
                                rawCallResult = _a.sent();
                                abiEncoder = self._lookupAbiEncoder(functionSignature);
                                base_contract_1.BaseContract._throwIfUnexpectedEmptyCallResult(rawCallResult, abiEncoder);
                                return [2 /*return*/, abiEncoder.strictDecodeReturnValue(rawCallResult)];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return self._strictEncodeArguments(functionSignature, []);
            },
        };
    };
    ;
    /**
     * Subscribe to an event type emitted by the WyvernExchange contract.
     * @param eventName The WyvernExchange contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    WyvernExchangeContract.prototype.subscribe = function (eventName, indexFilterValues, callback, isVerbose, blockPollingIntervalMs) {
        if (isVerbose === void 0) { isVerbose = false; }
        assert_1.assert.doesBelongToStringEnum('eventName', eventName, WyvernExchangeEvents);
        assert_1.assert.doesConformToSchema('indexFilterValues', indexFilterValues, json_schemas_1.schemas.indexFilterValuesSchema);
        assert_1.assert.isFunction('callback', callback);
        var subscriptionToken = this._subscriptionManager.subscribe(this.address, eventName, indexFilterValues, WyvernExchangeContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    };
    /**
     * Cancel a subscription
     * @param subscriptionToken Subscription token returned by `subscribe()`
     */
    WyvernExchangeContract.prototype.unsubscribe = function (subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    };
    /**
     * Cancels all existing subscriptions
     */
    WyvernExchangeContract.prototype.unsubscribeAll = function () {
        this._subscriptionManager.unsubscribeAll();
    };
    /**
     * Gets historical logs without creating a subscription
     * @param eventName The WyvernExchange contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    WyvernExchangeContract.prototype.getLogsAsync = function (eventName, blockRange, indexFilterValues) {
        return __awaiter(this, void 0, void 0, function () {
            var logs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assert_1.assert.doesBelongToStringEnum('eventName', eventName, WyvernExchangeEvents);
                        assert_1.assert.doesConformToSchema('blockRange', blockRange, json_schemas_1.schemas.blockRangeSchema);
                        assert_1.assert.doesConformToSchema('indexFilterValues', indexFilterValues, json_schemas_1.schemas.indexFilterValuesSchema);
                        return [4 /*yield*/, this._subscriptionManager.getLogsAsync(this.address, eventName, blockRange, indexFilterValues, WyvernExchangeContract.ABI())];
                    case 1:
                        logs = _a.sent();
                        return [2 /*return*/, logs];
                }
            });
        });
    };
    WyvernExchangeContract.contractName = 'WyvernExchange';
    return WyvernExchangeContract;
}(base_contract_1.BaseContract));
exports.WyvernExchangeContract = WyvernExchangeContract;
// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
//# sourceMappingURL=wyvern_exchange.js.map