$(window).mousemove(function (e) {
  $(".ring").css(
    "transform",
    `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
  );
});
AOS.init();
document.addEventListener("DOMContentLoaded", function () {
  // Hide the preloader when all images are loaded
  window.addEventListener("load", function () {
    document.querySelector(".preloader").style.opacity = 0;
    setTimeout(function () {
      document.querySelector(".preloader").style.display = "none";
    }, 600); // Adjust the delay as needed
  });
});
(function ($) {
  "use strict";

  // NAVBAR
  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // REVIEWS CAROUSEL
  $(".reviews-carousel").owlCarousel({
    center: true,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 300,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 100,
      },
      1280: {
        items: 2,
        margin: 100,
      },
    },
  });

  // Banner Carousel
  var myCarousel = document.querySelector("#myCarousel");
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1500,
  });

  // REVIEWS NAVIGATION
  function ReviewsNavResize() {
    $(".navbar").scrollspy({ offset: -94 });

    var ReviewsOwlItem = $(".reviews-carousel .owl-item").width();

    $(".reviews-carousel .owl-nav").css({ width: ReviewsOwlItem + "px" });
  }

  $(window).on("resize", ReviewsNavResize);
  $(document).on("ready", ReviewsNavResize);

  // HREF LINKS
  $('a[href*="#"]').click(function (event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 74,
          },
          1000
        );
      }
    }
  });
})(window.jQuery);
