 function color() {
   for (i = 0; i <= 9; i++) {
     document.getElementById("c" + i + "9").style.background = "yellow";
     document.getElementById("c" + i + "7").style.background = "yellow";
     document.getElementById("c" + i + "8").style.background = "green";
     document.getElementById("c" + i + "6").style.background = "green";
     document.getElementById("c" + i + "5").style.background = "yellow";
     document.getElementById("c" + i + "4").style.background = "green";
     document.getElementById("c" + i + "3").style.background = "yellow";
     document.getElementById("c" + i + "2").style.background = "green";
     document.getElementById("c" + i + "1").style.background = "yellow";
     document.getElementById("c" + i + "0").style.background = "green";
   }
 }
 
 function chck(whi) {
   if (whi == "u") {
     var nwhi = "d";
   }
   else if (whi == "d") {
     var nwhi = "u";
   }
   var b = Math.random();
   var c = b.toFixed(1);
   var a = parseInt(c.charAt(2));
   if (a == 7) {
     a = 1;
   }
   if (a == 8) {
     a = 3;
   }
   if (a == 0) {
     a = 4;
   }
   if (a == 9) {
     a = 6;
   }
   var dice = document.getElementById("dice" + whi);
   dice.innerHTML = "<img src='die" + a + ".png' alt='" + a + "'>";
   var cov = document.getElementById("cov" + whi);
   let token = document.getElementsByClassName("token" + whi);
   let tokenn = document.getElementsByClassName("token" + nwhi);
   for (let i = 0; i < token.length; i++) {
     token[i].style.backgroundColor = "transparent";
     token[i].style.color = "black";
   }
   var t = parseInt(document.getElementById("count" + whi).innerText);
   var t = t + a;
   document.getElementById("count" + whi).innerText = t;
   if (t <= 9) {
     var ear = document.getElementById("c" + "0" + t).innerHTML;
     document.getElementById("c" + "0" + t).innerHTML = "<div class='token" + whi + "'>" + ear + "</div>";
     token[token.length - 1].style.display = "inline-block";
   }
   else if (t > 9 && t <= 100) {
     var ear = document.getElementById("c" + t).innerHTML;
     document.getElementById("c" + t).innerHTML = "<div class='token" + whi + "'>" + ear + "</div>";
     token[token.length - 1].style.display = "block";
   }
   document.getElementById("cov" + nwhi).style.visibility = "hidden";
   cov.style.visibility = "visible";
   var tkd = document.getElementsByClassName("tokend");
if (tkd.length >= 2) {
  if (countu.innerText === countd.innerText) {
    tkd[tkd.length - 2].style.height = "5vh";
    tkd[tkd.length - 2].style.width = "5vh";
  } else {
    tkd[tkd.length - 2].style.height = "4vh";
    tkd[tkd.length - 2].style.width = "4vh";
  }
}
 }