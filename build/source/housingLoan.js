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
var config_1 = require("./config");
var loan_1 = require("./loan");
var FieldsValidation_1 = require("./FieldsValidation");
var HousingLoan = /** @class */ (function (_super) {
    __extends(HousingLoan, _super);
    function HousingLoan(loanAmount, loanDuration, interest) {
        if (interest === void 0) { interest = config_1.config.housingLoanPerc; }
        var _this = _super.call(this, loanAmount, loanDuration, interest) || this;
        _this.isValidHousingLoanFields = FieldsValidation_1.isValidHousingLoanFields.bind(_this);
        _this.interest = interest;
        return _this;
    }
    HousingLoan.prototype.countMaxLoanAmount = function (numberOfMembers, salary) {
        var maxInterestAmount = salary / numberOfMembers * config_1.config.housingMinSalaryPerc;
        return maxInterestAmount;
    };
    HousingLoan.prototype.isExpectationOk = function (maxMonthPayment, monthPayment) {
        if (maxMonthPayment < monthPayment) {
            alert("Your income is insufficient. Choose another period and loan amount");
            return false;
        }
        return true;
    };
    return HousingLoan;
}(loan_1.default));
exports.default = HousingLoan;
//# sourceMappingURL=housingLoan.js.map