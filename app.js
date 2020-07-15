$(function() {

    let header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on('scroll', function () {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {

        if (scrollOffset >= introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    /* Smooth scroll */
    $('[data-scroll]').on("click", function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('nav a').removeClass('active');
        $this.addClass('active');

        $("#nav").removeClass('active');
        $("#nav_toggle").removeClass('active');

        $('html, body').animate ({
            scrollTop: blockOffset - 30
        }, 700);
    });

    /* Menu nav toggle */
    $('#nav_toggle').on('click', function(event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
        header.addClass('fixed');
    });

    /* Slider */
    $(".slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });








});
