"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeErrorLabels = exports.showFormErrors = void 0;
function showFormErrors(err) {
    var formErrors = document.getElementById('errors');
    var ul = document.createElement('UL');
    ul.setAttribute('id', 'error-group');
    removeErrorLabels();
    for (var errNumber = 0; errNumber < err.length; errNumber++) {
        var li = document.createElement('LI');
        li.appendChild(document.createTextNode(err[errNumber]));
        ul.appendChild(li);
        formErrors.appendChild(ul);
    }
}
exports.showFormErrors = showFormErrors;
function removeErrorLabels() {
    var _a;
    if (document.getElementById('error-group')) {
        (_a = document.getElementById('error-group')) === null || _a === void 0 ? void 0 : _a.remove();
    }
}
exports.removeErrorLabels = removeErrorLabels;
//# sourceMappingURL=errorForm.js.map