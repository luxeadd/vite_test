export function pageTop() {


    /* トップへ戻るボタン */
    var topBtn = $('.js-page-top');
    topBtn.hide();
  
    // ボタンの表示設定
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 70) {
        // 指定px以上のスクロールでボタンを表示
        topBtn.fadeIn();
      } else {
        // 画面が指定pxより上ならボタンを非表示
        topBtn.fadeOut();
      }
    });
  
    // ボタンをクリックしたらスクロールして上に戻る
    topBtn.on('click', function () {
      $('body,html').animate({
        scrollTop: 0
      }, 300, 'swing');
      return false;
    });

}