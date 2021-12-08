"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPaymentTable = exports.removeTableIfExsist = void 0;
var config_1 = require("../config/config");
function removeTableIfExsist() {
    var _a, _b;
    if (document.getElementById('calcTable')) {
        (_a = document.getElementById('calcTable')) === null || _a === void 0 ? void 0 : _a.remove();
    }
    if (document.getElementById('calcUl')) {
        (_b = document.getElementById('calcUl')) === null || _b === void 0 ? void 0 : _b.remove();
    }
}
exports.removeTableIfExsist = removeTableIfExsist;
function createPaymentTable() {
    var loanTable = document.getElementById('loanTable');
    var table = document.createElement('TABLE');
    table.setAttribute('id', 'calcTable');
    table.setAttribute('class', 'table table-striped pt-5');
    createHeadForPaymentTable(table);
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    var previuosRemainingBalance = this.loanAmount;
    for (var trNumb = 1; trNumb <= this.loanDuration; trNumb++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
        var remainingBalance = this.countRemainingBalance(trNumb);
        var payedInterest = this.countInterestAmount(remainingBalance, previuosRemainingBalance);
        createTdForPaymentTable(tr, "" + trNumb);
        createTdForPaymentTable(tr, "" + payedInterest.toFixed(config_1.config.decimalPlaces));
        createTdForPaymentTable(tr, "" + remainingBalance.toFixed(config_1.config.decimalPlaces));
        previuosRemainingBalance = remainingBalance;
    }
    loanTable === null || loanTable === void 0 ? void 0 : loanTable.appendChild(table);
}
exports.createPaymentTable = createPaymentTable;
function createTdForPaymentTable(tr, text) {
    var td = document.createElement('TH');
    td.appendChild(document.createTextNode("" + text));
    tr.appendChild(td);
}
function createHeadForPaymentTable(table) {
    var tableHead = document.createElement('THEAD');
    table.appendChild(tableHead);
    var trHead = document.createElement('TR');
    tableHead.appendChild(trHead);
    createTdForPaymentTable(trHead, 'Payment No');
    createTdForPaymentTable(trHead, 'Amount');
    createTdForPaymentTable(trHead, 'Interest Payed');
}
//# sourceMappingURL=loanTable.js.map