"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConsumerListBoxItems = void 0;
var interestList_1 = require("./interestList");
function loadConsumerListBoxItems() {
    var loanList = document.getElementById('loanType');
    var defaultOption = document.createElement('OPTION');
    defaultOption.innerHTML = 'Select loan type';
    loanList.appendChild(defaultOption);
    for (var key in interestList_1.interestList) {
        var defaultOption_1 = document.createElement('OPTION');
        defaultOption_1.innerHTML = "" + key;
        loanList.appendChild(defaultOption_1);
    }
}
exports.loadConsumerListBoxItems = loadConsumerListBoxItems;
//# sourceMappingURL=consumerListBox.js.map