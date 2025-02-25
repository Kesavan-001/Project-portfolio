(function ($) {
    "use strict";

    // Spinner (Remove immediately)
    var spinner = function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    };
    spinner();

    // Navbar (Always visible)
    $('.navbar').addClass('fixed-top').css({
        'transform': 'translateY(0)',
        'opacity': 1
    });

    // Smooth Scrolling
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

    // Back to Top Button (Always visible)
    $('.back-to-top').addClass('show').css({
        'transform': 'scale(1)',
        'opacity': 1
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1200, 'easeInOutExpo');
        return false;
    });

    // Typed.js (Runs immediately)
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

    // Header Background (Static)
    $('#home').css({
        'background-position-y': '0px',
        'filter': 'brightness(100%)'
    });

    // Skills Animation (Immediate)
    $('.progress .progress-bar').each(function () {
        var $this = $(this);
        $this.css({
            width: $this.attr("aria-valuenow") + '%',
            opacity: 1,
            transition: 'width 2.5s ease-in-out, opacity 0.8s ease'
        });
    });

    // Portfolio Filter (All items visible immediately)
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
        
        $('.portfolio-item').css({
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'all 0.6s ease-in-out'
        });
    });
    // Show all items on load
    portfolioIsotope.isotope({ filter: '*' });
    $('.portfolio-item').css({
        opacity: 1,
        transform: 'translateY(0)'
    });

    // Team Hover Animation
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

    // Form Validation
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

    // Entrance Animation (Immediate)
    $(document).ready(function () {
        $('.container-fluid, .container-xxl').each(function () {
            $(this).css({
                opacity: 1,
                transform: 'translateY(0)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            });
        });
    });

})(jQuery);
