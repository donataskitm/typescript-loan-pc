const EMPTY_LOAN_FIELD = 'Please fill amount field';
const EMPTY_TERM_FIELD = 'Please fill term field';
const EMPTY_TYPE_FIELD = 'Please pick up a loan type from the list';
const NEGATIVE_LOAN_AMOUNT = 'Plese ener positive value';
const LOAN_AMOUNT_BIGGER = 'Loan amount can not exceed `${config.consumerLoanAmountLimit}`';
const LOAN_DURATION_BIGGER = 'Laon duration can notexceed `${config.consumerLoanDurationLimit}`';
const SALARY_EMPTY = 'Please fill salary field';
const MEMBERS_NONE = 'Please fill family members field';

export const errorStrings: { [key: string]: string } = {
    loanAmountEmpty: EMPTY_LOAN_FIELD,
    loanTermEmpty: EMPTY_TERM_FIELD,
    loanType: EMPTY_TYPE_FIELD,
    negativeLoanValue: NEGATIVE_LOAN_AMOUNT,
    loanAmountBigger: LOAN_AMOUNT_BIGGER,
    loanDurationBigger: LOAN_DURATION_BIGGER,
    salaryEmpty: SALARY_EMPTY,
    membersNone: MEMBERS_NONE,

};