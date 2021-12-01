import Loan from "./loan";

export default class HousingLoan extends Loan {
    loanAmount: number;
    loanDuration: number;
    interest: number;
    constructor(loanAmount: number, loanDuration: number, interest = 2) {
        super(loanAmount, loanDuration, interest);
        this.interest = interest;
    }
}
