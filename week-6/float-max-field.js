/*
============================================
; Title: Assignment 6.2
; Author: Professor Krasso
; Date: 9 February 2022
; Modified By: Joel Hartung
; Description: float-max-field.js
; Code Attribution: export
; URL: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
; Code Attribution: Classes
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
; Code Attribution: parseFloat
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
; Code Attribution: Additional code from the Assignment 6 document
; Code Attribution: Additional code from the "WEB 330 HTML, CSS, and JavaScript Requirements" Document
;===========================================
*/

export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }

    validate() {
        if (parseFloat(this.field) < this.max) {
            return true;
        } else return false;
    }

    getMessage() {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
    }
}
