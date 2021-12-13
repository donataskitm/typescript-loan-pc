import { config } from "./config";

const DURATION_TEXT = 'Laon duration can not exceed ';
const AMOUNT_TEXT = 'Laon amount can not exceed ';
const NEGATIVE_TEXT = 'field can not contain negative value';
const EMPTY_TEXT = 'field can not be empty';

const EMPTY_LOAN_FIELD = 'Amount ' + EMPTY_TEXT;
const EMPTY_TERM_FIELD = 'Term ' + EMPTY_TEXT;
const EMPTY_TYPE_FIELD = 'Choose a loan type from the list';
const NEGATIVE_LOAN_AMOUNT = 'Amount ' + NEGATIVE_TEXT;
const NEGATIVE_LOAN_DURATION = 'Term ' + NEGATIVE_TEXT;
const NEGATIVE_SALARY_VALUE = 'Salary ' + NEGATIVE_TEXT;
const NEGATIVE_MEMBERS_VALUE = 'Members ' + NEGATIVE_TEXT;
const LOAN_AMOUNT_BIGGER = AMOUNT_TEXT + `${config.consumerLoanAmountLimit}` + ' eur';
const FAST_LOAN_AMOUNT_BIGGER = AMOUNT_TEXT + `${config.fastLoanAmountLimit}` + ' eur';
const LOAN_DURATION_BIGGER = DURATION_TEXT + `${config.consumerLoanDurationLimit}`+ ' months';
const FAST_LOAN_DURATION_BIGGER = DURATION_TEXT + `${config.fastLoanDurationLimit}`+ ' months';
const HOUSING_DURATION_BIGGER = DURATION_TEXT + `${config.housingLoanDurationLimit}`+ ' months';
const SALARY_EMPTY = 'Salary ' + EMPTY_TEXT;
const MEMBERS_NONE = 'Members ' + EMPTY_TEXT;

export const errorStrings: { [key: string]: string } = {
    loanAmountEmpty: EMPTY_LOAN_FIELD,
    loanTermEmpty: EMPTY_TERM_FIELD,
    loanType: EMPTY_TYPE_FIELD,
    negativeLoanValue: NEGATIVE_LOAN_AMOUNT,
    negativeDurationValue:NEGATIVE_LOAN_DURATION,
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