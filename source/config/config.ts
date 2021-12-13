const CONSUMER_LOAN_LIMIT = 10000;
const CONSUMER_LOAN_DURATION = 60;
const FAST_LOAN_LIMIT = 5000;
const FAST_LOAN_DURATION = 24;
const HOUSING_LOAN_DURATION = 360;
const HOUSING_MIN_SALARY_PERC = 0.4;
const HOUSING_LOAN_PERC = 2;
const FAST_LOAN_PERC = 20;
const EMPTY_FIELD = 0;
const EMPTY_ARRAY = 0;
const NEGATIVE_VALUE = 0;
const NUMBER_ACTIVE_URL = 0;
const MONTHS_PER_YEAR = 12;
const TOTAL_PERCENTAGE = 100;
const DECIMAL_PALCES = 2;
const MIN_DURATION_MONTH = 1;

export const config: { [key: string]: number } = {
    consumerLoanAmountLimit: CONSUMER_LOAN_LIMIT,
    consumerLoanDurationLimit: CONSUMER_LOAN_DURATION,
    fastLoanAmountLimit: FAST_LOAN_LIMIT,
    fastLoanDurationLimit: FAST_LOAN_DURATION,
    housingLoanDurationLimit: HOUSING_LOAN_DURATION,
    housingMinSalaryPerc: HOUSING_MIN_SALARY_PERC,
    housingLoanPerc: HOUSING_LOAN_PERC,
    fastLoanPerc: FAST_LOAN_PERC,
    emptyField: EMPTY_FIELD,
    emptyArray: EMPTY_ARRAY,
    negativeValue: NEGATIVE_VALUE,
    monthsPerYear: MONTHS_PER_YEAR,
    totalPercentage: TOTAL_PERCENTAGE,
    decimalPlaces: DECIMAL_PALCES,
    numberActiveUrl: NUMBER_ACTIVE_URL,
    minDurationMonth: MIN_DURATION_MONTH,
};