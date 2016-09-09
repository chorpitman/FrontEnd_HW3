/**
 * Created by i4790k on 06.09.2016.
 */

$(function () {
    $('a[href^="#"]').on('click', function (event) {

        var target = $(this.getAttribute('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 550);

            window.location.hash = '#' + target[0].id;

            console.log(this);

            $('.navi-links').removeClass('active');

            $(this).addClass('active');

        }
    });

});

