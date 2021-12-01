
import FastLoan from "./fastLoan";

const btn = document.getElementById('btnReadValues');
btn?.addEventListener("click", countFastLoan);

export function countFastLoan() {

   const loanAmount = (<HTMLInputElement>document.getElementById('loanAmount')).value;
   const loanTerm = (<HTMLInputElement>document.getElementById('loanTerm')).value;
   const dataFastLoan = new FastLoan(Number(loanAmount), Number(loanTerm));
   if (dataFastLoan.isValid()) {
      dataFastLoan.isTable();
      dataFastLoan.createLoanInfo();
      dataFastLoan.createPaymentTable();
   }
}







