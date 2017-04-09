$('a[href*="#"]:not([href="#"])').click(function() {
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
			        $('html, body').animate({
			          scrollTop: target.offset().top
			        }, 1000);
			        return false;
			      }
			    }
			  });

  			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.scroll-top').fadeIn();
				} else {
					$('.scroll-top').fadeOut();
				}

				//Click event to scroll to top
			$('.scroll-top').click(function(){
				$('html, body').animate({scrollTop : 0},800);
				return false;
				});
			});
			$(function() {
				$("nav a").click(function() {
				  // remove classes from all
				  $("nav a").removeClass("active");
				  // add class to the one we clicked
				  $(this).addClass("active");
				  // stop the page from jumping to the top
				  return false;
				});
			});

