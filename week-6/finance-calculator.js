/*
============================================
; Title: Assignment 6.2
; Author: Professor Krasso
; Date: 9 February 2022
; Modified By: Joel Hartung
; Description: finance-calculator.js
; Code Attribution: export
; URL: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
; Code Attribution: Classes
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
; Code Attribution: Intl.NumberFormat
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
; Code Attribution: Additional code from the Assignment 6 document
; Code Attribution: Additional code from the "WEB 330 HTML, CSS, and JavaScript Requirements" Document
;===========================================
*/

export class FinanceCalculator {
    static MONTHS_IN_YEARS = 12;

    static calculateFutureValue(monthlyPayment, rate, years) {
        let months = years * this.MONTHS_IN_YEARS;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * months;
        let futureValue = presentValue * Math.pow(interestRate, months);
        return futureValue.toFixed(2);
    }

    static convertToCurrency(field) {
        let currencyFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
        return currencyFormatter.format(field);
    }
}
