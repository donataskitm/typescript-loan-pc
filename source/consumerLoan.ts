import Loan from "./loan";

export default class ConsumerLoan extends Loan {
    loanAmount: number;
    loanDuration: number;
    interest: number;

    amountLimit = 10000;
    durationLimit = 60;

    constructor(loanAmount: number, loanDuration: number, interest: number) {
        super(loanAmount, loanDuration, interest);
        this.interest = interest;
    }

    isValid() {
        if (this.interest == undefined || this.loanAmount > this.amountLimit || this.loanAmount < 0 || this.loanDuration > this.durationLimit || this.loanAmount == 0 || this.loanDuration == 0) {
            alert("Please correct entered data");
            return false;
        }
        return true;
    }
}
