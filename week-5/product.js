/*
============================================
; Title: Assignment 5.2
; Author: Professor Krasso
; Date: 3 February 2022
; Modified By: Joel Hartung
; Description: product.js
; Code Attribution: Classes
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
; Code Attribution: Additional code from the Assignment 5 document
; Code Attribution: Additional code from the "WEB 330 HTML, CSS, and JavaScript Requirements" Document
;===========================================
*/

// Creates and exports the Product class
export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
}
