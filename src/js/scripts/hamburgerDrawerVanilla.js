export function hamburgerDrawerVanilla() {


  /* ハンバーガー開閉時のドロワーメニュー表示 */
  /* ドロワーメニュー（ボタン） */
  const hamburger = document.querySelector(".js-hamburger");
  const drawer = document.querySelector(".js-drawer-menu");
  const body = document.body;
  var md = 768;

  function drawerReset() {
    hamburger.setAttribute("aria-label", "メニューを開く");
    body.classList.remove("is-drawerActive");
    hamburger.setAttribute("aria-expanded", "false");
    drawer.classList.remove("is-opend");
    body.style.overflow = "";
  }

  let scrollTop;
  let scrollTopBack;
  function bodyFixed() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // メニューオープン中はスクロール禁止 + クローズ時スクロール可能に戻す
    if (!body.classList.contains("is-fixed")) {
      body.classList.add("is-fixed");
      body.style.top = -scrollTop + "px";
      scrollTopBack = scrollTop;
    } else {
      body.classList.remove("is-fixed");
      body.style.top = "";
      window.scrollTo(0, scrollTopBack);
    }
  }
  function bodyFixedRelease() {
    body.classList.remove("is-fixed");
    body.style.top = "";
    window.scrollTo(0, scrollTopBack);
  }

  function animation(target, duration, ease, motion) {
    if (/^-?[0-9]+$/.test(duration)) {
        duration = duration + 'ms';
    } else {
        duration = '400ms';
    }
    target.style.animation = [motion, "forwards", duration, ease].join(" ");
  }

  function fadeIn(target, duration, ease) {  
    var motion = "fadeIn";
    animation(target, duration, ease, motion);
    target.style.display = 'block';
  }
  
  function fadeOut(target, duration, ease) {
    function display_none() {
      target.style.display = 'none';
    }
    var motion = 'fadeOut';
    animation(target, duration, ease, motion);
    target.addEventListener('animationend', display_none);
    //再度メニュー開いた際のdisplay_noneイベントの除去
    hamburger.addEventListener('click', function() {
      target.removeEventListener('animationend', display_none);
    });
  }

  
  hamburger.addEventListener("click", () => {
    bodyFixed();

    let ariaExpanded = hamburger.getAttribute("aria-expanded");
    body.classList.toggle("is-drawerActive");
    drawer.classList.toggle("is-opend");
    
    // スクロール停止の処理
    body.classList.contains("is-drawerActive") ? body.style.overflow = "hidden" : body.style.overflow = "";

    //開く時の挙動
    if(ariaExpanded == "false") {
      hamburger.setAttribute("aria-expanded", "true");
      hamburger.setAttribute("aria-label", "メニューを閉じる");
      drawer.classList.add("is-opend");
      fadeIn(drawer, 1000);
    } else if(ariaExpanded == "true") { //閉じる時の挙動
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "メニューを開く");
      drawer.classList.remove("is-opend");
      fadeOut(drawer, 1000);
    }
  });


  //ドロワークリック時の挙動
  drawer.addEventListener("click", () => {
    drawerReset();
    bodyFixedRelease();
    fadeOut(drawer, 1000);
  });


  //ウィンドウ幅変更時の挙動
  window.addEventListener('resize', ()=> {
    let window_width = window.innerWidth;
    if(window_width >= md) { //PCにした時
      drawer.style.display = "";
      drawerReset();
    } else { //SP
    }
  });
  





  
  
}