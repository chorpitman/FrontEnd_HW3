/**
 * Created by i4790k on 06.09.2016.
 */

$(function() {
    $('a[href^="#"]').on('click', function(event) {

        var target = $(this.getAttribute('href'));

        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 450);
        }

    });

});

