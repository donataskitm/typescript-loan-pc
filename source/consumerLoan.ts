import Loan from "./loan";
import { config } from "./config";

export default class ConsumerLoan extends Loan {
    loanAmount: number;
    loanDuration: number;
    interest: number;



    constructor(loanAmount: number, loanDuration: number, interest: number) {
        super(loanAmount, loanDuration, interest);
        this.interest = interest;
    }

    isValid() {
        if (this.interest == undefined || this.loanAmount > config.consumerLoanAmountLimit || this.loanAmount < config.negativeValue || this.loanDuration > config.consumerLoanDurationLimit || this.loanAmount == config.emptyField || this.loanDuration == config.emptyField) {
            alert("Please correct entered data");
            return false;
        }
        return true;
    }
}
