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
exports.WyvernExchangeContract = void 0;
var utils_1 = require("@0xproject/utils");
var base_contract_1 = require("./base_contract");
var WyvernExchangeContract = /** @class */ (function (_super) {
    __extends(WyvernExchangeContract, _super);
    function WyvernExchangeContract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.INVERSE_BASIS_POINT = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.INVERSE_BASIS_POINT.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.INVERSE_BASIS_POINT, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.INVERSE_BASIS_POINT.estimateGas, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var abiEncodedTransactionData = this.web3ContractInstance.INVERSE_BASIS_POINT.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.approveOrder = {
            sendTransactionAsync: function (order_0, orderbookInclusionDesired_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.approveOrder.estimateGasAsync.bind(this, order_0, orderbookInclusionDesired_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.approveOrder, this.web3ContractInstance)(order_0, orderbookInclusionDesired_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (order_0, orderbookInclusionDesired_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.approveOrder.estimateGas, this.web3ContractInstance)(order_0, orderbookInclusionDesired_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (order_0, orderbookInclusionDesired_1) {
                var abiEncodedTransactionData = this.web3ContractInstance.approveOrder.getData(order_0, orderbookInclusionDesired_1);
                return abiEncodedTransactionData;
            },
        };
        _this.approvedOrders = {
            sendTransactionAsync: function (index_0_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.approvedOrders.estimateGasAsync.bind(this, index_0_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.approvedOrders, this.web3ContractInstance)(index_0_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (index_0_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.approvedOrders.estimateGas, this.web3ContractInstance)(index_0_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (index_0_0) {
                var abiEncodedTransactionData = this.web3ContractInstance.approvedOrders.getData(index_0_0);
                return abiEncodedTransactionData;
            },
        };
        _this.atomicMatch = {
            sendTransactionAsync: function (buy_0, buySig_1, sell_2, sellSig_3, metadata_4, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.atomicMatch.estimateGasAsync.bind(this, buy_0, buySig_1, sell_2, sellSig_3, metadata_4))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.atomicMatch, this.web3ContractInstance)(buy_0, buySig_1, sell_2, sellSig_3, metadata_4, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (buy_0, buySig_1, sell_2, sellSig_3, metadata_4, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.atomicMatch.estimateGas, this.web3ContractInstance)(buy_0, buySig_1, sell_2, sellSig_3, metadata_4, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (buy_0, buySig_1, sell_2, sellSig_3, metadata_4) {
                var abiEncodedTransactionData = this.web3ContractInstance.atomicMatch.getData(buy_0, buySig_1, sell_2, sellSig_3, metadata_4);
                return abiEncodedTransactionData;
            },
        };
        _this.calculateCurrentPrice = {
            sendTransactionAsync: function (order_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.calculateCurrentPrice.estimateGasAsync.bind(this, order_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.calculateCurrentPrice, this.web3ContractInstance)(order_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (order_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.calculateCurrentPrice.estimateGas, this.web3ContractInstance)(order_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (order_0) {
                var abiEncodedTransactionData = this.web3ContractInstance.calculateCurrentPrice.getData(order_0);
                return abiEncodedTransactionData;
            },
        };
        _this.calculateFinalPrice = {
            sendTransactionAsync: function (side_0, saleKind_1, basePrice_2, extra_3, listingTime_4, expirationTime_5, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.calculateFinalPrice.estimateGasAsync.bind(this, side_0, saleKind_1, basePrice_2, extra_3, listingTime_4, expirationTime_5))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.calculateFinalPrice, this.web3ContractInstance)(side_0, saleKind_1, basePrice_2, extra_3, listingTime_4, expirationTime_5, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (side_0, saleKind_1, basePrice_2, extra_3, listingTime_4, expirationTime_5, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.calculateFinalPrice.estimateGas, this.web3ContractInstance)(side_0, saleKind_1, basePrice_2, extra_3, listingTime_4, expirationTime_5, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (side_0, saleKind_1, basePrice_2, extra_3, listingTime_4, expirationTime_5) {
                var abiEncodedTransactionData = this.web3ContractInstance.calculateFinalPrice.getData(side_0, saleKind_1, basePrice_2, extra_3, listingTime_4, expirationTime_5);
                return abiEncodedTransactionData;
            },
        };
        _this.calculateMatchPrice = {
            sendTransactionAsync: function (buy_0, sell_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.calculateMatchPrice.estimateGasAsync.bind(this, buy_0, sell_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.calculateMatchPrice, this.web3ContractInstance)(buy_0, sell_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (buy_0, sell_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.calculateMatchPrice.estimateGas, this.web3ContractInstance)(buy_0, sell_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (buy_0, sell_1) {
                var abiEncodedTransactionData = this.web3ContractInstance.calculateMatchPrice.getData(buy_0, sell_1);
                return abiEncodedTransactionData;
            },
        };
        _this.cancelOrder = {
            sendTransactionAsync: function (order_0, sig_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.cancelOrder.estimateGasAsync.bind(this, order_0, sig_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.cancelOrder, this.web3ContractInstance)(order_0, sig_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (order_0, sig_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.cancelOrder.estimateGas, this.web3ContractInstance)(order_0, sig_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (order_0, sig_1) {
                var abiEncodedTransactionData = this.web3ContractInstance.cancelOrder.getData(order_0, sig_1);
                return abiEncodedTransactionData;
            },
        };
        _this.cancelledOrFinalized = {
            sendTransactionAsync: function (index_0_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.cancelledOrFinalized.estimateGasAsync.bind(this, index_0_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.cancelledOrFinalized, this.web3ContractInstance)(index_0_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (index_0_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.cancelledOrFinalized.estimateGas, this.web3ContractInstance)(index_0_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (index_0_0) {
                var abiEncodedTransactionData = this.web3ContractInstance.cancelledOrFinalized.getData(index_0_0);
                return abiEncodedTransactionData;
            },
        };
        _this.changeDevWalletAddress = {
            sendTransactionAsync: function (newDevWalletAddress_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.changeDevWalletAddress.estimateGasAsync.bind(this, newDevWalletAddress_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.changeDevWalletAddress, this.web3ContractInstance)(newDevWalletAddress_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newDevWalletAddress_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.changeDevWalletAddress.estimateGas, this.web3ContractInstance)(newDevWalletAddress_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newDevWalletAddress_0) {
                var abiEncodedTransactionData = this.web3ContractInstance.changeDevWalletAddress.getData(newDevWalletAddress_0);
                return abiEncodedTransactionData;
            },
        };
        _this.changeMinimumMakerProtocolFee = {
            sendTransactionAsync: function (newMinimumMakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.changeMinimumMakerProtocolFee.estimateGasAsync.bind(this, newMinimumMakerProtocolFee_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.changeMinimumMakerProtocolFee, this.web3ContractInstance)(newMinimumMakerProtocolFee_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newMinimumMakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.changeMinimumMakerProtocolFee.estimateGas, this.web3ContractInstance)(newMinimumMakerProtocolFee_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newMinimumMakerProtocolFee_0) {
                var abiEncodedTransactionData = this.web3ContractInstance.changeMinimumMakerProtocolFee.getData(newMinimumMakerProtocolFee_0);
                return abiEncodedTransactionData;
            },
        };
        _this.changeMinimumTakerProtocolFee = {
            sendTransactionAsync: function (newMinimumTakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.changeMinimumTakerProtocolFee.estimateGasAsync.bind(this, newMinimumTakerProtocolFee_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.changeMinimumTakerProtocolFee, this.web3ContractInstance)(newMinimumTakerProtocolFee_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newMinimumTakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.changeMinimumTakerProtocolFee.estimateGas, this.web3ContractInstance)(newMinimumTakerProtocolFee_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newMinimumTakerProtocolFee_0) {
                var abiEncodedTransactionData = this.web3ContractInstance.changeMinimumTakerProtocolFee.getData(newMinimumTakerProtocolFee_0);
                return abiEncodedTransactionData;
            },
        };
        _this.changeProtocolFeeRecipient = {
            sendTransactionAsync: function (newProtocolFeeRecipient_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.changeProtocolFeeRecipient.estimateGasAsync.bind(this, newProtocolFeeRecipient_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.changeProtocolFeeRecipient, this.web3ContractInstance)(newProtocolFeeRecipient_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newProtocolFeeRecipient_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.changeProtocolFeeRecipient.estimateGas, this.web3ContractInstance)(newProtocolFeeRecipient_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newProtocolFeeRecipient_0) {
                var abiEncodedTransactionData = this.web3ContractInstance.changeProtocolFeeRecipient.getData(newProtocolFeeRecipient_0);
                return abiEncodedTransactionData;
            },
        };
        _this.codename = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.codename.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.codename, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.codename.estimateGas, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var abiEncodedTransactionData = this.web3ContractInstance.codename.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.devWallet = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.devWallet.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.devWallet, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.devWallet.estimateGas, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var abiEncodedTransactionData = this.web3ContractInstance.devWallet.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.exchangeToken = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.exchangeToken.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.exchangeToken, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.exchangeToken.estimateGas, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var abiEncodedTransactionData = this.web3ContractInstance.exchangeToken.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.guardedArrayReplace = {
            sendTransactionAsync: function (array_0, desired_1, mask_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.guardedArrayReplace.estimateGasAsync.bind(this, array_0, desired_1, mask_2))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.guardedArrayReplace, this.web3ContractInstance)(array_0, desired_1, mask_2, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (array_0, desired_1, mask_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.guardedArrayReplace.estimateGas, this.web3ContractInstance)(array_0, desired_1, mask_2, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (array_0, desired_1, mask_2) {
                var abiEncodedTransactionData = this.web3ContractInstance.guardedArrayReplace.getData(array_0, desired_1, mask_2);
                return abiEncodedTransactionData;
            },
        };
        _this.hashOrder = {
            sendTransactionAsync: function (order_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.hashOrder.estimateGasAsync.bind(this, order_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.hashOrder, this.web3ContractInstance)(order_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (order_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.hashOrder.estimateGas, this.web3ContractInstance)(order_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (order_0) {
                var abiEncodedTransactionData = this.web3ContractInstance.hashOrder.getData(order_0);
                return abiEncodedTransactionData;
            },
        };
        _this.hashToSign = {
            sendTransactionAsync: function (order_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.hashToSign.estimateGasAsync.bind(this, order_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.hashToSign, this.web3ContractInstance)(order_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (order_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.hashToSign.estimateGas, this.web3ContractInstance)(order_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (order_0) {
                var abiEncodedTransactionData = this.web3ContractInstance.hashToSign.getData(order_0);
                return abiEncodedTransactionData;
            },
        };
        _this.initialize = {
            sendTransactionAsync: function (registryAddress_0, tokenTransferProxyAddress_1, tokenAddress_2, protocolFeeAddress_3, devWalletAddress_4, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.initialize.estimateGasAsync.bind(this, registryAddress_0, tokenTransferProxyAddress_1, tokenAddress_2, protocolFeeAddress_3, devWalletAddress_4))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.initialize, this.web3ContractInstance)(registryAddress_0, tokenTransferProxyAddress_1, tokenAddress_2, protocolFeeAddress_3, devWalletAddress_4, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (registryAddress_0, tokenTransferProxyAddress_1, tokenAddress_2, protocolFeeAddress_3, devWalletAddress_4, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.initialize.estimateGas, this.web3ContractInstance)(registryAddress_0, tokenTransferProxyAddress_1, tokenAddress_2, protocolFeeAddress_3, devWalletAddress_4, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (registryAddress_0, tokenTransferProxyAddress_1, tokenAddress_2, protocolFeeAddress_3, devWalletAddress_4) {
                var abiEncodedTransactionData = this.web3ContractInstance.initialize.getData(registryAddress_0, tokenTransferProxyAddress_1, tokenAddress_2, protocolFeeAddress_3, devWalletAddress_4);
                return abiEncodedTransactionData;
            },
        };
        _this.minimumMakerProtocolFee = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.minimumMakerProtocolFee.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.minimumMakerProtocolFee, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.minimumMakerProtocolFee.estimateGas, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var abiEncodedTransactionData = this.web3ContractInstance.minimumMakerProtocolFee.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.minimumTakerProtocolFee = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.minimumTakerProtocolFee.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.minimumTakerProtocolFee, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.minimumTakerProtocolFee.estimateGas, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var abiEncodedTransactionData = this.web3ContractInstance.minimumTakerProtocolFee.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.name = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.name.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.name, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.name.estimateGas, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var abiEncodedTransactionData = this.web3ContractInstance.name.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.orderCalldataCanMatch = {
            sendTransactionAsync: function (buyCalldata_0, buyReplacementPattern_1, sellCalldata_2, sellReplacementPattern_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.orderCalldataCanMatch.estimateGasAsync.bind(this, buyCalldata_0, buyReplacementPattern_1, sellCalldata_2, sellReplacementPattern_3))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.orderCalldataCanMatch, this.web3ContractInstance)(buyCalldata_0, buyReplacementPattern_1, sellCalldata_2, sellReplacementPattern_3, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (buyCalldata_0, buyReplacementPattern_1, sellCalldata_2, sellReplacementPattern_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.orderCalldataCanMatch.estimateGas, this.web3ContractInstance)(buyCalldata_0, buyReplacementPattern_1, sellCalldata_2, sellReplacementPattern_3, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (buyCalldata_0, buyReplacementPattern_1, sellCalldata_2, sellReplacementPattern_3) {
                var abiEncodedTransactionData = this.web3ContractInstance.orderCalldataCanMatch.getData(buyCalldata_0, buyReplacementPattern_1, sellCalldata_2, sellReplacementPattern_3);
                return abiEncodedTransactionData;
            },
        };
        _this.ordersCanMatch = {
            sendTransactionAsync: function (buy_0, sell_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.ordersCanMatch.estimateGasAsync.bind(this, buy_0, sell_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.ordersCanMatch, this.web3ContractInstance)(buy_0, sell_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (buy_0, sell_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.ordersCanMatch.estimateGas, this.web3ContractInstance)(buy_0, sell_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (buy_0, sell_1) {
                var abiEncodedTransactionData = this.web3ContractInstance.ordersCanMatch.getData(buy_0, sell_1);
                return abiEncodedTransactionData;
            },
        };
        _this.owner = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.owner.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.owner, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.owner.estimateGas, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var abiEncodedTransactionData = this.web3ContractInstance.owner.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.protocolFeeRecipient = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.protocolFeeRecipient.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.protocolFeeRecipient, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.protocolFeeRecipient.estimateGas, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var abiEncodedTransactionData = this.web3ContractInstance.protocolFeeRecipient.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.registry = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.registry.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.registry, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.registry.estimateGas, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var abiEncodedTransactionData = this.web3ContractInstance.registry.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.renounceOwnership = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.renounceOwnership.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.renounceOwnership, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.renounceOwnership.estimateGas, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var abiEncodedTransactionData = this.web3ContractInstance.renounceOwnership.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.staticCall = {
            sendTransactionAsync: function (target_0, calldatas_1, extradata_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.staticCall.estimateGasAsync.bind(this, target_0, calldatas_1, extradata_2))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.staticCall, this.web3ContractInstance)(target_0, calldatas_1, extradata_2, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (target_0, calldatas_1, extradata_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.staticCall.estimateGas, this.web3ContractInstance)(target_0, calldatas_1, extradata_2, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (target_0, calldatas_1, extradata_2) {
                var abiEncodedTransactionData = this.web3ContractInstance.staticCall.getData(target_0, calldatas_1, extradata_2);
                return abiEncodedTransactionData;
            },
        };
        _this.testCopy = {
            sendTransactionAsync: function (arrToCopy_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.testCopy.estimateGasAsync.bind(this, arrToCopy_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.testCopy, this.web3ContractInstance)(arrToCopy_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (arrToCopy_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.testCopy.estimateGas, this.web3ContractInstance)(arrToCopy_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (arrToCopy_0) {
                var abiEncodedTransactionData = this.web3ContractInstance.testCopy.getData(arrToCopy_0);
                return abiEncodedTransactionData;
            },
        };
        _this.testCopyAddress = {
            sendTransactionAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.testCopyAddress.estimateGasAsync.bind(this, addr_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.testCopyAddress, this.web3ContractInstance)(addr_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.testCopyAddress.estimateGas, this.web3ContractInstance)(addr_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addr_0) {
                var abiEncodedTransactionData = this.web3ContractInstance.testCopyAddress.getData(addr_0);
                return abiEncodedTransactionData;
            },
        };
        _this.tokenTransferProxy = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.tokenTransferProxy.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.tokenTransferProxy, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.tokenTransferProxy.estimateGas, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var abiEncodedTransactionData = this.web3ContractInstance.tokenTransferProxy.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.transferOwnership = {
            sendTransactionAsync: function (newOwner_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.transferOwnership.estimateGasAsync.bind(this, newOwner_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.transferOwnership, this.web3ContractInstance)(newOwner_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newOwner_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.transferOwnership.estimateGas, this.web3ContractInstance)(newOwner_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newOwner_0) {
                var abiEncodedTransactionData = this.web3ContractInstance.transferOwnership.getData(newOwner_0);
                return abiEncodedTransactionData;
            },
        };
        _this.validateOrder = {
            sendTransactionAsync: function (hash_0, order_1, sig_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.validateOrder.estimateGasAsync.bind(this, hash_0, order_1, sig_2))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.validateOrder, this.web3ContractInstance)(hash_0, order_1, sig_2, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (hash_0, order_1, sig_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.validateOrder.estimateGas, this.web3ContractInstance)(hash_0, order_1, sig_2, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (hash_0, order_1, sig_2) {
                var abiEncodedTransactionData = this.web3ContractInstance.validateOrder.getData(hash_0, order_1, sig_2);
                return abiEncodedTransactionData;
            },
        };
        _this.validateOrderParameters = {
            sendTransactionAsync: function (order_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.validateOrderParameters.estimateGasAsync.bind(this, order_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.validateOrderParameters, this.web3ContractInstance)(order_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (order_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.validateOrderParameters.estimateGas, this.web3ContractInstance)(order_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (order_0) {
                var abiEncodedTransactionData = this.web3ContractInstance.validateOrderParameters.getData(order_0);
                return abiEncodedTransactionData;
            },
        };
        _this.version = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData, this.version.estimateGasAsync.bind(this))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.version, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(this.web3ContractInstance.version.estimateGas, this.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var abiEncodedTransactionData = this.web3ContractInstance.version.getData();
                return abiEncodedTransactionData;
            },
        };
        utils_1.classUtils.bindAll(_this, ['web3ContractInstance', 'defaults']);
        return _this;
    }
    return WyvernExchangeContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernExchangeContract = WyvernExchangeContract;
//# sourceMappingURL=wyvern_exchange.js.map