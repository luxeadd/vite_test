export function headerScrolled() {

  /* スクロール時のヘッダー背景色変更 */
  $(window).on('load scroll', function() {
    let header = $('.js-header'); //ヘッダー
    let headerHeight = $('.js-header').outerHeight(); //ヘッダーの高さ
    let imgHeight = $('.js-fv').outerHeight() - headerHeight; //fvの高さ - ヘッダーの高さ
    let scrollTop = $(window).scrollTop(); //スクロール量
    if( scrollTop > imgHeight ) { //スクロール量が(fvの高さ - ヘッダーの高さ)を超えたら
      header.addClass('is-headerScrolled');
    } else {
      header.removeClass('is-headerScrolled');
    }
  });

}