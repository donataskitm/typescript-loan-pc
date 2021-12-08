"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.countConsumerLoan = void 0;
var loan_1 = require("./loan");
var fieldsValidation_1 = require("./utilities/fieldsValidation");
var handleLoanInfo_1 = require("./utilities/handleLoanInfo");
var interestList_1 = require("./config/interestList");
var config_1 = require("./config/config");
var consumerListBox_1 = require("./elements/consumerListBox");
var ConsumerLoan = /** @class */ (function (_super) {
    __extends(ConsumerLoan, _super);
    function ConsumerLoan(loanAmount, loanDuration, interest) {
        var _this = _super.call(this, loanAmount, loanDuration, interest) || this;
        _this.isValidConsumerFields = fieldsValidation_1.isValidConsumerFields.bind(_this);
        _this.interest = interest;
        return _this;
    }
    return ConsumerLoan;
}(loan_1.default));
exports.default = ConsumerLoan;
var btn = document.getElementById('btnConsumerLoanValues');
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", countConsumerLoan);
window.addEventListener('load', function (evt) {
    var url = document.URL;
    if (url.indexOf("consumer-loan.html") > config_1.config.numberActiveUrl) {
        (0, consumerListBox_1.loadConsumerListBoxItems)();
    }
});
function countConsumerLoan() {
    var err = [];
    var loanAmount = Number(document.getElementById('loanAmount').value);
    var loanTerm = Number(document.getElementById('loanTerm').value);
    var loanType = document.getElementById('loanType').value;
    var dataConsumerLoan = new ConsumerLoan(loanAmount, loanTerm, interestList_1.interestList[loanType]);
    err = dataConsumerLoan.isValidConsumerFields(this);
    if (err.length === config_1.config.emptyArray) {
        dataConsumerLoan.showTables();
    }
    else {
        (0, handleLoanInfo_1.showErrors)(err);
    }
}
exports.countConsumerLoan = countConsumerLoan;
//# sourceMappingURL=consumerLoan.js.map