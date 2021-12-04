import Loan from "./loan";
import { config } from "./config";
import { isValidFastLoanFields } from "./FieldsValidation";

export default class FastLoan extends Loan {
    loanAmount: number;
    loanDuration: number;
    interest: number;

    constructor(loanAmount: number, loanDuration: number, interest = config.fastLoanPerc) {
        super(loanAmount, loanDuration, interest);

    }
    isValidFastLoanFields = isValidFastLoanFields.bind(this);
}

