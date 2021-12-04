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
var loan_1 = require("./loan");
var config_1 = require("./config");
var FieldsValidation_1 = require("./FieldsValidation");
var FastLoan = /** @class */ (function (_super) {
    __extends(FastLoan, _super);
    function FastLoan(loanAmount, loanDuration, interest) {
        if (interest === void 0) { interest = config_1.config.fastLoanPerc; }
        var _this = _super.call(this, loanAmount, loanDuration, interest) || this;
        _this.isValidFastLoanFields = FieldsValidation_1.isValidFastLoanFields.bind(_this);
        return _this;
    }
    return FastLoan;
}(loan_1.default));
exports.default = FastLoan;
//# sourceMappingURL=fastLoan.js.map