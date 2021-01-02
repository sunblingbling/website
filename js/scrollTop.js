$(function(){
  //下から表示させる要素を指定
  let $pagetop = $('.ScrollTop');

  $(window).on( 'scroll', function () {
    //スクロール位置を取得
    if ( $(this).scrollTop() < 任意の値 ) {
      $pagetop.removeClass('isActive');
    } else {
      $pagetop.addClass('isActive');
    }
  });
  //ページ内リンクスムーススクロール
  $('a[href^="#"]').on('click', function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop: position}, 550, "swing");
    return false;
  });
});