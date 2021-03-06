/*
============================================
; Title: Assignment 8.2
; Author: Professor Krasso
; Date: 24 February 2022
; Modified By: Joel Hartung
; Description: WhatABook, Part 2
; Code Attribution: async function
; URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
; Code Attribution: Additional code from the Assignment 8 document
; Code Attribution: Additional code from the "WEB 330 HTML, CSS, and JavaScript Requirements" Document
;===========================================
*/

// creates and exports HttpClient class
export class HttpClient {
        async get(url, params="") {
                    
            url = new URL(url)

            url.search = new URLSearchParams(params);

            const res = await fetch(url.toString(), {
            method: "GET",
            });

            return res.json(); // returns json object
        }
    }

