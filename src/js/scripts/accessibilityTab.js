export function accessibilityTab() {


    /* アクセシビリティ対応タブとコンテンツ aria-controlesとidの動的追加処理 */
    const tabBtn = document.querySelectorAll(".js-tab-btn");
    tabBtn.forEach(function(elem, index) {
      var num = index + 1;
      elem.setAttribute("aria-controls", 'tab-content-' + num);
    });
  
    const tabPanel = document.querySelectorAll(".js-tab-panel");
    tabPanel.forEach(function(elem, index) {
      var num = index + 1;
      elem.setAttribute("id", 'tab-content-' + num);
    });
  
    /* アクセシビリティ対応タブ */
    tabBtn.forEach(function(elem, index) {
      elem.addEventListener("click", function() {
        var this_id = this.getAttribute("aria-controls");
        //全てのタブボタンのaria-selected切り替え
        tabBtn.forEach(function(elem, index) {
          elem.setAttribute("aria-selected", "false");
        });
        this.setAttribute("aria-selected", "true");
        //タブパネルの表示
        tabPanel.forEach(function(elem, index) {
          elem.setAttribute("aria-hidden", "true");
          if( elem.getAttribute("id") == this_id ) {
            elem.setAttribute("aria-hidden", "false");
          }
        });
      });
    });


}