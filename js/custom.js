//Photo Gallery
$('.photo_gallery').owlCarousel({
  autoplay: true,
  rewind: true,
  margin: 20,
  loop: false,
  dots: true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn', 
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  navText: [
      "<i class='fa fa-chevron-circle-left'></i>",
      "<i class='fa fa-chevron-circle-right '></i>"
  ],
  responsive: {
    0: {
      items: 1
    },
    415: {
      items: 2
    },
    
    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
});
//Clients
$('.clients').owlCarousel({
  autoplay: true,
  rewind: true,
  margin: 30,
  loop: false,
  dots: true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn', 
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  navText: [
      "<i class='fa fa-chevron-circle-left'></i>",
      "<i class='fa fa-chevron-circle-right '></i>"
  ],
  responsive: {
    0: {
      items: 1
    },
    415: {
      items: 2
    },
    
    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 5
    }
  }
});

//Partners Slider 1
jQuery(".our_board_member").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 10,
  nav: false,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 2000,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1
    },
  415: {
      items: 2
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
   1366: {
      items:5
    }
  }
});

  //testimonials
jQuery(".testimonial_slider").owlCarousel({
    autoplay: true,
    rewind: true,
    margin: 30,    
    loop: false,
    dots: true,
    responsiveClass: true,
    autoHeight: true,
    nav: true,
    navText: [
        "<i class='fa fa-chevron-circle-left'></i>",
        "<i class='fa fa-chevron-circle-right '></i>"
    ],
    responsive: {
      0: {
        items: 1
      },  
      600: {
        items: 1
      },
  
      1024: {
        items: 1
      },
  
      1366: {
        items: 1
      }
    }
  });


// Go to top
$(document).ready(function(){
  $(window).scroll(function () {
          if ($(this).scrollTop() > 50) {
              $('#back-to-top').fadeIn();
          } else {
              $('#back-to-top').fadeOut();
          }
      });
      // scroll body to 0px on click
      $('#back-to-top').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 400);
          return false;
      });
});

// Password show hide Open
$(document).ready(function () {
	$("#show_hide_password").on('click', function (event) {
		event.preventDefault();
		if ($('#show_hide_password input').attr("type") == "text") {
			$('#show_hide_password input').attr('type', 'password');
			$('#show_hide_password .show_pass').addClass("bi-eye-slash");
			$('#show_hide_password .show_pass').removeClass("bi-eye");
		} else if ($('#show_hide_password input').attr("type") == "password") {
			$('#show_hide_password input').attr('type', 'text');
      
			$('#show_hide_password .show_pass').removeClass("bi-eye-slash");
			$('#show_hide_password .show_pass').addClass("bi-eye");
		}
	});
});
// Password show hide End

// Initiate the wowjs
new WOW().init();