import Loan from "./loan";
import { config } from "./config/config";
import { isValidFastLoanFields } from "./utilities/fieldsValidation";
import { showErrors} from "./utilities/handleLoanInfo";

export default class FastLoan extends Loan {
    loanAmount: number;
    loanDuration: number;
    interest: number;

    constructor(loanAmount: number, loanDuration: number, interest = config.fastLoanPerc) {
        super(loanAmount, loanDuration, interest);
    }
    isValidFastLoanFields = isValidFastLoanFields.bind(this);
}

const btn = document.getElementById('btnReadValues');
btn?.addEventListener("click", countFastLoan);

function countFastLoan() {
    let err: string[] = [];
    const loanAmount = (<HTMLInputElement>document.getElementById('loanAmount')).value;
    const loanTerm = (<HTMLInputElement>document.getElementById('loanTerm')).value;
    const dataFastLoan = new FastLoan(Number(loanAmount), Number(loanTerm));
    err = dataFastLoan.isValidFastLoanFields(this);

    if (err.length === config.emptyArray) {
        dataFastLoan.showTables();
    }
    else {
        showErrors(err);
    }
}
