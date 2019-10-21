// JavaScript Document

// Back to Top Scroll
function backToTop() {
	window.scrollTo({top: 0, behavior: 'smooth'});
}

// To Section Scroll Smooth
const navLinks = document.querySelectorAll(".nav-links");

var i;

for (i = 0; i < navLinks.length; i++) {
	const href = navLinks[i].getAttribute("href");
	const section = document.querySelector(href);
	const offset = 60;
	
	navLinks[i].onclick = function(navClick) {
		const bodyRect = document.body.getBoundingClientRect().top;
		const sectionRect = section.getBoundingClientRect().top;
		const sectionPosition = sectionRect - bodyRect;
		const offsetPosition = sectionPosition - offset;
		
		navClick.preventDefault();
		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		});
	}
}


// Navbar Link Active on Section
let mainNavLinks = document.querySelectorAll(".nav-links");
window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
	
  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop - 60 <= fromTop &&
      section.offsetTop + section.offsetHeight - 60 > fromTop
    ) {
      link.classList.add("nav-links-active");
    } else {
      link.classList.remove("nav-links-active");
    }
  });
});