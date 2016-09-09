$(function () {

    $('#h-menu-peek').on('click', function () {

        var navyBar = $('#navigation');
        var contentBar = $('#content-bar');

        if (navyBar.hasClass('open') && contentBar.hasClass('open')) {
            navyBar.animate({
                left: '-250px'
            }, 500).removeClass('open');

            contentBar.animate({
                'margin-left': "-20%"
            }, 500).removeClass('open');

        }

        else {
            navyBar.animate({
                left: '0px'
            }, 500).addClass('open');

            contentBar.animate({
                'margin-left': "0%"
            }, 500).addClass('open');
        }
    });
});
