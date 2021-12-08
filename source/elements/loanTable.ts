import { config } from "../config/config";
import Loan from "../loan";

export function removeTableIfExsist(): void {
    if (document.getElementById('calcTable')) {
        document.getElementById('calcTable')?.remove();
    }
    if (document.getElementById('calcUl')) {
        document.getElementById('calcUl')?.remove();
    }
}

export function createPaymentTable(this: Loan): void {
    const loanTable = document.getElementById('loanTable');
    const table = document.createElement('TABLE');
    table.setAttribute('id', 'calcTable');
    table.setAttribute('class', 'table table-striped pt-5');
    createHeadForPaymentTable(table);
    const tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    let previuosRemainingBalance = this.loanAmount;
    for (let trNumb = 1; trNumb <= this.loanDuration; trNumb++) {
        const tr = document.createElement('TR');
        tableBody.appendChild(tr);
        const remainingBalance = this.countRemainingBalance(trNumb);
        const payedInterest = this.countInterestAmount(remainingBalance, previuosRemainingBalance);
        createTdForPaymentTable(tr, `${trNumb}`);
        createTdForPaymentTable(tr, `${payedInterest.toFixed(config.decimalPlaces)}`);
        createTdForPaymentTable(tr, `${remainingBalance.toFixed(config.decimalPlaces)}`);
        previuosRemainingBalance = remainingBalance;
    }
    loanTable?.appendChild(table);
}

function createTdForPaymentTable(tr: Element, text: string): void {
    const td = document.createElement('TH');
    td.appendChild(document.createTextNode(`${text}`));
    tr.appendChild(td);
}

function createHeadForPaymentTable(table: Element): void {
    const tableHead = document.createElement('THEAD');
    table.appendChild(tableHead);
    const trHead = document.createElement('TR');
    tableHead.appendChild(trHead);
    createTdForPaymentTable(trHead, 'Payment No');
    createTdForPaymentTable(trHead, 'Amount');
    createTdForPaymentTable(trHead, 'Interest Payed');
}

