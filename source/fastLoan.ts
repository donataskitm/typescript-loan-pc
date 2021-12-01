import Loan from "./loan";

export default class FastLoan extends Loan {
    loanAmount: number;
    loanDuration: number;
    interest: number;

    amountLimit = 5000;
    durationLimit = 24;

    constructor(loanAmount: number, loanDuration: number, interest = 20) {
        super(loanAmount, loanDuration, interest);

    }
    isValid() {
        if (this.loanAmount > this.amountLimit || this.loanDuration > this.durationLimit || this.loanAmount == 0 || this.loanDuration == 0) {
            alert("Please correct entered data");
            return false;
        }
        return true;
    }
}

