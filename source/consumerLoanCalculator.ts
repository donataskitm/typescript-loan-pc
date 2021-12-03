import ConsumerLoan from "./consumerLoan";
import { interestList } from "./interestList";
import { loadConsumerListBoxItems } from "./consumerListBox";

const btn = document.getElementById('btnConsumerLoanValues');
btn?.addEventListener("click", countConsumerLoan);

window.addEventListener('load', (evt) => {
    const url: string = document.URL;
    if (url.indexOf("consumer-loan.html") > 0) {
        loadConsumerListBoxItems();
    }
});

export function countConsumerLoan() {

    const loanAmount = Number((<HTMLInputElement>document.getElementById('loanAmount')).value);
    const loanTerm = Number((<HTMLInputElement>document.getElementById('loanTerm')).value);
    const loanType = (<HTMLInputElement>document.getElementById('loanType')).value;
    const dataConsumerLoan = new ConsumerLoan(loanAmount, loanTerm, interestList[loanType]);
    if (dataConsumerLoan.isValid()) {
        dataConsumerLoan.removeTableIfExsist();
        dataConsumerLoan.createLoanInfo();
        dataConsumerLoan.createPaymentTable();
    }
}