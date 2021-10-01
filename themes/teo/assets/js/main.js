/*
* Template: Teo
* Author: TheCitrusDesign
* Version: 1.0
* Design by: TheCitrusDesign
*/

(function($) {

    "use strict";

    jQuery(document).on("ready", function() {

		 
		/* [ PRELOADER ] */
		/*==================================================*/

        var template = $(window);
        var pagebody = $('html, body');
		
        template.on("load", function() {
            var loaderWrapper = jQuery('#loader-wrapper');
            var loaderArea = jQuery('#loader');
            loaderWrapper.fadeOut();
            loaderArea.delay(200).fadeOut('slow');
            template.scrollTop(0);
        });


		/* [ SCROLLIT NAVIGATION PLUGIN ] */
		/*==================================================*/		
		$.scrollIt({
			upKey: 38,              // key code to navigate to the next section
			downKey: 40,            // key code to navigate to the previous section
			easing: 'linear',       // the easing function for animation
			scrollTime: 600,        // how long (in ms) the animation takes
			activeClass: 'current', // class given to the active nav element
			onPageChange: null,     // function(pageIndex) that is called when page is changed
			topOffset: 0            // offste (in px) for fixed top navigation
		});		


		/* SKILLS
		/*==================================================*/
        var skill = $('.skills');

		/* Skill 1 */
        var width1 = $(".prog1").data("progress");
        var progBar1 = $(".prog1");
        skill.waypoint(function() {
            progBar1.css({
                "width": width1,
                "transition": "2s ease-in"
            });
        }, { offset: width1 });

		/* Skill 2 */
        var width2 = $(".prog2").data("progress");
        var progBar2 = $(".prog2");
        skill.waypoint(function() {
            progBar2.css({
                "width": width2,
                "transition": "2s ease-in"
            });
        }, { offset: width2 });

		/* Skill 3 */
        var width3 = $(".prog3").data("progress");
        var progBar3 = $(".prog3");
        skill.waypoint(function() {
            progBar3.css({
                "width": width3,
                "transition": "2s ease-in"
            });
        }, { offset: width3 });
			
		/* Skill 4 */
        var width4 = $(".prog4").data("progress");
        var progBar4 = $(".prog4");
        skill.waypoint(function() {
            progBar4.css({
                "width": width4,
                "transition": "2s ease-in"
            });
        }, { offset: width4 });


		/* BUTTONS ANIMATION
		/*==================================================*/
			
		/* Service Btn */
		var serviceBtn = $(".service-btn");

        serviceBtn.on("click", function() {
            $('html, body').animate({
                scrollTop: ($("#portfolio").offset().top) - 60
            }, 2000);
        });
			
		/* Hire Btn */
        var hireBtn = $(".hire-btn");

		hireBtn.on("click", function() {
			$('html, body').animate({
				scrollTop: ($("#contact").offset().top) - 60
			}, 2000);
		});


		/* PERSONNAL DETAIL
		/*==================================================*/
		var personal = $('#personal-detail .nav .nav-item');

		personal.on("click", function(e) {
			e.preventDefault();
			e.stopImmediatePropagation();
			$(this).tab('show');
		});


		/* MOBILE NAV
		/*==================================================*/
		let burger = document.getElementById('burger'),
			nav	   = document.getElementById('main-nav');

		burger.addEventListener('click', function(e){
			e.preventDefault();
			this.classList.toggle('is-open');
			nav.classList.toggle('is-open');
		});
			
			
		/* MIX IT UP
		/*==================================================*/
        var portfolioContent = $('.portfolio-content');

        portfolioContent.mixItUp();


		/* LIGHTBOX
		/*==================================================*/
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            showImageNumberLabel: false,
        });


		/* MAILCHIMP
		/*==================================================*/
        var chimpForm = $('#mc-form');

        chimpForm.ajaxChimp({
			//Replace bellow url with your own mailchimp form post url inside the url: "---".
			//To learn how to get your own URL, please check documentation file.
            url: 'MY_OWN_MAILCHIMP_URL'
        });


		/* FORMS
		/*==================================================*/
		jQuery(document).ready(function ($) {
			$('.contact-form-area').dcSlickForms();
			$('.forms').dcSlickForms();
		});
		$(document).ready(function () {
			// Contact form
			$('.contact-form-area textarea').each(function () {
				if ($(this).val() === '') {
					$(this).val($(this).attr('title'));
				}

				$(this).focus(function () {
					if ($(this).val() == $(this).attr('title')) {
						$(this).val('').addClass('focused');
					}
				});
				$(this).blur(function () {
					if ($(this).val() === '') {
						$(this).val($(this).attr('title')).removeClass('focused');
					}
				});
			});
			// Comment form
			$('.comment-form input[title], .comment-form textarea, .forms textarea').each(function () {
				if ($(this).val() === '') {
					$(this).val($(this).attr('title'));
				}

				$(this).focus(function () {
					if ($(this).val() == $(this).attr('title')) {
						$(this).val('').addClass('focused');
					}
				});
				$(this).blur(function () {
					if ($(this).val() === '') {
						$(this).val($(this).attr('title')).removeClass('focused');
					}
				});
			});
		});




		/* TESTIMONIAL CAROUSEL
		/*==================================================*/
        var testimonial = $("#client-testimonial #owl-testimonial");

        testimonial.owlCarousel({
            autoplay: true,
            autoplayTimeout: 5000,
            items: 2,
            autoPlay: 6000,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1
                },
                // breakpoint from 480 up
                600: {
                    items: 1
                },
                // breakpoint from 768 up
                900: {
                    items: 1
                },
                1000: {
                    items: 3
                }
            },
            pauseOnHover: true,
            nav: true,
            dots: false,
            navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"]
        });


		/* COUNTER
		/*==================================================*/
        var count = $('.counter');
        count.counterUp({
            delay: 20,
            time: 40,
        });


		/* SERVICES CAROUSEL
		/*==================================================*/
        var serviceItem = $("#service #owl-service");

        serviceItem.owlCarousel({
            autoplay: true,
            autoplayTimeout: 5000,
            items: 3,
            autoPlay: 6000,
            responsive: {
                0: {
                    items: 1
                },
                // breakpoint from 480 up
                500: {
                    items: 2
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            },
            pauseOnHover: true,
            nav: true,
            dots: false,
            navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"]
        });


		/* TYPED PLUGIN
		/*==================================================*/
        if ($(".welcome-area").is(".animated-text")) {
			var typed = new Typed("#typed", {
				stringsElement: '#typed-strings',
				typeSpeed: 60,
				backSpeed: 30,
				startDelay: 1000,
				backDelay: 2000,
				loop: true
			});
		}
		
		
		/* SCROLL TOP
		/*==================================================*/
        var scrollTopBtn = $("#scroll-top-area");

        scrollTopBtn.on("click", function() {
            pagebody.animate({
                scrollTop: 0
            }, 800);
        });

        template.on("scroll", function() {
            var top = template.scrollTop();
			var myelt = document.getElementById('all_wrap');
            var header = $("header");
            var headerText = $("header nav ul li a");
			var headerTextHomeCurrent = $("header nav ul li a.home.current");
			var headerTextCurrent = $("header nav ul li a.current");
			var headerTextHover = $("header nav ul li a:hover");
			var currentColor = myelt.dataset.color;
            var logo = $(".logo img");
            var scrollTopArea = $("#scroll-top-area");
            var darkLogo = logo.data("dark");
            if (top < 150) {
                scrollTopArea.css('display', 'none');
                logo.attr("src", "assets/images/logoWhite.png");
                headerText.css('color', '#ffffff');
				headerTextHomeCurrent.css('color', currentColor);
				headerTextCurrent.css('color', currentColor);
				headerTextHover.css('color', currentColor);
                header.css({
                    'background': 'transparent',
                    'box-shadow': 'none',
                    'height': '100px',
                    'line-height': '100px'
                });
            } else if (top >= 150) {
                scrollTopArea.css('display', 'block');
                logo.attr("src", darkLogo);
                headerText.css('color', '#454545');
				headerTextHomeCurrent.css('color', currentColor);
				headerTextCurrent.css('color', currentColor);
				headerTextHover.css('color', currentColor);
                header.css({
                    'background': '#fff',
                    'box-shadow': '0px 1px 6px #484848',
                    'height': '80px',
                    'line-height': '80px'
                });
            }

        });
		
		
		/* COOKIE NOTICE
		/*==================================================*/
		new cookieNoticeJS({
			
			   // Localizations of the notice message
			   'messageLocales': {
				 'en': 'We use cookies to make sure you can have the best experience on our website. If you continue to use this site we assume that you will be happy with it.'
			   },
			  
			   // Localizations of the dismiss button text
			   'buttonLocales': {
				 'en': 'OK'
			   },
			   
			   // Position for the cookie-notifier (default=bottom)
			   'cookieNoticePosition':'bottom',
			   
			   // Shows the "learn more button (default=false)
			   'learnMoreLinkEnabled':false,
			   
			   // The href of the learn more link must be applied if (learnMoreLinkEnabled=true) 
			   'learnMoreLinkHref':'/learn/more/index.html',
			   
			   // Text for optional learn more button
			   'learnMoreLinkText':{
				   'en':'learn more'
			   },
			   
			   // The message will be shown again in X days
			   'expiresIn': 30, 
			   
			   // Dismiss button background color
			   'buttonBgColor': '#ffd600',  
			   
			   // Dismiss button text color
			   'buttonTextColor': '#000000', 
				 
			   // Notice background color
			   'noticeBgColor': '#000000', 
				  
			   // Notice text color
			   'noticeTextColor': '#ffffff', 
			   
			   // the lernMoreLink color (default='#009fdd') 
			   'linkColor':'#f00'
          
		});
		
    });

})(jQuery);