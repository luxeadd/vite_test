export function viewHeight() {

  /* SPメニューの高さ スマホのアドレスバーを考慮 */
  window.addEventListener('load', ()=> {
    let view_height = window.innerHeight;
    document.documentElement.style.setProperty('--vh', view_height / 100 + 'px');
  });
  window.addEventListener('resize', ()=> {
    let view_height = window.innerHeight;
    document.documentElement.style.setProperty('--vh', view_height / 100 + 'px');
  });

}