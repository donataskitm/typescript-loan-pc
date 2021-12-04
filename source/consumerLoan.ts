import Loan from "./loan";
import { isValidConsumerFields } from "./FieldsValidation";

export default class ConsumerLoan extends Loan {
    loanAmount: number;
    loanDuration: number;
    interest: number;

    constructor(loanAmount: number, loanDuration: number, interest: number) {
        super(loanAmount, loanDuration, interest);
        this.interest = interest;
    }

    isValidConsumerFields = isValidConsumerFields.bind(this);
}
