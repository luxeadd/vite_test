export function smoothScroll() {
  

  //リンク先が別ページの場合のスムーススクロール
  var urlHash = location.hash;
  if (urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
      // ヘッダー固定の場合はヘッダーの高さを数値で入れる、固定でない場合は0
      let pheader = $(".js-header").outerHeight();
      var target = $(urlHash);
      var position = target.offset().top - pheader;
      $('body,html').stop().animate({scrollTop:position}, 300);
    }, 200);
  }

  //スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });



  // //ヘッダーの高さを取得
  // const headerDom = document.querySelector(".js-header");
  // let headerHeight = headerDom.clientHeight;
  // //ハッシュ
  // var urlHash = location.hash;


  // const body = document.body;
  // function bodyFixedRelease() {
  //   body.classList.remove("is-fixed");
  //   body.style.top = "";
  // }
  
  // function scrollToAnker(urlHash) {
  //   var targetElem = document.getElementById(urlHash.replace("#", ""));
  //   //ブラウザからの高さを取得
  //   const rect = targetElem.getBoundingClientRect().top;
  //   //現在のスクロール量
  //   const offsetNow = window.pageYOffset;

  //   //スクロール先のターゲットの高さを計算
  //   const target = rect + offsetNow - headerHeight;

  //   window.scrollTo({
  //     top: target,
  //     behavior: "smooth",
  //   });
  // }

  // if(urlHash) {
  //   window.scrollTo({ top: 0 });
  //   setTimeout(function (){
  //     // window.scrollTo({ top: 0 }, 0);
  //   });
  //   $('body,html').stop().scrollTop(0);
  //   setTimeout(function() {
  //     scrollToAnker(urlHash);
  //   }, 1000);
  // }

  // const trigger = document.querySelectorAll('a[href*="#"]');

  // for(let i = 0; i < trigger.length; i++) {
  //   trigger[i].addEventListener("click", (e)=> {
  //     //fixed解除
  //     // bodyFixedRelease();

  //     let href = trigger[i].getAttribute("href");
  //     if(href !== trigger[i].hash) {
  //       return;
  //     }
      
  //     //デフォルト動作キャンセル（すぐリンクしないように）
  //     e.preventDefault();
      
  //     //hrefとhashが一致する場合（ページ内）
  //     if(href === trigger[i].hash) {
        
  //       //ブラウザからの高さを取得
  //       let targetElem = document.getElementById(href.replace("#", ""));
  //       const rect = targetElem.getBoundingClientRect().top;
  //       //現在のスクロール量
  //       let offsetNow = window.pageYOffset;
  //       //スクロール先のターゲットの高さを計算
  //       const target = rect + offsetNow - headerHeight;
  //       console.log(target);
  
  //       window.scrollTo({
  //         top: target,
  //         behavior: "smooth",
  //       });
        
  //     }
  //   });
  // }

  

}