//@prepros-append burger.js
//@prepros-append slider.js

$('.menu-btn').on('click', function (e) {
	e.preventDefault();
	$('.menu').toggleClass('menu_active');
	$('.content').toggleClass('content_active');
})
new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	grabCursor: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	mousewheel: {
		sensitivity: 1,
		eventsTarget: ".image-slider"
	},
	autoHeight: true,
	loop: true,
	speed: 800,
});
