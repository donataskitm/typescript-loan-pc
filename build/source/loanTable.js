"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTable = void 0;
function isTable() {
    var _a, _b;
    if (document.getElementById('calcTable')) {
        (_a = document.getElementById('calcTable')) === null || _a === void 0 ? void 0 : _a.remove();
    }
    if (document.getElementById('calcUl')) {
        (_b = document.getElementById('calcUl')) === null || _b === void 0 ? void 0 : _b.remove();
    }
}
exports.isTable = isTable;
//# sourceMappingURL=loanTable.js.map