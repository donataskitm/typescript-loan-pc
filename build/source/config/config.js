"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var CONSUMER_LOAN_LIMIT = 10000;
var CONSUMER_LOAN_DURATION = 60;
var FAST_LOAN_LIMIT = 5000;
var FAST_LOAN_DURATION = 24;
var HOUSING_LOAN_DURATION = 360;
var HOUSING_MIN_SALARY_PERC = 0.4;
var HOUSING_LOAN_PERC = 2;
var FAST_LOAN_PERC = 20;
var EMPTY_FIELD = 0;
var EMPTY_ARRAY = 0;
var NEGATIVE_VALUE = 0;
var NUMBER_ACTIVE_URL = 0;
var MONTHS_PER_YEAR = 12;
var TOTAL_PERCENTAGE = 100;
var DECIMAL_PALCES = 2;
exports.config = {
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
    numberActiveUrl: NUMBER_ACTIVE_URL
};
//# sourceMappingURL=config.js.map