let active, nameu, named, count, times, ctimes;
nameu = "player 1";
named = "player 2";
active = "x";
ctimes = 0;

function chck() {
    count = 0;
    document.getElementById("cov").style.display = "none";
    document.getElementById("covd").style.display = "none";
    document.getElementById("pause").innerHTML = "<i class='fa fa-pause'></i>";
    document.getElementById("draw").style.display = "none";
    document.getElementById("psediv").style.display = "none";
}

function load() {
    document.getElementById("extra").style.display = "none";
    document.getElementById("game-board").style.visibility = "hidden";
    chck();
}

function win(whi) {
    var wname;
    document.getElementById("cov").style.display = "block";
    if (whi == "w") {
        if (active == "d") wname = nameu;
        if (active == "u") wname = named;
        document.getElementById("iwinner").innerText = wname;
        document.getElementById("covd").style.display = "block";
        ctimes++;
    } else {
        document.getElementById("draw").style.display = "block";
    }
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
    document.getElementById("psediv").style.display = "none";
    document.getElementById("turn2").style.display = "none";
    document.getElementById("turn1").style.display = "block";
    active = "u";
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
//     if(f1.r1.value == "times"){
//     times = document.getElementById("nt").value;
// } else {
//     times = "-"
// }
    document.getElementById("game-board").style.visibility = "visible";
    document.getElementById("choose").style.display = "none";
    document.getElementById("extra").style.display = "block";
    document.getElementById("naam1").innerText = nameu;
    document.getElementById("naam2").innerText = named;
    document.getElementById("peru").innerText = times;
    document.getElementById("perd").innerText = times;
}

function winner() {
    document.getElementById("winner").style.display = "block";
    var p1 = document.getElementById("d").innerText;
    var p2 = document.getElementById("u").innerText;
    if (p1 > p2) {
        document.getElementById("win1").innerText = nameu;
        document.getElementById("win2").innerText = named;
    }
    else if (p2 > p1) {
        document.getElementById("win1").innerText = named;
        document.getElementById("win2").innerText = nameu;
    }
    else {
        document.getElementById("win1").innerText = "DRAW";
        document.getElementById("win2").innerText = "DRAW";
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
        document.getElementById("peru").innerText = times;
        document.getElementById("perd").innerText = times;
        document.getElementById("tie").style.display = "none";
        replay();
    } else if (a == "n") {
        document.getElementById("tie").style.display = "none";
    }
}


function home() {
    document.getElementById("winner").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    document.getElementById("game-board").style.visibility = "hidden";
    document.getElementById("choose").style.display = "block";
    document.getElementById("start").style.display = "none";
    restart();
}

function replay() {
    document.getElementById("winner").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    document.getElementById("extra").style.display = "block";
    restart();
}