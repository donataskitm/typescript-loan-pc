import { config } from "../config/config";
import { errorStrings } from "../config/errorStrings";

let err: string[] = [];
export function isValidConsumerFields() {
    err = [];
    isError(err, this.interest == undefined, errorStrings.loanType);
    isError(err, this.loanAmount > config.consumerLoanAmountLimit, errorStrings.loanAmountBigger);
    isNegativeLoanAmount(err, this.loanAmount);
    isNegativeLoanDuration(err, this.loanDuration);
    isError(err, this.loanDuration > config.consumerLoanDurationLimit, errorStrings.loanDurationBigger);
    isEmptyLoan(err, this.loanAmount);
    isLoanDurationEmpty(err, this.loanDuration);
    return err;
}

export function isValidFastLoanFields() {
    err = [];
    isError(err, this.loanAmount > config.fastLoanAmountLimit, errorStrings.fastLoanAmountLimit);
    isError(err, this.loanDuration > config.fastLoanDurationLimit, errorStrings.fastLoanDurationLimit);
    isNegativeLoanAmount(err, this.loanAmount);
    isNegativeLoanDuration(err, this.loanDuration);
    isEmptyLoan(err, this.loanAmount);
    isLoanDurationEmpty(err, this.loanDuration);
    return err;
}

export function isValidHousingLoanFields(numberOfMembers: number, salary: number) {
    err = [];
    isNegativeLoanAmount(err, this.loanAmount);
    isNegativeLoanDuration(err, this.loanDuration);
    isError(err, salary < config.negativeValue, errorStrings.negativeSalaryValue);
    isError(err, numberOfMembers < config.negativeValue, errorStrings.negativeMembersValue);
    isError(err, this.loanDuration > config.housingLoanDurationLimit, errorStrings.housingLoanDurationLimit);
    isLoanDurationEmpty(err, this.loanDuration);
    isEmptyLoan(err, this.loanAmount);
    isError(err, salary == config.emptyField, errorStrings.salaryEmpty);
    isError(err, numberOfMembers == config.emptyField, errorStrings.membersNone);
    return err;
}

function isEmptyLoan(err: Array<string>, loanAmount: number) {
    isError(err, loanAmount == config.emptyField, errorStrings.loanAmountEmpty);
}

function isNegativeLoanAmount(err: Array<string>, loanAmount: number) {
    isError(err, loanAmount < config.negativeValue, errorStrings.negativeLoanValue);
}

function isNegativeLoanDuration(err: Array<string>, loanDuration: number) {
    isError(err, loanDuration < config.negativeValue, errorStrings.negativeDurationValue);
}

function isLoanDurationEmpty(err: Array<string>, loanDuration: number) {
    isError(err, loanDuration == config.emptyField, errorStrings.loanTermEmpty);
}

function isError(err: Array<string>, condition: boolean, message: string) {
    if (condition) {
        err.push(message);
    }
    return err;
}

