$(document).ready(function () {
    $('#quick_top img').hover(function () {
        $(this).attr('src', 'img/top_icon_h.png');
    }, function () {
        $(this).attr('src', 'img/top_icon.png');
    });
    var win_h = $(window).height();
    //alert(win_h);
    var h = win_h - 44;
    //alert(h);
    $('#quick_top').css('top', h);
    $(window).resize(function () {
        var win_h = $(window).height();
        var h = win_h - 44;
        $('#quick_top').css('top', h);
    });
    //-------------------------------------------------------
    $('#banner_wrap').innerfade({
        animationtype: 'fade',
        speed: 2000,
        timeout: 2500,
        type: 'random_start',
        containerheight: '502px'
    });
    //-------------------------------------------------------
    $('#mv_img').hover(function () {
        $(this).attr('src', 'img/mv_h.jpg');
    }, function () {
        $(this).attr('src', 'img/mv.jpg');
    });
})