"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidHousingLoanFields = exports.isValidFastLoanFields = exports.isValidConsumerFields = void 0;
var config_1 = require("../config/config");
var errorStrings_1 = require("../config/errorStrings");
var err = [];
function isValidConsumerFields() {
    err = [];
    isError(err, this.interest == undefined, errorStrings_1.errorStrings.loanType);
    isError(err, this.loanAmount > config_1.config.consumerLoanAmountLimit, errorStrings_1.errorStrings.loanAmountBigger);
    isNegativeLoanAmount(err, this.loanAmount);
    isNegativeLoanDuration(err, this.loanDuration);
    isError(err, this.loanDuration > config_1.config.consumerLoanDurationLimit, errorStrings_1.errorStrings.loanDurationBigger);
    isEmptyLoan(err, this.loanAmount);
    isLoanDurationEmpty(err, this.loanDuration);
    return err;
}
exports.isValidConsumerFields = isValidConsumerFields;
function isValidFastLoanFields() {
    err = [];
    isError(err, this.loanAmount > config_1.config.fastLoanAmountLimit, errorStrings_1.errorStrings.fastLoanAmountLimit);
    isError(err, this.loanDuration > config_1.config.fastLoanDurationLimit, errorStrings_1.errorStrings.fastLoanDurationLimit);
    isNegativeLoanAmount(err, this.loanAmount);
    isNegativeLoanDuration(err, this.loanDuration);
    isEmptyLoan(err, this.loanAmount);
    isLoanDurationEmpty(err, this.loanDuration);
    return err;
}
exports.isValidFastLoanFields = isValidFastLoanFields;
function isValidHousingLoanFields(numberOfMembers, salary) {
    err = [];
    isNegativeLoanAmount(err, this.loanAmount);
    isNegativeLoanDuration(err, this.loanDuration);
    isError(err, salary < config_1.config.negativeValue, errorStrings_1.errorStrings.negativeSalaryValue);
    isError(err, numberOfMembers < config_1.config.negativeValue, errorStrings_1.errorStrings.negativeMembersValue);
    isError(err, this.loanDuration > config_1.config.housingLoanDurationLimit, errorStrings_1.errorStrings.housingLoanDurationLimit);
    isLoanDurationEmpty(err, this.loanDuration);
    isEmptyLoan(err, this.loanAmount);
    isError(err, salary == config_1.config.emptyField, errorStrings_1.errorStrings.salaryEmpty);
    isError(err, numberOfMembers == config_1.config.emptyField, errorStrings_1.errorStrings.membersNone);
    return err;
}
exports.isValidHousingLoanFields = isValidHousingLoanFields;
function isEmptyLoan(err, loanAmount) {
    isError(err, loanAmount == config_1.config.emptyField, errorStrings_1.errorStrings.loanAmountEmpty);
}
function isNegativeLoanAmount(err, loanAmount) {
    isError(err, loanAmount < config_1.config.negativeValue, errorStrings_1.errorStrings.negativeLoanValue);
}
function isNegativeLoanDuration(err, loanDuration) {
    isError(err, loanDuration < config_1.config.negativeValue, errorStrings_1.errorStrings.negativeDurationValue);
}
function isLoanDurationEmpty(err, loanDuration) {
    isError(err, loanDuration == config_1.config.emptyField, errorStrings_1.errorStrings.loanTermEmpty);
}
function isError(err, condition, message) {
    if (condition) {
        err.push(message);
    }
    return err;
}
//# sourceMappingURL=fieldsValidation.js.map