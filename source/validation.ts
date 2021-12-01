
export default function isValidHousingLoan(loanAmount: number, loanTerm: number): boolean {
    if (loanAmount > 5000 || loanTerm > 24 || loanAmount == null || loanTerm == null) {
        alert("Please correct entered data");
        return false;
    }
    return true;
}