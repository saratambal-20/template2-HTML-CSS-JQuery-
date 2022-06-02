$(function () {
  "use strict";
  var myheader = $(".header");
  myheader.height($(window).height());
  $(window).resize(function () {
    myheader.height($(window).height());
  });
  $('.banner').harper({
    debug: false,
    duration: 10000
  });
  $(".links li a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });

  $(".links li a").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top,
      },
      1000
    );
  });
  (function autoSlider() {
    $(".slider .active").each(function () {
      if (!$(this).is(":last-child")) {
        $(this)
          .delay(1000)
          .fadeOut(1000, function () {
            $(this).removeClass("active").next().addClass("active").fadeIn();
            autoSlider();
          });
      } else {
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this).removeClass("active");
            $(".slider div").eq(0).addClass("active").fadeIn();
            autoSlider();
          });
      }
    });
  })();
  mixitup("#container");
  $(".shuffle li").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
  });
  $("html").niceScroll({
    cursorcolor: "#1abc9c",
    cursorwidth: "10px",
    zindex: "9999",
    cursorborder: "1px solid #1abc9c",
  });
  $("#menu-bar").click(function () {
$(".navbar ul").toggleClass("active");
  });

});


