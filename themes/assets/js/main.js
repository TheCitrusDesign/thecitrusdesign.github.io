/**
  * Template: Lea
  * Author: TheCitrusDesign
  * Version: 1.0
  * Design by: TheCitrusDesign
**/

(function ($) {

    "use strict";

    var $template = $(window),
		$loader = $('#loader-wrapper'),
        $leaMenu = $('.lea-wrap-header'),
        $countUp = $('.fact-box h5'),
        $otherFeaturesSlider = $('.other-features-slider'),
        $latestSlider = $('.latest-slider'),
        $testimonialSslider = $('.testimonial-slider'),
        $teamSlider = $('.team-slider'),
        $logosSlider = $('.logos-slider'),
        $recentPostSlider = $('.recent-post-slider'),
		$scrollTopArea = $("#scroll-top-area");


    $(document).ready(function () {
		
		/* PRELOADER
		/*==================================================*/
		$template.on('load', function () {
			$loader.delay(350).fadeOut('slow');
			AOS.refresh();
		});

		
		/* AOS INIT
		/*==================================================*/
        AOS.init({
            disable: 'mobile',
            once: true,
            duration: 500
        });


		/* STICKY MENU
		/*==================================================*/
        $template.scroll(function () {
            var currentLink = $(this);
            if ($(currentLink).scrollTop() > 500) {
                $leaMenu.addClass("sticky");
            } else {
                $leaMenu.removeClass("sticky");
            }
			 // "a:not([data-toggle])" - to avoid issues caused
			 // when you have dropdown inside navbar
			$(".navbar-collapse").on("click", "a:not([data-toggle])", null, function () {
				$(".navbar-collapse").collapse('hide');
			});			
        });

        
        /* MORE FEATURES SLIDER
		/*==================================================*/
        if ($otherFeaturesSlider.length > 0) {
            $otherFeaturesSlider.slick({
                centerMode: true,
                centerPadding: '150px',
                slidesToShow: 3,
				slidesToScroll: 1,
                infinite: false,
                focusOnSelect: true,
                arrows: false,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            centerPadding: '0',
                        }
                    },
                ]
            });
        }


        /* LATEST WORKS SLIDER
		/*==================================================*/
        if ($latestSlider.length > 0) {
            $latestSlider.slick({
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 3,
				slidesToScroll: 1,
                infinite: false,
                focusOnSelect: true,
                arrows: false,
				dots: false,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
							slidesToShow: 1,
                            centerPadding: '0',
                        }
                    },
                ]
            });
        }


        /* TESTIMONIAL SLIDER
		/*==================================================*/
        if ($testimonialSslider.length > 0) {
            $testimonialSslider.slick({
                centerPadding: '150px',
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                infinite: false,
                arrows: false,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            centerPadding: '0',
                        }
                    },
                ]
            });
        }
		

        /* FUN FACT COUNTUP
		/*==================================================*/
        $countUp.counterUp({
            delay: 10,
            time: 2000
        });


        /* TEAM SLIDER
		/*==================================================*/
        if ($teamSlider.length > 0) {
            $teamSlider.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
                infinite: false,
                arrows: false,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            });
        }


        /* LOGOS SLIDER
		/*==================================================*/
        if ($logosSlider.length > 0) {
            $logosSlider.slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                arrows: true,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            });
        }


        /* RECENT POST SLIDER
		/*==================================================*/
        if ($recentPostSlider.length > 0) {
            $recentPostSlider.slick({
                slidesToShow: 1,
				slidesToScroll: 1,
                dots: true,
                infinite: false,
                arrows: false,
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            });
        }
		
		
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

		
		/* SCROLLIT NAVIGATION PLUGIN
		/*==================================================*/		
		$.scrollIt({
			upKey: 38,              // key code to navigate to the next section
			downKey: 40,            // key code to navigate to the previous section
			easing: 'linear',       // the easing function for animation
			scrollTime: 600,        // how long (in ms) the animation takes
			activeClass: 'active',  // class given to the active nav element
			onPageChange: null,     // function(pageIndex) that is called when page is changed
			topOffset: 0            // offste (in px) for fixed top navigation
		});
		
		
		/* SCROLL TO ANCHOR ON PAGE CHANGE
		/*==================================================*/		
		$(function() {
			
			// If anchor is on the url (ex: index.html#about)
			if(window.location.hash) {
				AOS.refresh();
				// smooth scroll to the anchor id
				$('html, body').animate({
					scrollTop: $(window.location.hash).offset().top + 'px'
				}, 1000, 'swing');
				$loader.delay(350).fadeOut('slow');
			}

		});
				
		
		/* BUTTON EFFECT ANIMATION
		/*==================================================*/
		var animateButton = function(e) {

		  e.preventDefault;
		  //reset animation
		  e.target.classList.remove('animate');
		  
		  e.target.classList.add('animate');
		  setTimeout(function(){
			e.target.classList.remove('animate');
		  },700);
		};

		var bubblyButtons = document.getElementsByClassName("bubbly-button");

		for (var i = 0; i < bubblyButtons.length; i++) {
		  bubblyButtons[i].addEventListener('click', animateButton, false);
		}
		
		
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
			'buttonBgColor': '#ff4081',  
			   
			// Dismiss button text color
			'buttonTextColor': '#000000', 
				 
			// Notice background color
			'noticeBgColor': '#000000', 
				  
			// Notice text color
			'noticeTextColor': '#ffffff', 
			   
			// the lernMoreLink color (default='#009fdd') 
			'linkColor':'#f00'
          
		});
		
		
		/* ANIMATE SCROLL TOP BUTTON
		/*==================================================*/	
		$template.scroll(function() {
			var onTop = $template.scrollTop();
			onTop = onTop * 0.4;
			
            if (onTop < 500) {
                $scrollTopArea.css('display', 'none');
            } else if (onTop >= 500) {
				$scrollTopArea.css({
					"display": "block",
					"-moz-transform": "rotate(" + onTop + "deg)",
					"-webkit-transform": "rotate(" + onTop + "deg)",
					"-o-transform": "rotate(" + onTop + "deg)",
					"ms-transform": "rotate(" + onTop + "deg)",
					transform: "rotate(" + onTop + "deg)"
				});
            }
		});
						
    });

}(jQuery));