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
exports.WyvernExchangeContract = exports.WyvernExchangeEvents = void 0;
// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma enum-naming
// tslint:disable:whitespace no-unbound-method no-trailing-whitespace
// tslint:disable:no-unused-variable
const base_contract_1 = require("@0x/base-contract");
const json_schemas_1 = require("@0x/json-schemas");
const utils_1 = require("@0x/utils");
const web3_wrapper_1 = require("@0x/web3-wrapper");
const assert_1 = require("@0x/assert");
const ethers = require("ethers");
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
class WyvernExchangeContract extends base_contract_1.BaseContract {
    constructor(address, supportedProvider, txDefaults, logDecodeDependencies, deployedBytecode = WyvernExchangeContract.deployedBytecode, encoderOverrides) {
        super("WyvernExchange", WyvernExchangeContract.ABI(), address, supportedProvider, txDefaults, logDecodeDependencies, deployedBytecode, encoderOverrides);
        this._methodABIIndex = {};
        utils_1.classUtils.bindAll(this, [
            "_abiEncoderByFunctionSignature",
            "address",
            "_web3Wrapper",
        ]);
        this._subscriptionManager = new base_contract_1.SubscriptionManager(WyvernExchangeContract.ABI(), this._web3Wrapper);
        WyvernExchangeContract.ABI().forEach((item, index) => {
            if (item.type === "function") {
                const methodAbi = item;
                this._methodABIIndex[methodAbi.name] = index;
            }
        });
    }
    static deployFrom0xArtifactAsync(artifact, supportedProvider, txDefaults, logDecodeDependencies) {
        return __awaiter(this, void 0, void 0, function* () {
            assert_1.assert.doesConformToSchema("txDefaults", txDefaults, json_schemas_1.schemas.txDataSchema);
            if (artifact.compilerOutput === undefined) {
                throw new Error("Compiler output not found in the artifact file");
            }
            const provider = utils_1.providerUtils.standardizeOrThrow(supportedProvider);
            const bytecode = artifact.compilerOutput.evm.bytecode.object;
            const abi = artifact.compilerOutput.abi;
            const logDecodeDependenciesAbiOnly = {};
            if (Object.keys(logDecodeDependencies) !== undefined) {
                for (const key of Object.keys(logDecodeDependencies)) {
                    logDecodeDependenciesAbiOnly[key] =
                        logDecodeDependencies[key].compilerOutput.abi;
                }
            }
            return WyvernExchangeContract.deployAsync(bytecode, abi, provider, txDefaults, logDecodeDependenciesAbiOnly);
        });
    }
    static deployWithLibrariesFrom0xArtifactAsync(artifact, libraryArtifacts, supportedProvider, txDefaults, logDecodeDependencies) {
        return __awaiter(this, void 0, void 0, function* () {
            assert_1.assert.doesConformToSchema("txDefaults", txDefaults, json_schemas_1.schemas.txDataSchema);
            if (artifact.compilerOutput === undefined) {
                throw new Error("Compiler output not found in the artifact file");
            }
            const provider = utils_1.providerUtils.standardizeOrThrow(supportedProvider);
            const abi = artifact.compilerOutput.abi;
            const logDecodeDependenciesAbiOnly = {};
            if (Object.keys(logDecodeDependencies) !== undefined) {
                for (const key of Object.keys(logDecodeDependencies)) {
                    logDecodeDependenciesAbiOnly[key] =
                        logDecodeDependencies[key].compilerOutput.abi;
                }
            }
            const libraryAddresses = yield WyvernExchangeContract._deployLibrariesAsync(artifact, libraryArtifacts, new web3_wrapper_1.Web3Wrapper(provider), txDefaults);
            const bytecode = base_contract_1.linkLibrariesInBytecode(artifact, libraryAddresses);
            return WyvernExchangeContract.deployAsync(bytecode, abi, provider, txDefaults, logDecodeDependenciesAbiOnly);
        });
    }
    static deployAsync(bytecode, abi, supportedProvider, txDefaults, logDecodeDependencies) {
        return __awaiter(this, void 0, void 0, function* () {
            assert_1.assert.isHexString("bytecode", bytecode);
            assert_1.assert.doesConformToSchema("txDefaults", txDefaults, json_schemas_1.schemas.txDataSchema);
            const provider = utils_1.providerUtils.standardizeOrThrow(supportedProvider);
            const constructorAbi = base_contract_1.BaseContract._lookupConstructorAbi(abi);
            [] = base_contract_1.BaseContract._formatABIDataItemList(constructorAbi.inputs, [], base_contract_1.BaseContract._bigNumberToString);
            const iface = new ethers.utils.Interface(abi);
            const deployInfo = iface.deployFunction;
            const txData = deployInfo.encode(bytecode, []);
            const web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider);
            const txDataWithDefaults = yield base_contract_1.BaseContract._applyDefaultsToContractTxDataAsync(Object.assign({ data: txData }, txDefaults), web3Wrapper.estimateGasAsync.bind(web3Wrapper));
            const txHash = yield web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            utils_1.logUtils.log(`transactionHash: ${txHash}`);
            const txReceipt = yield web3Wrapper.awaitTransactionSuccessAsync(txHash);
            utils_1.logUtils.log(`WyvernExchange successfully deployed at ${txReceipt.contractAddress}`);
            const contractInstance = new WyvernExchangeContract(txReceipt.contractAddress, provider, txDefaults, logDecodeDependencies);
            contractInstance.constructorArgs = [];
            return contractInstance;
        });
    }
    /**
     * @returns      The contract ABI
     */
    static ABI() {
        const abi = [
            {
                anonymous: false,
                inputs: [
                    {
                        name: "hash",
                        type: "bytes32",
                        indexed: true,
                    },
                    {
                        name: "exchange",
                        type: "address",
                        indexed: false,
                    },
                    {
                        name: "maker",
                        type: "address",
                        indexed: true,
                    },
                    {
                        name: "taker",
                        type: "address",
                        indexed: false,
                    },
                    {
                        name: "makerRelayerFee",
                        type: "uint256",
                        indexed: false,
                    },
                    {
                        name: "takerRelayerFee",
                        type: "uint256",
                        indexed: false,
                    },
                    {
                        name: "makerProtocolFee",
                        type: "uint256",
                        indexed: false,
                    },
                    {
                        name: "takerProtocolFee",
                        type: "uint256",
                        indexed: false,
                    },
                    {
                        name: "feeRecipient",
                        type: "address",
                        indexed: true,
                    },
                    {
                        name: "feeMethod",
                        type: "uint8",
                        indexed: false,
                    },
                    {
                        name: "side",
                        type: "uint8",
                        indexed: false,
                    },
                    {
                        name: "saleKind",
                        type: "uint8",
                        indexed: false,
                    },
                    {
                        name: "target",
                        type: "address",
                        indexed: false,
                    },
                ],
                name: "OrderApprovedPartOne",
                outputs: [],
                type: "event",
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: "hash",
                        type: "bytes32",
                        indexed: true,
                    },
                    {
                        name: "howToCall",
                        type: "uint8",
                        indexed: false,
                    },
                    {
                        name: "calldatas",
                        type: "bytes",
                        indexed: false,
                    },
                    {
                        name: "replacementPattern",
                        type: "bytes",
                        indexed: false,
                    },
                    {
                        name: "staticTarget",
                        type: "address",
                        indexed: false,
                    },
                    {
                        name: "staticExtradata",
                        type: "bytes",
                        indexed: false,
                    },
                    {
                        name: "paymentToken",
                        type: "address",
                        indexed: false,
                    },
                    {
                        name: "basePrice",
                        type: "uint256",
                        indexed: false,
                    },
                    {
                        name: "extra",
                        type: "uint256",
                        indexed: false,
                    },
                    {
                        name: "listingTime",
                        type: "uint256",
                        indexed: false,
                    },
                    {
                        name: "expirationTime",
                        type: "uint256",
                        indexed: false,
                    },
                    {
                        name: "salt",
                        type: "uint256",
                        indexed: false,
                    },
                    {
                        name: "orderbookInclusionDesired",
                        type: "bool",
                        indexed: false,
                    },
                ],
                name: "OrderApprovedPartTwo",
                outputs: [],
                type: "event",
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: "hash",
                        type: "bytes32",
                        indexed: true,
                    },
                ],
                name: "OrderCancelled",
                outputs: [],
                type: "event",
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: "buyHash",
                        type: "bytes32",
                        indexed: false,
                    },
                    {
                        name: "sellHash",
                        type: "bytes32",
                        indexed: false,
                    },
                    {
                        name: "maker",
                        type: "address",
                        indexed: true,
                    },
                    {
                        name: "taker",
                        type: "address",
                        indexed: true,
                    },
                    {
                        name: "price",
                        type: "uint256",
                        indexed: false,
                    },
                    {
                        name: "metadata",
                        type: "bytes32",
                        indexed: true,
                    },
                ],
                name: "OrdersMatched",
                outputs: [],
                type: "event",
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: "previousOwner",
                        type: "address",
                        indexed: true,
                    },
                    {
                        name: "newOwner",
                        type: "address",
                        indexed: true,
                    },
                ],
                name: "OwnershipTransferred",
                outputs: [],
                type: "event",
            },
            {
                constant: true,
                inputs: [],
                name: "INVERSE_BASIS_POINT",
                outputs: [
                    {
                        name: "",
                        type: "uint256",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                inputs: [
                    {
                        name: "order",
                        type: "tuple",
                        components: [
                            {
                                name: "exchange",
                                type: "address",
                            },
                            {
                                name: "maker",
                                type: "address",
                            },
                            {
                                name: "taker",
                                type: "address",
                            },
                            {
                                name: "makerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "takerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "makerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "takerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "feeRecipient",
                                type: "address",
                            },
                            {
                                name: "feeMethod",
                                type: "uint8",
                            },
                            {
                                name: "side",
                                type: "uint8",
                            },
                            {
                                name: "saleKind",
                                type: "uint8",
                            },
                            {
                                name: "target",
                                type: "address",
                            },
                            {
                                name: "howToCall",
                                type: "uint8",
                            },
                            {
                                name: "calldatas",
                                type: "bytes",
                            },
                            {
                                name: "replacementPattern",
                                type: "bytes",
                            },
                            {
                                name: "staticTarget",
                                type: "address",
                            },
                            {
                                name: "staticExtradata",
                                type: "bytes",
                            },
                            {
                                name: "paymentToken",
                                type: "address",
                            },
                            {
                                name: "basePrice",
                                type: "uint256",
                            },
                            {
                                name: "extra",
                                type: "uint256",
                            },
                            {
                                name: "listingTime",
                                type: "uint256",
                            },
                            {
                                name: "expirationTime",
                                type: "uint256",
                            },
                            {
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                name: "dataType",
                                type: "bytes4",
                            },
                            {
                                name: "data",
                                type: "bytes",
                            },
                        ],
                    },
                    {
                        name: "orderbookInclusionDesired",
                        type: "bool",
                    },
                ],
                name: "approveOrder",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
            {
                constant: true,
                inputs: [
                    {
                        name: "index_0",
                        type: "bytes32",
                    },
                ],
                name: "approvedOrders",
                outputs: [
                    {
                        name: "",
                        type: "bool",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                inputs: [
                    {
                        name: "buy",
                        type: "tuple",
                        components: [
                            {
                                name: "exchange",
                                type: "address",
                            },
                            {
                                name: "maker",
                                type: "address",
                            },
                            {
                                name: "taker",
                                type: "address",
                            },
                            {
                                name: "makerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "takerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "makerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "takerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "feeRecipient",
                                type: "address",
                            },
                            {
                                name: "feeMethod",
                                type: "uint8",
                            },
                            {
                                name: "side",
                                type: "uint8",
                            },
                            {
                                name: "saleKind",
                                type: "uint8",
                            },
                            {
                                name: "target",
                                type: "address",
                            },
                            {
                                name: "howToCall",
                                type: "uint8",
                            },
                            {
                                name: "calldatas",
                                type: "bytes",
                            },
                            {
                                name: "replacementPattern",
                                type: "bytes",
                            },
                            {
                                name: "staticTarget",
                                type: "address",
                            },
                            {
                                name: "staticExtradata",
                                type: "bytes",
                            },
                            {
                                name: "paymentToken",
                                type: "address",
                            },
                            {
                                name: "basePrice",
                                type: "uint256",
                            },
                            {
                                name: "extra",
                                type: "uint256",
                            },
                            {
                                name: "listingTime",
                                type: "uint256",
                            },
                            {
                                name: "expirationTime",
                                type: "uint256",
                            },
                            {
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                name: "dataType",
                                type: "bytes4",
                            },
                            {
                                name: "data",
                                type: "bytes",
                            },
                        ],
                    },
                    {
                        name: "buySig",
                        type: "tuple",
                        components: [
                            {
                                name: "v",
                                type: "uint8",
                            },
                            {
                                name: "r",
                                type: "bytes32",
                            },
                            {
                                name: "s",
                                type: "bytes32",
                            },
                        ],
                    },
                    {
                        name: "sell",
                        type: "tuple",
                        components: [
                            {
                                name: "exchange",
                                type: "address",
                            },
                            {
                                name: "maker",
                                type: "address",
                            },
                            {
                                name: "taker",
                                type: "address",
                            },
                            {
                                name: "makerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "takerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "makerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "takerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "feeRecipient",
                                type: "address",
                            },
                            {
                                name: "feeMethod",
                                type: "uint8",
                            },
                            {
                                name: "side",
                                type: "uint8",
                            },
                            {
                                name: "saleKind",
                                type: "uint8",
                            },
                            {
                                name: "target",
                                type: "address",
                            },
                            {
                                name: "howToCall",
                                type: "uint8",
                            },
                            {
                                name: "calldatas",
                                type: "bytes",
                            },
                            {
                                name: "replacementPattern",
                                type: "bytes",
                            },
                            {
                                name: "staticTarget",
                                type: "address",
                            },
                            {
                                name: "staticExtradata",
                                type: "bytes",
                            },
                            {
                                name: "paymentToken",
                                type: "address",
                            },
                            {
                                name: "basePrice",
                                type: "uint256",
                            },
                            {
                                name: "extra",
                                type: "uint256",
                            },
                            {
                                name: "listingTime",
                                type: "uint256",
                            },
                            {
                                name: "expirationTime",
                                type: "uint256",
                            },
                            {
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                name: "dataType",
                                type: "bytes4",
                            },
                            {
                                name: "data",
                                type: "bytes",
                            },
                        ],
                    },
                    {
                        name: "sellSig",
                        type: "tuple",
                        components: [
                            {
                                name: "v",
                                type: "uint8",
                            },
                            {
                                name: "r",
                                type: "bytes32",
                            },
                            {
                                name: "s",
                                type: "bytes32",
                            },
                        ],
                    },
                    {
                        name: "metadata",
                        type: "bytes32",
                    },
                ],
                name: "atomicMatch",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
            {
                constant: true,
                inputs: [
                    {
                        name: "order",
                        type: "tuple",
                        components: [
                            {
                                name: "exchange",
                                type: "address",
                            },
                            {
                                name: "maker",
                                type: "address",
                            },
                            {
                                name: "taker",
                                type: "address",
                            },
                            {
                                name: "makerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "takerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "makerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "takerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "feeRecipient",
                                type: "address",
                            },
                            {
                                name: "feeMethod",
                                type: "uint8",
                            },
                            {
                                name: "side",
                                type: "uint8",
                            },
                            {
                                name: "saleKind",
                                type: "uint8",
                            },
                            {
                                name: "target",
                                type: "address",
                            },
                            {
                                name: "howToCall",
                                type: "uint8",
                            },
                            {
                                name: "calldatas",
                                type: "bytes",
                            },
                            {
                                name: "replacementPattern",
                                type: "bytes",
                            },
                            {
                                name: "staticTarget",
                                type: "address",
                            },
                            {
                                name: "staticExtradata",
                                type: "bytes",
                            },
                            {
                                name: "paymentToken",
                                type: "address",
                            },
                            {
                                name: "basePrice",
                                type: "uint256",
                            },
                            {
                                name: "extra",
                                type: "uint256",
                            },
                            {
                                name: "listingTime",
                                type: "uint256",
                            },
                            {
                                name: "expirationTime",
                                type: "uint256",
                            },
                            {
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                name: "dataType",
                                type: "bytes4",
                            },
                            {
                                name: "data",
                                type: "bytes",
                            },
                        ],
                    },
                ],
                name: "calculateCurrentPrice",
                outputs: [
                    {
                        name: "",
                        type: "uint256",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                constant: true,
                inputs: [
                    {
                        name: "side",
                        type: "uint8",
                    },
                    {
                        name: "saleKind",
                        type: "uint8",
                    },
                    {
                        name: "basePrice",
                        type: "uint256",
                    },
                    {
                        name: "extra",
                        type: "uint256",
                    },
                    {
                        name: "listingTime",
                        type: "uint256",
                    },
                    {
                        name: "expirationTime",
                        type: "uint256",
                    },
                ],
                name: "calculateFinalPrice",
                outputs: [
                    {
                        name: "",
                        type: "uint256",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                constant: true,
                inputs: [
                    {
                        name: "buy",
                        type: "tuple",
                        components: [
                            {
                                name: "exchange",
                                type: "address",
                            },
                            {
                                name: "maker",
                                type: "address",
                            },
                            {
                                name: "taker",
                                type: "address",
                            },
                            {
                                name: "makerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "takerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "makerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "takerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "feeRecipient",
                                type: "address",
                            },
                            {
                                name: "feeMethod",
                                type: "uint8",
                            },
                            {
                                name: "side",
                                type: "uint8",
                            },
                            {
                                name: "saleKind",
                                type: "uint8",
                            },
                            {
                                name: "target",
                                type: "address",
                            },
                            {
                                name: "howToCall",
                                type: "uint8",
                            },
                            {
                                name: "calldatas",
                                type: "bytes",
                            },
                            {
                                name: "replacementPattern",
                                type: "bytes",
                            },
                            {
                                name: "staticTarget",
                                type: "address",
                            },
                            {
                                name: "staticExtradata",
                                type: "bytes",
                            },
                            {
                                name: "paymentToken",
                                type: "address",
                            },
                            {
                                name: "basePrice",
                                type: "uint256",
                            },
                            {
                                name: "extra",
                                type: "uint256",
                            },
                            {
                                name: "listingTime",
                                type: "uint256",
                            },
                            {
                                name: "expirationTime",
                                type: "uint256",
                            },
                            {
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                name: "dataType",
                                type: "bytes4",
                            },
                            {
                                name: "data",
                                type: "bytes",
                            },
                        ],
                    },
                    {
                        name: "sell",
                        type: "tuple",
                        components: [
                            {
                                name: "exchange",
                                type: "address",
                            },
                            {
                                name: "maker",
                                type: "address",
                            },
                            {
                                name: "taker",
                                type: "address",
                            },
                            {
                                name: "makerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "takerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "makerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "takerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "feeRecipient",
                                type: "address",
                            },
                            {
                                name: "feeMethod",
                                type: "uint8",
                            },
                            {
                                name: "side",
                                type: "uint8",
                            },
                            {
                                name: "saleKind",
                                type: "uint8",
                            },
                            {
                                name: "target",
                                type: "address",
                            },
                            {
                                name: "howToCall",
                                type: "uint8",
                            },
                            {
                                name: "calldatas",
                                type: "bytes",
                            },
                            {
                                name: "replacementPattern",
                                type: "bytes",
                            },
                            {
                                name: "staticTarget",
                                type: "address",
                            },
                            {
                                name: "staticExtradata",
                                type: "bytes",
                            },
                            {
                                name: "paymentToken",
                                type: "address",
                            },
                            {
                                name: "basePrice",
                                type: "uint256",
                            },
                            {
                                name: "extra",
                                type: "uint256",
                            },
                            {
                                name: "listingTime",
                                type: "uint256",
                            },
                            {
                                name: "expirationTime",
                                type: "uint256",
                            },
                            {
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                name: "dataType",
                                type: "bytes4",
                            },
                            {
                                name: "data",
                                type: "bytes",
                            },
                        ],
                    },
                ],
                name: "calculateMatchPrice",
                outputs: [
                    {
                        name: "",
                        type: "uint256",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                inputs: [
                    {
                        name: "order",
                        type: "tuple",
                        components: [
                            {
                                name: "exchange",
                                type: "address",
                            },
                            {
                                name: "maker",
                                type: "address",
                            },
                            {
                                name: "taker",
                                type: "address",
                            },
                            {
                                name: "makerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "takerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "makerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "takerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "feeRecipient",
                                type: "address",
                            },
                            {
                                name: "feeMethod",
                                type: "uint8",
                            },
                            {
                                name: "side",
                                type: "uint8",
                            },
                            {
                                name: "saleKind",
                                type: "uint8",
                            },
                            {
                                name: "target",
                                type: "address",
                            },
                            {
                                name: "howToCall",
                                type: "uint8",
                            },
                            {
                                name: "calldatas",
                                type: "bytes",
                            },
                            {
                                name: "replacementPattern",
                                type: "bytes",
                            },
                            {
                                name: "staticTarget",
                                type: "address",
                            },
                            {
                                name: "staticExtradata",
                                type: "bytes",
                            },
                            {
                                name: "paymentToken",
                                type: "address",
                            },
                            {
                                name: "basePrice",
                                type: "uint256",
                            },
                            {
                                name: "extra",
                                type: "uint256",
                            },
                            {
                                name: "listingTime",
                                type: "uint256",
                            },
                            {
                                name: "expirationTime",
                                type: "uint256",
                            },
                            {
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                name: "dataType",
                                type: "bytes4",
                            },
                            {
                                name: "data",
                                type: "bytes",
                            },
                        ],
                    },
                    {
                        name: "sig",
                        type: "tuple",
                        components: [
                            {
                                name: "v",
                                type: "uint8",
                            },
                            {
                                name: "r",
                                type: "bytes32",
                            },
                            {
                                name: "s",
                                type: "bytes32",
                            },
                        ],
                    },
                ],
                name: "cancelOrder",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
            {
                constant: true,
                inputs: [
                    {
                        name: "index_0",
                        type: "bytes32",
                    },
                ],
                name: "cancelledOrFinalized",
                outputs: [
                    {
                        name: "",
                        type: "bool",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                inputs: [
                    {
                        name: "newDevWalletAddress",
                        type: "address",
                    },
                ],
                name: "changeDevWalletAddress",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
            {
                inputs: [
                    {
                        name: "newMinimumMakerProtocolFee",
                        type: "uint256",
                    },
                ],
                name: "changeMinimumMakerProtocolFee",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
            {
                inputs: [
                    {
                        name: "newMinimumTakerProtocolFee",
                        type: "uint256",
                    },
                ],
                name: "changeMinimumTakerProtocolFee",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
            {
                inputs: [
                    {
                        name: "newProtocolFeeRecipient",
                        type: "address",
                    },
                ],
                name: "changeProtocolFeeRecipient",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
            {
                constant: true,
                inputs: [],
                name: "codename",
                outputs: [
                    {
                        name: "",
                        type: "string",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                constant: true,
                inputs: [],
                name: "devWallet",
                outputs: [
                    {
                        name: "",
                        type: "address",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                constant: true,
                inputs: [],
                name: "exchangeToken",
                outputs: [
                    {
                        name: "",
                        type: "address",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                constant: true,
                inputs: [
                    {
                        name: "array",
                        type: "bytes",
                    },
                    {
                        name: "desired",
                        type: "bytes",
                    },
                    {
                        name: "mask",
                        type: "bytes",
                    },
                ],
                name: "guardedArrayReplace",
                outputs: [
                    {
                        name: "",
                        type: "bytes",
                    },
                ],
                stateMutability: "pure",
                type: "function",
            },
            {
                constant: true,
                inputs: [
                    {
                        name: "order",
                        type: "tuple",
                        components: [
                            {
                                name: "exchange",
                                type: "address",
                            },
                            {
                                name: "maker",
                                type: "address",
                            },
                            {
                                name: "taker",
                                type: "address",
                            },
                            {
                                name: "makerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "takerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "makerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "takerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "feeRecipient",
                                type: "address",
                            },
                            {
                                name: "feeMethod",
                                type: "uint8",
                            },
                            {
                                name: "side",
                                type: "uint8",
                            },
                            {
                                name: "saleKind",
                                type: "uint8",
                            },
                            {
                                name: "target",
                                type: "address",
                            },
                            {
                                name: "howToCall",
                                type: "uint8",
                            },
                            {
                                name: "calldatas",
                                type: "bytes",
                            },
                            {
                                name: "replacementPattern",
                                type: "bytes",
                            },
                            {
                                name: "staticTarget",
                                type: "address",
                            },
                            {
                                name: "staticExtradata",
                                type: "bytes",
                            },
                            {
                                name: "paymentToken",
                                type: "address",
                            },
                            {
                                name: "basePrice",
                                type: "uint256",
                            },
                            {
                                name: "extra",
                                type: "uint256",
                            },
                            {
                                name: "listingTime",
                                type: "uint256",
                            },
                            {
                                name: "expirationTime",
                                type: "uint256",
                            },
                            {
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                name: "dataType",
                                type: "bytes4",
                            },
                            {
                                name: "data",
                                type: "bytes",
                            },
                        ],
                    },
                ],
                name: "hashOrder",
                outputs: [
                    {
                        name: "hash",
                        type: "bytes32",
                    },
                ],
                stateMutability: "pure",
                type: "function",
            },
            {
                constant: true,
                inputs: [
                    {
                        name: "order",
                        type: "tuple",
                        components: [
                            {
                                name: "exchange",
                                type: "address",
                            },
                            {
                                name: "maker",
                                type: "address",
                            },
                            {
                                name: "taker",
                                type: "address",
                            },
                            {
                                name: "makerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "takerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "makerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "takerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "feeRecipient",
                                type: "address",
                            },
                            {
                                name: "feeMethod",
                                type: "uint8",
                            },
                            {
                                name: "side",
                                type: "uint8",
                            },
                            {
                                name: "saleKind",
                                type: "uint8",
                            },
                            {
                                name: "target",
                                type: "address",
                            },
                            {
                                name: "howToCall",
                                type: "uint8",
                            },
                            {
                                name: "calldatas",
                                type: "bytes",
                            },
                            {
                                name: "replacementPattern",
                                type: "bytes",
                            },
                            {
                                name: "staticTarget",
                                type: "address",
                            },
                            {
                                name: "staticExtradata",
                                type: "bytes",
                            },
                            {
                                name: "paymentToken",
                                type: "address",
                            },
                            {
                                name: "basePrice",
                                type: "uint256",
                            },
                            {
                                name: "extra",
                                type: "uint256",
                            },
                            {
                                name: "listingTime",
                                type: "uint256",
                            },
                            {
                                name: "expirationTime",
                                type: "uint256",
                            },
                            {
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                name: "dataType",
                                type: "bytes4",
                            },
                            {
                                name: "data",
                                type: "bytes",
                            },
                        ],
                    },
                ],
                name: "hashToSign",
                outputs: [
                    {
                        name: "",
                        type: "bytes32",
                    },
                ],
                stateMutability: "pure",
                type: "function",
            },
            {
                inputs: [
                    {
                        name: "registryAddress",
                        type: "address",
                    },
                    {
                        name: "tokenTransferProxyAddress",
                        type: "address",
                    },
                    {
                        name: "tokenAddress",
                        type: "address",
                    },
                    {
                        name: "protocolFeeAddress",
                        type: "address",
                    },
                    {
                        name: "devWalletAddress",
                        type: "address",
                    },
                ],
                name: "initialize",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
            {
                constant: true,
                inputs: [],
                name: "minimumMakerProtocolFee",
                outputs: [
                    {
                        name: "",
                        type: "uint256",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                constant: true,
                inputs: [],
                name: "minimumTakerProtocolFee",
                outputs: [
                    {
                        name: "",
                        type: "uint256",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                constant: true,
                inputs: [],
                name: "name",
                outputs: [
                    {
                        name: "",
                        type: "string",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                constant: true,
                inputs: [
                    {
                        name: "buyCalldata",
                        type: "bytes",
                    },
                    {
                        name: "buyReplacementPattern",
                        type: "bytes",
                    },
                    {
                        name: "sellCalldata",
                        type: "bytes",
                    },
                    {
                        name: "sellReplacementPattern",
                        type: "bytes",
                    },
                ],
                name: "orderCalldataCanMatch",
                outputs: [
                    {
                        name: "",
                        type: "bool",
                    },
                ],
                stateMutability: "pure",
                type: "function",
            },
            {
                constant: true,
                inputs: [
                    {
                        name: "buy",
                        type: "tuple",
                        components: [
                            {
                                name: "exchange",
                                type: "address",
                            },
                            {
                                name: "maker",
                                type: "address",
                            },
                            {
                                name: "taker",
                                type: "address",
                            },
                            {
                                name: "makerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "takerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "makerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "takerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "feeRecipient",
                                type: "address",
                            },
                            {
                                name: "feeMethod",
                                type: "uint8",
                            },
                            {
                                name: "side",
                                type: "uint8",
                            },
                            {
                                name: "saleKind",
                                type: "uint8",
                            },
                            {
                                name: "target",
                                type: "address",
                            },
                            {
                                name: "howToCall",
                                type: "uint8",
                            },
                            {
                                name: "calldatas",
                                type: "bytes",
                            },
                            {
                                name: "replacementPattern",
                                type: "bytes",
                            },
                            {
                                name: "staticTarget",
                                type: "address",
                            },
                            {
                                name: "staticExtradata",
                                type: "bytes",
                            },
                            {
                                name: "paymentToken",
                                type: "address",
                            },
                            {
                                name: "basePrice",
                                type: "uint256",
                            },
                            {
                                name: "extra",
                                type: "uint256",
                            },
                            {
                                name: "listingTime",
                                type: "uint256",
                            },
                            {
                                name: "expirationTime",
                                type: "uint256",
                            },
                            {
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                name: "dataType",
                                type: "bytes4",
                            },
                            {
                                name: "data",
                                type: "bytes",
                            },
                        ],
                    },
                    {
                        name: "sell",
                        type: "tuple",
                        components: [
                            {
                                name: "exchange",
                                type: "address",
                            },
                            {
                                name: "maker",
                                type: "address",
                            },
                            {
                                name: "taker",
                                type: "address",
                            },
                            {
                                name: "makerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "takerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "makerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "takerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "feeRecipient",
                                type: "address",
                            },
                            {
                                name: "feeMethod",
                                type: "uint8",
                            },
                            {
                                name: "side",
                                type: "uint8",
                            },
                            {
                                name: "saleKind",
                                type: "uint8",
                            },
                            {
                                name: "target",
                                type: "address",
                            },
                            {
                                name: "howToCall",
                                type: "uint8",
                            },
                            {
                                name: "calldatas",
                                type: "bytes",
                            },
                            {
                                name: "replacementPattern",
                                type: "bytes",
                            },
                            {
                                name: "staticTarget",
                                type: "address",
                            },
                            {
                                name: "staticExtradata",
                                type: "bytes",
                            },
                            {
                                name: "paymentToken",
                                type: "address",
                            },
                            {
                                name: "basePrice",
                                type: "uint256",
                            },
                            {
                                name: "extra",
                                type: "uint256",
                            },
                            {
                                name: "listingTime",
                                type: "uint256",
                            },
                            {
                                name: "expirationTime",
                                type: "uint256",
                            },
                            {
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                name: "dataType",
                                type: "bytes4",
                            },
                            {
                                name: "data",
                                type: "bytes",
                            },
                        ],
                    },
                ],
                name: "ordersCanMatch",
                outputs: [
                    {
                        name: "",
                        type: "bool",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                constant: true,
                inputs: [],
                name: "owner",
                outputs: [
                    {
                        name: "",
                        type: "address",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                constant: true,
                inputs: [],
                name: "protocolFeeRecipient",
                outputs: [
                    {
                        name: "",
                        type: "address",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                constant: true,
                inputs: [],
                name: "registry",
                outputs: [
                    {
                        name: "",
                        type: "address",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
            {
                constant: true,
                inputs: [
                    {
                        name: "target",
                        type: "address",
                    },
                    {
                        name: "calldatas",
                        type: "bytes",
                    },
                    {
                        name: "extradata",
                        type: "bytes",
                    },
                ],
                name: "staticCall",
                outputs: [
                    {
                        name: "result",
                        type: "bool",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                constant: true,
                inputs: [
                    {
                        name: "arrToCopy",
                        type: "bytes",
                    },
                ],
                name: "testCopy",
                outputs: [
                    {
                        name: "",
                        type: "bytes",
                    },
                ],
                stateMutability: "pure",
                type: "function",
            },
            {
                constant: true,
                inputs: [
                    {
                        name: "addr",
                        type: "address",
                    },
                ],
                name: "testCopyAddress",
                outputs: [
                    {
                        name: "",
                        type: "bytes",
                    },
                ],
                stateMutability: "pure",
                type: "function",
            },
            {
                constant: true,
                inputs: [],
                name: "tokenTransferProxy",
                outputs: [
                    {
                        name: "",
                        type: "address",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                inputs: [
                    {
                        name: "newOwner",
                        type: "address",
                    },
                ],
                name: "transferOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
            },
            {
                constant: true,
                inputs: [
                    {
                        name: "hash",
                        type: "bytes32",
                    },
                    {
                        name: "order",
                        type: "tuple",
                        components: [
                            {
                                name: "exchange",
                                type: "address",
                            },
                            {
                                name: "maker",
                                type: "address",
                            },
                            {
                                name: "taker",
                                type: "address",
                            },
                            {
                                name: "makerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "takerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "makerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "takerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "feeRecipient",
                                type: "address",
                            },
                            {
                                name: "feeMethod",
                                type: "uint8",
                            },
                            {
                                name: "side",
                                type: "uint8",
                            },
                            {
                                name: "saleKind",
                                type: "uint8",
                            },
                            {
                                name: "target",
                                type: "address",
                            },
                            {
                                name: "howToCall",
                                type: "uint8",
                            },
                            {
                                name: "calldatas",
                                type: "bytes",
                            },
                            {
                                name: "replacementPattern",
                                type: "bytes",
                            },
                            {
                                name: "staticTarget",
                                type: "address",
                            },
                            {
                                name: "staticExtradata",
                                type: "bytes",
                            },
                            {
                                name: "paymentToken",
                                type: "address",
                            },
                            {
                                name: "basePrice",
                                type: "uint256",
                            },
                            {
                                name: "extra",
                                type: "uint256",
                            },
                            {
                                name: "listingTime",
                                type: "uint256",
                            },
                            {
                                name: "expirationTime",
                                type: "uint256",
                            },
                            {
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                name: "dataType",
                                type: "bytes4",
                            },
                            {
                                name: "data",
                                type: "bytes",
                            },
                        ],
                    },
                    {
                        name: "sig",
                        type: "tuple",
                        components: [
                            {
                                name: "v",
                                type: "uint8",
                            },
                            {
                                name: "r",
                                type: "bytes32",
                            },
                            {
                                name: "s",
                                type: "bytes32",
                            },
                        ],
                    },
                ],
                name: "validateOrder",
                outputs: [
                    {
                        name: "",
                        type: "bool",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                constant: true,
                inputs: [
                    {
                        name: "order",
                        type: "tuple",
                        components: [
                            {
                                name: "exchange",
                                type: "address",
                            },
                            {
                                name: "maker",
                                type: "address",
                            },
                            {
                                name: "taker",
                                type: "address",
                            },
                            {
                                name: "makerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "takerRelayerFee",
                                type: "uint256",
                            },
                            {
                                name: "makerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "takerProtocolFee",
                                type: "uint256",
                            },
                            {
                                name: "feeRecipient",
                                type: "address",
                            },
                            {
                                name: "feeMethod",
                                type: "uint8",
                            },
                            {
                                name: "side",
                                type: "uint8",
                            },
                            {
                                name: "saleKind",
                                type: "uint8",
                            },
                            {
                                name: "target",
                                type: "address",
                            },
                            {
                                name: "howToCall",
                                type: "uint8",
                            },
                            {
                                name: "calldatas",
                                type: "bytes",
                            },
                            {
                                name: "replacementPattern",
                                type: "bytes",
                            },
                            {
                                name: "staticTarget",
                                type: "address",
                            },
                            {
                                name: "staticExtradata",
                                type: "bytes",
                            },
                            {
                                name: "paymentToken",
                                type: "address",
                            },
                            {
                                name: "basePrice",
                                type: "uint256",
                            },
                            {
                                name: "extra",
                                type: "uint256",
                            },
                            {
                                name: "listingTime",
                                type: "uint256",
                            },
                            {
                                name: "expirationTime",
                                type: "uint256",
                            },
                            {
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                name: "dataType",
                                type: "bytes4",
                            },
                            {
                                name: "data",
                                type: "bytes",
                            },
                        ],
                    },
                ],
                name: "validateOrderParameters",
                outputs: [
                    {
                        name: "",
                        type: "bool",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                constant: true,
                inputs: [],
                name: "version",
                outputs: [
                    {
                        name: "",
                        type: "string",
                    },
                ],
                stateMutability: "view",
                type: "function",
            },
        ];
        return abi;
    }
    static _deployLibrariesAsync(artifact, libraryArtifacts, web3Wrapper, txDefaults, libraryAddresses = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const links = artifact.compilerOutput.evm.bytecode.linkReferences;
            // Go through all linked libraries, recursively deploying them if necessary.
            for (const link of Object.values(links)) {
                for (const libraryName of Object.keys(link)) {
                    if (!libraryAddresses[libraryName]) {
                        // Library not yet deployed.
                        const libraryArtifact = libraryArtifacts[libraryName];
                        if (!libraryArtifact) {
                            throw new Error(`Missing artifact for linked library "${libraryName}"`);
                        }
                        // Deploy any dependent libraries used by this library.
                        yield WyvernExchangeContract._deployLibrariesAsync(libraryArtifact, libraryArtifacts, web3Wrapper, txDefaults, libraryAddresses);
                        // Deploy this library.
                        const linkedLibraryBytecode = base_contract_1.linkLibrariesInBytecode(libraryArtifact, libraryAddresses);
                        const txDataWithDefaults = yield base_contract_1.BaseContract._applyDefaultsToContractTxDataAsync(Object.assign({ data: linkedLibraryBytecode }, txDefaults), web3Wrapper.estimateGasAsync.bind(web3Wrapper));
                        const txHash = yield web3Wrapper.sendTransactionAsync(txDataWithDefaults);
                        utils_1.logUtils.log(`transactionHash: ${txHash}`);
                        const { contractAddress } = yield web3Wrapper.awaitTransactionSuccessAsync(txHash);
                        utils_1.logUtils.log(`${libraryArtifact.contractName} successfully deployed at ${contractAddress}`);
                        libraryAddresses[libraryArtifact.contractName] =
                            contractAddress;
                    }
                }
            }
            return libraryAddresses;
        });
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
    INVERSE_BASIS_POINT() {
        const self = this;
        const functionSignature = "INVERSE_BASIS_POINT()";
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
    approveOrder(order, orderbookInclusionDesired) {
        const self = this;
        assert_1.assert.isBoolean("orderbookInclusionDesired", orderbookInclusionDesired);
        const functionSignature = "approveOrder((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes),bool)";
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
                return self._strictEncodeArguments(functionSignature, [
                    order,
                    orderbookInclusionDesired,
                ]);
            },
        };
    }
    approvedOrders(index_0) {
        const self = this;
        assert_1.assert.isString("index_0", index_0);
        const functionSignature = "approvedOrders(bytes32)";
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
                return self._strictEncodeArguments(functionSignature, [index_0]);
            },
        };
    }
    atomicMatch(buy, buySig, sell, sellSig, metadata) {
        const self = this;
        assert_1.assert.isString("metadata", metadata);
        const functionSignature = "atomicMatch((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes),(uint8,bytes32,bytes32),(address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes),(uint8,bytes32,bytes32),bytes32)";
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
                return self._strictEncodeArguments(functionSignature, [
                    buy,
                    buySig,
                    sell,
                    sellSig,
                    metadata,
                ]);
            },
        };
    }
    calculateCurrentPrice(order) {
        const self = this;
        const functionSignature = "calculateCurrentPrice((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes))";
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
                return self._strictEncodeArguments(functionSignature, [order]);
            },
        };
    }
    calculateFinalPrice(side, saleKind, basePrice, extra, listingTime, expirationTime) {
        const self = this;
        assert_1.assert.isNumberOrBigNumber("side", side);
        assert_1.assert.isNumberOrBigNumber("saleKind", saleKind);
        assert_1.assert.isBigNumber("basePrice", basePrice);
        assert_1.assert.isBigNumber("extra", extra);
        assert_1.assert.isBigNumber("listingTime", listingTime);
        assert_1.assert.isBigNumber("expirationTime", expirationTime);
        const functionSignature = "calculateFinalPrice(uint8,uint8,uint256,uint256,uint256,uint256)";
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
                return self._strictEncodeArguments(functionSignature, [
                    side,
                    saleKind,
                    basePrice,
                    extra,
                    listingTime,
                    expirationTime,
                ]);
            },
        };
    }
    calculateMatchPrice(buy, sell) {
        const self = this;
        const functionSignature = "calculateMatchPrice((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes),(address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes))";
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
                return self._strictEncodeArguments(functionSignature, [buy, sell]);
            },
        };
    }
    cancelOrder(order, sig) {
        const self = this;
        const functionSignature = "cancelOrder((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes),(uint8,bytes32,bytes32))";
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
                return self._strictEncodeArguments(functionSignature, [order, sig]);
            },
        };
    }
    cancelledOrFinalized(index_0) {
        const self = this;
        assert_1.assert.isString("index_0", index_0);
        const functionSignature = "cancelledOrFinalized(bytes32)";
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
                return self._strictEncodeArguments(functionSignature, [index_0]);
            },
        };
    }
    changeDevWalletAddress(newDevWalletAddress) {
        const self = this;
        assert_1.assert.isString("newDevWalletAddress", newDevWalletAddress);
        const functionSignature = "changeDevWalletAddress(address)";
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
                return self._strictEncodeArguments(functionSignature, [
                    newDevWalletAddress.toLowerCase(),
                ]);
            },
        };
    }
    changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee) {
        const self = this;
        assert_1.assert.isBigNumber("newMinimumMakerProtocolFee", newMinimumMakerProtocolFee);
        const functionSignature = "changeMinimumMakerProtocolFee(uint256)";
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
                return self._strictEncodeArguments(functionSignature, [
                    newMinimumMakerProtocolFee,
                ]);
            },
        };
    }
    changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee) {
        const self = this;
        assert_1.assert.isBigNumber("newMinimumTakerProtocolFee", newMinimumTakerProtocolFee);
        const functionSignature = "changeMinimumTakerProtocolFee(uint256)";
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
                return self._strictEncodeArguments(functionSignature, [
                    newMinimumTakerProtocolFee,
                ]);
            },
        };
    }
    changeProtocolFeeRecipient(newProtocolFeeRecipient) {
        const self = this;
        assert_1.assert.isString("newProtocolFeeRecipient", newProtocolFeeRecipient);
        const functionSignature = "changeProtocolFeeRecipient(address)";
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
                return self._strictEncodeArguments(functionSignature, [
                    newProtocolFeeRecipient.toLowerCase(),
                ]);
            },
        };
    }
    codename() {
        const self = this;
        const functionSignature = "codename()";
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
    devWallet() {
        const self = this;
        const functionSignature = "devWallet()";
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
    exchangeToken() {
        const self = this;
        const functionSignature = "exchangeToken()";
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
    guardedArrayReplace(array, desired, mask) {
        const self = this;
        assert_1.assert.isString("array", array);
        assert_1.assert.isString("desired", desired);
        assert_1.assert.isString("mask", mask);
        const functionSignature = "guardedArrayReplace(bytes,bytes,bytes)";
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
                return self._strictEncodeArguments(functionSignature, [
                    array,
                    desired,
                    mask,
                ]);
            },
        };
    }
    hashOrder(order) {
        const self = this;
        const functionSignature = "hashOrder((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes))";
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
                return self._strictEncodeArguments(functionSignature, [order]);
            },
        };
    }
    hashToSign(order) {
        const self = this;
        const functionSignature = "hashToSign((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes))";
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
                return self._strictEncodeArguments(functionSignature, [order]);
            },
        };
    }
    initialize(registryAddress, tokenTransferProxyAddress, tokenAddress, protocolFeeAddress, devWalletAddress) {
        const self = this;
        assert_1.assert.isString("registryAddress", registryAddress);
        assert_1.assert.isString("tokenTransferProxyAddress", tokenTransferProxyAddress);
        assert_1.assert.isString("tokenAddress", tokenAddress);
        assert_1.assert.isString("protocolFeeAddress", protocolFeeAddress);
        assert_1.assert.isString("devWalletAddress", devWalletAddress);
        const functionSignature = "initialize(address,address,address,address,address)";
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
                return self._strictEncodeArguments(functionSignature, [
                    registryAddress.toLowerCase(),
                    tokenTransferProxyAddress.toLowerCase(),
                    tokenAddress.toLowerCase(),
                    protocolFeeAddress.toLowerCase(),
                    devWalletAddress.toLowerCase(),
                ]);
            },
        };
    }
    minimumMakerProtocolFee() {
        const self = this;
        const functionSignature = "minimumMakerProtocolFee()";
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
    minimumTakerProtocolFee() {
        const self = this;
        const functionSignature = "minimumTakerProtocolFee()";
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
    name() {
        const self = this;
        const functionSignature = "name()";
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
    orderCalldataCanMatch(buyCalldata, buyReplacementPattern, sellCalldata, sellReplacementPattern) {
        const self = this;
        assert_1.assert.isString("buyCalldata", buyCalldata);
        assert_1.assert.isString("buyReplacementPattern", buyReplacementPattern);
        assert_1.assert.isString("sellCalldata", sellCalldata);
        assert_1.assert.isString("sellReplacementPattern", sellReplacementPattern);
        const functionSignature = "orderCalldataCanMatch(bytes,bytes,bytes,bytes)";
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
                return self._strictEncodeArguments(functionSignature, [
                    buyCalldata,
                    buyReplacementPattern,
                    sellCalldata,
                    sellReplacementPattern,
                ]);
            },
        };
    }
    ordersCanMatch(buy, sell) {
        const self = this;
        const functionSignature = "ordersCanMatch((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes),(address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes))";
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
                return self._strictEncodeArguments(functionSignature, [buy, sell]);
            },
        };
    }
    owner() {
        const self = this;
        const functionSignature = "owner()";
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
    protocolFeeRecipient() {
        const self = this;
        const functionSignature = "protocolFeeRecipient()";
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
    registry() {
        const self = this;
        const functionSignature = "registry()";
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
    renounceOwnership() {
        const self = this;
        const functionSignature = "renounceOwnership()";
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
    staticCall(target, calldatas, extradata) {
        const self = this;
        assert_1.assert.isString("target", target);
        assert_1.assert.isString("calldatas", calldatas);
        assert_1.assert.isString("extradata", extradata);
        const functionSignature = "staticCall(address,bytes,bytes)";
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
                return self._strictEncodeArguments(functionSignature, [
                    target.toLowerCase(),
                    calldatas,
                    extradata,
                ]);
            },
        };
    }
    testCopy(arrToCopy) {
        const self = this;
        assert_1.assert.isString("arrToCopy", arrToCopy);
        const functionSignature = "testCopy(bytes)";
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
                return self._strictEncodeArguments(functionSignature, [arrToCopy]);
            },
        };
    }
    testCopyAddress(addr) {
        const self = this;
        assert_1.assert.isString("addr", addr);
        const functionSignature = "testCopyAddress(address)";
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
                return self._strictEncodeArguments(functionSignature, [
                    addr.toLowerCase(),
                ]);
            },
        };
    }
    tokenTransferProxy() {
        const self = this;
        const functionSignature = "tokenTransferProxy()";
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
    transferOwnership(newOwner) {
        const self = this;
        assert_1.assert.isString("newOwner", newOwner);
        const functionSignature = "transferOwnership(address)";
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
                return self._strictEncodeArguments(functionSignature, [
                    newOwner.toLowerCase(),
                ]);
            },
        };
    }
    validateOrder(hash, order, sig) {
        const self = this;
        assert_1.assert.isString("hash", hash);
        const functionSignature = "validateOrder(bytes32,(address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes),(uint8,bytes32,bytes32))";
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
                return self._strictEncodeArguments(functionSignature, [
                    hash,
                    order,
                    sig,
                ]);
            },
        };
    }
    validateOrderParameters(order) {
        const self = this;
        const functionSignature = "validateOrderParameters((address,address,address,uint256,uint256,uint256,uint256,address,uint8,uint8,uint8,address,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bytes4,bytes))";
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
                return self._strictEncodeArguments(functionSignature, [order]);
            },
        };
    }
    version() {
        const self = this;
        const functionSignature = "version()";
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
    /**
     * Subscribe to an event type emitted by the WyvernExchange contract.
     * @param eventName The WyvernExchange contract event you would like to subscribe to.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{maker: aUserAddressHex}`
     * @param callback Callback that gets called when a log is added/removed
     * @param isVerbose Enable verbose subscription warnings (e.g recoverable network issues encountered)
     * @return Subscription token used later to unsubscribe
     */
    subscribe(eventName, indexFilterValues, callback, isVerbose = false, blockPollingIntervalMs) {
        assert_1.assert.doesBelongToStringEnum("eventName", eventName, WyvernExchangeEvents);
        assert_1.assert.doesConformToSchema("indexFilterValues", indexFilterValues, json_schemas_1.schemas.indexFilterValuesSchema);
        assert_1.assert.isFunction("callback", callback);
        const subscriptionToken = this._subscriptionManager.subscribe(this.address, eventName, indexFilterValues, WyvernExchangeContract.ABI(), callback, isVerbose, blockPollingIntervalMs);
        return subscriptionToken;
    }
    /**
     * Cancel a subscription
     * @param subscriptionToken Subscription token returned by `subscribe()`
     */
    unsubscribe(subscriptionToken) {
        this._subscriptionManager.unsubscribe(subscriptionToken);
    }
    /**
     * Cancels all existing subscriptions
     */
    unsubscribeAll() {
        this._subscriptionManager.unsubscribeAll();
    }
    /**
     * Gets historical logs without creating a subscription
     * @param eventName The WyvernExchange contract event you would like to subscribe to.
     * @param blockRange Block range to get logs from.
     * @param indexFilterValues An object where the keys are indexed args returned by the event and
     * the value is the value you are interested in. E.g `{_from: aUserAddressHex}`
     * @return Array of logs that match the parameters
     */
    getLogsAsync(eventName, blockRange, indexFilterValues) {
        return __awaiter(this, void 0, void 0, function* () {
            assert_1.assert.doesBelongToStringEnum("eventName", eventName, WyvernExchangeEvents);
            assert_1.assert.doesConformToSchema("blockRange", blockRange, json_schemas_1.schemas.blockRangeSchema);
            assert_1.assert.doesConformToSchema("indexFilterValues", indexFilterValues, json_schemas_1.schemas.indexFilterValuesSchema);
            const logs = yield this._subscriptionManager.getLogsAsync(this.address, eventName, blockRange, indexFilterValues, WyvernExchangeContract.ABI());
            return logs;
        });
    }
}
exports.WyvernExchangeContract = WyvernExchangeContract;
WyvernExchangeContract.contractName = "WyvernExchange";
// tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method no-parameter-reassignment no-consecutive-blank-lines ordered-imports align
// tslint:enable:trailing-comma whitespace no-trailing-whitespace
//# sourceMappingURL=wyvern_exchange.js.map