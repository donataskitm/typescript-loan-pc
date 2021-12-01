import HousingLoan from "./housingLoan";

const btn = document.getElementById('btnReadHousingValues');
btn?.addEventListener("click", countHousingLoan);

export function countHousingLoan() {

   const loanAmount = (<HTMLInputElement>document.getElementById('loanAmount')).value;
   const loanTerm = (<HTMLInputElement>document.getElementById('loanTerm')).value;
   const dataFastLoan = new HousingLoan(Number(loanAmount), Number(loanTerm));
   dataFastLoan.isTable();
   dataFastLoan.createLoanInfo();
   dataFastLoan.createPaymentTable();
}
