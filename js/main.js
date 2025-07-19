/** ===============

.. Preloader
.. header_search
.. Fixed-header
.. Menu
.. Number rotator
.. Skillbar
.. Tab
.. Accordion
.. Isotope
.. Prettyphoto
.. share-icon_btn
.. Slick_slider
.. Back to top 

 =============== */



jQuery(function($) {

    "use strict";

/*------------------------------------------------------------------------------*/
/* Preloader
/*------------------------------------------------------------------------------*/

    $(window).on("load",function(){
        $(".loader-blob").fadeOut(),$("#preloader").delay(300).fadeOut("slow",function(){$(this).remove()})
    });


/*------------------------------------------------------------------------------*/
/* header_search
/*------------------------------------------------------------------------------*/
            
    $(".header_search").each(function(){  
        $(".search_btn", this).on("click", function(e){
            e.preventDefault();
            $(".header_search_content").toggleClass("on");
        });

        $(".header_search_content_inner .close_btn").on("click", function(e){
            e.preventDefault();
            $(".header_search_content").removeClass("on");
        });  
    });

/*------------------------------------------------------------------------------*/
/* Fixed-header
/*------------------------------------------------------------------------------*/

    $(window).on("scroll",function(){
        if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) 
        {
            if ($(window).scrollTop() >= 50 ) {

                $('.header-navigation').addClass('fixed-header');
            }
            else {

                $('.header-navigation').removeClass('fixed-header');
            }
        }
    });


/*------------------------------------------------------------------------------*/
/* Menu
/*------------------------------------------------------------------------------*/
    var menu = {
        initialize: function() {
            this.Menuhover();
        },

        Menuhover : function(){
            var getNav = $("nav.nav-menu"),
                getWindow = $(window).width(),
                getHeight = $(window).height(),
                getIn = getNav.find("ul.menu").data("in"),
                getOut = getNav.find("ul.menu").data("out");
            
            if ( matchMedia( 'only screen and (max-width: 1920px)' ).matches ) {
                                                     
                // Enable click event
                $("nav.main-menu ul.menu").each(function(){
                    
                    // Dropdown Fade Toggle
                    $("a.mega-menu-link", this).on('click', function (e) {
                        var t = $(this);
                        t.toggleClass('active').next('ul').toggleClass('active');
                    });    
                }); 
            }
        },
    };
    
    $('.btn-show-menu-mobile').on('click', function(e) {
        $(this).toggleClass('is-active'); 
        $('.menu-mobile').toggleClass('show').delay( 600 ).fadeIn( 300 ); 
        return false;
        e.preventDefault();  
    });

    // Initialize
    $(document).ready(function() {
        menu.initialize();
    });


/*------------------------------------------------------------------------------*/
/* Tab
/*------------------------------------------------------------------------------*/ 

    $('.prt-tabs').each(function() {
        $(this).children('.prt-tab-content').children().hide();
        $(this).children('.prt-tab-content').children().first().show();
        $(this).find('.prt-tab-menu').children('li').on('click', function(e) {  
        var liActive = $(this).index(),
        contentActive = $(this).siblings().removeClass('active').parents('.prt-tabs').children('.prt-tab-content').children().eq(liActive);
        contentActive.addClass('active').fadeIn('slow');
        contentActive.siblings().removeClass('active');
        $(this).addClass('active').parents('.prt-tabs').children('.prt-tab-content').children().eq(liActive).siblings().hide();
        e.preventDefault();
        });
    });

/*------------------------------------------------------------------------------*/
/* Accordion
/*------------------------------------------------------------------------------*/

var allPanels = $('.accordion > .toggle').children('.toggle-content').hide();

    $('.toggle-title').on('click',function(e) {

        e.preventDefault();
        var $this = $(this);
            $this.parent().parent().find('.toggle .toggle-title a').removeClass('active');

        if ($this.next().hasClass('show')) {

            $this.next().removeClass('show');   
            $this.next().slideUp('easeInExpo');

        } else {
            $this.parent().parent().find('.toggle .toggle-content').removeClass('show');
            $this.parent().parent().find('.toggle .toggle-content').slideUp('easeInExpo');
            $this.next().toggleClass('show');
            $this.next().removeClass('show');
            $this.next().slideToggle('easeInExpo');
           $this.next().parent().children().children().addClass('active');

        }

    });

/*------------------------------------------------------------------------------*/
/* Isotope
/*------------------------------------------------------------------------------*/

   $(function () {

        if ( $().isotope ) {           
            var $container = $('.isotope-project');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '',
                    transitionDuration: '1s',
                });
            });

            $('.portfolio-filter li').on('click',function() {                           
                var selector = $(this).find("a").attr('data-filter');
                $('.portfolio-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
        };

   });
    
/*------------------------------------------------------------------------------*/
/* Prettyphoto
/*------------------------------------------------------------------------------*/

    $(function () {

        // Normal link
        jQuery('a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]').each(function(){
            if( jQuery(this).attr('target')!='_blank' && !jQuery(this).hasClass('prettyphoto') ){
                var attr = $(this).attr('rel');
                if (typeof attr !== typeof undefined && attr !== false && attr!='prettyPhoto' ) {
                    jQuery(this).attr('data-rel','prettyPhoto');
                }
            }
        });    

        jQuery('a[data-rel^="prettyPhoto"]').prettyPhoto();
        jQuery('a.prt_prettyphoto').prettyPhoto();
        jQuery('a[rel^="prettyPhoto"]').prettyPhoto();
    });

    $(document).ready(function() {
            var e = '<div class="prt_floting_customsett">'+
                '<a href="https://support.preyantechnosys.com/" target="_blank" class="tmtheme_fbar_icons"><i class="fa-brands fa-square-facebook"></i><span>Facebook</span></a>'+
                '<a href="https://preyantechnosys.com/" target="_blank" class="tmtheme_fbar_icons"><i class="fa-brands fa-x-twitter"></i><span>Twitter</span></a>'+
                '<a href="https://1.envato.market/k0oZ5x" target="_blank" class="tmtheme_fbar_icons"><i class="fa-brands fa-pinterest-p"></i><span class="buy_link">Pinterest<span></span></span></a>'+
                '<a href="https://1.envato.market/k0oZ5x" target="_blank" class="tmtheme_fbar_icons"><i class="fa-brands fa-youtube"></i><span class="buy_link">Youtube<span></span></span></a>'+
                '<div class="clearfix"></div>'+
            '</div>';

        $('body').append(e);
    });
    

/*------------------------------------------------------------------------------*/
/* Scrolling Text
/*------------------------------------------------------------------------------*/


    letterCarousel('.Frists','.marquee-text');
    letterCarousel('.Frists','.marquee-link');

    
    function letterCarousel(parent_cls,child_cls) {
        var e = jQuery(parent_cls+' '+child_cls),
        t = jQuery(window).height();
        jQuery(window).on("scroll", function() {
            if (jQuery(parent_cls).length) {
                var t = jQuery(document).scrollTop() + jQuery(window).height(),
                n = jQuery(parent_cls).offset().top;
                
                if (n <= t) {
                    var i = jQuery(document).scrollTop() - n + jQuery(window).height();
                    var scroll = i - 150;
                    var scroll_slow = scroll + ((scroll/70)/100);
                    var img_scroll = scroll_slow * 60 /100;
                    e.css({
                        transform: "translateX(" + img_scroll + "px)"
                    })
                }
            }
        });
    }


/*------------------------------------------------------------------------------*/
/* AOS
/*------------------------------------------------------------------------------*/

    AOS.init({
      once: true,
      duration: 800,
      delay: 0,
    });




/*------------------------------------------------------------------------------*/
/* Animation on scroll: Number rotator
/*------------------------------------------------------------------------------*/
    
    $("[data-appear-animation]").each(function() {
    var self      = $(this);
    var animation = self.data("appear-animation");
    var delay     = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);
        
        if( $(window).width() > 959 ) {
            self.html('0');
            self.waypoint(function(direction) {
                if( !self.hasClass('completed') ){
                    var from     = self.data('from');
                    var to       = self.data('to');
                    var interval = self.data('interval');
                    self.numinate({
                        format: '%counter%',
                        from: from,
                        to: to,
                        runningInterval: 2000,
                        stepUnit: interval,
                        onComplete: function(elem) {
                            self.addClass('completed');
                        }
                    });
                }
            }, { offset:'85%' });
        } else {
            if( animation == 'animateWidth' ) {
                self.css('width', self.data("width"));
            }
        }
    });


   
/*------------------------------------------------------------------------------*/
/* Skillbar
/*------------------------------------------------------------------------------*/
    
    $('.prt-progress-bar').each(function() {
        $(this).find('.progress-bar').width(0);
    });

    $('.prt-progress-bar').each(function() {

        $(this).find('.progress-bar').animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });


    // Part of the code responsible for loading percentages:

    $('.progress-bar-percent[data-percentage]').each(function () {

        var progress = $(this);
        var percentage = Math.ceil($(this).attr('data-percentage'));

            $({countNum: 0}).animate({countNum: percentage}, {
                duration: 2000,
                easing:'linear',
                step: function() {
                // What todo on every count
                    var pct = '';
                    if(percentage === "0"){
                        pct = Math.floor(this.countNum) + '%';
                    }else{
                        pct = Math.floor(this.countNum+1) + '%';
                    }
                    progress.text(pct);
                }
            });
    });


    jQuery(".prt-circle-box").each(function () {

        var circle_box = jQuery(this);
        var fill_val = circle_box.data("fill");
        var emptyFill_val = circle_box.data("emptyfill");
        var thickness_val = circle_box.data("thickness");
        var linecap_val = circle_box.data("linecap")
        var fill_gradient = circle_box.data("gradient");
        var startangle_val = (-Math.PI / 4) * 1.5;
        if (fill_gradient != "") {
            fill_gradient = fill_gradient.split("|");
            fill_val = { gradient: [fill_gradient[0], fill_gradient[1]] };
        }
        if (typeof jQuery.fn.circleProgress == "function") {
            var digit = circle_box.data("digit");
            var before = circle_box.data("before");
            var after = circle_box.data("after");
            var digit = Number(digit);
            var short_digit = digit / 100;
            var size_val = circle_box.data("size");
            jQuery(".prt-circle", circle_box)
                .circleProgress({ value: 0, duration: 8000, size: size_val, startAngle: startangle_val, 
                    thickness: thickness_val, linecap:linecap_val, emptyFill: emptyFill_val, fill: fill_val })
                .on("circle-animation-progress", function (event, progress, stepValue) {
                    
                    circle_box.find(".prt-fid-number").html(before + Math.round(stepValue * 100) + after);
                });
        }
        circle_box.waypoint(
            function (direction) {

                if (!circle_box.hasClass("completed")) {
                    if (typeof jQuery.fn.circleProgress == "function") {
                        jQuery(".prt-circle", circle_box).circleProgress({ value: short_digit });
                    }
                    circle_box.addClass("completed");
                }
            },
            { offset: "90%" }
        );
    });

/*------------------------------------------------------------------------------*/
/* Slider
/*------------------------------------------------------------------------------*/ 

// Initialize the slider
// $(".hero-slider").slick({
//     speed: 300,
//     infinite: true,
//     arrows: true,
//     dots: false,
//     autoplay: true,
//     centerMode: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
// });

// // Function to animate kites in the current slide
// function animateKites() {
//     // Get kites in current active slide
//     const kites = document.querySelectorAll('.slide.slick-active .kite');
    
//     kites.forEach((kite, index) => {
//         // Remove any existing animations
//         kite.style.animation = 'none';
        
//         // Trigger reflow to reset animation
//         void kite.offsetWidth;
        
//         // Calculate delays (same as your original CSS)
//         const fullEnterDelay = 0.5 + (index * 0.2);
//         const floatDelay = 1 + (index * 0.2);
        
//         // Apply new animation
//         kite.style.animation = `
//             fullEnter 1s ease-out ${fullEnterDelay}s forwards,
//             float 3s ease-in-out ${floatDelay}s infinite alternate
//         `;
//     });
// }

// Animate kites when slider initializes
// $(document).ready(function() {
//     animateKites();
// });

// // Animate kites every time the slide changes
// $('.hero-slider').on('afterChange', function() {
//     animateKites();
// });

// // Function to animate elements in the current slide
// function animateSlideElements() {
//     // Animate kites
//     const kites = document.querySelectorAll('.slide.slick-active .kite');
//     kites.forEach((kite, index) => {
//         kite.style.animation = 'none';
//         void kite.offsetWidth;
//         const fullEnterDelay = 0.5 + (index * 0.2);
//         const floatDelay = 1 + (index * 0.2);
//         kite.style.animation = `
//             fullEnter 1s ease-out ${fullEnterDelay}s forwards,
//             float 3s ease-in-out ${floatDelay}s infinite alternate
//         `;
//     });

//     // Animate text elements
//     const heroText = document.querySelector('.slide.slick-active .hero-text');
//     if (heroText) {
//         // Reset all text animations
//         const textElements = heroText.querySelectorAll('h2, p, .hero-button');
//         textElements.forEach(el => {
//             el.style.animation = 'none';
//             el.style.opacity = '0';
//             void el.offsetWidth; // Trigger reflow
//         });

//         // Animate headings with staggered delay
//         const headings = heroText.querySelectorAll('h2');
//         headings.forEach((h2, index) => {
//             h2.style.animation = `slideIn 0.8s forwards ${0.3 + (index * 0.3)}s`;
//         });

//         // Animate paragraph
//         const paragraph = heroText.querySelector('p');
//         if (paragraph) {
//             paragraph.style.animation = 'fadeIn 1s forwards 1.5s';
//         }

//         // Animate button
//         const button = heroText.querySelector('.hero-button');
//         if (button) {
//             button.style.animation = 'fadeIn 1s forwards 1.8s';
//         }
//     }
// }

// // Initial animation on page load
// $(document).ready(function() {
//     animateSlideElements();
// });

// // Re-animate on slide change
// $('.hero-slider').on('afterChange', function() {
//     animateSlideElements();
// });

    $(".portfolio-slider").slick({
        speed: 5000,
        infinite: true,
        arrows: true,
        dots: false,                   
        autoplay: true,
        centerMode : false,
        slidesToShow: 4,
		cssEase: 'linear',
		autoplaySpeed: 0, 
        slidesToScroll: 1,

        responsive: [{

            breakpoint: 1440,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        },
        {

            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $(".testimonial-slider").slick({
        speed: 300,
        infinite: true,
        arrows: true,
        dots: false,                   
        autoplay: true,
        centerMode : false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $(".blog-slider").slick({
        speed: 300,
        infinite: true,
        arrows: false,
        dots: false,                   
        autoplay: true,
        centerMode : false,
        slidesToShow: 2,
        slidesToScroll: 1,

        responsive: [{

            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $(".service-slider").slick({
        speed: 300,
        infinite: true,
        arrows: false,
        dots: false,                   
        autoplay: true,
        centerMode : false,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [{

            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });


    $(".client-slider").slick({
        speed: 300,
        infinite: true,
        arrows: false,
        dots: false,                   
        autoplay: true,
        centerMode : false,
        slidesToShow: 6,
        slidesToScroll: 1,

        responsive: [{

            breakpoint: 1200,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $(".service-slider-2").slick({
        speed: 300,
        infinite: true,
        arrows: false,
        dots: false,                   
        autoplay: true,
        centerMode : false,
        slidesToShow: 5,
        slidesToScroll: 1,

        responsive: [{

            breakpoint: 1199,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $(".blog-slider-2").slick({
        speed: 300,
        infinite: true,
        arrows: false,
        dots: false,                   
        autoplay: true,
        centerMode : false,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [{

            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

/*------------------------------------------------------------------------------*/
/* Timeline
/*------------------------------------------------------------------------------*/

    jQuery(document).ready(function() {
    
        jQuery('.timeline-item.prt-dropdown:first').addClass("active");
        jQuery('.timeline-item.prt-dropdown').click(function()

            {

                jQuery('.timeline-item.prt-dropdown').removeClass("active");
                jQuery(this).addClass("active");

         });
         
    });

/*------------------------------------------------------------------------------*/
/* expandcontent
/*------------------------------------------------------------------------------*/

    jQuery( document ).ready(function($) { width_cal();});
    function width_cal(){ 
        jQuery(".prt-expandcontent-yes").each(function () {
            var ttm_column_div = '';
            var scrren_size = jQuery(window).width();
            var box_size = jQuery(this).parent().width();
            var extra_size = (scrren_size - box_size) / 2;

            if (jQuery(this).hasClass('prt-right-shift')) {
                ttm_column_div = ', .prt-expandcontent-column > .prt-expandcontent-wrapper ';
                jQuery('.prt-expandcontent-column > div' + ttm_column_div, jQuery(this)).css('margin-right', '-' + extra_size + 'px');
            } else if (jQuery(this).hasClass('prt-left-shift')) {
                ttm_column_div = ', .prt-expandcontent-column > .prt-expandcontent-wrapper ';
                jQuery('.prt-expandcontent-column > div' + ttm_column_div, jQuery(this)).css('margin-left', '-' + extra_size + 'px');
            }

        });
    }jQuery(window).resize(function() {width_cal(); });

/*------------------------------------------------------------------------------*/
/* Portfolio items
/*------------------------------------------------------------------------------*/

  document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty('--x', (e.clientX+window.scrollX) + 'px');
    document.documentElement.style.setProperty('--y', (e.clientY+window.scrollY) + 'px');
  }
 
/*------------------------------------------------------------------------------*/
/* Back to top
/*------------------------------------------------------------------------------*/
    
    // ===== Scroll to Top ==== 
    jQuery('#totop').hide();

    $(window).on("scroll",function(){
        if (jQuery(this).scrollTop() >= 500) {        // If page is scrolled more than 50px
            jQuery('#totop').fadeIn(200);    // Fade in the arrow
            jQuery('#totop').addClass('top-visible');
        } else {
            jQuery('#totop').fadeOut(200);   // Else fade out the arrow
            jQuery('#totop').removeClass('top-visible');
        }
    });

    jQuery('#totop').on("click",function() {      // When arrow is clicked
        jQuery('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
        return false;
    });


});