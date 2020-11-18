// Intro Slider

$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 4000,
		animateOut: 'fadeOut'
	});
});

// Call Us Block

$(document).ready(function () {
	$('.plus').click(function (event) {
		$('.call-us-block').addClass('active');
	});
	$('.call-us-close').click(function (event) {
		$('.call-us-block').removeClass('active');
	});
});

// Mobile Menu

$(document).ready(function () {
	$('.header-burger').click(function (event) {
		$('.header-burger, .mobile-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.mobile-nav-item').click(function (event) {
		$('.header-burger, .mobile-menu').removeClass('active');
		$('body').removeClass('lock');
	})
});

// Wow JS init

new WOW().init();
