/*
============================================
; Title: Assignment 5.2
; Author: Professor Krasso
; Date: 3 February 2022
; Modified By: Joel Hartung
; Description: shopping-cart.js
; Code Attribution: Classes
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
; Code Attribution: Additional code from the Assignment 5 document
; Code Attribution: Additional code from the "WEB 330 HTML, CSS, and JavaScript Requirements" Document
;===========================================
*/

export class ShoppingCart {
    constructor() {
        this.products = [];
    }

    count() {
        return this.products.length;
    }

    add(product) {
        this.products.push(product);
    }

    *[Symbol.iterator]() {
        for (let product of this.products) {
            yield product;
        }
    }
}
