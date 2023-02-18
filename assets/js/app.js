function currentTime() {
  var date = new Date(); 
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText =
    hour + " : " + min + " : " + sec; 
  var t = setTimeout(() => {
    currentTime();
  }, 1000); /* setting timer */
}
//saatin qabagina 0 elave elemek ucun
function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}


currentTime();
//timeline portfi

var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if (!items[i].classList.contains("in-view")) {
        items[i].classList.add("in-view");
      }
    } else if (items[i].classList.contains("in-view")) {
      items[i].classList.remove("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

//overlay menu yaradilmasi

const myBurgerIcon= document.getElementById("burger-icon")
const overlay = document.getElementById("overlay-menu")
const overlayExit= document.getElementById("overlay-exit")
myBurgerIcon.onclick = function(){
  overlay.style.display= 'block'
}
overlayExit.onclick= function(){
  overlay.style.display= 'none'
}