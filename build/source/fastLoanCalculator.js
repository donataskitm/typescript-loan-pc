"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countFastLoan = void 0;
var fastLoan_1 = require("./fastLoan");
var btn = document.getElementById('btnReadValues');
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", countFastLoan);
function countFastLoan() {
    var loanAmount = document.getElementById('loanAmount').value;
    var loanTerm = document.getElementById('loanTerm').value;
    var dataFastLoan = new fastLoan_1.default(Number(loanAmount), Number(loanTerm));
    if (dataFastLoan.isValidFastLoanFields()) {
        dataFastLoan.removeTableIfExsist();
        dataFastLoan.createLoanInfo();
        dataFastLoan.createPaymentTable();
    }
}
exports.countFastLoan = countFastLoan;
//# sourceMappingURL=fastLoanCalculator.js.map