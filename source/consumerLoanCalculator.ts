import ConsumerLoan from "./consumerLoan";
import { interestList } from "./interestList";
import { config } from "./config";
import { loadConsumerListBoxItems } from "./consumerListBox";

const btn = document.getElementById('btnConsumerLoanValues');
btn?.addEventListener("click", countConsumerLoan);

window.addEventListener('load', (evt) => {
    const url: string = document.URL;
    if (url.indexOf("consumer-loan.html") > config.numberActiveUrl) {
        loadConsumerListBoxItems();
    }
});

export function countConsumerLoan() {

    const loanAmount = Number((<HTMLInputElement>document.getElementById('loanAmount')).value);
    const loanTerm = Number((<HTMLInputElement>document.getElementById('loanTerm')).value);
    const loanType = (<HTMLInputElement>document.getElementById('loanType')).value;
    const dataConsumerLoan = new ConsumerLoan(loanAmount, loanTerm, interestList[loanType]);
    if (dataConsumerLoan.isValidConsumerFields(this)) {
        dataConsumerLoan.removeTableIfExsist();
        dataConsumerLoan.createLoanInfo();
        dataConsumerLoan.createPaymentTable();
    }
}