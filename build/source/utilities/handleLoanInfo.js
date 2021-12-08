"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showErrors = exports.showTables = void 0;
var errorForm_1 = require("../elements/errorForm");
var loanTable_1 = require("../elements/loanTable");
function showTables() {
    (0, errorForm_1.removeErrorLabels)();
    this.removeTableIfExsist();
    this.createLoanInfo();
    this.createPaymentTable();
}
exports.showTables = showTables;
function showErrors(err) {
    (0, errorForm_1.showFormErrors)(err);
    (0, loanTable_1.removeTableIfExsist)();
}
exports.showErrors = showErrors;
//# sourceMappingURL=handleLoanInfo.js.map