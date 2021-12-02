(function () {
    "use strict";
    var t, e, n = { 508: function (t, e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.config = void 0, e.config = { consumerLoanAmountLimit: 1e4, consumerLoanDurationLimit: 60, fastLoanAmountLimit: 5e3, fastLoanDurationLimit: 24, housingLoanDurationLimit: 360, housingMinSalaryPerc: .4, housingLoanPerc: 2, fastLoanPerc: 20, emptyField: 0, negativeValue: 0, monthsPerYear: 12, totalPercentage: 100, decimalPlaces: 2 }; }, 318: function (t, e, n) { var o, a = this && this.__extends || (o = function (t, e) { return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) { t.__proto__ = e; } || function (t, e) { for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); }, o(t, e); }, function (t, e) { if ("function" != typeof e && null !== e)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); function n() { this.constructor = t; } o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }); Object.defineProperty(e, "__esModule", { value: !0 }); var r = n(90), i = n(508), c = function (t) { function e(e, n, o) { var a = t.call(this, e, n, o) || this; return a.interest = o, a; } return a(e, t), e.prototype.isValid = function () { return !(null == this.interest || this.loanAmount > i.config.consumerLoanAmountLimit || this.loanAmount < i.config.negativeValue || this.loanDuration > i.config.consumerLoanDurationLimit || this.loanAmount == i.config.emptyField || this.loanDuration == i.config.emptyField) || (alert("Please correct entered data"), !1); }, e; }(r.default); e.default = c; }, 336: function (t, e, n) { var o, a = this && this.__extends || (o = function (t, e) { return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) { t.__proto__ = e; } || function (t, e) { for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); }, o(t, e); }, function (t, e) { if ("function" != typeof e && null !== e)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); function n() { this.constructor = t; } o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }); Object.defineProperty(e, "__esModule", { value: !0 }); var r = n(90), i = n(508), c = function (t) { function e(e, n, o) { return void 0 === o && (o = i.config.fastLoanPerc), t.call(this, e, n, o) || this; } return a(e, t), e.prototype.isValid = function () { return !(this.loanAmount > i.config.fastLoanAmountLimit || this.loanDuration > i.config.fastLoanDurationLimit || this.loanAmount == i.config.emptyField || this.loanDuration == i.config.emptyField) || (alert("Please correct entered data"), !1); }, e; }(r.default); e.default = c; }, 216: function (t, e, n) { var o, a = this && this.__extends || (o = function (t, e) { return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) { t.__proto__ = e; } || function (t, e) { for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); }, o(t, e); }, function (t, e) { if ("function" != typeof e && null !== e)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null"); function n() { this.constructor = t; } o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }); Object.defineProperty(e, "__esModule", { value: !0 }); var r = n(508), i = function (t) { function e(e, n, o) { void 0 === o && (o = r.config.housingLoanPerc); var a = t.call(this, e, n, o) || this; return a.interest = o, a; } return a(e, t), e.prototype.countMaxLoanAmount = function (t, e) { return e / t * r.config.housingMinSalaryPerc; }, e.prototype.isValid = function (t, e) { return !(this.loanAmount <= r.config.negativeValue || this.loanDuration > r.config.housingLoanDurationLimit || this.loanDuration == r.config.emptyField || t == r.config.emptyField || e == r.config.emptyField) || (alert("Please correct entered data"), !1); }, e.prototype.isExpectationOk = function (t, e) { return !(t < e && (alert("Your income is insufficient. Choose another period and loan amount"), 1)); }, e; }(n(90).default); e.default = i; }, 884: function (t, e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.interestList = void 0, e.interestList = { "Car loan": 7, "Electric equipment loan": 10, "House renovation loan": 5 }; }, 90: function (t, e, n) { Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(508), a = n(431), r = function () { function t(t, e, n) { this.isTable = function () { return (0, a.isTable)(); }, this.loanAmount = t, this.loanDuration = e, this.interest = n, this.percentPerMonth = this.interest / o.config.totalPercentage / o.config.monthsPerYear, this.power = Math.pow(1 + this.percentPerMonth, this.loanDuration); } return t.prototype.countMonthPayment = function () { return this.loanAmount * this.percentPerMonth * this.power / (this.power - 1); }, t.prototype.countTotalPayment = function (t) { return t * this.loanDuration; }, t.prototype.countTotalInterest = function (t) { return t - this.loanAmount; }, t.prototype.countRemainingBalance = function (t) { var e = Math.pow(1 + this.percentPerMonth, t); return this.loanAmount * (this.power - e) / (this.power - 1); }, t.prototype.countInterestAmount = function (t, e) { return t - e + this.countMonthPayment(); }, t.prototype.createLoanInfo = function () { var t = document.getElementById("loanInfo"), e = document.createElement("UL"); e.setAttribute("class", "list-group"), e.setAttribute("id", "calcUl"), null == t || t.appendChild(e); var n = this.countMonthPayment(), a = this.countTotalPayment(n), r = this.countTotalInterest(a); this.createRowForLoanInfo(e, "Deal amount: ".concat(this.loanAmount, " eur")), this.createRowForLoanInfo(e, "Deal term: ".concat(this.loanDuration, " months")), this.createRowForLoanInfo(e, "Deal interest: ".concat(this.interest, "% per year")), this.createRowForLoanInfo(e, "Monthly return payment: ".concat(n.toFixed(o.config.decimalPlaces), " eur")), this.createRowForLoanInfo(e, "Total interest: ".concat(r.toFixed(o.config.decimalPlaces), " eur")), this.createRowForLoanInfo(e, "Total payment: ".concat(a.toFixed(o.config.decimalPlaces), " eur")); }, t.prototype.createRowForLoanInfo = function (t, e) { var n = document.createElement("LI"); n.setAttribute("class", "list-group-item"), n.appendChild(document.createTextNode("".concat(e))), t.appendChild(n); }, t.prototype.createPaymentTable = function () { var t = document.getElementById("loanTable"), e = document.createElement("TABLE"); e.setAttribute("id", "calcTable"), e.setAttribute("class", "table table-striped pt-5"); var n = document.createElement("THEAD"); e.appendChild(n); var a = document.createElement("TR"); n.appendChild(a), this.createTdForPaymentTable(a, "Payment No"), this.createTdForPaymentTable(a, "Amount"), this.createTdForPaymentTable(a, "Interest Payed"); var r = document.createElement("TBODY"); e.appendChild(r); for (var i = this.loanAmount, c = 1; c <= this.loanDuration; c++) {
            var u = document.createElement("TR");
            r.appendChild(u);
            var l = this.countRemainingBalance(c), s = this.countInterestAmount(l, i);
            this.createTdForPaymentTable(u, "".concat(c)), this.createTdForPaymentTable(u, "".concat(s.toFixed(o.config.decimalPlaces))), this.createTdForPaymentTable(u, "".concat(l.toFixed(o.config.decimalPlaces))), i = l;
        } null == t || t.appendChild(e); }, t.prototype.createTdForPaymentTable = function (t, e) { var n = document.createElement("TH"); n.appendChild(document.createTextNode("".concat(e))), t.appendChild(n); }, t; }(); e.default = r; }, 431: function (t, e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.isTable = void 0, e.isTable = function () { var t, e; document.getElementById("calcTable") && (null === (t = document.getElementById("calcTable")) || void 0 === t || t.remove()), document.getElementById("calcUl") && (null === (e = document.getElementById("calcUl")) || void 0 === e || e.remove()); }; } }, o = {};
    function a(t) { var e = o[t]; if (void 0 !== e)
        return e.exports; var r = o[t] = { exports: {} }; return n[t].call(r.exports, r, r.exports, a), r.exports; }
    t = a(336), null == (e = document.getElementById("btnReadValues")) || e.addEventListener("click", (function () { var e = document.getElementById("loanAmount").value, n = document.getElementById("loanTerm").value, o = new t.default(Number(e), Number(n)); o.isValid() && (o.isTable(), o.createLoanInfo(), o.createPaymentTable()); })), (function () { var t = a(216), e = document.getElementById("btnReadHousingValues"); null == e || e.addEventListener("click", (function () { var e = document.getElementById("loanAmount").value, n = document.getElementById("loanTerm").value, o = new t.default(Number(e), Number(n)), a = Number(document.getElementById("salary").value), r = Number(document.getElementById("numberOfMemebers").value); if (o.isValid(a, r)) {
        var i = o.countMaxLoanAmount(r, a), c = o.countMonthPayment();
        o.isExpectationOk(i, c) && (o.isTable(), o.createLoanInfo(), o.createPaymentTable());
    } })); })(), (function () { var t = a(318), e = a(884), n = document.getElementById("btnConsumerLoanValues"); null == n || n.addEventListener("click", (function () { var n = Number(document.getElementById("loanAmount").value), o = Number(document.getElementById("loanTerm").value), a = document.getElementById("loanType").value, r = new t.default(n, o, e.interestList[a]); r.isValid() && (r.isTable(), r.createLoanInfo(), r.createPaymentTable()); })); })();
})();
//# sourceMappingURL=bundle.js.map
//# sourceMappingURL=bundle.js.map