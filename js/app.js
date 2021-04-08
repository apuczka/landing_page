/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const navList = document.getElementById('navbar__list');

const section = Array.from(document.getElementsByTagName("section"));


// Create a list item

let i = 0;
for (let item of section) {
    const el = document.createElement("a");

    el.innerText = "Section " + (i + 1);
    el.classList.add("menu-items");
    const li = document.createElement("li")
    li.appendChild(el);
    navList.appendChild(li);
    li.style.backgroundColor = 'black'
    i++;

    // smoothScroll to section on link click
    el.addEventListener("click", ()=> {
        item.scrollIntoView({behavior: "smooth"})
        console.log("click")

    });
}


// Add class 'active' to section when near top of viewport

const activeHeader = document.getElementsByClassName("menu-items");
const activeSection = document.getElementsByClassName("landing__container");
for (let i = 0; i < activeHeader.length; i++) {
    activeHeader[i].addEventListener("click", function() {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(" active", "");

        this.className += " active";
    });
}









