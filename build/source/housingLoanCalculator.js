"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countHousingLoan = void 0;
var housingLoan_1 = require("./housingLoan");
var btn = document.getElementById('btnReadHousingValues');
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", countHousingLoan);
function countHousingLoan() {
    var loanAmount = document.getElementById('loanAmount').value;
    var loanTerm = document.getElementById('loanTerm').value;
    var dataHousingLoan = new housingLoan_1.default(Number(loanAmount), Number(loanTerm));
    var salary = Number(document.getElementById('salary').value);
    var numberOfMembers = Number(document.getElementById('numberOfMemebers').value);
    if (dataHousingLoan.isValid(salary, numberOfMembers)) {
        var maxMonthPayment = dataHousingLoan.countMaxLoanAmount(numberOfMembers, salary);
        var monthPayment = dataHousingLoan.countMonthPayment();
        if (dataHousingLoan.isExpectationOk(maxMonthPayment, monthPayment)) {
            dataHousingLoan.removeTableIfExsist();
            dataHousingLoan.createLoanInfo();
            dataHousingLoan.createPaymentTable();
        }
    }
}
exports.countHousingLoan = countHousingLoan;
//# sourceMappingURL=housingLoanCalculator.js.map