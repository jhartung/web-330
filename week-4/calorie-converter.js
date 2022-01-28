/*
============================================
; Title: Assignment 4.2
; Author: Professor Krasso
; Date: 26 January 2022
; Modified By: Joel Hartung
; Description: calorie-converter.js
; Code Attribution: Classes
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
; Code Attribution: static
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
; Code Attribution: JavaScript Array Find
; URL: https://www.w3schools.com/jsref/jsref_find.asp
; Code Attribution: Additional code from the Assignment 4 document
; Code Attribution: Additional code from the "WEB 330 HTML, CSS, and JavaScript Requirements" Document
;===========================================
*/

import { FoodModel } from "./food-model.js";

export class CalorieConverter {
    static data = [new FoodModel(1007, "Egg", 78), new FoodModel(1008, "Apple", 95), new FoodModel(1009, "Hamburger", 354), new FoodModel(1010, "Fries", 400), new FoodModel(1011, "Banana", 105), new FoodModel(1012, "Soda", 150)];

    static find(str) {
        return this.data.filter((data) => {
            if (str.includes(data.name.toLowerCase())) {
                console.log(data);
                return data;
            }
        });
    }
}
