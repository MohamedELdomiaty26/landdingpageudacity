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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let eachElemContent = "";
const sections = document.querySelectorAll('section');
const theUlList = document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createNavBar() {
    sections.forEach(function (section) {
        let eachElemContent = document.createElement("li");
        eachElemContent.innerHTML = `<a class="nav__link menu__link"data-nav="${section.id}" href="#${section.id}">${section.dataset.nav}</a>`;
        theUlList.appendChild(eachElemContent);
    });
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createNavBar()
// Add class 'active' to section when near top of viewport
function addActClass(actSec) {
    const id = actSec.getAttribute('id');
    document.querySelector(`#${id}`).classList.add('your-active-class');
}
function delActClass(actSec) {
    const id = actSec.getAttribute('id');
    document.querySelector(`#${id}`).classList.remove('your-active-class');
}
// Set sections as active and highlight it
document.onscroll = function () {
    sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 200 && section.getBoundingClientRect().bottom >= 200) {
            addActClass(section);
        } else {
            delActClass(section);
        }
    });
}
/**
 * End Main Functions
 * Begin Events
 * 
*/
/**
* Scroll to section on link click
* (by using arrow function) by click on any section,scroll to view 
*/
theUlList.addEventListener("click", function (clickConsequence) {
    clickConsequence.preventDefault();
    document.getElementById(clickConsequence.target.dataset.nav).scrollIntoView({ behavior: "smooth" });
})
//back to top button
const div = document.querySelector(".up");
window.onscroll = function () {
    //if user scroll to more or equal 600 the "Up To Top" button show on the page
    if (this.scrollY >= 600) {
        div.classList.add("show");
    } else {
        div.classList.remove("show");
    }
};
//if user click the "Up To Top" button, browser take him to the page top smoothly
div.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
};

//highlight the active section in nav bar

// select elements in bav bar by by their tag names 
const sectionHighlight = document.getElementsByTagName("a");
//put them in array to loop over them
let sectionsArray = Array.from(sectionHighlight);
// when user click on any section in nav bar it start looping over each element
sectionsArray.forEach((elem) => {
    elem.addEventListener("click", function (event) {
        sectionsArray.forEach((elem) => {
            //removing the active class from the other sections in nav bar
            elem.classList.remove("active");
        });
        // Adding the active class to the section clicked in nav bar
        event.currentTarget.classList.add("active");
    });
});