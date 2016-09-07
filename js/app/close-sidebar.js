$(function() {

$('#h-menu-peek').on('click', function () {

    var navyBar = $('#navigation');
    var contentBar = $('#content-bar');

    if (navyBar.hasClass('open')  && contentBar.hasClass('open')) {
        navyBar.animate({
            left: '0px'
        }, 350).removeClass('open');

        contentBar.animate({
            'margin-left': "0%"
        }, 350).removeClass('open');

    }

    else {
        navyBar.animate({
            left: -250
        }, 350).addClass('open');

            contentBar.animate({
            'margin-left': "-20%"
       }, 350).addClass('open');
    }
});
});
