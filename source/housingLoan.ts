import Loan from "./loan";

export default class HousingLoan extends Loan {
    loanAmount: number;
    loanDuration: number;
    interest: number;

    durationLimit = 360;

    constructor(loanAmount: number, loanDuration: number, interest = 2) {
        super(loanAmount, loanDuration, interest);
        this.interest = interest;
    }

    countMaxLoanAmount(numberOfMembers: number, salary: number) {
        const minSalaryPercent = 0.4;
        const maxInterestAmount = salary / numberOfMembers * minSalaryPercent;
        return maxInterestAmount;
    }

    isValid(salary: number, numberOfMembers: number) {
        if (this.loanAmount <= 0 || this.loanDuration > this.durationLimit || this.loanDuration == 0 || salary == 0 || numberOfMembers == 0) {
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
