
export function showFormErrors(err: string[]) {
    const formErrors = (<HTMLInputElement>document.getElementById('errors'));
    const ul = document.createElement('UL');
    ul.setAttribute('id', 'error-group');
    removeErrorLabels();

    for (let errNumber = 0; errNumber < err.length; errNumber++) {
        const li = document.createElement('LI');
        li.appendChild(document.createTextNode(err[errNumber]));
        ul.appendChild(li);
        formErrors.appendChild(ul);
    }
}

export function removeErrorLabels() {
    if (document.getElementById('error-group')) {
        document.getElementById('error-group')?.remove();
    }

}