"use strict";
import { showHome } from "./content/showHome.js";
import { showMenu } from "./content/showMenu.js";
import { showHistory } from "./content/showHistory.js";

import "./styles.css";

console.log("webpack serve running");

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const historyBtn = document.getElementById("historyBtn");

const contentContainer = document.getElementById("content");

console.log([homeBtn, menuBtn, historyBtn, contentContainer]);

homeBtn.addEventListener("click", e => {
    handleTabButtons(e.target);
    contentContainer.innerHTML = showHome();
});

menuBtn.addEventListener("click", e => {
    handleTabButtons(e.target);
    contentContainer.innerHTML = showMenu();
});

historyBtn.addEventListener("click", e => {
    handleTabButtons(e.target);
    contentContainer.innerHTML = showHistory();
});

function handleTabButtons(target) {
    document.querySelectorAll("button").forEach(button => button.classList.remove("active")); // ok
    target.classList.add("active"); // ok
}
