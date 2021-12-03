"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var loanTable_1 = require("./loanTable");
var loanInfoTable_1 = require("./loanInfoTable");
var Loan = /** @class */ (function () {
    function Loan(loanSize, loanDuration, interest) {
        this.removeTableIfExsist = function () { return (0, loanTable_1.removeTableIfExsist)(); };
        this.createPaymentTable = loanTable_1.createPaymentTable.bind(this);
        this.createLoanInfo = loanInfoTable_1.createLoanInfo.bind(this);
        this.loanAmount = loanSize;
        this.loanDuration = loanDuration;
        this.interest = interest;
        this.percentPerMonth = this.interest / config_1.config.totalPercentage / config_1.config.monthsPerYear;
        this.power = Math.pow(1 + this.percentPerMonth, this.loanDuration);
    }
    Loan.prototype.countMonthPayment = function () {
        var monthPayment = (this.loanAmount * this.percentPerMonth * this.power) / (this.power - 1);
        return monthPayment;
    };
    Loan.prototype.countTotalPayment = function (monthPayment) {
        var totalPayment = monthPayment * this.loanDuration;
        return totalPayment;
    };
    Loan.prototype.countTotalInterest = function (totalPayment) {
        var totalInterest = totalPayment - this.loanAmount;
        return totalInterest;
    };
    Loan.prototype.countRemainingBalance = function (paymentNumber) {
        var power1 = Math.pow(1 + this.percentPerMonth, paymentNumber);
        var remainingBlance = (this.loanAmount * (this.power - power1)) / (this.power - 1);
        return remainingBlance;
    };
    Loan.prototype.countInterestAmount = function (remainingBalance, previuosRemainingBalance) {
        var interestAmount = remainingBalance - previuosRemainingBalance + this.countMonthPayment();
        return interestAmount;
    };
    return Loan;
}());
exports.default = Loan;
//# sourceMappingURL=loan.js.map