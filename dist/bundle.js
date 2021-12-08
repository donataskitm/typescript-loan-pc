(()=>{"use strict";var e={889:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=void 0,t.config={consumerLoanAmountLimit:1e4,consumerLoanDurationLimit:60,fastLoanAmountLimit:5e3,fastLoanDurationLimit:24,housingLoanDurationLimit:360,housingMinSalaryPerc:.4,housingLoanPerc:2,fastLoanPerc:20,emptyField:0,emptyArray:0,negativeValue:0,monthsPerYear:12,totalPercentage:100,decimalPlaces:2,numberActiveUrl:0}},506:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.errorStrings=void 0,t.errorStrings={loanAmountEmpty:"Please fill amount field",loanTermEmpty:"Please fill term field",loanType:"Please pick up a loan type from the list",negativeLoanValue:"Plese ener positive value",loanAmountBigger:"Loan amount can not exceed `${config.consumerLoanAmountLimit}`",loanDurationBigger:"Laon duration can notexceed `${config.consumerLoanDurationLimit}`",salaryEmpty:"Please fill salary field",membersNone:"Please fill family members field"}},718:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.interestList=void 0,t.interestList={"Car loan":7,"Electric equipment loan":10,"House renovation loan":5}},318:function(e,t,n){var o,r=this&&this.__extends||(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.countConsumerLoan=void 0;var a=n(90),i=n(907),l=n(912),u=n(718),s=n(889),c=n(978),d=function(e){function t(t,n,o){var r=e.call(this,t,n,o)||this;return r.isValidConsumerFields=i.isValidConsumerFields.bind(r),r.interest=o,r}return r(t,e),t}(a.default);t.default=d;var m=document.getElementById("btnConsumerLoanValues");function f(){var e,t=Number(document.getElementById("loanAmount").value),n=Number(document.getElementById("loanTerm").value),o=document.getElementById("loanType").value,r=new d(t,n,u.interestList[o]);(e=r.isValidConsumerFields(this)).length===s.config.emptyArray?r.showTables():(0,l.showErrors)(e)}null==m||m.addEventListener("click",f),window.addEventListener("load",(function(e){document.URL.indexOf("consumer-loan.html")>s.config.numberActiveUrl&&(0,c.loadConsumerListBoxItems)()})),t.countConsumerLoan=f},978:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.loadConsumerListBoxItems=void 0;var o=n(718);t.loadConsumerListBoxItems=function(){var e=document.getElementById("loanType"),t=document.createElement("OPTION");for(var n in t.innerHTML="Select loan type",e.appendChild(t),o.interestList){var r=document.createElement("OPTION");r.innerHTML="".concat(n),e.appendChild(r)}}},202:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.removeErrorLabels=t.showFormErrors=void 0;var o=n(506);function r(){var e;document.getElementById("error-group")&&(null===(e=document.getElementById("error-group"))||void 0===e||e.remove())}t.showFormErrors=function(e){var t=document.getElementById("errors"),n=document.createElement("UL");n.setAttribute("id","error-group"),r();for(var a=0;a<e.length;a++){var i=document.createElement("LI");i.appendChild(document.createTextNode(o.errorStrings[e[a]])),n.appendChild(i),t.appendChild(n)}},t.removeErrorLabels=r},171:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createLoanInfo=void 0;var o=n(889);function r(e,t){var n=document.createElement("LI");n.setAttribute("class","list-group-item"),n.appendChild(document.createTextNode("".concat(t))),e.appendChild(n)}t.createLoanInfo=function(){var e=document.getElementById("loanInfo"),t=document.createElement("UL");t.setAttribute("class","list-group"),t.setAttribute("id","calcUl"),null==e||e.appendChild(t);var n=this.countMonthPayment(),a=this.countTotalPayment(n),i=this.countTotalInterest(a);r(t,"Deal amount: ".concat(this.loanAmount," eur")),r(t,"Deal term: ".concat(this.loanDuration," months")),r(t,"Deal interest: ".concat(this.interest,"% per year")),r(t,"Monthly return payment: ".concat(n.toFixed(o.config.decimalPlaces)," eur")),r(t,"Total interest: ".concat(i.toFixed(o.config.decimalPlaces)," eur")),r(t,"Total payment: ".concat(a.toFixed(o.config.decimalPlaces)," eur"))}},636:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createPaymentTable=t.removeTableIfExsist=void 0;var o=n(889);function r(e,t){var n=document.createElement("TH");n.appendChild(document.createTextNode("".concat(t))),e.appendChild(n)}t.removeTableIfExsist=function(){var e,t;document.getElementById("calcTable")&&(null===(e=document.getElementById("calcTable"))||void 0===e||e.remove()),document.getElementById("calcUl")&&(null===(t=document.getElementById("calcUl"))||void 0===t||t.remove())},t.createPaymentTable=function(){var e=document.getElementById("loanTable"),t=document.createElement("TABLE");t.setAttribute("id","calcTable"),t.setAttribute("class","table table-striped pt-5"),function(e){var t=document.createElement("THEAD");e.appendChild(t);var n=document.createElement("TR");t.appendChild(n),r(n,"Payment No"),r(n,"Amount"),r(n,"Interest Payed")}(t);var n=document.createElement("TBODY");t.appendChild(n);for(var a=this.loanAmount,i=1;i<=this.loanDuration;i++){var l=document.createElement("TR");n.appendChild(l);var u=this.countRemainingBalance(i),s=this.countInterestAmount(u,a);r(l,"".concat(i)),r(l,"".concat(s.toFixed(o.config.decimalPlaces))),r(l,"".concat(u.toFixed(o.config.decimalPlaces))),a=u}null==e||e.appendChild(t)}},336:function(e,t,n){var o,r=this&&this.__extends||(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(90),i=n(889),l=n(907),u=n(912),s=function(e){function t(t,n,o){void 0===o&&(o=i.config.fastLoanPerc);var r=e.call(this,t,n,o)||this;return r.isValidFastLoanFields=l.isValidFastLoanFields.bind(r),r}return r(t,e),t}(a.default);t.default=s;var c=document.getElementById("btnReadValues");null==c||c.addEventListener("click",(function(){var e,t=document.getElementById("loanAmount").value,n=document.getElementById("loanTerm").value,o=new s(Number(t),Number(n));(e=o.isValidFastLoanFields(this)).length===i.config.emptyArray?o.showTables():(0,u.showErrors)(e)}))},216:function(e,t,n){var o,r=this&&this.__extends||(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.countHousingLoan=void 0;var a=n(889),i=n(90),l=n(907),u=n(912),s=function(e){function t(t,n,o){void 0===o&&(o=a.config.housingLoanPerc);var r=e.call(this,t,n,o)||this;return r.isValidHousingLoanFields=l.isValidHousingLoanFields.bind(r),r.interest=o,r}return r(t,e),t.prototype.countMaxLoanAmount=function(e,t){return t/e*a.config.housingMinSalaryPerc},t.prototype.isExpectationOk=function(e,t){return!(e<t&&(alert("Your income is insufficient. Choose another period and loan amount"),1))},t}(i.default);t.default=s;var c=document.getElementById("btnReadHousingValues");function d(){var e,t=document.getElementById("loanAmount").value,n=document.getElementById("loanTerm").value,o=new s(Number(t),Number(n)),r=Number(document.getElementById("salary").value),i=Number(document.getElementById("numberOfMemebers").value);if((e=o.isValidHousingLoanFields(this)).length===a.config.emptyArray){var l=o.countMaxLoanAmount(i,r),c=o.countMonthPayment();o.isExpectationOk(l,c)&&o.showTables()}else(0,u.showErrors)(e)}null==c||c.addEventListener("click",d),t.countHousingLoan=d},90:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=n(889),r=n(636),a=n(171),i=n(912),l=function(){function e(e,t,n){this.removeTableIfExsist=function(){return(0,r.removeTableIfExsist)()},this.createPaymentTable=r.createPaymentTable.bind(this),this.createLoanInfo=a.createLoanInfo.bind(this),this.showTables=i.showTables.bind(this),this.loanAmount=e,this.loanDuration=t,this.interest=n,this.percentPerMonth=this.interest/o.config.totalPercentage/o.config.monthsPerYear,this.power=Math.pow(1+this.percentPerMonth,this.loanDuration)}return e.prototype.countMonthPayment=function(){return this.loanAmount*this.percentPerMonth*this.power/(this.power-1)},e.prototype.countTotalPayment=function(e){return e*this.loanDuration},e.prototype.countTotalInterest=function(e){return e-this.loanAmount},e.prototype.countRemainingBalance=function(e){var t=Math.pow(1+this.percentPerMonth,e);return this.loanAmount*(this.power-t)/(this.power-1)},e.prototype.countInterestAmount=function(e,t){return e-t+this.countMonthPayment()},e}();t.default=l},907:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isValidHousingLoanFields=t.isValidFastLoanFields=t.isValidConsumerFields=void 0;var o=n(889),r=[];function a(e,t){l(e,t==o.config.emptyField,"loanAmountEmpty")}function i(e,t){l(e,t==o.config.emptyField,"loanTermEmpty")}function l(e,t,n){return t&&e.push(n),e}t.isValidConsumerFields=function(){return l(r=[],null==this.interest,"loanType"),l(r,this.loanAmount>o.config.consumerLoanAmountLimit,"loanAmountBigger"),l(r,this.loanAmount<o.config.negativeValue,"negativeLoanValue"),l(r,this.loanDuration>o.config.consumerLoanDurationLimit,"loanDurationBigger"),a(r,this.loanAmount),i(r,this.loanDuration),r},t.isValidFastLoanFields=function(){return l(r=[],this.loanAmount>o.config.fastLoanAmountLimit,"loanAmountBigger"),l(r,this.loanDuration>o.config.fastLoanDurationLimit,"loanDurationBigger"),a(r,this.loanAmount),i(r,this.loanDuration),r},t.isValidHousingLoanFields=function(e,t){return l(r=[],this.loanAmount<=o.config.negativeValue,"negativeLoanValue"),l(r,this.loanDuration>o.config.housingLoanDurationLimit,"loanDurationBigger"),i(r,this.loanDuration),l(r,e==o.config.emptyField,"salaryEmpty"),l(r,t==o.config.emptyField,"membersNone"),r}},912:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.showErrors=t.showTables=void 0;var o=n(202),r=n(636);t.showTables=function(){(0,o.removeErrorLabels)(),this.removeTableIfExsist(),this.createLoanInfo(),this.createPaymentTable()},t.showErrors=function(e){(0,o.showFormErrors)(e),(0,r.removeTableIfExsist)()}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n(336),n(216),n(318)})();
//# sourceMappingURL=bundle.js.map