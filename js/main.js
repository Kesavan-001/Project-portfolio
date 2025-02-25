(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate WOW.js
    new WOW().init();

    // Navbar Animation
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('fixed-top shadow-sm').fadeIn('slow');
        } else {
            $('.navbar').removeClass('fixed-top shadow-sm').fadeOut('slow');
        }
    });

    // Smooth Scrolling with Offset
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 60
            }, 1000, 'easeInOutExpo', function () {
                window.location.hash = hash;
            });
            $('.navbar-nav .active').removeClass('active');
            $(this).addClass('active');
        }
    });

    // Back to Top Button Animation
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').addClass('show').css('opacity', 1);
        } else {
            $('.back-to-top').removeClass('show').css('opacity', 0);
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1000, 'easeInOutExpo');
        return false;
    });

    // Typed.js Animation
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 80,
            backSpeed: 40,
            loop: true,
            backDelay: 2000,
            cursorChar: '|',
            fadeOut: true
        });
    }

    // Parallax Effect for Header
    $(window).on('scroll', function () {
        var scrollPos = $(this).scrollTop();
        $('#home').css({
            'background-position-y': -(scrollPos * 0.3) + 'px'
        });
    });

    // Skills Animation
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            var $this = $(this);
            $this.css({
                width: 0,
                opacity: 0
            });
            setTimeout(function () {
                $this.css({
                    width: $this.attr("aria-valuenow") + '%',
                    opacity: 1,
                    transition: 'width 2s ease-in-out, opacity 0.5s ease'
                });
            }, 200);
        });
    }, {offset: '80%'});

    // Portfolio Filter Animation
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        transitionDuration: '0.6s'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');
        
        var filterValue = $(this).data('filter');
        portfolioIsotope.isotope({
            filter: filterValue
        });
        
        // Animate filtered items
        $('.portfolio-item').each(function () {
            $(this).css({
                opacity: 0,
                transform: 'scale(0.95)'
            });
            if ($(this).is(filterValue === '*' ? '.portfolio-item' : filterValue)) {
                setTimeout(() => {
                    $(this).css({
                        opacity: 1,
                        transform: 'scale(1)',
                        transition: 'all 0.4s ease'
                    });
                }, 100);
            }
        });
    });

    // Team Hover Animation
    $('.team-item').hover(
        function () {
            $(this).find('.team-text').css({
                transform: 'translateX(0)',
                opacity: 1
            });
        },
        function () {
            $(this).find('.team-text').css({
                transform: 'translateX(-100%)',
                opacity: 0
            });
        }
    );

    // Form Validation
    $('form').on('submit', function (e) {
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
        
        if (!name || !email || !subject || !message) {
            e.preventDefault();
            alert('Please fill in all fields');
            return false;
        }
    });

})(jQuery);
