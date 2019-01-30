(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate({
            scrollTop: target.offset().top - 54
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $(".portfolio-modal").on("show.bs.modal", function (e) {
    $(".navbar").addClass("d-none");
  });
  $(".portfolio-modal").on("hidden.bs.modal", function (e) {
    $(".navbar").removeClass("d-none");
  });
})(jQuery); // End of use strict

// counter

$(document).ready(function () {
  $(".bhide").click(function () {
    $(".hideObj").slideDown();
    $(this).hide(); //.attr()
    return false;
  });
  $(".bhide2").click(function () {
    $(".container.hideObj2").slideDown();
    $(this).hide(); // .attr()
    return false;
  });

  $('.heart').mouseover(function () {
    $(this).find('i').removeClass('fa-heart-o').addClass('fa-heart');
  }).mouseout(function () {
    $(this).find('i').removeClass('fa-heart').addClass('fa-heart-o');
  });

  function sdf_FTS(_number, _decimal, _separator) {
    var decimal = (typeof (_decimal) != 'undefined') ? _decimal : 2;
    var separator = (typeof (_separator) != 'undefined') ? _separator : '';
    var r = parseFloat(_number)
    var exp10 = Math.pow(10, decimal);
    r = Math.round(r * exp10) / exp10;
    rr = Number(r).toFixed(decimal).toString().split('.');
    b = rr[0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "\$1" + separator);
    r = (rr[1] ? b + '.' + rr[1] : b);

    return r;
  }

  setTimeout(function () {
    $('#counter').text('0');
    $('#counter1').text('0');
    $('#counter2').text('0');
    setInterval(function () {

      var curval = parseInt($('#counter').text());
      var curval1 = parseInt($('#counter1').text().replace(' ', ''));
      var curval2 = parseInt($('#counter2').text());
      if (curval <= 349) {
        $('#counter').text(curval + 1);
      }
      if (curval1 <= 24) {
        $('#counter1').text(sdf_FTS((curval1 + 1), 0, ' '));
      }
      if (curval2 <= 449) {
        $('#counter2').text(curval2 + 1);
      }
    }, 100);

  }, 500);
});