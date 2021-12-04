import { config } from "./config";
import Loan from "./loan";
import { isValidHousingLoanFields } from "./FieldsValidation";

export default class HousingLoan extends Loan {
    loanAmount: number;
    loanDuration: number;
    interest: number;

    constructor(loanAmount: number, loanDuration: number, interest = config.housingLoanPerc) {
        super(loanAmount, loanDuration, interest);
        this.interest = interest;
    }

    countMaxLoanAmount(numberOfMembers: number, salary: number) {
        const maxInterestAmount = salary / numberOfMembers * config.housingMinSalaryPerc;
        return maxInterestAmount;
    }

    isValidHousingLoanFields = isValidHousingLoanFields.bind(this);

    isExpectationOk(maxMonthPayment: number, monthPayment: number) {
        if (maxMonthPayment < monthPayment) {
            alert("Your income is insufficient. Choose another period and loan amount");
            return false;
        }
        return true;
    }


}
