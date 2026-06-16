let active, nameu, named, count, times, ctimes, etimes;
nameu = "player 1";
named = "player 2";
active = "x";
ctimes = 0;

function chck() {
    for (var i = 0; i <= 8; i++) {
        document.getElementById(i + "x").style.display = "none";
        document.getElementById(i + "o").style.display = "none";
        document.getElementById(i).innerText = "";
    }
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

function mark(no) {
    let x = document.getElementById(no + "x");
    let o = document.getElementById(no + "o");
    if (x.style.display == "none" && o.style.display == "none") {
        if (active == "x") {
            x.style.display = "block";
            document.getElementById(no).innerText = "x";
            active = "o";
            count++;
            document.getElementById("turn1").style.display = "none";
            document.getElementById("turn2").style.display = "block";
        } else if (active == "o") {
            o.style.display = "block";
            document.getElementById(no).innerText = "o";
            active = "x";
            count++;
            document.getElementById("turn2").style.display = "none";
            document.getElementById("turn1").style.display = "block";
        }
        check();
    }
}
function check() {
    var zero = document.getElementById(0).innerText;
    var one = document.getElementById(1).innerText;
    var two = document.getElementById(2).innerText;
    var three = document.getElementById(3).innerText;
    var four = document.getElementById(4).innerText;
    var five = document.getElementById(5).innerText;
    var six = document.getElementById(6).innerText;
    var seven = document.getElementById(7).innerText;
    var eight = document.getElementById(8).innerText;
    var c = document.getElementById(active);
    var a = parseInt(c.innerText);
    if (zero == one && one == two && zero != "") { c.innerText = a + 1; win("w"); }
    else if (three == four && four == five && three != "") { c.innerText = a + 1; win("w"); }
    else if (six == seven && seven == eight && six != "") { c.innerText = a + 1; win("w"); }
    else if (zero == three && three == six && zero != "") { c.innerText = a + 1; win("w"); }
    else if (one == four && four == seven && one != "") { c.innerText = a + 1; win("w"); }
    else if (two == five && five == eight && two != "") { c.innerText = a + 1; win("w"); }
    else if (zero == four && four == eight && zero != "") { c.innerText = a + 1; win("w"); }
    else if (two == four && four == six && two != "") { c.innerText = a + 1; win("w"); }
    else if (count == 9) { win("d"); }
}

function win(whi) {
    var wname;
    document.getElementById("cov").style.display = "block";
    if (whi == "w") {
        if (active == "o") wname = nameu;
        if (active == "x") wname = named;
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
    document.getElementById("x").innerText = 0;
    document.getElementById("o").innerText = 0;
    document.getElementById("psediv").style.display = "none";
    document.getElementById("turn2").style.display = "none";
    document.getElementById("turn1").style.display = "block";
    active = "x";
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
    named = document.getElementById("p2").value.toUpperCase();
    times = document.getElementById("nt").value;
    etimes = times;
    document.getElementById("game-board").style.visibility = "visible";
    document.getElementById("choose").style.display = "none";
    document.getElementById("extra").style.display = "block";
    document.getElementById("naam1").innerText = nameu;
    document.getElementById("naam2").innerText = named;
    document.getElementById("perx").innerText = times;
    document.getElementById("pero").innerText = times;
}

function winner() {
    document.getElementById("winner").style.display = "block";
    var p1 = document.getElementById("o").innerText;
    var p2 = document.getElementById("x").innerText;
    if (p1 > p2) {
        document.getElementById("win1").innerHTML = "<div class='score'>(" + p1 + "/" + times + ")</div>" + nameu;
        document.getElementById("win2").innerHTML = "<div class='score'>(" + p2 + "/" + times + ")</div>" + named;
    }
    else if (p2 > p1) {
        document.getElementById("win1").innerHTML = "<div class='score'>(" + p2 + "/" + times + ")</div>" + named;
        document.getElementById("win2").innerHTML = "<div class='score'>(" + p1 + "/" + times + ")</div>" + nameu;
    }
    else {
        document.getElementById("win1").innerText = "<div class='score'>(" + p1 + "/" + times + ")</div>" + "DRAW";
        document.getElementById("win2").innerText = "<div class='score'>(" + p2 + "/" + times + ")</div>" + "DRAW";
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
    document.getElementById("perx").innerText = times;
    document.getElementById("pero").innerText = times;
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