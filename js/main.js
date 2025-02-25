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
            $('.navbar').addClass('fixed-top').css({
                'transform': 'translateY(0)',
                'opacity': 1
            });
        } else {
            $('.navbar').removeClass('fixed-top').css({
                'transform': 'translateY(-100%)',
                'opacity': 0
            });
        }
    });

    // Smooth Scrolling with Luxury Effect
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 1200, 'easeInOutExpo', function () {
                window.location.hash = hash;
            });
            $('.navbar-nav .active').removeClass('active');
            $(this).addClass('active');
        }
    });

    // Back to Top Button Animation
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').addClass('show').css({
                'transform': 'scale(1)',
                'opacity': 1
            });
        } else {
            $('.back-to-top').removeClass('show').css({
                'transform': 'scale(0.5)',
                'opacity': 0
            });
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1200, 'easeInOutExpo');
        return false;
    });

    // Typed.js with Luxury Effect
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            backDelay: 2000,
            cursorChar: '_',
            fadeOut: true,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500
        });
    }

    // Parallax Effect for Header
    $(window).on('scroll', function () {
        var scrollPos = $(this).scrollTop();
        $('#home').css({
            'background-position-y': -(scrollPos * 0.4) + 'px',
            'filter': 'brightness(' + (100 - scrollPos / 10) + '%)'
        });
    });

    // Skills Animation with Luxury Touch
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
                    transition: 'width 2.5s ease-in-out, opacity 0.8s ease'
                });
            }, 300);
        });
    }, {offset: '80%'});

    // Portfolio Filter Animation
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        transitionDuration: '0.8s'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');
        
        var filterValue = $(this).data('filter');
        portfolioIsotope.isotope({
            filter: filterValue
        });
        
        $('.portfolio-item').each(function () {
            $(this).css({
                opacity: 0,
                transform: 'translateY(20px)'
            });
            if ($(this).is(filterValue === '*' ? '.portfolio-item' : filterValue)) {
                setTimeout(() => {
                    $(this).css({
                        opacity: 1,
                        transform: 'translateY(0)',
                        transition: 'all 0.6s ease-in-out'
                    });
                }, 150);
            }
        });
    });

    // Team Hover Animation with Luxury Effect
    $('.team-item').hover(
        function () {
            $(this).find('.team-text').css({
                transform: 'translateX(0)',
                opacity: 1,
                transition: 'all 0.4s ease-in-out'
            });
            $(this).find('img').css({
                filter: 'brightness(70%)'
            });
        },
        function () {
            $(this).find('.team-text').css({
                transform: 'translateX(-100%)',
                opacity: 0
            });
            $(this).find('img').css({
                filter: 'brightness(100%)'
            });
        }
    );

    // Form Validation with Luxury Feedback
    $('form').on('submit', function (e) {
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
        
        if (!name || !email || !subject || !message) {
            e.preventDefault();
            $(this).find('.form-floating').each(function () {
                if (!$(this).find('input, textarea').val()) {
                    $(this).css({
                        'border-color': var(--secondary),
                        'box-shadow': '0 0 10px rgba(230, 184, 0, 0.5)'
                    });
                    setTimeout(() => {
                        $(this).css({
                            'border-color': '',
                            'box-shadow': ''
                        });
                    }, 2000);
                }
            });
            alert('Please complete all fields to proceed.');
            return false;
        }
    });

    // Luxury Entrance Animation
    $(document).ready(function () {
        $('.container-fluid, .container-xxl').each(function (index) {
            $(this).css({
                opacity: 0,
                transform: 'translateY(50px)'
            }).delay(index * 200).animate({
                opacity: 1,
                transform: 'translateY(0)'
            }, 800, 'easeOutExpo');
        });
    });

})(jQuery);
