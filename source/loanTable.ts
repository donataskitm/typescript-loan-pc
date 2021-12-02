export function isTable(): void {
    if (document.getElementById('calcTable')) {
        document.getElementById('calcTable')?.remove();
    }
    if (document.getElementById('calcUl')) {
        document.getElementById('calcUl')?.remove();
    }
}
