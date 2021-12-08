"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLoanInfo = void 0;
var config_1 = require("../config/config");
function createLoanInfo() {
    var loanInfo = document.getElementById('loanInfo');
    var ul = document.createElement('UL');
    ul.setAttribute('class', 'list-group');
    ul.setAttribute('id', 'calcUl');
    loanInfo === null || loanInfo === void 0 ? void 0 : loanInfo.appendChild(ul);
    var monthlyPayment = this.countMonthPayment();
    var totalPayment = this.countTotalPayment(monthlyPayment);
    var totalInterest = this.countTotalInterest(totalPayment);
    createRowForLoanInfo(ul, "Deal amount: " + this.loanAmount + " eur");
    createRowForLoanInfo(ul, "Deal term: " + this.loanDuration + " months");
    createRowForLoanInfo(ul, "Deal interest: " + this.interest + "% per year");
    createRowForLoanInfo(ul, "Monthly return payment: " + monthlyPayment.toFixed(config_1.config.decimalPlaces) + " eur");
    createRowForLoanInfo(ul, "Total interest: " + totalInterest.toFixed(config_1.config.decimalPlaces) + " eur");
    createRowForLoanInfo(ul, "Total payment: " + totalPayment.toFixed(config_1.config.decimalPlaces) + " eur");
}
exports.createLoanInfo = createLoanInfo;
function createRowForLoanInfo(ul, text) {
    var li = document.createElement('LI');
    li.setAttribute('class', 'list-group-item');
    li.appendChild(document.createTextNode("" + text));
    ul.appendChild(li);
}
//# sourceMappingURL=loanInfoTable.js.map