//let nameu = prompt("Enter Name Of first Player");
//let named = prompt("Enter Name Of second Player");

let nameu;
let named;
let nname;
let bu = false;
let bd = false;

function enter() {
  nameu = document.getElementById("uname").value;
  named = document.getElementById("dname").value;
  document.getElementById("start").style.display = "none";
  document.getElementById("game").style.display = "block";
  start();
}

function frnd() {
  document.getElementById("f1").style.display = "none";
  document.getElementById("f2").style.display = "inline-block";
  document.getElementById("uname").focus();
}

function comp() {
  document.getElementById("f1").style.display = "none";
  document.getElementById("f3").style.display = "inline-block";
  document.getElementById("nname").focus();
}

function enter2() {
  nname = document.getElementById("nname").value;
  document.getElementById("start").style.display = "none";
  document.getElementById("game").style.display = "block";
  start2();
}

function capital(a) {
  str = document.getElementById(a + "name").value;
  document.getElementById(a + "name").value = str.toUpperCase();
}
function start() {
  if (nameu == undefined || nameu == "") {
    nameu = "PLAYER 1";
    document.getElementById("nameu").innerText = nameu;
  } else {
    document.getElementById("nameu").innerText = nameu;
  }
  if (named == undefined || named == "") {
    named = "PLAYER 2";
    document.getElementById("named").innerText = named;
  } else {
    document.getElementById("named").innerText = named;
  }
}
function start2() {
  if (nname == undefined || nname == "") {
    nameu = "PLAYER";
    document.getElementById("nameu").innerText = nameu;
  } else {
    nameu = named;
    document.getElementById("nameu").innerText = nname;
  }
  named = "COMPUTER";
  document.getElementById("named").innerText = named;
  document.getElementById("ncovd").style.visibility = "visible";
}

function roll(a) {
    var cov = document.getElementById("cov" + a);
    cov.style.visibility = "visible";
  var dice = document.getElementById("dice" + a);
  for (let i = 1; i <= 6; i++) {
    setTimeout(function () {
      dice.innerHTML = "<img src='die" + i + ".png' alt=" + i + ">";
    }, i * 100);
  }
  window.setTimeout(chck, 700, a);
}

function chck(whi) {
  var begin;
  if (whi == "u") {
    var nwhi = "d";
    begin = bu;
  }
  else if (whi == "d") {
    var nwhi = "u";
    begin = bd;
  }
  let a = Math.floor(Math.random() * 6) + 1;
  // let a = 100;
  var dice = document.getElementById("dice" + whi);
  dice.innerHTML = "<img src='die" + a + ".png' alt='" + a + "'>";
  if (a != 1) {
    var cov = document.getElementById("cov" + whi);
    cov.style.visibility = "visible";
  }
  if (a == 1 && !begin) {
    if (whi == "u") {
      bu = true;
      begin = bu;
    }
    else if (whi == "d") {
      bd = true;
      begin = bd;
    }
  }
  if (!begin) {
    document.getElementById("cov" + nwhi).style.visibility = "hidden";
    if (document.getElementById("ncovd").style.visibility == "visible") {
      if (whi == "u" && a != 1) {
        window.setTimeout(roll, 1000, "d");
      }
    }
  }
  if (begin) {
    let token = document.getElementById("token" + whi);
    var l = parseFloat(getComputedStyle(token).left);
    var posx = Math.round((l / window.innerHeight) * 100 / 8) - a;
    var b = parseFloat(getComputedStyle(token).bottom);
    var posy = Math.round((b / window.innerHeight) * 100 / 8);
    if (posx >= 1 || posy < 9) {
      for (i = 1; i <= a; i++) {
        window.setTimeout(move, i * 500, whi);
      }
      window.setTimeout(check, (a + 1) * 500, whi, a);
      document.getElementById("tokenu").style.marginLeft = "-6.15vh";
      document.getElementById("tokenu").style.marginBottom = "1.85vh";
      document.getElementById("tokend").style.marginLeft = "-6.15vh";
      document.getElementById("tokend").style.marginBottom = "1.85vh";
    }
    else {
      alert("NOT ELIGIBLE !!");
      check(whi);
    }
  }
}

function move(whi) {
  let token = document.getElementById("token" + whi);
  var l = parseFloat(getComputedStyle(token).left);
  var vl = (l / window.innerHeight) * 100;
  var x = Math.round(vl / 8);
  var d = parseFloat(getComputedStyle(token).bottom);
  var vd = (d / window.innerHeight) * 100;
  var y = Math.round(vd / 8) + 1;
  if (x > 1 || y < 10) {
    if (x > 9 && y % 2 != 0) {
      token.style.bottom = (Math.round(vd) + 8) + "vh";
    }
    else if (x < 2 && y % 2 == 0) {
      token.style.bottom = (Math.round(vd) + 8) + "vh";
    }
    else {
      if (y % 2 != 0) {
        token.style.left = Math.round(vl) + 8 + "vh";
      }
      else {
        token.style.left = Math.round(vl) - 8 + "vh";
      }
    }
  }
}

function check(whi, a) {
  if (whi == "u") {
    var nwhi = "d";
    var col = nameu;
  }
  else if (whi == "d") {
    var nwhi = "u";
    var col = named;
  }
  let token = document.getElementById("token" + whi);
  let tokenn = document.getElementById("token" + nwhi);
  var l = parseFloat(getComputedStyle(token).left);
  var posx = Math.round((l / window.innerHeight) * 100 / 8);
  var b = parseFloat(getComputedStyle(token).bottom);
  var posy = Math.round((b / window.innerHeight) * 100 / 8);
  var ln = parseFloat(getComputedStyle(tokenn).left);
  var posxn = Math.round((ln / window.innerHeight) * 100 / 8);
  var bn = parseFloat(getComputedStyle(tokenn).bottom);
  var posyn = Math.round((bn / window.innerHeight) * 100 / 8);
  //ladders
  // ladders 21-82, 62-96, 43-77, 19-38, 8-26, 28-53, 66-87, 54-88, 50-91, 36-57 
  if (posy == 0 && posx == 8) {
    token.style.left = "48vh";
    token.style.bottom = "16vh";
    a = 1;
  }
  if (posy == 2 && posx == 1) {
    token.style.left = "16vh";
    token.style.bottom = "64vh";
    a = 1;
  }
  if (posy == 6 && posx == 2) {
    token.style.left = "40vh";
    token.style.bottom = "72vh";
    a = 1;
  }
  if (posy == 4 && posx == 3) {
    token.style.left = "32vh";
    token.style.bottom = "56vh";
    a = 1;
  }
  if (posy == 1 && posx == 2) {
    token.style.left = "24vh";
    token.style.bottom = "24vh";
    a = 1;
  }
  if (posy == 2 && posx == 8) {
    token.style.left = "64vh";
    token.style.bottom = "40vh";
    a = 1;
  }
  if (posy == 6 && posx == 6) {
    token.style.left = "56vh";
    token.style.bottom = "64vh";
    a = 1;
  }
  if (posy == 5 && posx == 7) {
    token.style.left = "64vh";
    token.style.bottom = "64vh";
    a = 1;
  }
  if (posy == 4 && posx == 10) {
    token.style.left = "80vh";
    token.style.bottom = "72vh";
    a = 1;
  }
  if (posy == 3 && posx == 5) {
    token.style.left = "32vh";
    token.style.bottom = "40vh";
    a = 1;
  }

  //snakes
  if (posy == 9 && posx == 3) {
    token.style.left = "64vh";
    token.style.bottom = "8vh"
  }
  if (posy == 9 && posx == 8) {
    token.style.left = "32vh";
    token.style.bottom = "24vh"
  }
  if (posy == 8 && posx == 3) {
    token.style.left = "16vh";
    token.style.bottom = "16vh"
  }
  if (posy == 5 && posx == 2) {
    token.style.left = "24vh";
    token.style.bottom = "8vh"
  }
  if (posy == 6 && posx == 4) {
    token.style.left = "32vh";
    token.style.bottom = "16vh"
  }
  if (posy == 4 && posx == 6) {
    token.style.left = "48vh";
    token.style.bottom = "8vh"
  }
  //snakes 98-13, 93-37, 83-22, 59-18, 64-24, 46-15, 68-2, 69-3, 48-9, 52-11, 89-51, 
  if (posy == 6 && posx == 8) {
    token.style.left = "16vh";
    token.style.bottom = "0vh"
  }
  if (posy == 6 && posx == 9) {
    token.style.left = "64vh";
    token.style.bottom = "24vh"
  }
  if (posy == 4 && posx == 8) {
    token.style.left = "72vh";
    token.style.bottom = "0vh"
  }
  if (posy == 5 && posx == 9) {
    token.style.left = "80vh";
    token.style.bottom = "8vh"
  }
  if (posy == 8 && posx == 9) {
    token.style.left = "80vh";
    token.style.bottom = "40vh"
  }
  if (posx == posxn && posy == posyn) {
    token.style.marginLeft = "-5vh";
    token.style.marginBottom = "3vh"
    tokenn.style.marginLeft = "-7vh";
    tokenn.style.marginBottom = "1vh"
  }
  if (posx > 1 || posy < 9) {
    if (a != 1) {
      document.getElementById("cov" + nwhi).style.visibility = "hidden";
      if (document.getElementById("ncovd").style.visibility == "visible") {
        if (whi == "u") {
          window.setTimeout(roll, 1000, "d");
        }
      }
    }
    else {
      document.getElementById("cov" + whi).style.visibility = "hidden";
      if (document.getElementById("ncovd").style.visibility == "visible") {
        if (whi == "d") {
          window.setTimeout(roll, 1000, "d");
        }
      }
    }
  }
  else {
    alert("Congratulations!! " + col + " Won the MATCH !!!")
  }
}