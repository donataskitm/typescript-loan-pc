import Loan from "./loan";
import { isValidConsumerFields } from "./utilities/fieldsValidation";
import { showErrors} from "./utilities/handleLoanInfo";
import { interestList } from "./config/interestList";
import { config } from "./config/config";
import { loadConsumerListBoxItems } from "./elements/consumerListBox";

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

const btn = document.getElementById('btnConsumerLoanValues');
btn?.addEventListener("click", countConsumerLoan);

window.addEventListener('load', (evt) => {
    const url: string = document.URL;
    if (url.indexOf("consumer-loan.html") > config.numberActiveUrl) {
        loadConsumerListBoxItems();
    }
});

export function countConsumerLoan() {
    let err: string[] = [];
    const loanAmount = Number((<HTMLInputElement>document.getElementById('loanAmount')).value);
    const loanTerm = Number((<HTMLInputElement>document.getElementById('loanTerm')).value);
    const loanType = (<HTMLInputElement>document.getElementById('loanType')).value;
    const dataConsumerLoan = new ConsumerLoan(loanAmount, loanTerm, interestList[loanType]);
    err = dataConsumerLoan.isValidConsumerFields(this);

    if (err.length === config.emptyArray) {
        dataConsumerLoan.showTables();
    }
    else {
        showErrors(err);
    }
}