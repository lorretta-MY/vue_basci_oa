// 设置全局rem 函数
function setRem() {
  let htmlWidth =
    document.documentElement.clientWidth || document.body.clientWidth;
  let rootFontSize = htmlWidth / 26.7 || 12;
  if (htmlWidth < 375) {
    rootFontSize = 11;
  } else if (375 <= htmlWidth < 414) {
    rootFontSize = 12;
  } else {
    rootFontSize = 13;
  }
  let htmlDom = document.getElementById("html")[0];
  htmlDom.style.fontSize = rootFontSize + "px";
}

setRem();

Window.onresize = function() {
  setRem();
};
