/*
============================================
; Title: Assignment 3.2
; Author: Professor Krasso
; Date: 20 January 2022
; Modified By: Joel Hartung
; Description: Restaurant App
; Code Attribution:Classes
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
; Code Attribution: Additional code from the Assignment 3 - Restaurant App document
; Code Attribution: Additional code from the "WEB 330 HTML, CSS, and JavaScript Requirements" Document
;===========================================
*/
import { Product } from "./product.js";

export class MainCourse extends Product {
    constructor(name, price) {
        super(name, price);
    }
}
