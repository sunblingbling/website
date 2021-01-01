$(document).ready(function () {
    $('.kor').attr('src', 'img/KOR_h.jpg');
    $('.lang').each(function (index) {
        $(this).attr('data-index', index);
    }).click(function () {
        var l = $(this).attr('data-index');
        if (l == 0) {
            $('.kor').attr('src', 'img/KOR_h.jpg');
            $('.eng').attr('src', 'img/ENG.jpg');
        } else if (l == 1) {
            $('.eng').attr('src', 'img/ENG_h.jpg');
            $('.kor').attr('src', 'img/KOR.jpg');
        }
    });
    //-------------------------------------------------------
    $('#f_icon_1').attr('src', 'img/factory_icon_h.png');
    $('#energy').css('display', 'block');

    $('#factory_icon>img').each(function (index) {
        $(this).attr('data-index', index);
    }).click(function () {
        var i = $(this).attr('data-index');
        if (i == 0) {
            $('#f_icon_1').attr('src', 'img/factory_icon_h.png');
            $('#f_icon_2').attr('src', 'img/factory_icon.png');
            $('#f_icon_3').attr('src', 'img/factory_icon.png');
            $('#f_icon_4').attr('src', 'img/factory_icon.png');
            $('#energy').css('display', 'block');
            $('#water').css('display', 'none');
            $('#cast').css('display', 'none');
            $('#build').css('display', 'none');
        } else if (i == 1) {
            $('#f_icon_1').attr('src', 'img/factory_icon.png');
            $('#f_icon_2').attr('src', 'img/factory_icon_h.png');
            $('#f_icon_3').attr('src', 'img/factory_icon.png');
            $('#f_icon_4').attr('src', 'img/factory_icon.png');
            $('#energy').css('display', 'none');
            $('#water').css('display', 'block');
            $('#cast').css('display', 'none');
            $('#build').css('display', 'none');
        } else if (i == 2) {
            $('#f_icon_1').attr('src', 'img/factory_icon.png');
            $('#f_icon_2').attr('src', 'img/factory_icon.png');
            $('#f_icon_3').attr('src', 'img/factory_icon_h.png');
            $('#f_icon_4').attr('src', 'img/factory_icon.png');
            $('#energy').css('display', 'none');
            $('#water').css('display', 'none');
            $('#cast').css('display', 'block');
            $('#build').css('display', 'none');
        } else if (i == 3) {
            $('#f_icon_1').attr('src', 'img/factory_icon.png');
            $('#f_icon_2').attr('src', 'img/factory_icon.png');
            $('#f_icon_3').attr('src', 'img/factory_icon.png');
            $('#f_icon_4').attr('src', 'img/factory_icon_h.png');
            $('#energy').css('display', 'none');
            $('#water').css('display', 'none');
            $('#cast').css('display', 'none');
            $('#build').css('display', 'block');
        }
    });
    //-------------------------------------------------------
    $('#map_icon_web>.eu').hover(function () {
        $(this).attr('src', 'img/map_eu_h.png');
    }, function () {
        $(this).attr('src', 'img/map_eu.png');
    });
    $('#map_icon_web>.asia').hover(function () {
        $(this).attr('src', 'img/map_asia_h.png');
    }, function () {
        $(this).attr('src', 'img/map_asia.png');
    });
    $('#map_icon_web>.africa').hover(function () {
        $(this).attr('src', 'img/map_africa_h.png');
    }, function () {
        $(this).attr('src', 'img/map_africa.png');
    });
    $('#map_icon_web>.north').hover(function () {
        $(this).attr('src', 'img/map_north_h.png');
    }, function () {
        $(this).attr('src', 'img/map_north.png');
    });
    $('#map_icon_web>.south').hover(function () {
        $(this).attr('src', 'img/map_south_h.png');
    }, function () {
        $(this).attr('src', 'img/map_south.png');
    });
    //-------------------------------------------------------
})