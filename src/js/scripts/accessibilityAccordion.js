

export function accessibilityAccordion() {
    /* slideUp */
    const slideUp = (el, duration = 300) => {
      el.style.height = el.offsetHeight + "px";
      el.offsetHeight;
      el.style.transitionProperty = "height, margin, padding";
      el.style.transitionDuration = duration + "ms";
      el.style.transitionTimingFunction = "ease";
      el.style.overflow = "hidden";
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
      el.style.marginTop = 0;
      el.style.marginBottom = 0;
      setTimeout(() => {
        el.style.display = "none";
        el.style.removeProperty("height");
        el.style.removeProperty("padding-top");
        el.style.removeProperty("padding-bottom");
        el.style.removeProperty("margin-top");
        el.style.removeProperty("margin-bottom");
        el.style.removeProperty("overflow");
        el.style.removeProperty("transition-duration");
        el.style.removeProperty("transition-property");
        el.style.removeProperty("transition-timing-function");
      }, duration);
    };
  
    /* slideDown */
    const slideDown = (el, duration = 300) => {
      el.style.removeProperty("display");
      let display = window.getComputedStyle(el).display;
      if (display === "none") {
        display = "block";
      }
      el.style.display = display;
      let height = el.offsetHeight;
      el.style.overflow = "hidden";
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
      el.style.marginTop = 0;
      el.style.marginBottom = 0;
      el.offsetHeight;
      el.style.transitionProperty = "height, margin, padding";
      el.style.transitionDuration = duration + "ms";
      el.style.transitionTimingFunction = "ease";
      el.style.height = height + "px";
      el.style.removeProperty("padding-top");
      el.style.removeProperty("padding-bottom");
      el.style.removeProperty("margin-top");
      el.style.removeProperty("margin-bottom");
      setTimeout(() => {
        el.style.removeProperty("height");
        el.style.removeProperty("overflow");
        el.style.removeProperty("transition-duration");
        el.style.removeProperty("transition-property");
        el.style.removeProperty("transition-timing-function");
      }, duration);
    };
  
    /* slideToggle */
    const slideToggle = (el, duration = 300) => {
      if (window.getComputedStyle(el).display === "none") {
        return slideDown(el, duration);
      } else {
        return slideUp(el, duration);
      }
    };

  /* アコーディオン（質問） */
  const question = document.querySelectorAll(".js-question");
  question.forEach(function(elem, index) {
    elem.addEventListener("click", function() {
      var questionBtn = elem.querySelector(".js-qa-btn");
      var answer = elem.nextElementSibling;
      if(elem.classList.contains("is-open") === true ) { //閉じる時
        questionBtn.setAttribute("aria-selected", "false");
        questionBtn.setAttribute("aria-expanded", "false");
        answer.setAttribute("aria-hidden", "true");
        elem.classList.remove("is-open");
      } else { //開く時
        questionBtn.setAttribute("aria-selected", "true");
        questionBtn.setAttribute("aria-expanded", "true");
        answer.setAttribute("aria-hidden", "false");
        elem.classList.add("is-open");
      }
      slideToggle(answer, 400);
    });
  });


  /* アコーディオン aria-controlesとidの動的追加処理 */
  var jsQaBtn = document.querySelectorAll(".js-qa-btn");
  jsQaBtn.forEach(function(elem, index) {
    var num = index + 1;
    elem.setAttribute("aria-controls", "accordion-" + num);
  });
  var jsAnswer = document.querySelectorAll(".js-answer");
  jsAnswer.forEach(function(elem, index) {
    var num = index + 1;
    elem.setAttribute("id", "accordion-" + num);
  });



  

}