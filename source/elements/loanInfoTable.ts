import { config } from "../config/config";
import Loan from "../loan";

export function createLoanInfo(this: Loan): void {
    const loanInfo = document.getElementById('loanInfo');
    const ul = document.createElement('UL');
    ul.setAttribute('class', 'list-group');
    ul.setAttribute('id', 'calcUl');
    loanInfo?.appendChild(ul);
    const monthlyPayment = this.countMonthPayment();
    const totalPayment = this.countTotalPayment(monthlyPayment);
    const totalInterest = this.countTotalInterest(totalPayment);
    createRowForLoanInfo(ul, `Deal amount: ${this.loanAmount} eur`);
    createRowForLoanInfo(ul, `Deal term: ${this.loanDuration} months`);
    createRowForLoanInfo(ul, `Deal interest: ${this.interest}% per year`);
    createRowForLoanInfo(ul, `Monthly return payment: ${monthlyPayment.toFixed(config.decimalPlaces)} eur`);
    createRowForLoanInfo(ul, `Total interest: ${totalInterest.toFixed(config.decimalPlaces)} eur`);
    createRowForLoanInfo(ul, `Total payment: ${totalPayment.toFixed(config.decimalPlaces)} eur`);
}

function createRowForLoanInfo(ul: Element, text: string): void {
    const li = document.createElement('LI');
    li.setAttribute('class', 'list-group-item');
    li.appendChild(document.createTextNode(`${text}`));
    ul.appendChild(li);
}