var click = document.querySelectorAll("button");
var text = document.getElementById("text");
var players = document.getElementById("player");
var computers = document.getElementById("computer");
var ai;

function refresh() {
    var i = Math.floor(Math.random() * 100);

    if (i <= 33)
        ai = "Rock";

    else if (i > 33 && i <= 66)
        ai = "Paper";
    else
        ai = "Scissor";
}
var k = 0,
    j = 0;
computer = () => {
    k = k + 1;
    computers.innerHTML = `Computer point: ${k}`;
}
player = () => {
    j = j + 1;
    players.innerHTML = `Your point: ${j}`;
}

function clicked(n) {
    if (n == 1) {
        if (ai == "Rock") {
            text.innerHTML = `Computer Chose Rock<br><h2 style="color:#cf2e2e">Draw</h2>`;
        } else if (ai == "Paper") {
            text.innerHTML = `Computer Chose Paper<br><h2 style="color:#cf2e2e">Computer Wins!!</h2>`;
            computer();
        } else {
            text.innerHTML = `Computer Chose Scissor<br><h2 style="color:#cf2e2e">You Win!!</h2>`;
            player();
        }
    }
    if (n == 2) {
        if (ai == "Paper") {
            text.innerHTML = `Computer Chose Paper<br><h2 style="color:#cf2e2e">Draw</h2>`;
        } else if (ai == "Rock") {
            text.innerHTML = `Computer Chose Rock<br><h2 style="color:#cf2e2e">You Win!!</h2>`;
            player();
        } else {
            text.innerHTML = `Computer Chose Scissor<br><h2 style="color:#cf2e2e">Computer Wins!!</h2>`;
            computer()
        }
    }
    if (n == 3) {
        if (ai == "Scissor") {
            text.innerHTML = `Computer Chose Scissor<br><h2 style="color:#cf2e2e">Draw</h2>`;
        } else if (ai == "Rock") {
            text.innerHTML = `Computer Chose Rock<br><h2 style="color:#cf2e2e">Computer Wins!!</h2>`;
            computer();
        } else {
            text.innerHTML = `Computer Chose Paper<br><h2 style="color:#cf2e2e">You Win!!</h2>`;
            player();
        }
    }
    refresh();
}