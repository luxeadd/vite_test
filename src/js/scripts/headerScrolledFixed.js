export function headerScrolledFixed() {


  function scrolledMenuFixed() {
    //ヘッダーの高さ
    let header = document.querySelector(".js-header");
    let headerHeight = header.clientHeight;
    
    //ヘッダーの次のセクション
    let headerNext = document.querySelector(".js-header-next");

    //ファーストビューの高さ
    let fvDom = document.querySelector(".js-fv");
    let fvHeight = fvDom.clientHeight;
    
    //スクロール量
    let offsetNow = window.pageYOffset;
    if( offsetNow  > fvHeight ) {
      header.classList.add("fixed");
      headerNext.style.marginTop = headerHeight + "px";
    } else {
      header.classList.remove("fixed");
      headerNext.style.marginTop = "0px";
    }
  }
    
  window.addEventListener("scroll", function() {
    scrolledMenuFixed();
  });
  
  window.addEventListener("resize", function() {
    scrolledMenuFixed();
  });
  window.addEventListener("load", function() {
    scrolledMenuFixed();
  });

  
}