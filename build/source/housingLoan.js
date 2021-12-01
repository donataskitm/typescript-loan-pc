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
var HousingLoan = /** @class */ (function (_super) {
    __extends(HousingLoan, _super);
    function HousingLoan(loanAmount, loanDuration, interest) {
        if (interest === void 0) { interest = 2; }
        var _this = _super.call(this, loanAmount, loanDuration, interest) || this;
        _this.durationLimit = 360;
        _this.interest = interest;
        return _this;
    }
    HousingLoan.prototype.countMaxLoanAmount = function (numberOfMembers, salary) {
        var minSalaryPercent = 0.4;
        var maxInterestAmount = salary / numberOfMembers * minSalaryPercent;
        return maxInterestAmount;
    };
    HousingLoan.prototype.isValid = function (salary, numberOfMembers) {
        if (this.loanAmount <= 0 || this.loanDuration > this.durationLimit || this.loanDuration == 0 || salary == 0 || numberOfMembers == 0) {
            alert("Please correct entered data");
            return false;
        }
        return true;
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