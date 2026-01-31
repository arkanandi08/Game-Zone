let iframe;
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("frame")) {
    iframe = document.getElementById("frame").contentWindow;
  }
});

function fullscreen() {
  const elem = document.documentElement;
  
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { // Safari
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE11
    elem.msRequestFullscreen();
  }
  document.getElementById("full").style.display = "none";
  document.getElementById("exfull").style.display = "flex";
}

function exfull() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  document.getElementById("exfull").style.display = "none";
  
  document.getElementById("full").style.display = "flex";
}

function stclk() {
  const a = document.getElementById("frame");
  const src = a.getAttribute("src");
  if (src == "start.html") {
    a.setAttribute("src", "intro.html");
  }
}

function aclk() {
  const a = document.getElementById("frame");
  const src = a.getAttribute("src");
  if (src == "intro.html") {
    let divs = iframe.document.querySelectorAll(".step");
    for (let i = 0; i < divs.length; i++) {
      if (divs[i].classList.contains("active")) {
        var c = i;
        break;
      }
      else {
        var c = divs.length-1;
      }
    }
    divs[c].classList.remove("active");
    c++;
    if (c < divs.length) {
      divs[c].classList.add("active");
    }
  }
}