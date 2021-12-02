import { config } from "./config";
import { LoanCalculator } from "./loanCalculator";
import { isTable } from "./loanTable";

export default abstract class Loan implements LoanCalculator {
    loanAmount: number;
    loanDuration: number;
    interest: number;
    percentPerMonth: number;
    power: number;

    constructor(loanSize: number, loanDuration: number, interest: number) {
        this.loanAmount = loanSize;
        this.loanDuration = loanDuration;
        this.interest = interest;
        this.percentPerMonth = this.interest / config.totalPercentage / config.monthsPerYear;
        this.power = Math.pow(1 + this.percentPerMonth, this.loanDuration);
    }

    countMonthPayment(): number {
        const monthPayment = (this.loanAmount * this.percentPerMonth * this.power) / (this.power - 1);
        return monthPayment;
    }

    countTotalPayment(monthPayment: number): number {
        const totalPayment = monthPayment * this.loanDuration;
        return totalPayment;
    }

    countTotalInterest(totalPayment: number): number {
        const totalInterest = totalPayment - this.loanAmount;
        return totalInterest;
    }

<<<<<<< HEAD
    countRemainingBalance(paymentNumber: number): number {
        const power1 = Math.pow(1 + this.percentPerMonth, paymentNumber);
        const remainingBlance = (this.loanAmount * (this.power - power1)) / (this.power - 1);
=======
    countRemainingBalance(paymentNo: number): number {
        const power1 = Math.pow(this.CONSTONE + this.percentPerMonth, paymentNo);
        const remainingBlance = (this.loanAmount * (this.power - power1)) / (this.power - this.CONSTONE);
>>>>>>> 789053b4a13f35d92c551c23ffd20f4aa2ed8624
        return remainingBlance;
    }

    countInterestAmount(remainingBalance: number, previuosRemainingBalance: number): number {
        const interestAmount = remainingBalance - previuosRemainingBalance + this.countMonthPayment();
        return interestAmount;
    }

    createLoanInfo(): void {
        const loanInfo = document.getElementById('loanInfo');
        const ul = document.createElement('UL');
        ul.setAttribute('class', 'list-group');
        ul.setAttribute('id', 'calcUl');
        loanInfo?.appendChild(ul);
        const monthlyPayment = this.countMonthPayment();
        const totalPayment = this.countTotalPayment(monthlyPayment);
        const totalInterest = this.countTotalInterest(totalPayment);
        this.createRowForLoanInfo(ul, `Deal amount: ${this.loanAmount} eur`);
        this.createRowForLoanInfo(ul, `Deal term: ${this.loanDuration} months`);
        this.createRowForLoanInfo(ul, `Deal interest: ${this.interest}% per year`);
        this.createRowForLoanInfo(ul, `Monthly return payment: ${monthlyPayment.toFixed(config.decimalPlaces)} eur`);
        this.createRowForLoanInfo(ul, `Total interest: ${totalInterest.toFixed(config.decimalPlaces)} eur`);
        this.createRowForLoanInfo(ul, `Total payment: ${totalPayment.toFixed(config.decimalPlaces)} eur`);
    }

    createRowForLoanInfo(ul: Element, text: string): void {
        const li = document.createElement('LI');
        li.setAttribute('class', 'list-group-item');
        li.appendChild(document.createTextNode(`${text}`));
        ul.appendChild(li);
    }


    createPaymentTable(): void {
        const loanTable = document.getElementById('loanTable');
        const table = document.createElement('TABLE');
        table.setAttribute('id', 'calcTable');
        table.setAttribute('class', 'table table-striped pt-5');
        const tableHead = document.createElement('THEAD');
        table.appendChild(tableHead);
        const trHead = document.createElement('TR');
        tableHead.appendChild(trHead);
        this.createTdForPaymentTable(trHead, 'Payment No');
        this.createTdForPaymentTable(trHead, 'Amount');
        this.createTdForPaymentTable(trHead, 'Interest Payed');
        const tableBody = document.createElement('TBODY');
        table.appendChild(tableBody);
        let previuosRemainingBalance = this.loanAmount;
        for (let trNumb = 1; trNumb <= this.loanDuration; trNumb++) {
            const tr = document.createElement('TR');
            tableBody.appendChild(tr);
            const remainingBalance = this.countRemainingBalance(trNumb);
            const payedInterest = this.countInterestAmount(remainingBalance, previuosRemainingBalance);
            this.createTdForPaymentTable(tr, `${trNumb}`);
            this.createTdForPaymentTable(tr, `${payedInterest.toFixed(config.decimalPlaces)}`);
            this.createTdForPaymentTable(tr, `${remainingBalance.toFixed(config.decimalPlaces)}`);
            previuosRemainingBalance = remainingBalance;
        }
        loanTable?.appendChild(table);
    }

    createTdForPaymentTable(tr: Element, text: string): void {
        const td = document.createElement('TH');
        td.appendChild(document.createTextNode(`${text}`));
        tr.appendChild(td);
    }

<<<<<<< HEAD
    isTable = () => isTable();
}
=======
    isTable(): void {
        if (document.getElementById('calcTable')) {
            document.getElementById('calcTable')?.remove();
        }
        if (document.getElementById('calcUl')) {
            document.getElementById('calcUl')?.remove();
        }
    }
}
>>>>>>> 789053b4a13f35d92c551c23ffd20f4aa2ed8624
