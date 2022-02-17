var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("child1");
var i = 00,
    suru, second = 00,
    mili = 00;

start.addEventListener("click", startr);

function startr() {
    clearInterval(suru);
    suru = setInterval(starttimer, 10);
}

stop.addEventListener("click", () => {
    clearInterval(suru);
})

reset.onclick = function () {
    clearInterval(suru);
    second = "00";
    mili = "00";
    document.getElementById("mili").innerHTML = mili;
    document.getElementById("second").innerHTML = second;
}

setInterval(() => {
    date = new Date();
    document.getElementById("date").innerText = date;
}, 1000);

function starttimer() {
    mili++;

    if (mili <= 9)
        document.getElementById("mili").innerHTML = "0" + mili;

    if (mili > 9)
        document.getElementById("mili").innerHTML = mili;

    if (mili > 99) {
        second++;
        document.getElementById("second").innerHTML = "0" + second;
        mili = 0;
        document.getElementById("mili").innerHTML = "0" + 0;
    }

    if (second > 9)
        document.getElementById("second").innerHTML = second;
}