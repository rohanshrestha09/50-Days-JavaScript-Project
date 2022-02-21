var click = document.querySelectorAll("button");
var text = document.getElementById("text");
var players = document.getElementById("player");
var computers = document.getElementById("computer");
var playerImage = document.getElementById("playerer");
var computerImage = document.getElementById("computerer");
var ai;

function refresh() {
    var i = Math.floor(Math.random() * 10);

    if (i <= 3)
        ai = "Rock";

    else if (i > 3 && i <= 6)
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

paper = () => {
    computerImage.style.transform = "rotateZ(270deg)";
    computerImage.src = "paper.png";
}

rock = () => {
    computerImage.style.transform = "rotateZ(270deg)";
    computerImage.src = "rock.png";
}

scissor = () => {
    computerImage.style.transform = "rotateZ(180deg)";
    computerImage.src = "scissor.png";
}

function clicked(n) {
    if (n == 1) {
        playerImage.src = "rock.png";
        if (ai == "Rock") {
            text.innerHTML = `Computer Chose Rock<br><h2 style="color:#cf2e2e">Draw</h2>`;
            rock();
        } else if (ai == "Paper") {
            text.innerHTML = `Computer Chose Paper<br><h2 style="color:#cf2e2e">Computer Wins!!</h2>`;
            paper();
            computer();
        } else {
            text.innerHTML = `Computer Chose Scissor<br><h2 style="color:#cf2e2e">You Win!!</h2>`;
            scissor();
            player();
        }
    }
    if (n == 2) {
        playerImage.src = "paper.png";
        if (ai == "Paper") {
            text.innerHTML = `Computer Chose Paper<br><h2 style="color:#cf2e2e">Draw</h2>`;
            paper();
        } else if (ai == "Rock") {
            text.innerHTML = `Computer Chose Rock<br><h2 style="color:#cf2e2e">You Win!!</h2>`;
            rock();
            player();
        } else {
            text.innerHTML = `Computer Chose Scissor<br><h2 style="color:#cf2e2e">Computer Wins!!</h2>`;
            scissor();
            computer()
        }
    }
    if (n == 3) {
        playerImage.src = "scissor.png";
        if (ai == "Scissor") {
            text.innerHTML = `Computer Chose Scissor<br><h2 style="color:#cf2e2e">Draw</h2>`;
            scissor();
        } else if (ai == "Rock") {
            text.innerHTML = `Computer Chose Rock<br><h2 style="color:#cf2e2e">Computer Wins!!</h2>`;
            rock();
            computer();
        } else {
            text.innerHTML = `Computer Chose Paper<br><h2 style="color:#cf2e2e">You Win!!</h2>`;
            paper();
            player();
        }
    }
    refresh();
}