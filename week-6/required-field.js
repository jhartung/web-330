/*
============================================
; Title: Assignment 6.2
; Author: Professor Krasso
; Date: 9 February 2022
; Modified By: Joel Hartung
; Description: required-field.js
; Code Attribution: export
; URL: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
; Code Attribution: Classes
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
; Code Attribution: Boolean
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
; Code Attribution: Additional code from the Assignment 6 document
; Code Attribution: Additional code from the "WEB 330 HTML, CSS, and JavaScript Requirements" Document
;===========================================
*/

export class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
    validate() {
        return Boolean(this.field);
    }
    getMessage() {
        return `${this.name} is a required field`;
    }
}
