"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidHousingLoanFields = exports.isValidFastLoanFields = exports.isValidConsumerFields = void 0;
var config_1 = require("./config");
function isValidConsumerFields() {
    if (this.interest == undefined || this.loanAmount > config_1.config.consumerLoanAmountLimit || this.loanAmount < config_1.config.negativeValue || this.loanDuration > config_1.config.consumerLoanDurationLimit || this.loanAmount == config_1.config.emptyField || this.loanDuration == config_1.config.emptyField) {
        alert("Please correct entered data");
        return false;
    }
    return true;
}
exports.isValidConsumerFields = isValidConsumerFields;
function isValidFastLoanFields() {
    if (this.loanAmount > config_1.config.fastLoanAmountLimit || this.loanDuration > config_1.config.fastLoanDurationLimit || this.loanAmount == config_1.config.emptyField || this.loanDuration == config_1.config.emptyField) {
        alert("Please correct entered data");
        return false;
    }
    return true;
}
exports.isValidFastLoanFields = isValidFastLoanFields;
function isValidHousingLoanFields(salary, numberOfMembers) {
    if (this.loanAmount <= config_1.config.negativeValue || this.loanDuration > config_1.config.housingLoanDurationLimit || this.loanDuration == config_1.config.emptyField || salary == config_1.config.emptyField || numberOfMembers == config_1.config.emptyField) {
        alert("Please correct entered data");
        return false;
    }
    return true;
}
exports.isValidHousingLoanFields = isValidHousingLoanFields;
//# sourceMappingURL=FieldsValidation.js.map