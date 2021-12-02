import { config } from "./config";
import Loan from "./loan";

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

    isValid(salary: number, numberOfMembers: number) {
        if (this.loanAmount <= config.negativeValue || this.loanDuration > config.housingLoanDurationLimit || this.loanDuration == config.emptyField || salary == config.emptyField || numberOfMembers == config.emptyField) {
            alert("Please correct entered data");
            return false;
        }
        return true;
    }

    isExpectationOk(maxMonthPayment: number, monthPayment: number) {
        if (maxMonthPayment < monthPayment) {
            alert("Your income is insufficient. Choose another period and loan amount");
            return false;
        }
        return true;
    }


}
