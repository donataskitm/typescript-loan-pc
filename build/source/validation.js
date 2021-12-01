"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidHousingLoan(loanAmount, loanTerm) {
    if (loanAmount > 5000 || loanTerm > 24 || loanAmount == null || loanTerm == null) {
        alert("Please correct entered data");
        return false;
    }
    return true;
}
exports.default = isValidHousingLoan;
//# sourceMappingURL=validation.js.map