import { config } from "./config";

export function isValidConsumerFields() {
    if (this.interest == undefined || this.loanAmount > config.consumerLoanAmountLimit || this.loanAmount < config.negativeValue || this.loanDuration > config.consumerLoanDurationLimit || this.loanAmount == config.emptyField || this.loanDuration == config.emptyField) {
        alert("Please correct entered data");
        return false;
    }
    return true;
}

export function isValidFastLoanFields() {

    if (this.loanAmount > config.fastLoanAmountLimit || this.loanDuration > config.fastLoanDurationLimit || this.loanAmount == config.emptyField || this.loanDuration == config.emptyField) {
        alert("Please correct entered data");
        return false;
    }
    return true;

}

export function isValidHousingLoanFields(salary: number, numberOfMembers: number) {
    if (this.loanAmount <= config.negativeValue || this.loanDuration > config.housingLoanDurationLimit || this.loanDuration == config.emptyField || salary == config.emptyField || numberOfMembers == config.emptyField) {
        alert("Please correct entered data");
        return false;
    }
    return true;
}