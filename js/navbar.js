// JavaScript Document

// Navbar Toggler
function navMenu() {
	var navToggler = document.getElementById("navbar-toggler");
	var navHeight = document.getElementById("nav-items");
	
	navToggler.classList.toggle("navbar-toggler-btn-x");
	navHeight.classList.toggle("nav-items-height");
}

// Navbar sticky function
window.onscroll = function() {navFixed()};

var navHeader = document.getElementById("navbar");
var navSticky = navHeader.offsetTop;

function navFixed() {
	if (window.pageYOffset > navSticky) {
		navHeader.classList.add("navbar-sticky");
	} else {
		navHeader.classList.remove("navbar-sticky");
	}
}