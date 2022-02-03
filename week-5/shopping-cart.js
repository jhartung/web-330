/*
============================================
; Title: Assignment 5.2
; Author: Professor Krasso
; Date: 3 February 2022
; Modified By: Joel Hartung
; Description: shopping-cart.js
; Code Attribution: Classes
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
; Code Attribution: Iterators and Generators: 
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
; Code Attribution: Additional code from the Assignment 5 document
; Code Attribution: Additional code from the "WEB 330 HTML, CSS, and JavaScript Requirements" Document
;===========================================
*/

// Creates and exports the ShoppingCart class
export class ShoppingCart {
    constructor() {
        this.products = [];
    }

    // counts the number of products in the products array
    count() {
        return this.products.length;
    }

    // Adds products to the products array
    add(product) {
        this.products.push(product);
    }

    // iterator
    *[Symbol.iterator]() {
        for (let product of this.products) {
            yield product;
        }
    }
}
