"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var loan_1 = require("./loan");
var config_1 = require("./config");
var ConsumerLoan = /** @class */ (function (_super) {
    __extends(ConsumerLoan, _super);
    function ConsumerLoan(loanAmount, loanDuration, interest) {
        var _this = _super.call(this, loanAmount, loanDuration, interest) || this;
        _this.interest = interest;
        return _this;
    }
    ConsumerLoan.prototype.isValid = function () {
        if (this.interest == undefined || this.loanAmount > config_1.config.consumerLoanAmountLimit || this.loanAmount < config_1.config.negativeValue || this.loanDuration > config_1.config.consumerLoanDurationLimit || this.loanAmount == config_1.config.emptyField || this.loanDuration == config_1.config.emptyField) {
            alert("Please correct entered data");
            return false;
        }
        return true;
    };
    return ConsumerLoan;
}(loan_1.default));
exports.default = ConsumerLoan;
//# sourceMappingURL=consumerLoan.js.map