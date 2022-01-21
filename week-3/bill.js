/*
============================================
; Title: Assignment 3.2
; Author: Professor Krasso
; Date: 20 January 2022
; Modified By: Joel Hartung
; Description: Restaurant App
; Code Attribution: JavaScript Array forEach()
; URL: https://www.w3schools.com/jsref/jsref_foreach.asp
; Code Attribution: JavaScript Array Push
; URL: https://www.w3schools.com/jsref/jsref_push.asp
; Code Attribution: Parse Float
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
; Code Attribution: JavaScript Number toFixed()
; URL: https://www.w3schools.com/jsref/jsref_tofixed.asp
; Code Attribution: Additional code from the Assignment 3 - Restaurant App document
; Code Attribution: Additional code from the "WEB 330 HTML, CSS, and JavaScript Requirements" Document
;===========================================
*/

export class Bill {
    _beverages = [];
    _appetizers = [];
    _mainCourses = [];
    _desserts = [];

    addBeverage(beverage) {
        this._beverages.push(beverage);
    }

    addAppetizer(appetizer) {
        this._appetizers.push(appetizer);
    }

    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse);
    }

    addDessert(dessert) {
        this._desserts.push(dessert);
    }

    getTotal() {
        let total = 0;

        this._beverages.forEach(function (beverage) {
            total += parseFloat(beverage.price);
        });

        this._appetizers.forEach(function (appetizer) {
            total += parseFloat(appetizer.price);
        });

        this._mainCourses.forEach(function (mainCourse) {
            total += parseFloat(mainCourse.price);
        });

        this._desserts.forEach(function (dessert) {
            total += parseFloat(dessert.price);
        });

        return total.toFixed(2);
    }
}
