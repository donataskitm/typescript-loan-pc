import { showFormErrors, removeErrorLabels } from "../elements/errorForm";
import Loan from "../loan";
import { removeTableIfExsist } from "../elements/loanTable";

export function showTables(this: Loan){
        removeErrorLabels();
        this.removeTableIfExsist();
        this.createLoanInfo();
        this.createPaymentTable();
}

export function showErrors(err: string[]){
    showFormErrors(err);
    removeTableIfExsist(); 
}