let nameu, named, times, ctimes, etimes;
named = "COMPUTER";
ctimes = 0;

function chck() {
    document.getElementById("cov").style.display = "none";
    document.getElementById("covd").style.display = "none";
    document.getElementById("pause").innerHTML = "<i class='fa fa-pause'></i>";
    document.getElementById("draw").style.display = "none";
    document.getElementById("psediv").style.display = "none";
    document.getElementById("uwin").style.display = "none";
    document.getElementById("ulos").style.display = "none";
    document.getElementById("udraw").style.display = "none";
}

function load() {
    document.getElementById("extra").style.display = "none";
    document.getElementById("game-board").style.visibility = "hidden";
    chck();
}

function check(whi) {
    let u = parseInt(document.getElementById("u").innerText);
    let d = parseInt(document.getElementById("d").innerText);
    if (whi == 1) {
        document.getElementById("popt").innerText = "ROCK";
    }
    else if (whi == 2) {
        document.getElementById("popt").innerText = "PAPER";
    }
    else if (whi == 3) {
        document.getElementById("popt").innerText = "SCISSORS";
    }
    let comp = Math.floor(Math.random() * 3) + 1;
    if (comp == 1) {
        document.getElementById("copt").innerText = "ROCK";
    }
    else if (comp == 2) {
        document.getElementById("copt").innerText = "PAPER";
    }
    else if (comp == 3) {
        document.getElementById("copt").innerText = "SCISSORS";
    }
    var win;
    if (whi == 1 && comp == 1) win = 0;
    else if (whi == 1 && comp == 2) win = -1;
    else if (whi == 1 && comp == 3) win = 1;
    if (whi == 2 && comp == 1) win = 1;
    else if (whi == 2 && comp == 2) win = 0;
    else if (whi == 2 && comp == 3) win = -1;
    if (whi == 3 && comp == 1) win = -1;
    else if (whi == 3 && comp == 2) win = 1;
    else if (whi == 3 && comp == 3) win = 0;
    if (win == -1) {
        document.getElementById("ulos").style.display = "block";
        document.getElementById("d").innerText = d + 1;
        ctimes = d + 1;
    }
    else if (win == 0) {
        document.getElementById("udraw").style.display = "block";
    }
    else if (win == 1) {
        document.getElementById("uwin").style.display = "block";
        document.getElementById("u").innerText = u + 1;
        ctimes = u + 1;
    }
    document.getElementById("cov").style.display = "block";
    document.getElementById("covd").style.display = "block";
    if (ctimes == times) {
        window.setTimeout(winner, 3000);
    } else {
        window.setTimeout(chck, 3000);
    }
}

function restart() {
    chck();
    document.getElementById("u").innerText = 0;
    document.getElementById("d").innerText = 0;
    ctimes = 0;
}

function pause() {
    var a = document.getElementById("psediv");
    if (a.style.display == "none") {
        a.style.display = "block";
        document.getElementById("pause").innerHTML = "<i class='fa fa-play'></i>"
    }
    else {
        a.style.display = "none";
        document.getElementById("pause").innerHTML = "<i class='fa fa-pause'></i>"
    }
}

function next() {
    document.getElementById("start").style.display = "none";
    document.getElementById("choose").style.display = "block";
    document.getElementById("p1").focus();
}

function play() {
    nameu = document.getElementById("p1").value.toUpperCase();
    if (f1.r1.value == "times") {
        times = document.getElementById("nt").value;
    } else {
        times = "-"
    }
    etimes = times;
    document.getElementById("game-board").style.visibility = "visible";
    document.getElementById("choose").style.display = "none";
    document.getElementById("extra").style.display = "block";
    document.getElementById("naam1").innerText = nameu;
    document.getElementById("naam2").innerText = named;
    document.getElementById("peru").innerText = times;
    document.getElementById("perd").innerText = times;
    document.getElementById("player").innerText = nameu;
}

function winner() {
    document.getElementById("winner").style.display = "block";
    var p1 = parseInt(document.getElementById("u").innerText);
    var p2 = parseInt(document.getElementById("d").innerText);
    if (p1 > p2) {
        document.getElementById("win1").innerHTML = "<div class='score'>(" + p1 + "/" + times + ")</div>" + nameu;
        document.getElementById("win2").innerHTML = "<div class='score'>(" + p2 + "/" + times + ")</div>" + named;
    }
    else if (p2 > p1) {
        document.getElementById("win1").innerHTML = "<div class='score'>(" + p2 + "/" + times + ")</div>" + named;
        document.getElementById("win2").innerHTML = "<div class='score'>(" + p1 + "/" + times + ")</div>" + nameu;
    }
    else {
        document.getElementById("win1").innerHTML = "<div class='score'>(" + p1 + "/" + times + ")</div>" + "DRAW";
        document.getElementById("win2").innerHTML = "<div class='score'>(" + p2 + "/" + times + ")</div>" + "DRAW";
        window.setTimeout(tie, 2000);
    }
    document.getElementById("extra").style.display = "none";
    document.getElementById("game-area").style.display = "none";
    document.getElementById("cov").style.display = "none";
    document.getElementById("psediv").style.display = "none";
    document.getElementById("pause").innerHTML = "<i class='fa fa-pause'></i>"
}

function tie() {
    document.getElementById("tie").style.display = "block";
}

function tiebreak(a) {
    if (a == "y") {
        times = 1;
        helper();
    } else if (a == "n") {
        document.getElementById("tie").style.display = "none";
    }
}

function helper() {
    document.getElementById("peru").innerText = times;
    document.getElementById("perd").innerText = times;
    document.getElementById("tie").style.display = "none";
    document.getElementById("winner").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    document.getElementById("extra").style.display = "block";
    restart();
}

function home() {
    document.getElementById("winner").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    document.getElementById("game-board").style.visibility = "hidden";
    document.getElementById("choose").style.display = "block";
    document.getElementById("start").style.display = "none";
    document.getElementById("tie").style.display = "none";
    restart();
}

function replay() {
    times = etimes;
    helper();
}