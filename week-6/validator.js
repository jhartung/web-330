/*
============================================
; Title: Assignment 6.2
; Author: Professor Krasso
; Date: 9 February 2022
; Modified By: Joel Hartung
; Description: validator.js
; Code Attribution: import
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
; Code Attribution: Classes
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
; Code Attribution: Additional code from the Assignment 6 document
; Code Attribution: Additional code from the "WEB 330 HTML, CSS, and JavaScript Requirements" Document
;===========================================
*/

import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator {
    validators = [];
    messages = [];

    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    addRequiredField() {
        this.validators.push(new RequiredField(this.name, this.field));
    }

    addRequiredFloatField() {
        this.validators.push(new FloatField(this.name, this.field));
    }

    addFloatMinField(min) {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }

    addFloatMaxField(max) {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }

    validate() {
        for (let valid of this.validators) {
            if (!valid.validate()) {
                this.messages.push(valid.getMessage());
                return false;
            }
        }
        return true;
    }
}
