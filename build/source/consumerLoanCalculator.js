"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countConsumerLoan = void 0;
var consumerLoan_1 = require("./consumerLoan");
var interestList_1 = require("./interestList");
var consumerListBox_1 = require("./consumerListBox");
var btn = document.getElementById('btnConsumerLoanValues');
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", countConsumerLoan);
window.addEventListener('load', function (evt) {
    var url = document.URL;
    if (url.indexOf("consumer-loan.html") > 0) {
        (0, consumerListBox_1.loadConsumerListBoxItems)();
    }
});
function countConsumerLoan() {
    var loanAmount = Number(document.getElementById('loanAmount').value);
    var loanTerm = Number(document.getElementById('loanTerm').value);
    var loanType = document.getElementById('loanType').value;
    var dataConsumerLoan = new consumerLoan_1.default(loanAmount, loanTerm, interestList_1.interestList[loanType]);
    if (dataConsumerLoan.isValid()) {
        dataConsumerLoan.removeTableIfExsist();
        dataConsumerLoan.createLoanInfo();
        dataConsumerLoan.createPaymentTable();
    }
}
exports.countConsumerLoan = countConsumerLoan;
//# sourceMappingURL=consumerLoanCalculator.js.map