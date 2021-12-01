import ConsumerLoan from "./consumerLoan";
import { interestList } from "./interestList";

const btn = document.getElementById('btnConsumerLoanValues');
btn?.addEventListener("click", countConsumerLoan);

export function countConsumerLoan() {

    const loanAmount = Number((<HTMLInputElement>document.getElementById('loanAmount')).value);
    const loanTerm = Number((<HTMLInputElement>document.getElementById('loanTerm')).value);
    const loanType = (<HTMLInputElement>document.getElementById('loanType')).value;
    const dataFastLoan = new ConsumerLoan(loanAmount, loanTerm, interestList[loanType]);
    if (dataFastLoan.isValid()) {
        dataFastLoan.isTable();
        dataFastLoan.createLoanInfo();
        dataFastLoan.createPaymentTable();
    }
}