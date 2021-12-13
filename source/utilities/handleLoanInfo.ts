import { showFormErrors, removeErrorLabels } from "../elements/errorForm";
import Loan from "../loan";
import { removeTableIfExsist } from "../elements/loanTable";
import { config } from "../config/config";

export function showTables(this: Loan) {
    removeErrorLabels();
    this.removeTableIfExsist();
    this.createLoanInfo();
    if (this.loanDuration > config.minDurationMonth) {
        this.createPaymentTable();
    }
}

export function showErrors(err: string[]) {
    showFormErrors(err);
    removeTableIfExsist();
}