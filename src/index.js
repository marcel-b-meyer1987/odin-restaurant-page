"use strict";
import { showHome } from "./content/showHome.js";
import { showMenu } from "./content/showMenu.js";
import { showAbout } from "./content/showAbout.js";

import "./styles.css";

console.log("webpack serve running");

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");

const contentContainer = document.getElementById("content");

// console.log([homeBtn, menuBtn, aboutBtn, contentContainer]);

document.addEventListener("DOMContentLoaded", e => {
    if(navigator.maxTouchPoints === 0) {
        document.querySelectorAll("nav button").forEach(btn => btn.classList.add("hover-translate"));
    }

    homeBtn.addEventListener("click", e => {
        handleTabButtons(e.target);
        contentContainer.innerHTML = showHome();
    });

    menuBtn.addEventListener("click", e => {
        handleTabButtons(e.target);
        contentContainer.innerHTML = showMenu();

        if(navigator.maxTouchPoints === 0) {
            document.querySelectorAll("li").forEach(li => li.addEventListener("mouseenter", e => togglePizzaHover(e.target)));

            document.querySelectorAll("li").forEach(li => li.addEventListener("mouseleave", e => togglePizzaHover(e.target)));
        }
    });

    aboutBtn.addEventListener("click", e => {
        handleTabButtons(e.target);
        contentContainer.innerHTML = showAbout();
    });
});

function handleTabButtons(target) {
    document.querySelectorAll("button").forEach(button => button.classList.remove("active")); // ok
    target.classList.add("active"); // ok
}

function togglePizzaHover(li) {
    li.querySelector(".pizza-img-small").classList.toggle("pizza-hover");
    li.classList.toggle("emphasize-font");
}
