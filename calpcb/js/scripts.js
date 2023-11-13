/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$(document).ready(function () {
    var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
  );
  if (window.matchMedia("(min-width: 576px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
      wrap: false
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 3) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 1) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }
});
 

$(document).ready(function () {
    var mySwiper = new Swiper(".swiper", {
      autoHeight: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      speed: 500,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
      },
      loop: false,
      effect: "slide",
      spaceBetween: 30,
      on: {
        init: function () {
          $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
          $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
        },
        slideChangeTransitionStart: function () {
          $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
          $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
        }
      }
    });
    $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
      mySwiper.slideTo($(this).index());
      $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
      $(this).addClass("active");
    });
  });
  
  