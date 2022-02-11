/*
============================================
; Title: Assignment 6.2
; Author: Professor Krasso
; Date: 9 February 2022
; Modified By: Joel Hartung
; Description: float-field.js
; Code Attribution: export
; URL: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
; Code Attribution: Classes
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
; Code Attribution: isNaN
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
; Code Attribution: Additional code from the Assignment 6 document
; Code Attribution: Additional code from the "WEB 330 HTML, CSS, and JavaScript Requirements" Document
;===========================================
*/

export class FloatField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    validate() {
        if (isNaN(this.field)) {
            return false;
        } else return true;
    }

    getMessage() {
        return `${this.name} must be a float value. You entered ${this.field}`;
    }
}
