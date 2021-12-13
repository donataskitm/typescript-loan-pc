(()=>{"use strict";var e={889:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=void 0,t.config={consumerLoanAmountLimit:1e4,consumerLoanDurationLimit:60,fastLoanAmountLimit:5e3,fastLoanDurationLimit:24,housingLoanDurationLimit:360,housingMinSalaryPerc:.4,housingLoanPerc:2,fastLoanPerc:20,emptyField:0,emptyArray:0,negativeValue:0,monthsPerYear:12,totalPercentage:100,decimalPlaces:2,numberActiveUrl:0,minDurationMonth:1}},506:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.errorStrings=void 0;var o=n(889),r="Laon duration can not exceed ",a="Loan amount can not exceed "+"".concat(o.config.consumerLoanAmountLimit)+" eur",i=r+"".concat(o.config.fastLoanAmountLimit)+" eur",u=r+"".concat(o.config.consumerLoanDurationLimit)+" months",l=r+"".concat(o.config.fastLoanDurationLimit)+" months",s=r+"".concat(o.config.housingLoanDurationLimit)+" months";t.errorStrings={loanAmountEmpty:"Amount field can not be empty",loanTermEmpty:"Term field can not be empty",loanType:"Choose a loan type from the list",negativeLoanValue:"Amount field can not contain negative value",negativeDurationValue:"Term field can not contain negative value",negativeMembersValue:"Members field can not contain negative value",negativeSalaryValue:"Salary field can not contain negative value",loanAmountBigger:a,loanDurationBigger:u,fastLoanAmountLimit:i,fastLoanDurationLimit:l,housingLoanDurationLimit:s,salaryEmpty:"Salary field can not be empty",membersNone:"Members field can not be empty"}},718:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.interestList=void 0,t.interestList={"Car loan":7,"Electric equipment loan":10,"House renovation loan":5}},318:function(e,t,n){var o,r=this&&this.__extends||(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.countConsumerLoan=void 0;var a=n(90),i=n(907),u=n(912),l=n(718),s=n(889),c=n(978),m=function(e){function t(t,n,o){var r=e.call(this,t,n,o)||this;return r.isValidConsumerFields=i.isValidConsumerFields.bind(r),r.interest=o,r}return r(t,e),t}(a.default);t.default=m;var d=document.getElementById("btnConsumerLoanValues");function f(){var e,t=Number(document.getElementById("loanAmount").value),n=Number(document.getElementById("loanTerm").value),o=document.getElementById("loanType").value,r=new m(t,n,l.interestList[o]);(e=r.isValidConsumerFields(this)).length===s.config.emptyArray?r.showTables():(0,u.showErrors)(e)}null==d||d.addEventListener("click",f),window.addEventListener("load",(function(e){document.URL.indexOf("consumer-loan.html")>s.config.numberActiveUrl&&(0,c.loadConsumerListBoxItems)()})),t.countConsumerLoan=f},978:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.loadConsumerListBoxItems=void 0;var o=n(718);t.loadConsumerListBoxItems=function(){var e=document.getElementById("loanType"),t=document.createElement("OPTION");for(var n in t.innerHTML="Select loan type",e.appendChild(t),o.interestList){var r=document.createElement("OPTION");r.innerHTML="".concat(n),e.appendChild(r)}}},202:(e,t)=>{function n(){var e;document.getElementById("error-group")&&(null===(e=document.getElementById("error-group"))||void 0===e||e.remove())}Object.defineProperty(t,"__esModule",{value:!0}),t.removeErrorLabels=t.showFormErrors=void 0,t.showFormErrors=function(e){var t=document.getElementById("errors"),o=document.createElement("UL");o.setAttribute("id","error-group"),n();for(var r=0;r<e.length;r++){var a=document.createElement("LI");a.appendChild(document.createTextNode(e[r])),o.appendChild(a),t.appendChild(o)}},t.removeErrorLabels=n},171:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createLoanInfo=void 0;var o=n(889);function r(e,t){var n=document.createElement("LI");n.setAttribute("class","list-group-item"),n.appendChild(document.createTextNode("".concat(t))),e.appendChild(n)}t.createLoanInfo=function(){var e=document.getElementById("loanInfo"),t=document.createElement("UL");t.setAttribute("class","list-group"),t.setAttribute("id","calcUl"),null==e||e.appendChild(t);var n=this.countMonthPayment(),a=this.countTotalPayment(n),i=this.countTotalInterest(a);r(t,"Deal amount: ".concat(this.loanAmount," eur")),r(t,"Deal term: ".concat(this.loanDuration," months")),r(t,"Deal interest: ".concat(this.interest,"% per year")),r(t,"Monthly return payment: ".concat(n.toFixed(o.config.decimalPlaces)," eur")),r(t,"Total interest: ".concat(i.toFixed(o.config.decimalPlaces)," eur")),r(t,"Total payment: ".concat(a.toFixed(o.config.decimalPlaces)," eur"))}},636:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createPaymentTable=t.removeTableIfExsist=void 0;var o=n(889);function r(e,t){var n=document.createElement("TH");n.appendChild(document.createTextNode("".concat(t))),e.appendChild(n)}t.removeTableIfExsist=function(){var e,t;document.getElementById("calcTable")&&(null===(e=document.getElementById("calcTable"))||void 0===e||e.remove()),document.getElementById("calcUl")&&(null===(t=document.getElementById("calcUl"))||void 0===t||t.remove())},t.createPaymentTable=function(){var e=document.getElementById("loanTable"),t=document.createElement("TABLE");t.setAttribute("id","calcTable"),t.setAttribute("class","table table-striped pt-5"),function(e){var t=document.createElement("THEAD");e.appendChild(t);var n=document.createElement("TR");t.appendChild(n),r(n,"Payment No"),r(n,"Amount"),r(n,"Interest Payed")}(t);var n=document.createElement("TBODY");t.appendChild(n);for(var a=this.loanAmount,i=1;i<=this.loanDuration;i++){var u=document.createElement("TR");n.appendChild(u);var l=this.countRemainingBalance(i),s=this.countInterestAmount(l,a);r(u,"".concat(i)),r(u,"".concat(s.toFixed(o.config.decimalPlaces))),r(u,"".concat(l.toFixed(o.config.decimalPlaces))),a=l}null==e||e.appendChild(t)}},336:function(e,t,n){var o,r=this&&this.__extends||(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(90),i=n(889),u=n(907),l=n(912),s=function(e){function t(t,n,o){void 0===o&&(o=i.config.fastLoanPerc);var r=e.call(this,t,n,o)||this;return r.isValidFastLoanFields=u.isValidFastLoanFields.bind(r),r}return r(t,e),t}(a.default);t.default=s;var c=document.getElementById("btnReadValues");null==c||c.addEventListener("click",(function(){var e,t=document.getElementById("loanAmount").value,n=document.getElementById("loanTerm").value,o=new s(Number(t),Number(n));(e=o.isValidFastLoanFields(this)).length===i.config.emptyArray?o.showTables():(0,l.showErrors)(e)}))},216:function(e,t,n){var o,r=this&&this.__extends||(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.countHousingLoan=void 0;var a=n(889),i=n(90),u=n(907),l=n(912),s=function(e){function t(t,n,o){void 0===o&&(o=a.config.housingLoanPerc);var r=e.call(this,t,n,o)||this;return r.isValidHousingLoanFields=u.isValidHousingLoanFields.bind(r),r.interest=o,r}return r(t,e),t.prototype.countMaxLoanAmount=function(e,t){return t/e*a.config.housingMinSalaryPerc},t.prototype.isExpectationOk=function(e,t){return!(e<t&&(alert("Your income is insufficient. Choose another period and loan amount"),1))},t}(i.default);t.default=s;var c=document.getElementById("btnReadHousingValues");function m(){var e,t=document.getElementById("loanAmount").value,n=document.getElementById("loanTerm").value,o=new s(Number(t),Number(n)),r=Number(document.getElementById("salary").value),i=Number(document.getElementById("numberOfMemebers").value);if((e=o.isValidHousingLoanFields(i,r)).length===a.config.emptyArray){var u=o.countMaxLoanAmount(i,r),c=o.countMonthPayment();o.isExpectationOk(u,c)&&o.showTables()}else(0,l.showErrors)(e)}null==c||c.addEventListener("click",m),t.countHousingLoan=m},90:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=n(889),r=n(636),a=n(171),i=n(912),u=function(){function e(e,t,n){this.removeTableIfExsist=function(){return(0,r.removeTableIfExsist)()},this.createPaymentTable=r.createPaymentTable.bind(this),this.createLoanInfo=a.createLoanInfo.bind(this),this.showTables=i.showTables.bind(this),this.loanAmount=e,this.loanDuration=t,this.interest=n,this.percentPerMonth=this.interest/o.config.totalPercentage/o.config.monthsPerYear,this.power=Math.pow(1+this.percentPerMonth,this.loanDuration)}return e.prototype.countMonthPayment=function(){return this.loanAmount*this.percentPerMonth*this.power/(this.power-1)},e.prototype.countTotalPayment=function(e){return e*this.loanDuration},e.prototype.countTotalInterest=function(e){return e-this.loanAmount},e.prototype.countRemainingBalance=function(e){var t=Math.pow(1+this.percentPerMonth,e);return this.loanAmount*(this.power-t)/(this.power-1)},e.prototype.countInterestAmount=function(e,t){return e-t+this.countMonthPayment()},e}();t.default=u},907:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isValidHousingLoanFields=t.isValidFastLoanFields=t.isValidConsumerFields=void 0;var o=n(889),r=n(506),a=[];function i(e,t){c(e,t==o.config.emptyField,r.errorStrings.loanAmountEmpty)}function u(e,t){c(e,t<o.config.negativeValue,r.errorStrings.negativeLoanValue)}function l(e,t){c(e,t<o.config.negativeValue,r.errorStrings.negativeDurationValue)}function s(e,t){c(e,t==o.config.emptyField,r.errorStrings.loanTermEmpty)}function c(e,t,n){return t&&e.push(n),e}t.isValidConsumerFields=function(){return c(a=[],null==this.interest,r.errorStrings.loanType),c(a,this.loanAmount>o.config.consumerLoanAmountLimit,r.errorStrings.loanAmountBigger),u(a,this.loanAmount),l(a,this.loanDuration),c(a,this.loanDuration>o.config.consumerLoanDurationLimit,r.errorStrings.loanDurationBigger),i(a,this.loanAmount),s(a,this.loanDuration),a},t.isValidFastLoanFields=function(){return c(a=[],this.loanAmount>o.config.fastLoanAmountLimit,r.errorStrings.fastLoanAmountLimit),c(a,this.loanDuration>o.config.fastLoanDurationLimit,r.errorStrings.fastLoanDurationLimit),u(a,this.loanAmount),l(a,this.loanDuration),i(a,this.loanAmount),s(a,this.loanDuration),a},t.isValidHousingLoanFields=function(e,t){return u(a=[],this.loanAmount),l(a,this.loanDuration),c(a,t<o.config.negativeValue,r.errorStrings.negativeSalaryValue),c(a,e<o.config.negativeValue,r.errorStrings.negativeMembersValue),c(a,this.loanDuration>o.config.housingLoanDurationLimit,r.errorStrings.housingLoanDurationLimit),s(a,this.loanDuration),i(a,this.loanAmount),c(a,t==o.config.emptyField,r.errorStrings.salaryEmpty),c(a,e==o.config.emptyField,r.errorStrings.membersNone),a}},912:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.showErrors=t.showTables=void 0;var o=n(202),r=n(636),a=n(889);t.showTables=function(){(0,o.removeErrorLabels)(),this.removeTableIfExsist(),this.createLoanInfo(),this.loanDuration>a.config.minDurationMonth&&this.createPaymentTable()},t.showErrors=function(e){(0,o.showFormErrors)(e),(0,r.removeTableIfExsist)()}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n(336),n(216),n(318)})();
//# sourceMappingURL=bundle.js.map