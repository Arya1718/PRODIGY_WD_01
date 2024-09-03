// script.js

window.onscroll = function() {
    changeNavbarStyle();
};

function changeNavbarStyle() {
    var navbar = document.getElementById("navbar");

    // Check if the page is scrolled more than 50px
    if (window.pageYOffset > 50) {
        navbar.style.backgroundColor = "#222"; // Darker background color
    } else {
        navbar.style.backgroundColor = "#333"; // Original background color
    }
}
