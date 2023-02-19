const swiper = new Swiper('.swiper', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	centeredSlides: true,
	autoHeight: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});