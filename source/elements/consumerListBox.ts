import { interestList } from "../config/interestList";

export function loadConsumerListBoxItems(): void {
    const loanList = (<HTMLInputElement>document.getElementById('loanType'));
    const defaultOption = document.createElement('OPTION');
    defaultOption.innerHTML = 'Select loan type';
    loanList.appendChild(defaultOption);
    for (const key in interestList) {
        const defaultOption = document.createElement('OPTION');
        defaultOption.innerHTML = `${key}`;
        loanList.appendChild(defaultOption);
    }
}