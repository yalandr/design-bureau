// Intro Slider

$(document).ready(function(){
		  $(".owl-carousel").owlCarousel({
		  	items: 1,
		  	loop: true,
		  	autoplay: true,
		  	autoplayTimeout: 4000,
		  	animateOut: 'fadeOut'
		  });
		});

// Call Us Block

const plusButton = document.querySelector('.plus');
const closeButton = document.querySelector('.call-us-close');
const callUsBlock = document.querySelector('.call-us-block');

function callUsBlockOpen () {
	callUsBlock.style.left = '0';
	callUsBlock.style.opacity = '1';
}

function callUsBlockClose () {
	callUsBlock.style.left = '200vw';
	callUsBlock.style.opacity = '0';
}

plusButton.onclick = callUsBlockOpen;
closeButton.onclick = callUsBlockClose;

// Mobile Menu

const mobileMenu = document.querySelector('.mobile-menu');
const navItemMenu = document.querySelector('.nav-item-menu');
const menuClose = document.querySelector('.menu-close');

function mobileMenuOpen () {
	mobileMenu.style.opacity = '1';
	mobileMenu.style.top = '4rem';
	navItemMenu.style.display = 'none';
	menuClose.style.display = 'block';
}

function mobileMenuClose () {
	mobileMenu.style.opacity = '0';
	mobileMenu.style.top = '-30rem';
	navItemMenu.style.display = 'block';
	menuClose.style.display = 'none';
}

navItemMenu.onclick = mobileMenuOpen;
menuClose.onclick = mobileMenuClose;
