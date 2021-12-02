import Loan from "./loan";
import { config } from "./config";

export default class FastLoan extends Loan {
    loanAmount: number;
    loanDuration: number;
    interest: number;

    constructor(loanAmount: number, loanDuration: number, interest = config.fastLoanPerc) {
        super(loanAmount, loanDuration, interest);

    }
    isValid() {
        if (this.loanAmount > config.fastLoanAmountLimit || this.loanDuration > config.fastLoanDurationLimit || this.loanAmount == config.emptyField || this.loanDuration == config.emptyField) {
            alert("Please correct entered data");
            return false;
        }
        return true;
    }
}

