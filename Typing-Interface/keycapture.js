var i = 0;
setInterval(() => {
    let k = new Date();
    hour = ('0' + k.getHours()).slice(-2);
    min = ('0' + k.getMinutes()).slice(-2);
    sec = ('0' + k.getSeconds()).slice(-2);
    time = hour + ":" + min + ":" + sec;
    document.getElementById("time").innerHTML = `Time: ${time}`;
}, 1000);

click = document.addEventListener("keypress", () => {
    var clickEvent = event.key;
    document.querySelector(".empty").innerHTML = "";
    k = document.getElementById("key-cap");
    k.innerHTML += clickEvent + "";
    i++;
    document.getElementById("count").innerHTML = `Total Key pressed: ${i}`;
});

j = 0
document.querySelector(".click-count").addEventListener("click", () => {
    j++;
    document.getElementById("click-count").innerHTML = j;
});

reset = () => {
    j = 0;
    i = 0;
    document.getElementById("key-cap").innerHTML = "";
    document.querySelector(".empty").innerHTML = "Press a key";
    document.getElementById("count").innerHTML = `Total Key pressed:`;
    document.getElementById("click-count").innerHTML = "Click Here";
}