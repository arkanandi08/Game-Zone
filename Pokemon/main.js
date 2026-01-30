function fullscreen() {
  const elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { // Safari
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE11
    elem.msRequestFullscreen();
  }
  document.getElementById("full").style.display="none";
  document.getElementById("exfull").style.display="flex";
}
function exfull() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  document.getElementById("exfull").style.display="none";

  document.getElementById("full").style.display="flex";}

  function aclick(){
    a=document.getElementById("ifrm").innerText;
    if(a=="<iframe src='start.html' id='frame'></iframe>"){
      document.getElementById("ifrm").innerText="<iframe src='intro.html' id='frame'></iframe>"
    }
  }
