let player1 = true;
let player2 = false;
let r1c1 = false;
let r1c2 = false;
let r1c3 = false;
let r2c1 = false;
let r2c2 = false;
let r2c3 = false;
let r3c1 = false;
let r3c2 = false;
let r3c3 = false;

function row1col1() {
    let r1c1v = document.getElementById("r1c1");
    console.log(r1c1v)
    if (player1 && !r1c1) {
        r1c1v.innerHTML = `O`;
        player1 = false;
        player2 = true;
        r1c1 = true;
        playerchange();
    } else if (player2 && !r1c1) {
        r1c1v.innerText = `X`;
        player1 = true;
        player2 = false;
        r1c1 = true;
    } checkwin();
    playerchange();
}
function playagain(){
    reset();
    const a=document.getElementById("winner");
    a.style.visibility="hidden";
}

function row1col2() {
    let r1c2v = document.getElementById("r1c2");
    console.log(r1c2v)
    if (player1 && !r1c2) {
        r1c2v.innerHTML = `O`;
        player1 = false;
        player2 = true;
        r1c2 = true;
        playerchange();
    } else if (player2 && !r1c2) {
        r1c2v.innerText = `X`;
        player1 = true;
        player2 = false;
        r1c2 = true;
    } checkwin();
    playerchange();
}

function row1col3() {
    let r1c3v = document.getElementById("r1c3");
    console.log(r1c3v)
    if (player1 && !r1c3) {
        r1c3v.innerHTML = `O`;
        player1 = false;
        player2 = true;
        r1c3 = true;
        playerchange();
    } else if (player2 && !r1c3) {
        r1c3v.innerText = `X`;
        player1 = true;
        player2 = false;
        r1c3 = true;
    } checkwin();
    playerchange();
}

function row2col1() {
    let r2c1v = document.getElementById("r2c1");
    console.log(r2c1v)
    if (player1 && !r2c1) {
        r2c1v.innerHTML = `O`;
        player1 = false;
        player2 = true;
        r2c1 = true;
        playerchange();
    } else if (player2 && !r2c1) {
        r2c1v.innerText = `X`;
        player1 = true;
        player2 = false;
        r2c1 = true;
    } checkwin();
    playerchange();
}

function row2col2() {
    let r2c2v = document.getElementById("r2c2");
    console.log(r2c2v)
    if (player1 && !r2c2) {
        r2c2v.innerHTML = `O`;
        player1 = false;
        player2 = true;
        r2c2 = true;
        playerchange();
    } else if (player2 && !r2c2) {
        r2c2v.innerText = `X`;
        player1 = true;
        player2 = false;
        r2c2 = true;
    } checkwin();
    playerchange();
}
function row2col3() {
    let r2c3v = document.getElementById("r2c3");
    console.log(r2c3v)
    if (player1 && !r2c3) {
        r2c3v.innerHTML = `O`;
        player1 = false;
        player2 = true;
        r2c3 = true;
        playerchange();
    } else if (player2 && !r2c3) {
        r2c3v.innerText = `X`;
        player1 = true;
        player2 = false;
        r2c3 = true;
    } checkwin();
    playerchange();
}
function row3col1() {
    let r3c1v = document.getElementById("r3c1");
    console.log(r3c1v)
    if (player1 && !r3c1) {
        r3c1v.innerHTML = `O`;
        player1 = false;
        player2 = true;
        r3c1 = true;
        playerchange();
    } else if (player2 && !r3c1) {
        r3c1v.innerText = `X`;
        player1 = true;
        player2 = false;
        r3c1 = true;
    } checkwin();
    playerchange();
}
function row3col2() {
    let r3c2v = document.getElementById("r3c2");
    console.log(r3c2v)
    if (player1 && !r3c2) {
        r3c2v.innerHTML = `O`;
        player1 = false;
        player2 = true;
        r3c2 = true;
        playerchange();
    } else if (player2 && !r3c2) {
        r3c2v.innerText = `X`;
        player1 = true;
        player2 = false;
        r3c2 = true;
    } checkwin();
    playerchange();
}
function row3col3() {
    let r3c3v = document.getElementById("r3c3");
    console.log(r3c3v)
    if (player1 && !r3c3) {
        r3c3v.innerHTML = `O`;
        player1 = false;
        player2 = true;
        r3c3 = true;
        playerchange();
    } else if (player2 && !r3c3) {
        r3c3v.innerText = `X`;
        player1 = true;
        player2 = false;
        r3c3 = true;
    } checkwin();
    playerchange();
}
function checkwin() {
    let r1c1c = document.getElementById("r1c1").innerText;
    let r1c2c = document.getElementById("r1c2").innerText;
    let r1c3c = document.getElementById("r1c3").innerText;
    let r2c1c = document.getElementById("r2c1").innerText;
    let r2c2c = document.getElementById("r2c2").innerText;
    let r2c3c = document.getElementById("r2c3").innerText;
    let r3c1c = document.getElementById("r3c1").innerText;
    let r3c2c = document.getElementById("r3c2").innerText;
    let r3c3c = document.getElementById("r3c3").innerText;

    if ((r1c1c == 'O') && (r1c2c == r1c3c) && (r1c1c == r1c2c)) {
        player1win();
        return;
    }
    if ((r1c1c == 'X') && (r1c2c == r1c3c) && (r1c1c == r1c2c)) {
        player2win();
        return;
    }
    if ((r2c1c == 'O') && (r2c2c == r2c3c) && (r2c1c == r2c2c)) {
        player1win();
        return;
    }
    if ((r2c1c == 'X') && (r2c2c == r2c3c) && (r2c1c == r2c2c)) {
        player2win();
        return;
    }
    if ((r3c1c == 'O') && (r3c2c == r3c3c) && (r3c1c == r3c2c)) {
        player1win();
        return;
    }
    if ((r3c1c == 'X') && (r3c2c == r3c3c) && (r3c1c == r3c2c)) {
        player2win();
        return;
    }
    if ((r3c1c == 'O') && (r1c1c == r2c1c) && (r2c1c == r3c1c)) {
        player1win();
        return;
    }
    if ((r3c1c == 'X') && (r1c1c == r2c1c) && (r1c1c == r3c1c)) {
        player2win();
        return;
    }
    if ((r3c2c == 'O') && (r1c2c == r2c2c) && (r2c2c == r3c2c)) {
        player1win();
        return;
    }
    if ((r3c2c == 'X') && (r2c2c == r3c2c) && (r1c2c == r2c2c)) {
        player2win();
        return;
    }
    if ((r3c3c == 'O') && (r1c3c == r2c3c) && (r2c3c == r3c3c)) {
        player1win();
        return;
    }
    if ((r3c3c == 'X') && (r1c3c == r2c3c) && (r2c3c == r3c3c)) {
        player2win();
        return;
    }
    if ((r1c1c == 'O') && (r1c1c == r2c2c) && (r2c2c == r3c3c)) {
        player1win();
        return;
    }
    if ((r1c1c == 'X') && (r1c1c == r2c2c) && (r2c2c == r3c3c)) {
        player2win();
        return;
    }
    if ((r1c3c == 'O') && (r1c3c == r2c2c) && (r2c2c == r3c1c)) {
        player1win();
        return;
    }
    if ((r1c3c == 'X') && (r1c3c == r2c2c) && (r2c2c == r3c1c)) {
        player2win();
        return;
    } if (((r1c1c != '' && r1c2 != '') && (r1c3c != '' && r2c1 != '')) && ((r2c2c != '' && r2c3 != '') && (r3c1c != '' && r3c2 != '')) && r3c3c != '') {
        
        gametie();

    }
}
function reset() {
    player1 = true;
    player2 = false;
    r1c1 = false;
    r1c2 = false;
    r1c3 = false;
    r2c1 = false;
    r2c2 = false;
    r2c3 = false;
    r3c1 = false;
    r3c2 = false;
    r3c3 = false;
    let r1c1c = document.getElementById("r1c1");
    r1c1c.innerText = "";
    let r1c2c = document.getElementById("r1c2");
    r1c2c.innerText = "";
    let r1c3c = document.getElementById("r1c3");
    r1c3c.innerText = "";
    let r2c1c = document.getElementById("r2c1");
    r2c1c.innerText = "";
    let r2c2c = document.getElementById("r2c2");
    r2c2c.innerText = "";
    let r2c3c = document.getElementById("r2c3");
    r2c3c.innerText = "";
    let r3c1c = document.getElementById("r3c1");
    r3c1c.innerText = "";
    let r3c2c = document.getElementById("r3c2");
    r3c2c.innerText = "";
    let r3c3c = document.getElementById("r3c3");
    r3c3c.innerText = "";

}
function playerchange() {
    const p1 = document.getElementById("player1img");
    const p2 = document.getElementById("player2img");
    if (player1 == true) {
        p1.style.opacity = "1";
        p2.style.opacity = "0.2";

    }
    if (player2 == true) {
        p2.style.opacity = "1";
        p1.style.opacity = "0.2";
    }
    return;

}
function player1win(){
    const p1=document.querySelector(".winner");
    p1.style.visibility="visible";
    p1.style.position="absolute";
    p1.style.top="50%";
    p1.style.left="30%";
    

    
}
function player2win(){
    const p2=document.querySelector(".winner");
    p2.style.visibility="visible";
    p2.style.position="absolute";
    p2.style.top="50%";
    p2.style.left="30%";
    const p2list= p2.children;
    p2list[0].innerHTML = "winner player2";
    p2list[1].src="sa.jpg";
}
function gametie(){
    const p2=document.querySelector(".winner");
    p2.style.visibility="visible";
    p2.style.position="absolute";
    p2.style.top="50%";
    p2.style.left="30%";
    const p2list= p2.children;
    p2list[0].innerHTML = "GAME IS TIE";
    p2list[1].src="sa.jpg";
}