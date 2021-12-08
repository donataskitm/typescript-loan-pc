"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidHousingLoanFields = exports.isValidFastLoanFields = exports.isValidConsumerFields = void 0;
var config_1 = require("../config/config");
var err = [];
function isValidConsumerFields() {
    err = [];
    isError(err, this.interest == undefined, 'loanType');
    isError(err, this.loanAmount > config_1.config.consumerLoanAmountLimit, 'loanAmountBigger');
    isError(err, this.loanAmount < config_1.config.negativeValue, 'negativeLoanValue');
    isError(err, this.loanDuration > config_1.config.consumerLoanDurationLimit, 'loanDurationBigger');
    isEmptyLoan(err, this.loanAmount);
    isLoanDurationEmpty(err, this.loanDuration);
    return err;
}
exports.isValidConsumerFields = isValidConsumerFields;
function isValidFastLoanFields() {
    err = [];
    isError(err, this.loanAmount > config_1.config.fastLoanAmountLimit, 'loanAmountBigger');
    isError(err, this.loanDuration > config_1.config.fastLoanDurationLimit, 'loanDurationBigger');
    isEmptyLoan(err, this.loanAmount);
    isLoanDurationEmpty(err, this.loanDuration);
    return err;
}
exports.isValidFastLoanFields = isValidFastLoanFields;
function isValidHousingLoanFields(salary, numberOfMembers) {
    err = [];
    isError(err, this.loanAmount <= config_1.config.negativeValue, 'negativeLoanValue');
    isError(err, this.loanDuration > config_1.config.housingLoanDurationLimit, 'loanDurationBigger');
    isLoanDurationEmpty(err, this.loanDuration);
    isError(err, salary == config_1.config.emptyField, 'salaryEmpty');
    isError(err, numberOfMembers == config_1.config.emptyField, 'membersNone');
    return err;
}
exports.isValidHousingLoanFields = isValidHousingLoanFields;
function isEmptyLoan(err, loanAmount) {
    isError(err, loanAmount == config_1.config.emptyField, 'loanAmountEmpty');
}
function isLoanDurationEmpty(err, loanDuration) {
    isError(err, loanDuration == config_1.config.emptyField, 'loanTermEmpty');
}
function isError(err, condition, message) {
    if (condition) {
        err.push(message);
    }
    return err;
}
//# sourceMappingURL=fieldsValidation.js.map