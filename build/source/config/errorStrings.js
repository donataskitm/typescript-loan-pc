"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorStrings = void 0;
var EMPTY_LOAN_FIELD = 'Please fill amount field';
var EMPTY_TERM_FIELD = 'Please fill term field';
var EMPTY_TYPE_FIELD = 'Please pick up a loan type from the list';
var NEGATIVE_LOAN_AMOUNT = 'Plese ener positive value';
var LOAN_AMOUNT_BIGGER = 'Loan amount can not exceed `${config.consumerLoanAmountLimit}`';
var LOAN_DURATION_BIGGER = 'Laon duration can notexceed `${config.consumerLoanDurationLimit}`';
var SALARY_EMPTY = 'Please fill salary field';
var MEMBERS_NONE = 'Please fill family members field';
exports.errorStrings = {
    loanAmountEmpty: EMPTY_LOAN_FIELD,
    loanTermEmpty: EMPTY_TERM_FIELD,
    loanType: EMPTY_TYPE_FIELD,
    negativeLoanValue: NEGATIVE_LOAN_AMOUNT,
    loanAmountBigger: LOAN_AMOUNT_BIGGER,
    loanDurationBigger: LOAN_DURATION_BIGGER,
    salaryEmpty: SALARY_EMPTY,
    membersNone: MEMBERS_NONE,
};
//# sourceMappingURL=errorStrings.js.map