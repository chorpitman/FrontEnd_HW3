/**
 * Created by i4790k on 06.09.2016.
 */

$(function () {
    $('a[href^="#"]').on('click', function (event) {
        debugger;
        var target = $(this.getAttribute('href'));
        target.
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 450);
        }
    });

});

