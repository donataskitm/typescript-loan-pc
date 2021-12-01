export interface LoanCalculator {
    loanAmount: number;
    loanDuration: number;
    interest: number;
    countMonthPayment(): number;
    countTotalPayment(monthPayment: number): number;
    countTotalInterest(totalPayment: number): number;
    countRemainingBalance(no: number): number;
    countInterestAmount(remainingBalance: number, previuosInterest: number): number;
}