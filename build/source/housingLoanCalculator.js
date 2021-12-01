"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countHousingLoan = void 0;
var housingLoan_1 = require("./housingLoan");
var btn = document.getElementById('btnReadHousingValues');
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", countHousingLoan);
function countHousingLoan() {
    var loanAmount = document.getElementById('loanAmount').value;
    var loanTerm = document.getElementById('loanTerm').value;
    var dataFastLoan = new housingLoan_1.default(Number(loanAmount), Number(loanTerm));
    dataFastLoan.isTable();
    dataFastLoan.createLoanInfo();
    dataFastLoan.createPaymentTable();
}
exports.countHousingLoan = countHousingLoan;
//# sourceMappingURL=housingLoanCalculator.js.map