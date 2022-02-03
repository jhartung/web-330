/*
============================================
; Title: Assignment 5.2
; Author: Professor Krasso
; Date: 3 February 2022
; Modified By: Joel Hartung
; Description: cart-component.js
; Code Attribution: Classes
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
; Code Attribution: Additional code from the Assignment 5 document
; Code Attribution: Additional code from the "WEB 330 HTML, CSS, and JavaScript Requirements" Document
;===========================================
*/

class CartComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)
        `;
    }
}

customElements.define("cart-component", CartComponent);
