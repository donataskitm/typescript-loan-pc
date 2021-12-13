"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorStrings = void 0;
var config_1 = require("./config");
var DURATION_TEXT = 'Laon duration can not exceed ';
var NEGATIVE_TEXT = 'field can not contain negative value';
var EMPTY_TEXT = 'field can not be empty';
var EMPTY_LOAN_FIELD = 'Amount ' + EMPTY_TEXT;
var EMPTY_TERM_FIELD = 'Term ' + EMPTY_TEXT;
var EMPTY_TYPE_FIELD = 'Choose a loan type from the list';
var NEGATIVE_LOAN_AMOUNT = 'Amount ' + NEGATIVE_TEXT;
var NEGATIVE_LOAN_DURATION = 'Term ' + NEGATIVE_TEXT;
var NEGATIVE_SALARY_VALUE = 'Salary ' + NEGATIVE_TEXT;
var NEGATIVE_MEMBERS_VALUE = 'Members ' + NEGATIVE_TEXT;
var LOAN_AMOUNT_BIGGER = "Loan amount can not exceed " + ("" + config_1.config.consumerLoanAmountLimit) + ' eur';
var FAST_LOAN_AMOUNT_BIGGER = DURATION_TEXT + ("" + config_1.config.fastLoanAmountLimit) + ' eur';
var LOAN_DURATION_BIGGER = DURATION_TEXT + ("" + config_1.config.consumerLoanDurationLimit) + ' months';
var FAST_LOAN_DURATION_BIGGER = DURATION_TEXT + ("" + config_1.config.fastLoanDurationLimit) + ' months';
var HOUSING_DURATION_BIGGER = DURATION_TEXT + ("" + config_1.config.housingLoanDurationLimit) + ' months';
var SALARY_EMPTY = 'Salary ' + EMPTY_TEXT;
var MEMBERS_NONE = 'Members ' + EMPTY_TEXT;
exports.errorStrings = {
    loanAmountEmpty: EMPTY_LOAN_FIELD,
    loanTermEmpty: EMPTY_TERM_FIELD,
    loanType: EMPTY_TYPE_FIELD,
    negativeLoanValue: NEGATIVE_LOAN_AMOUNT,
    negativeDurationValue: NEGATIVE_LOAN_DURATION,
    negativeMembersValue: NEGATIVE_MEMBERS_VALUE,
    negativeSalaryValue: NEGATIVE_SALARY_VALUE,
    loanAmountBigger: LOAN_AMOUNT_BIGGER,
    loanDurationBigger: LOAN_DURATION_BIGGER,
    fastLoanAmountLimit: FAST_LOAN_AMOUNT_BIGGER,
    fastLoanDurationLimit: FAST_LOAN_DURATION_BIGGER,
    housingLoanDurationLimit: HOUSING_DURATION_BIGGER,
    salaryEmpty: SALARY_EMPTY,
    membersNone: MEMBERS_NONE,
};
//# sourceMappingURL=errorStrings.js.map