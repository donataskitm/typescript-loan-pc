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
var FastLoan = /** @class */ (function (_super) {
    __extends(FastLoan, _super);
    function FastLoan(loanAmount, loanDuration, interest) {
        if (interest === void 0) { interest = config_1.config.fastLoanPerc; }
        return _super.call(this, loanAmount, loanDuration, interest) || this;
    }
    FastLoan.prototype.isValid = function () {
        if (this.loanAmount > config_1.config.fastLoanAmountLimit || this.loanDuration > config_1.config.fastLoanDurationLimit || this.loanAmount == config_1.config.emptyField || this.loanDuration == config_1.config.emptyField) {
            alert("Please correct entered data");
            return false;
        }
        return true;
    };
    return FastLoan;
}(loan_1.default));
exports.default = FastLoan;
//# sourceMappingURL=fastLoan.js.map