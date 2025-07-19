/*------------------------------------------------------------------------------*/
/* animation
/*------------------------------------------------------------------------------*/

  gsap.registerPlugin(ScrollTrigger);

    function scrolling_image() {
    if (!$(".about-history-section")[0]) {
        return
    }

    ScrollTrigger.matchMedia({
        "(min-width: 992px)": function() {

            let container = $(".about-history-section .scroll-changing-images");
            let section = $(".about-history-section .history-section-content");
            var indicators = gsap.utils.toArray('.about-history-section .scroll-changing-split-item-image');
            var points = gsap.utils.toArray('.about-history-section .scroll-changing-image-content');

            var gap = points.length * 50;

            let tl = gsap.timeline({
                scrollTrigger: {
                    pin: true,
                    scrub: 1,
                    trigger: container,
                    end: () => "+=" + ((section.height() + gap) - document.documentElement.clientHeight),
                    onUpdate: (self) => {
                        let per = parseInt(self.progress * 100);
                        if (per > 99) indicators[points.length - 1].classList.add('last');
                        else indicators[points.length - 1].classList.remove('last');
                        if (per < 1) indicators[0].classList.add('first');
                        else indicators[0].classList.remove('first');

                    }
                },
                defaults: { ease: "none", duration: 1 }
            });

            points.forEach((sct, i) => {
                let pos = indicators[i];
                ScrollTrigger.create({
                    trigger: sct,
                    start: "top center",
                    end: () => '+=' + sct.offsetHeight,
                    toggleClass: { targets: pos, className: "active" }
                });
            });
        },
        "(max-width:992px)": function() {
            ScrollTrigger.getAll().forEach(pin => pin.kill(true));
        }
    });

    }


    function scrolling_image_2() {
        if (!$(".home2-stepbox-section")[0]) {
           return
        }

        ScrollTrigger.matchMedia({
        "(min-width: 992px)": function() {

            let container = $(".home2-stepbox-section .stepbox-images");
            let section = $(".home2-stepbox-section .home2-stepbox-section-content");
            var indicators = gsap.utils.toArray('.home2-stepbox-section .scroll-changing-stepbox-item-image');
            var points = gsap.utils.toArray('.home2-stepbox-section .stepbox-item-inner');

            var gap = points.length * 50;

            let tl = gsap.timeline({
                scrollTrigger: {
                    pin: true,
                    scrub: 1,
                    trigger: container,
                    end: () => "+=" + ((section.height() + gap) - document.documentElement.clientHeight),
                    onUpdate: (self) => {
                        let per = parseInt(self.progress * 100);
                        if (per > 99) indicators[points.length - 1].classList.add('last');
                        else indicators[points.length - 1].classList.remove('last');
                        if (per < 1) indicators[0].classList.add('first');
                        else indicators[0].classList.remove('first');

                    }
                },
                defaults: { ease: "none", duration: 1 }
            });

            points.forEach((sct, i) => {
                let pos = indicators[i];
                ScrollTrigger.create({
                    trigger: sct,
                    start: "top center",
                    end: () => '+=' + sct.offsetHeight,
                    toggleClass: { targets: pos, className: "active" }
                });
            });

            },
            "(max-width:992px)": function() {
                ScrollTrigger.getAll().forEach(pin => pin.kill(true));
            }
        });

    }


    

jQuery(window).load(function(){
    scrolling_image();
    scrolling_image_2();
});

