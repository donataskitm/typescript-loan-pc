"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var loanTable_1 = require("./loanTable");
var Loan = /** @class */ (function () {
    function Loan(loanSize, loanDuration, interest) {
        this.isTable = function () { return (0, loanTable_1.isTable)(); };
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
    Loan.prototype.createLoanInfo = function () {
        var loanInfo = document.getElementById('loanInfo');
        var ul = document.createElement('UL');
        ul.setAttribute('class', 'list-group');
        ul.setAttribute('id', 'calcUl');
        loanInfo === null || loanInfo === void 0 ? void 0 : loanInfo.appendChild(ul);
        var monthlyPayment = this.countMonthPayment();
        var totalPayment = this.countTotalPayment(monthlyPayment);
        var totalInterest = this.countTotalInterest(totalPayment);
        this.createRowForLoanInfo(ul, "Deal amount: " + this.loanAmount + " eur");
        this.createRowForLoanInfo(ul, "Deal term: " + this.loanDuration + " months");
        this.createRowForLoanInfo(ul, "Deal interest: " + this.interest + "% per year");
        this.createRowForLoanInfo(ul, "Monthly return payment: " + monthlyPayment.toFixed(config_1.config.decimalPlaces) + " eur");
        this.createRowForLoanInfo(ul, "Total interest: " + totalInterest.toFixed(config_1.config.decimalPlaces) + " eur");
        this.createRowForLoanInfo(ul, "Total payment: " + totalPayment.toFixed(config_1.config.decimalPlaces) + " eur");
    };
    Loan.prototype.createRowForLoanInfo = function (ul, text) {
        var li = document.createElement('LI');
        li.setAttribute('class', 'list-group-item');
        li.appendChild(document.createTextNode("" + text));
        ul.appendChild(li);
    };
    Loan.prototype.createPaymentTable = function () {
        var loanTable = document.getElementById('loanTable');
        var table = document.createElement('TABLE');
        table.setAttribute('id', 'calcTable');
        table.setAttribute('class', 'table table-striped pt-5');
        var tableHead = document.createElement('THEAD');
        table.appendChild(tableHead);
        var trHead = document.createElement('TR');
        tableHead.appendChild(trHead);
        this.createTdForPaymentTable(trHead, 'Payment No');
        this.createTdForPaymentTable(trHead, 'Amount');
        this.createTdForPaymentTable(trHead, 'Interest Payed');
        var tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);
        var previuosRemainingBalance = this.loanAmount;
        for (var trNumb = 1; trNumb <= this.loanDuration; trNumb++) {
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);
            var remainingBalance = this.countRemainingBalance(trNumb);
            var payedInterest = this.countInterestAmount(remainingBalance, previuosRemainingBalance);
            this.createTdForPaymentTable(tr, "" + trNumb);
            this.createTdForPaymentTable(tr, "" + payedInterest.toFixed(config_1.config.decimalPlaces));
            this.createTdForPaymentTable(tr, "" + remainingBalance.toFixed(config_1.config.decimalPlaces));
            previuosRemainingBalance = remainingBalance;
        }
        loanTable === null || loanTable === void 0 ? void 0 : loanTable.appendChild(table);
    };
    Loan.prototype.createTdForPaymentTable = function (tr, text) {
        var td = document.createElement('TH');
        td.appendChild(document.createTextNode("" + text));
        tr.appendChild(td);
    };
    return Loan;
}());
exports.default = Loan;
//# sourceMappingURL=loan.js.map