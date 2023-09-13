let toggle = document.querySelector(".menu-btn");
toggle.addEventListener("click", function (e) {
	let body = document.querySelector("body");
	body.classList.toggle("opened");
});

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	freeMode: true,
	cssMode: true,
	mousewheel: true,
    keyboard: true,
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	breakpoints: {
		320: {
		  slidesPerView: 1,
		  spaceBetween: 30,
		},
		614:{
		  slidesPerView: 2,
		  spaceBetween: 30,
		},
		768: {
		  slidesPerView: 2,
		  spaceBetween: 30,
		},
		1024: {
		  slidesPerView: 3,
		},
		1399: {
		  slidesPerView: 3,
		  spaceBetween: 40,
		},
		1440: {
		  slidesPerView: 3,
		  spaceBetween: 40,
		},
	  },
  });
