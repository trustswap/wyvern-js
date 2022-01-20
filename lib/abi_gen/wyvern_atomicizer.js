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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WyvernAtomicizerContract = void 0;
var utils_1 = require("@0xproject/utils");
var base_contract_1 = require("./base_contract");
var WyvernAtomicizerContract = /** @class */ (function (_super) {
    __extends(WyvernAtomicizerContract, _super);
    function WyvernAtomicizerContract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        utils_1.classUtils.bindAll(_this, ['web3ContractInstance', 'defaults']);
        return _this;
    }
    return WyvernAtomicizerContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernAtomicizerContract = WyvernAtomicizerContract;
//# sourceMappingURL=wyvern_atomicizer.js.map