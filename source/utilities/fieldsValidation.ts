import { config } from "../config/config";

let err: string[] = [];
export function isValidConsumerFields() {
    err = [];
    isError(err, this.interest == undefined, 'loanType');
    isError(err, this.loanAmount > config.consumerLoanAmountLimit, 'loanAmountBigger');
    isError(err, this.loanAmount < config.negativeValue, 'negativeLoanValue');
    isError(err, this.loanDuration > config.consumerLoanDurationLimit, 'loanDurationBigger');
    isEmptyLoan(err, this.loanAmount);
    isLoanDurationEmpty(err, this.loanDuration);
    return err;
}

export function isValidFastLoanFields() {
    err = [];
    isError(err, this.loanAmount > config.fastLoanAmountLimit, 'loanAmountBigger');
    isError(err, this.loanDuration > config.fastLoanDurationLimit, 'loanDurationBigger');
    isEmptyLoan(err, this.loanAmount);
    isLoanDurationEmpty(err, this.loanDuration);
    return err;
}

export function isValidHousingLoanFields(salary: number, numberOfMembers: number) {
    err = [];
    isError(err, this.loanAmount <= config.negativeValue, 'negativeLoanValue');
    isError(err, this.loanDuration > config.housingLoanDurationLimit, 'loanDurationBigger');
    isLoanDurationEmpty(err, this.loanDuration);
    isError(err, salary == config.emptyField, 'salaryEmpty');
    isError(err, numberOfMembers == config.emptyField, 'membersNone');
    return err;
}

function isEmptyLoan(err: Array<string>, loanAmount: number) {
    isError(err, loanAmount == config.emptyField, 'loanAmountEmpty');
}

function isLoanDurationEmpty(err: Array<string>, loanDuration: number) {
    isError(err, loanDuration == config.emptyField, 'loanTermEmpty');
}

function isError(err: Array<string>, condition: boolean, message: string) {
    if (condition) {
        err.push(message);
    }
    return err;
}

