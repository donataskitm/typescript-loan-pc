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
exports.countHousingLoan = void 0;
var config_1 = require("./config/config");
var loan_1 = require("./loan");
var fieldsValidation_1 = require("./utilities/fieldsValidation");
var handleLoanInfo_1 = require("./utilities/handleLoanInfo");
var HousingLoan = /** @class */ (function (_super) {
    __extends(HousingLoan, _super);
    function HousingLoan(loanAmount, loanDuration, interest) {
        if (interest === void 0) { interest = config_1.config.housingLoanPerc; }
        var _this = _super.call(this, loanAmount, loanDuration, interest) || this;
        _this.isValidHousingLoanFields = fieldsValidation_1.isValidHousingLoanFields.bind(_this);
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
var btn = document.getElementById('btnReadHousingValues');
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", countHousingLoan);
function countHousingLoan() {
    var err = [];
    var loanAmount = document.getElementById('loanAmount').value;
    var loanTerm = document.getElementById('loanTerm').value;
    var dataHousingLoan = new HousingLoan(Number(loanAmount), Number(loanTerm));
    var salary = Number(document.getElementById('salary').value);
    var numberOfMembers = Number(document.getElementById('numberOfMemebers').value);
    err = dataHousingLoan.isValidHousingLoanFields(numberOfMembers, salary);
    if (err.length === config_1.config.emptyArray) {
        var maxMonthPayment = dataHousingLoan.countMaxLoanAmount(numberOfMembers, salary);
        var monthPayment = dataHousingLoan.countMonthPayment();
        if (dataHousingLoan.isExpectationOk(maxMonthPayment, monthPayment)) {
            dataHousingLoan.showTables();
        }
    }
    else {
        (0, handleLoanInfo_1.showErrors)(err);
    }
}
exports.countHousingLoan = countHousingLoan;
//# sourceMappingURL=housingLoan.js.map