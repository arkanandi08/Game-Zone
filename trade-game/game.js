let playernumber;
function next() {
    document.getElementById("start").style.display = "none";
    document.getElementById("next").style.display = "block";
    document.getElementById("t1").focus();
}
function back() {
    document.getElementById("start").style.display = "block";
    document.getElementById("next").style.display = "none";
}

function nxtchck() {
    document.forms["f1"].requestSubmit();
}

function optdis(w) {
    if (w == 1) var a = parseInt(f1.s1.value);
    if (w == 2) var a = parseInt(f1.s2.value);
    if (w == 3) var a = parseInt(f1.s3.value);
    if (w == 4) var a = parseInt(f1.s4.value);
    for (var i = 1; i <= 4; i++) {
        document.getElementById("s" + i).options[a].disabled = true;
    }
}

function play() {
    alert("bye");
}

function rset() {
    document.getElementById('next').reset()
    for (var i = 1; i <= 4; i++) {
        let s = document.getElementById("s" + i);
        for (let a = 1; a < 6; a++) {
            s.options[a].disabled = false;
        }
    }
    playerno(4);
}

function playerno(whi){
    var i;
    for(i=2;i<=4;i++){
        document.getElementById("p"+i).style.display = "block";
        document.getElementById("t"+i).required = true;
        document.getElementById("s"+i).required = true;
    }
    for(i=whi+1;i<=4;i++){
        document.getElementById("p"+i).style.display = "none";
        document.getElementById("t"+i).required = false;
        document.getElementById("s"+i).required = false;
    }
    playernumber = whi;
}