import { config } from "./config";
import { LoanCalculator } from "./loanCalculator";
import { removeTableIfExsist, createPaymentTable } from "./loanTable";
import { createLoanInfo } from "./loanInfoTable";

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

    countRemainingBalance(paymentNumber: number): number {
        const power1 = Math.pow(1 + this.percentPerMonth, paymentNumber);
        const remainingBlance = (this.loanAmount * (this.power - power1)) / (this.power - 1);
        return remainingBlance;
    }

    countInterestAmount(remainingBalance: number, previuosRemainingBalance: number): number {
        const interestAmount = remainingBalance - previuosRemainingBalance + this.countMonthPayment();
        return interestAmount;
    }

    removeTableIfExsist = () => removeTableIfExsist();
    createPaymentTable = createPaymentTable.bind(this);
    createLoanInfo = createLoanInfo.bind(this);
}