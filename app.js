/*
targeting the id 'menu' in the html code. 
targeting #mobile-menu
*/ 
const menu = document.querySelector('#mobile-menu');

/*now we are going to target the nav bar uls (the children)
targeting a class (.navbar__menu) which is why we need the dot operator
*/
const menuLinks = document.querySelector('.navbar__menu');

const navLogo = document.querySelector('#navbar__logo');

/* now we can actually toggle this. 
Display mobile menu via function which adds a class that is active*/
const mobileMenuFunction = () => {
    /* .toggle: active, not active, active, not active... */
    menu.classList.toggle('is-active')
    /* when I click the menu icon, I want it to toggle these two classes here */
    menuLinks.classList.toggle('active')
};

/* how do we even toggle the classes is active and active?
you need an event listener */
menu.addEventListener('click', mobileMenuFunction)

// Show active menu when scrolling
// This function accesses the ids in the html in the navbar section
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);
    // Adds the 'highlight' class to my menu items
    /* first if statement makes this class only work on the desktop
        the second part makes the switch happen between pages
    */
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// CLose mobile menu when clicking on an item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)