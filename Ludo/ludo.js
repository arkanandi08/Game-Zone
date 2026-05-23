let nameg;
let namey;
let namer;
let nameb;
let gstar = false;
let ystar = false;
let rstar = false;
let bstar = false;
let diceno = 0;
let active;
let next;
let movestart = 0;
let khatam = 0;
let rank1, rank2, rank3, rank4;
let tokens = [
    { id: "r1", color: "r", posx: 1, posy: 1, playing: 0, end: 0, safe: 0 },
    { id: "r2", color: "r", posx: 1, posy: 1, playing: 0, end: 0, safe: 0 },
    { id: "r3", color: "r", posx: 1, posy: 1, playing: 0, end: 0, safe: 0 },
    { id: "r4", color: "r", posx: 1, posy: 1, playing: 0, end: 0, safe: 0 },
    { id: "g1", color: "g", posx: 1, posy: 1, playing: 0, end: 0, safe: 0 },
    { id: "g2", color: "g", posx: 1, posy: 1, playing: 0, end: 0, safe: 0 },
    { id: "g3", color: "g", posx: 1, posy: 1, playing: 0, end: 0, safe: 0 },
    { id: "g4", color: "g", posx: 1, posy: 1, playing: 0, end: 0, safe: 0 },
    { id: "b1", color: "b", posx: 1, posy: 1, playing: 0, end: 0, safe: 0 },
    { id: "b2", color: "b", posx: 1, posy: 1, playing: 0, end: 0, safe: 0 },
    { id: "b3", color: "b", posx: 1, posy: 1, playing: 0, end: 0, safe: 0 },
    { id: "b4", color: "b", posx: 1, posy: 1, playing: 0, end: 0, safe: 0 },
    { id: "y1", color: "y", posx: 1, posy: 1, playing: 0, end: 0, safe: 0 },
    { id: "y2", color: "y", posx: 1, posy: 1, playing: 0, end: 0, safe: 0 },
    { id: "y3", color: "y", posx: 1, posy: 1, playing: 0, end: 0, safe: 0 },
    { id: "y4", color: "y", posx: 1, posy: 1, playing: 0, end: 0, safe: 0 },
];

function enter() {
    namer = document.getElementById("rname").value;
    nameb = document.getElementById("bname").value;
    namey = document.getElementById("yname").value;
    nameg = document.getElementById("gname").value;
    document.getElementById("start").style.display = "none";
    document.getElementById("game").style.display = "block";
    start();
    fullscreen();
}

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

function frnd() {
    document.getElementById("f1").style.display = "none";
    document.getElementById("f2").style.display = "inline-block";
    document.getElementById("rname").focus();
}

function comp() {
    document.getElementById("f1").style.display = "none";
    document.getElementById("f3").style.display = "inline-block";
}

function enter2() {
    document.getElementById("f3").style.display = "none";
    document.getElementById("f1").style.display = "inline-block";
}

function capital(a) {
    let str = document.getElementById(a + "name").value;
    document.getElementById(a + "name").value = str.toUpperCase();
}
function start() {
    var count = 1;
    if (namer == undefined || namer == "") {
        namer = "PLAYER " + count;
        count++;
    }
    document.getElementById("namer").innerText = namer;
    if (nameb == undefined || nameb == "") {
        nameb = "PLAYER " + count;
        count++;
    }
    document.getElementById("nameb").innerText = nameb;
    if (namey == undefined || namey == "") {
        namey = "PLAYER " + count;
        count++;
    }
    document.getElementById("namey").innerText = namey;
    if (nameg == undefined || nameg == "") {
        nameg = "PLAYER " + count;
        count++;
    }
    document.getElementById("nameg").innerText = nameg;
}
// function start2() {
//     if (nname == undefined || nname == "") {
//         nameu = "PLAYER";
//         document.getElementById("nameu").innerText = nameu;
//     } else {
//         nameu = named;
//         document.getElementById("nameu").innerText = nname;
//     }
//     named = "COMPUTER";
//     document.getElementById("named").innerText = named;
//     document.getElementById("ncovd").style.visibility = "visible";
// }

function roll(whi) {
    var cov = document.getElementById("cov" + whi);
    cov.style.visibility = "visible";
    var dice = document.getElementById("dice" + whi);
    for (let i = 1; i <= 6; i++) {
        setTimeout(function () {
            dice.innerHTML = "<img src='die" + i + ".png' alt=" + i + ">";
        }, i * 100);
    }
    window.setTimeout(chck, 700, whi);
}

function chck(whi) {
    active = whi;
    var begin;

    if (whi == "r") {
        next = "b";
        begin = rstar;
    }
    else if (whi == "b") {
        next = "y";
        begin = bstar;
    }
    else if (whi == "y") {
        next = "g";
        begin = ystar;
    }
    else if (whi == "g") {
        next = "r";
        begin = gstar;
    }

    let a = Math.floor(Math.random() * 6) + 1;
    // let a = 6;

    var dice = document.getElementById("dice" + whi);
    dice.innerHTML = "<img src='die" + a + ".png' alt='" + a + "'>";
    diceno = a;

    if (a == 6 && !begin) {
        if (whi == "r") {
            rstar = true;
            begin = rstar;
        }
        else if (whi == "b") {
            bstar = true;
            begin = bstar;
        }
        else if (whi == "y") {
            ystar = true;
            begin = ystar;
        }
        else if (whi == "g") {
            gstar = true;
            begin = gstar;
        }
    }

    if (!begin) {
        document.getElementById("cov" + next).style.visibility = "hidden";
        return;
    }

    var count = 0;   // safe not reached
    var countp = 0;  // playing tokens
    var counte = 0;  // unfinished tokens

    tokens.filter(t => t.color === whi).forEach(t => {
        if (t.safe === 0) count++;
        if (t.playing === 1) countp++;
        if (t.end === 0) counte++;
    });

    if (counte == 0) {
        document.getElementById("cov" + next).style.visibility = "hidden";
        return;
    }

    if (diceno == 6 && count != 0) {
        return;
    }

    if (countp === 1 && count != 0) {
        let tok = tokens.find(t => t.color === whi && t.playing === 1);
        movetoken(tok.id);

        if (movestart == 0) {
            nxt(active);
            active = "none";
        }
        return;
    }

    if (count == 0) {
        let moved = false;

        tokens
            .filter(t => t.color === whi && t.playing === 1)
            .forEach(t => {

                let x = t.posx;
                let y = t.posy;
                let blocked = false;

                if (whi == "g" && y == 8 && x < 7 && x + diceno > 7) blocked = true;
                if (whi == "b" && y == 8 && x > 9 && x - diceno < 9) blocked = true;
                if (whi == "r" && x == 8 && y < 7 && y + diceno > 7) blocked = true;
                if (whi == "y" && x == 8 && y > 9 && y - diceno < 9) blocked = true;

                if (!blocked && moved == false) {
                    movetoken(t.id);
                    moved = true;
                }
            });

        if (!moved) {
            nxt(active);
            active = "none";
        }

        return;
    }
}

function movetoken(whi) {
    var konsa = whi.charAt(0);
    if (konsa == active && movestart == 0) {
        let tok = tokens.find(t => t.id === whi);
        let x = tok.posx;
        let y = tok.posy;
        let token = document.getElementById(whi);
        token.style.width = "";
        token.style.transform = "";
        token.style.zIndex = "";
        if (x == 1 && y == 1 && diceno == 6) {
            diceno = 0;
            if (whi == "r1" || whi == "r2" || whi == "r3" || whi == "r4") {
                token.style.marginLeft = -0.6 + "vh";
                token.style.marginBottom = -0.1 + "vh";
                token.style.left = 36 + "vh";
                token.style.bottom = 6 + "vh";
                tok.posx = 7;
                tok.posy = 2;
                tok.playing = 1;
            }
            else if (whi == "b1" || whi == "b2" || whi == "b3" || whi == "b4") {
                token.style.marginLeft = -0.72 + "vh";
                token.style.marginBottom = -0.3 + "vh";
                token.style.left = 78 + "vh";
                token.style.bottom = 36 + "vh";
                tok.posx = 14;
                tok.posy = 7;
                tok.playing = 1;
            }
            else if (whi == "y1" || whi == "y2" || whi == "y3" || whi == "y4") {
                token.style.marginLeft = -0.62 + "vh";
                token.style.marginBottom = -0.3 + "vh";
                token.style.left = 48 + "vh";
                token.style.bottom = 78 + "vh";
                tok.posx = 9;
                tok.posy = 14;
                tok.playing = 1;
            }
            else if (whi == "g1" || whi == "g2" || whi == "g3" || whi == "g4") {
                token.style.marginLeft = -0.59 + "vh";
                token.style.marginBottom = -0.2 + "vh";
                token.style.left = 6 + "vh";
                token.style.bottom = 48 + "vh";
                tok.posx = 2;
                tok.posy = 9;
                tok.playing = 1;
            }
            document.getElementById("cov" + active).style.visibility = "hidden";
            kill(whi);
        } else if (x != 1 || y != 1) {
            if (tok.playing == 1) {
                if (tok.color == "g" && y == 8 && x < 7 && x + diceno > 7) {
                    tok.playing = 0;
                    if (tokens.filter(t => t.color === "g").every(t => t.playing === 0 || t.safe === 1)) {
                        document.getElementById("cov" + next).style.visibility = "hidden";
                        active = "none";
                    }
                    tok.playing = 1;
                    return;
                }
                if (tok.color == "b" && y == 8 && x > 9 && x - diceno < 9) {
                    tok.playing = 0;
                    if (tokens.filter(t => t.color === "b").every(t => t.playing === 0 || t.safe === 1)) {
                        document.getElementById("cov" + next).style.visibility = "hidden";
                        active = "none";
                    }
                    tok.playing = 1;
                    return;
                }
                if (tok.color == "r" && x == 8 && y < 7 && y + diceno > 7) {
                    tok.playing = 0;
                    if (tokens.filter(t => t.color === "r").every(t => t.playing === 0 || t.safe === 1)) {
                        document.getElementById("cov" + next).style.visibility = "hidden";
                        active = "none";
                    }
                    tok.playing = 1;
                    return;
                }
                if (tok.color == "y" && x == 8 && y > 9 && y - diceno < 9) {
                    tok.playing = 0;
                    if (tokens.filter(t => t.color === "y").every(t => t.playing === 0 || t.safe === 1)) {
                        document.getElementById("cov" + next).style.visibility = "hidden";
                        active = "none";
                    }
                    tok.playing = 1;
                    return;
                }
                movestart = 1;
                for (let i = 1; i <= diceno; i++) {
                    window.setTimeout(move, i * 500, whi);
                }
                window.setTimeout(check, (diceno + 1) * 500, whi);
                window.setTimeout(arrange, (diceno + 1) * 500, x, y);
            }
        }
    }
}

function move(whi) {
    if (movestart == 1) {
        let token = document.getElementById(whi);
        var l = parseFloat(getComputedStyle(token).left);
        var vl = (l / window.innerHeight) * 100;
        var x = Math.round(vl / 6) + 1;
        var d = parseFloat(getComputedStyle(token).bottom);
        var vd = (d / window.innerHeight) * 100;
        var y = Math.round(vd / 6) + 1;
        if (x == 7) {
            token.style.bottom = (Math.round(vd) + 6) + "vh";
            if (y == 6) {
                token.style.bottom = (Math.round(vd) + 6) + "vh";
                token.style.left = (Math.round(vl) - 6) + "vh";
            }
            if (y == 15) {
                token.style.bottom = (Math.round(vd)) + "vh";
                token.style.left = (Math.round(vl) + 6) + "vh";
            }
        }
        if (x == 9) {
            token.style.bottom = (Math.round(vd) - 6) + "vh";
            if (y == 10) {
                token.style.bottom = (Math.round(vd) - 6) + "vh";
                token.style.left = (Math.round(vl) + 6) + "vh";
            }
            if (y == 1) {
                token.style.bottom = (Math.round(vd)) + "vh";
                token.style.left = (Math.round(vl) - 6) + "vh";
            }
        }
        if (y == 7) {
            token.style.left = (Math.round(vl) - 6) + "vh";
            if (x == 1) {
                token.style.bottom = (Math.round(vd) + 6) + "vh";
                token.style.left = (Math.round(vl)) + "vh";
            }
            if (x == 10) {
                token.style.bottom = (Math.round(vd) - 6) + "vh";
                token.style.left = (Math.round(vl) - 6) + "vh";
            }
        }
        if (y == 9) {
            token.style.left = (Math.round(vl) + 6) + "vh";
            if (x == 6) {
                token.style.bottom = (Math.round(vd) + 6) + "vh";
                token.style.left = (Math.round(vl) + 6) + "vh";
            }
            if (x == 15) {
                token.style.bottom = (Math.round(vd) - 6) + "vh";
                token.style.left = (Math.round(vl)) + "vh";
            }
        }
        if (y == 8 && x < 7) {
            if (whi == "g1" || whi == "g2" || whi == "g3" || whi == "g4") {
                token.style.left = (Math.round(vl) + 6) + "vh";
                tokens.find(t => t.id === whi).safe = 1;
            }
            else { token.style.bottom = (Math.round(vd) + 6) + "vh"; }
        }
        if (x == 8 && y > 9) {
            if (whi == "y1" || whi == "y2" || whi == "y3" || whi == "y4") {
                token.style.bottom = (Math.round(vd) - 6) + "vh";
                tokens.find(t => t.id === whi).safe = 1;
            }
            else { token.style.left = (Math.round(vl) + 6) + "vh"; }
        }
        if (y == 8 && x > 9) {
            if (whi == "b1" || whi == "b2" || whi == "b3" || whi == "b4") {
                token.style.left = (Math.round(vl) - 6) + "vh";
                tokens.find(t => t.id === whi).safe = 1;
            }
            else { token.style.bottom = (Math.round(vd) - 6) + "vh"; }
        }
        if (x == 8 && y < 7) {
            if (whi == "r1" || whi == "r2" || whi == "r3" || whi == "r4") {
                token.style.bottom = (Math.round(vd) + 6) + "vh";
                tokens.find(t => t.id === whi).safe = 1;
            }
            else { token.style.left = (Math.round(vl) - 6) + "vh"; }
        }
    }
}

function check(whi) {
    movestart = 0;
    let tok = tokens.find(t => t.id === whi);
    let token = document.getElementById(whi);
    var l = parseFloat(getComputedStyle(token).left);
    var vl = (l / window.innerHeight) * 100;
    var x = Math.round(vl / 6) + 1;
    var d = parseFloat(getComputedStyle(token).bottom);
    var vd = (d / window.innerHeight) * 100;
    var y = Math.round(vd / 6) + 1;
    tok.posx = x;
    tok.posy = y;
    if (tok.posx == 7 && tok.posy == 8) {
        tok.end = 1;
        tok.playing = 0;
        tok.posx = 0;
        tok.posy = 0;
        document.getElementById("cov" + active).style.visibility = "hidden";
        diceno = 0;
    }
    if (tok.posx == 8 && tok.posy == 9) {
        tok.end = 1;
        tok.playing = 0;
        tok.posx = 0;
        tok.posy = 0;
        document.getElementById("cov" + active).style.visibility = "hidden";
        diceno = 0;
    }
    if (tok.posx == 9 && tok.posy == 8) {
        tok.end = 1;
        tok.playing = 0;
        tok.posx = 0;
        tok.posy = 0;
        document.getElementById("cov" + active).style.visibility = "hidden";
        diceno = 0;
    }
    if (tok.posx == 8 && tok.posy == 7) {
        tok.end = 1;
        tok.playing = 0;
        tok.posx = 0;
        tok.posy = 0;
        document.getElementById("cov" + active).style.visibility = "hidden";
        diceno = 0;
    }
    ["r", "g", "b", "y"].forEach(color => {
        let win = tokens
            .filter(t => t.color === color)
            .every(t => t.end === 1);

        if (win) {
            alert(color.toUpperCase() + " WINS 🎉");
            khatam++;
            nxt(active);
            document.getElementById("cov" + active).style.visibility = "visible";
            tokens
                .filter(t => t.color === color)
                .forEach(t => t.end = 5);
        }
    });
    if (diceno != 0) {
        kill(whi);
    }
}

function kill(whi) {
    let tok = tokens.find(w => w.id === whi);
    var star = 0;
    if (tok.posx == 7 && tok.posy == 2) star = 1;
    if (tok.posx == 9 && tok.posy == 3) star = 1;
    if (tok.posx == 7 && tok.posy == 13) star = 1;
    if (tok.posx == 9 && tok.posy == 14) star = 1;
    if (tok.posx == 3 && tok.posy == 7) star = 1;
    if (tok.posx == 2 && tok.posy == 9) star = 1;
    if (tok.posx == 13 && tok.posy == 9) star = 1;
    if (tok.posx == 14 && tok.posy == 7) star = 1;
    if (star == 0) {
        tokens.forEach(t => {
            if (t.id === tok.id) return;
            if (t.posx === tok.posx && t.posy === tok.posy) {
                if (t.color === tok.color) return;
                t.playing = 0;
                document.getElementById(t.id).style = "";
                document.getElementById("cov" + active).style.visibility = "hidden";
                diceno = 0;
                t.posx = 1;
                t.posy = 1;
                let h = t.color;
                let hsefull = tokens
                    .filter(c => c.color === h)
                    .every(c => c.playing === 0)
                if (hsefull) {
                    if (h == "r") rstar = false;
                    if (h == "b") bstar = false;
                    if (h == "y") ystar = false;
                    if (h == "g") gstar = false;
                }
                return;
            }
        });
    }
    if (diceno == 0 || diceno == 6) {
        document.getElementById("cov" + active).style.visibility = "hidden";
        diceno = 0;
    } else {
        nxt(active);
        active = "none";
    }
    arrange(tok.posx, tok.posy);
}

function nxt(whi) {
    if (khatam < 3) {
        if (whi == "r") next = "b";
        if (whi == "b") next = "y";
        if (whi == "y") next = "g";
        if (whi == "g") next = "r";
        var count = 0;
        tokens.filter(t => t.color === next).forEach(t => {
            if (t.end === 1) {
                count++;
            }
        });
        if (count === 4) {
            nxt(next);
        } else {
            document.getElementById("cov" + next).style.visibility = "hidden";
        }
    }
    else alert("Khel Khatam !!!")
}

function arrange(posx, posy) {

    let sameCell = tokens.filter(t =>
        t.playing === 1 &&
        t.posx === posx &&
        t.posy === posy
    );

    let count = sameCell.length;

    let width = 7 - (count - 1) * 0.7;
    if (width < 4) width = 4;

    let gap = count <= 4 ? 0.5 : 0;

    let positions = [];

    if (count === 1) {
        positions = [[0, 0]];
    }

    else if (count === 2) {
        positions = [
            [-2, 0],
            [2, 0]
        ];
    }

    else if (count === 3) {
        positions = [
            [0, -2],
            [-2, 2],
            [2, 2]
        ];
    }

    else if (count === 4) {
        positions = [
            [-2, -2], [2, -2],
            [-2, 2], [2, 2]
        ];
    }

    else {
        let cols = Math.ceil(count / 2);

        for (let i = 0; i < count; i++) {

            let row = Math.floor(i / cols);
            let col = i % cols;

            let x = (col - (cols - 1) / 2) * (width + gap);
            let y = row * (width - 1);

            positions.push([x, y]);
        }
    }

    // only 3+ gets pushed up
    let globalPushX = count >= 3 ? 1 : 0;
    let globalPushY = count >= 4 ? -1 : 0;

    sameCell.forEach((tok, i) => {

        let el = document.getElementById(tok.id);

        let x = positions[i][0] + globalPushX;
        let y = positions[i][1] + globalPushY;

        el.style.width = width + "vh";
        el.style.transform = `translate(${x}vh, ${y}vh)`;
        el.style.zIndex = i + 1;
    });
}