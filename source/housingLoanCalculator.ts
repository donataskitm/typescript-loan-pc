import HousingLoan from "./housingLoan";

const btn = document.getElementById('btnReadHousingValues');
btn?.addEventListener("click", countHousingLoan);

export function countHousingLoan() {

   const loanAmount = (<HTMLInputElement>document.getElementById('loanAmount')).value;
   const loanTerm = (<HTMLInputElement>document.getElementById('loanTerm')).value;
   const dataHousingLoan = new HousingLoan(Number(loanAmount), Number(loanTerm));
   const salary = Number((<HTMLInputElement>document.getElementById('salary')).value);
   const numberOfMembers = Number((<HTMLInputElement>document.getElementById('numberOfMemebers')).value);

   if (dataHousingLoan.isValid(salary, numberOfMembers)) {
      const maxMonthPayment = dataHousingLoan.countMaxLoanAmount(numberOfMembers, salary);
      const monthPayment = dataHousingLoan.countMonthPayment();
      if (dataHousingLoan.isExpectationOk(maxMonthPayment, monthPayment)) {
         dataHousingLoan.removeTableIfExsist();
         dataHousingLoan.createLoanInfo();
         dataHousingLoan.createPaymentTable();
      }
   }
}
