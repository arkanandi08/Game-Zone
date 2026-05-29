function check() {
    document.getElementById("aside").style.width = "3vh";
}

function aside() {
    var a = document.getElementById("aside").style.width;
    let aside = document.getElementById("aside");
    if (a == "3vh") {
        document.getElementById("aside").style.width = "22vh";
        let divs = document.querySelectorAll("#aside div");
        divs.forEach(div => {
            div.style.display = "inline";
        });
    }
    else {
        document.getElementById("aside").style.width = "3vh";
        let divs = document.querySelectorAll("#aside div");
        divs.forEach(div => {
            div.style.display = "none";
        });
    }
}

function caside() {
    var a = document.getElementById("aside").style.width;
    let b = document.getElementsByClassName("game-card");
    if (a == "3vh") {
        document.getElementById("aside").style.left = "-3vh"
        document.getElementById("aside").style.width = "0px";
        document.getElementById("nav").style.left = "3vh";
        document.getElementById("games").style.left = "3vh";
        for (let i = 0; i < b.length; i++) {
            b[i].style.left = "2.5vh";
        }
        document.getElementById("closemenu").style.display = "none";
        document.getElementById("openmenu").style.display = "block";
    }
    else {
        document.getElementById("aside").style.width = "3vh";
        document.getElementById("aside").style.left = "0";
        document.getElementById("nav").style.left = "9vh";
        document.getElementById("games").style.left = "10vh";
        for (let i = 0; i < b.length; i++) {
            b[i].style.left = "10vh";
        }
        document.getElementById("openmenu").style.display = "none";
        document.getElementById("closemenu").style.display = "block";
    }
}

function play(gm) {
    if (gm == 'sal') {
        window.location.href = "/Ludo/snake and ladders.html"
    }
    if (gm == 'ludo') {
        window.location.href = "/Ludo/ludo.html"
    }
        if (gm == 'pag') {
        window.location.href = "/Pokemon/Pokemon Ash Gray.html"
    }

    if (gm == 'pokemon') {
        window.location.href = "/Pokemon/game.html"
    }
}