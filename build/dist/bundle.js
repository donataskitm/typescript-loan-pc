(function () {
    "use strict";
    var e, t, n = { 322: function (e, t, n) { Object.defineProperty(t, "__esModule", { value: !0 }), t.isValidHousingLoanFields = t.isValidFastLoanFields = t.isValidConsumerFields = void 0; var o = n(508); t.isValidConsumerFields = function () { return !(null == this.interest || this.loanAmount > o.config.consumerLoanAmountLimit || this.loanAmount < o.config.negativeValue || this.loanDuration > o.config.consumerLoanDurationLimit || this.loanAmount == o.config.emptyField || this.loanDuration == o.config.emptyField) || (alert("Please correct entered data"), !1); }, t.isValidFastLoanFields = function () { return !(this.loanAmount > o.config.fastLoanAmountLimit || this.loanDuration > o.config.fastLoanDurationLimit || this.loanAmount == o.config.emptyField || this.loanDuration == o.config.emptyField) || (alert("Please correct entered data"), !1); }, t.isValidHousingLoanFields = function (e, t) { return !(this.loanAmount <= o.config.negativeValue || this.loanDuration > o.config.housingLoanDurationLimit || this.loanDuration == o.config.emptyField || e == o.config.emptyField || t == o.config.emptyField) || (alert("Please correct entered data"), !1); }; }, 508: function (e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.config = void 0, t.config = { consumerLoanAmountLimit: 1e4, consumerLoanDurationLimit: 60, fastLoanAmountLimit: 5e3, fastLoanDurationLimit: 24, housingLoanDurationLimit: 360, housingMinSalaryPerc: .4, housingLoanPerc: 2, fastLoanPerc: 20, emptyField: 0, negativeValue: 0, monthsPerYear: 12, totalPercentage: 100, decimalPlaces: 2, numberActiveUrl: 0 }; }, 680: function (e, t, n) { Object.defineProperty(t, "__esModule", { value: !0 }), t.loadConsumerListBoxItems = void 0; var o = n(884); t.loadConsumerListBoxItems = function () { var e = document.getElementById("loanType"), t = document.createElement("OPTION"); for (var n in t.innerHTML = "Select loan type", e.appendChild(t), o.interestList) {
            var a = document.createElement("OPTION");
            a.innerHTML = "".concat(n), e.appendChild(a);
        } }; }, 318: function (e, t, n) { var o, a = this && this.__extends || (o = function (e, t) { return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); }, o(e, t); }, function (e, t) { if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null"); function n() { this.constructor = e; } o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n); }); Object.defineProperty(t, "__esModule", { value: !0 }); var i = n(90), r = n(322), l = function (e) { function t(t, n, o) { var a = e.call(this, t, n, o) || this; return a.isValidConsumerFields = r.isValidConsumerFields.bind(a), a.interest = o, a; } return a(t, e), t; }(i.default); t.default = l; }, 336: function (e, t, n) { var o, a = this && this.__extends || (o = function (e, t) { return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); }, o(e, t); }, function (e, t) { if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null"); function n() { this.constructor = e; } o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n); }); Object.defineProperty(t, "__esModule", { value: !0 }); var i = n(90), r = n(508), l = n(322), u = function (e) { function t(t, n, o) { void 0 === o && (o = r.config.fastLoanPerc); var a = e.call(this, t, n, o) || this; return a.isValidFastLoanFields = l.isValidFastLoanFields.bind(a), a; } return a(t, e), t; }(i.default); t.default = u; }, 216: function (e, t, n) { var o, a = this && this.__extends || (o = function (e, t) { return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); }, o(e, t); }, function (e, t) { if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null"); function n() { this.constructor = e; } o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n); }); Object.defineProperty(t, "__esModule", { value: !0 }); var i = n(508), r = n(90), l = n(322), u = function (e) { function t(t, n, o) { void 0 === o && (o = i.config.housingLoanPerc); var a = e.call(this, t, n, o) || this; return a.isValidHousingLoanFields = l.isValidHousingLoanFields.bind(a), a.interest = o, a; } return a(t, e), t.prototype.countMaxLoanAmount = function (e, t) { return t / e * i.config.housingMinSalaryPerc; }, t.prototype.isExpectationOk = function (e, t) { return !(e < t && (alert("Your income is insufficient. Choose another period and loan amount"), 1)); }, t; }(r.default); t.default = u; }, 884: function (e, t) { Object.defineProperty(t, "__esModule", { value: !0 }), t.interestList = void 0, t.interestList = { "Car loan": 7, "Electric equipment loan": 10, "House renovation loan": 5 }; }, 90: function (e, t, n) { Object.defineProperty(t, "__esModule", { value: !0 }); var o = n(508), a = n(431), i = n(165), r = function () { function e(e, t, n) { this.removeTableIfExsist = function () { return (0, a.removeTableIfExsist)(); }, this.createPaymentTable = a.createPaymentTable.bind(this), this.createLoanInfo = i.createLoanInfo.bind(this), this.loanAmount = e, this.loanDuration = t, this.interest = n, this.percentPerMonth = this.interest / o.config.totalPercentage / o.config.monthsPerYear, this.power = Math.pow(1 + this.percentPerMonth, this.loanDuration); } return e.prototype.countMonthPayment = function () { return this.loanAmount * this.percentPerMonth * this.power / (this.power - 1); }, e.prototype.countTotalPayment = function (e) { return e * this.loanDuration; }, e.prototype.countTotalInterest = function (e) { return e - this.loanAmount; }, e.prototype.countRemainingBalance = function (e) { var t = Math.pow(1 + this.percentPerMonth, e); return this.loanAmount * (this.power - t) / (this.power - 1); }, e.prototype.countInterestAmount = function (e, t) { return e - t + this.countMonthPayment(); }, e; }(); t.default = r; }, 165: function (e, t, n) { Object.defineProperty(t, "__esModule", { value: !0 }), t.createLoanInfo = void 0; var o = n(508); function a(e, t) { var n = document.createElement("LI"); n.setAttribute("class", "list-group-item"), n.appendChild(document.createTextNode("".concat(t))), e.appendChild(n); } t.createLoanInfo = function () { var e = document.getElementById("loanInfo"), t = document.createElement("UL"); t.setAttribute("class", "list-group"), t.setAttribute("id", "calcUl"), null == e || e.appendChild(t); var n = this.countMonthPayment(), i = this.countTotalPayment(n), r = this.countTotalInterest(i); a(t, "Deal amount: ".concat(this.loanAmount, " eur")), a(t, "Deal term: ".concat(this.loanDuration, " months")), a(t, "Deal interest: ".concat(this.interest, "% per year")), a(t, "Monthly return payment: ".concat(n.toFixed(o.config.decimalPlaces), " eur")), a(t, "Total interest: ".concat(r.toFixed(o.config.decimalPlaces), " eur")), a(t, "Total payment: ".concat(i.toFixed(o.config.decimalPlaces), " eur")); }; }, 431: function (e, t, n) { Object.defineProperty(t, "__esModule", { value: !0 }), t.createPaymentTable = t.removeTableIfExsist = void 0; var o = n(508); function a(e, t) { var n = document.createElement("TH"); n.appendChild(document.createTextNode("".concat(t))), e.appendChild(n); } t.removeTableIfExsist = function () { var e, t; document.getElementById("calcTable") && (null === (e = document.getElementById("calcTable")) || void 0 === e || e.remove()), document.getElementById("calcUl") && (null === (t = document.getElementById("calcUl")) || void 0 === t || t.remove()); }, t.createPaymentTable = function () { var e = document.getElementById("loanTable"), t = document.createElement("TABLE"); t.setAttribute("id", "calcTable"), t.setAttribute("class", "table table-striped pt-5"); var n = document.createElement("THEAD"); t.appendChild(n); var i = document.createElement("TR"); n.appendChild(i), a(i, "Payment No"), a(i, "Amount"), a(i, "Interest Payed"); var r = document.createElement("TBODY"); t.appendChild(r); for (var l = this.loanAmount, u = 1; u <= this.loanDuration; u++) {
            var c = document.createElement("TR");
            r.appendChild(c);
            var s = this.countRemainingBalance(u), d = this.countInterestAmount(s, l);
            a(c, "".concat(u)), a(c, "".concat(d.toFixed(o.config.decimalPlaces))), a(c, "".concat(s.toFixed(o.config.decimalPlaces))), l = s;
        } null == e || e.appendChild(t); }; } }, o = {};
    function a(e) { var t = o[e]; if (void 0 !== t)
        return t.exports; var i = o[e] = { exports: {} }; return n[e].call(i.exports, i, i.exports, a), i.exports; }
    e = a(336), null == (t = document.getElementById("btnReadValues")) || t.addEventListener("click", (function () { var t = document.getElementById("loanAmount").value, n = document.getElementById("loanTerm").value, o = new e.default(Number(t), Number(n)); o.isValidFastLoanFields() && (o.removeTableIfExsist(), o.createLoanInfo(), o.createPaymentTable()); })), (function () { var e = a(216), t = document.getElementById("btnReadHousingValues"); null == t || t.addEventListener("click", (function () { var t = document.getElementById("loanAmount").value, n = document.getElementById("loanTerm").value, o = new e.default(Number(t), Number(n)), a = Number(document.getElementById("salary").value), i = Number(document.getElementById("numberOfMemebers").value); if (o.isValidHousingLoanFields(a, i)) {
        var r = o.countMaxLoanAmount(i, a), l = o.countMonthPayment();
        o.isExpectationOk(r, l) && (o.removeTableIfExsist(), o.createLoanInfo(), o.createPaymentTable());
    } })); })(), (function () { var e = a(318), t = a(884), n = a(508), o = a(680), i = document.getElementById("btnConsumerLoanValues"); null == i || i.addEventListener("click", (function () { var n = Number(document.getElementById("loanAmount").value), o = Number(document.getElementById("loanTerm").value), a = document.getElementById("loanType").value, i = new e.default(n, o, t.interestList[a]); i.isValidConsumerFields(this) && (i.removeTableIfExsist(), i.createLoanInfo(), i.createPaymentTable()); })), window.addEventListener("load", (function (e) { document.URL.indexOf("consumer-loan.html") > n.config.numberActiveUrl && (0, o.loadConsumerListBoxItems)(); })); })();
})();
//# sourceMappingURL=bundle.js.map
//# sourceMappingURL=bundle.js.map