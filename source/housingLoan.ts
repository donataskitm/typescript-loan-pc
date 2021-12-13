import { config } from "./config/config";
import Loan from "./loan";
import { isValidHousingLoanFields } from "./utilities/fieldsValidation";
import { showErrors } from "./utilities/handleLoanInfo";

export default class HousingLoan extends Loan {
    loanAmount: number;
    loanDuration: number;
    interest: number;

    constructor(loanAmount: number, loanDuration: number, interest = config.housingLoanPerc) {
        super(loanAmount, loanDuration, interest);
        this.interest = interest;
    }

    countMaxLoanAmount(numberOfMembers: number, salary: number) {
        const maxInterestAmount = salary / numberOfMembers * config.housingMinSalaryPerc;
        return maxInterestAmount;
    }

    isValidHousingLoanFields = isValidHousingLoanFields.bind(this);

    isExpectationOk(maxMonthPayment: number, monthPayment: number) {
        if (maxMonthPayment < monthPayment) {
            alert("Your income is insufficient. Choose another period and loan amount");
            return false;
        }
        return true;
    }
}

const btn = document.getElementById('btnReadHousingValues');
btn?.addEventListener("click", countHousingLoan);

export function countHousingLoan() {
    let err: string[] = [];
    const loanAmount = (<HTMLInputElement>document.getElementById('loanAmount')).value;
    const loanTerm = (<HTMLInputElement>document.getElementById('loanTerm')).value;
    const dataHousingLoan = new HousingLoan(Number(loanAmount), Number(loanTerm));
    const salary = Number((<HTMLInputElement>document.getElementById('salary')).value);
    const numberOfMembers = Number((<HTMLInputElement>document.getElementById('numberOfMemebers')).value);
    err = dataHousingLoan.isValidHousingLoanFields(numberOfMembers, salary);

    if (err.length === config.emptyArray) {
        const maxMonthPayment = dataHousingLoan.countMaxLoanAmount(numberOfMembers, salary);
        const monthPayment = dataHousingLoan.countMonthPayment();
        if (dataHousingLoan.isExpectationOk(maxMonthPayment, monthPayment)) {
            dataHousingLoan.showTables();
        }
    }
    else {
        showErrors(err);
    }


}