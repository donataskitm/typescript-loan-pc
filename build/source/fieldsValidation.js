"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidHousingLoanFields = exports.isValidFastLoanFields = exports.isValidConsumerFields = void 0;
var config_1 = require("./config/config");
var err = [];
function isValidConsumerFields() {
    err = [];
    if (this.interest == undefined) {
        err.push('loanType');
    }
    if (this.loanAmount > config_1.config.consumerLoanAmountLimit) {
        err.push('loanAmountBigger');
    }
    if (this.loanAmount < config_1.config.negativeValue) {
        err.push('negativeLoanValue');
    }
    if (this.loanDuration > config_1.config.consumerLoanDurationLimit) {
        err.push('loanDurationBigger');
    }
    isEmptyLoan(err, this.loanAmount);
    isLoanDurationEmpty(err, this.loanDuration);
    return err;
}
exports.isValidConsumerFields = isValidConsumerFields;
function isValidFastLoanFields() {
    err = [];
    if (this.loanAmount > config_1.config.fastLoanAmountLimit) {
        err.push('loanAmountBigger');
    }
    if (this.loanDuration > config_1.config.fastLoanDurationLimit) {
        err.push('loanDurationBigger');
    }
    isEmptyLoan(err, this.loanAmount);
    isLoanDurationEmpty(err, this.loanDuration);
    return err;
}
exports.isValidFastLoanFields = isValidFastLoanFields;
function isValidHousingLoanFields(salary, numberOfMembers) {
    err = [];
    if (this.loanAmount <= config_1.config.negativeValue) {
        err.push('negativeLoanValue');
    }
    if (this.loanDuration > config_1.config.housingLoanDurationLimit) {
        err.push('loanDurationBigger');
    }
    isLoanDurationEmpty(err, this.loanDuration);
    if (salary == config_1.config.emptyField) {
        err.push('salaryEmpty');
    }
    if (numberOfMembers == config_1.config.emptyField) {
        err.push('membersNone');
    }
    return err;
}
exports.isValidHousingLoanFields = isValidHousingLoanFields;
function isEmptyLoan(err, loanAmount) {
    if (loanAmount == config_1.config.emptyField) {
        err.push('loanAmountEmpty');
    }
}
function isLoanDurationEmpty(err, loanDuration) {
    if (loanDuration == config_1.config.emptyField) {
        err.push('loanTermEmpty');
    }
}
//# sourceMappingURL=FieldsValidation.js.map