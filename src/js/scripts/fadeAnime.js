export function fadeAnime() {

  //スクロールフェードアニメーション
  const offsetAdjustment = 100; //調整量
  function fadeAnime(){

    var fadeIn = document.querySelectorAll(".js-fadeIn");
    fadeIn.forEach(function(elem, index) {
      var elemOffset = elem.offsetTop + offsetAdjustment;
      var scroll = document.documentElement.scrollTop || document.body.scrollTop;
      var windowHeight = window.innerHeight;
      var fadeUpHeight = elemOffset - windowHeight;
      if(scroll >= fadeUpHeight) {
        elem.classList.add("u-fadeIn");
      }
    });
    
    var fadeUp = document.querySelectorAll(".js-fadeUp");
    fadeUp.forEach(function(elem, index) {
      var elemOffset = elem.offsetTop + offsetAdjustment;
      var scroll = document.documentElement.scrollTop || document.body.scrollTop;
      var windowHeight = window.innerHeight;
      var fadeUpHeight = elemOffset - windowHeight;
      if(scroll >= fadeUpHeight) {
        elem.classList.add("u-fadeUp");
      }
    });
  
    var fadeRight = document.querySelectorAll(".js-fadeRight");
    fadeRight.forEach(function(elem, index) {
      var elemOffset = elem.offsetTop + offsetAdjustment;
      var scroll = document.documentElement.scrollTop || document.body.scrollTop;
      var windowHeight = window.innerHeight;
      var fadeRightHeight = elemOffset - windowHeight;
      if(scroll >= fadeRightHeight) {
        elem.classList.add("u-fadeRight");
      }
    });
  
    var fadeLeft = document.querySelectorAll(".js-fadeLeft");
    fadeLeft.forEach(function(elem, index) {
      var elemOffset = elem.offsetTop + offsetAdjustment;
      var scroll = document.documentElement.scrollTop || document.body.scrollTop;
      var windowHeight = window.innerHeight;
      var fadeLeftHeight = elemOffset - windowHeight;
      if(scroll >= fadeLeftHeight) {
        elem.classList.add("u-fadeLeft");
      }
    });
  }
    
  window.addEventListener("scroll", function() {
    fadeAnime();
  });
  window.addEventListener("load", function() {
    fadeAnime();
  });

}