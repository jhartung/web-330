/*
============================================
; Title: Assignment 1.3
; Author: Professor Krasso
; Date: 5 January 2022
; Modified By: Joel Hartung
; Description: This is the theme JavaScript file for assignments in WEB 330
;===========================================
*/

// this function sets the default theme to Light Theme
function setDefaultTheme() {
  const theme = localStorage.getItem("mode") || "light-theme";
  const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
  const iconText = localStorage.getItem("iconText") || "Light Mode";

  document.body.classList.value = theme;
  document.getElementById("icon-mode").classList.add(iconMode);
  document.getElementById("icon-text").innerHTML = iconText;
  }

// this function sets the theme to the user selected theme
function setSelectedTheme() {
  document.body.classList.value = localStorage.getItem("mode") || "light-theme";
  }
