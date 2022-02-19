var clicked = document.querySelectorAll("li");
var k = document.querySelectorAll(".c");
var img = document.getElementById("img");
var text = document.querySelector(".text");
document.querySelector(".prom").onclick = () => location.reload();

clicked.forEach(element => {
    clickedTrue = () => {
        if (i % 2 == 0) {
            cross = document.createElement("img");
            cross.src = "cross.png";
            element.appendChild(cross);
        } else {
            cross = document.createElement("img");
            cross.src = "moon-hand-drawn-circle.png";
            element.appendChild(cross);
        }
        i++;
    };
    element.addEventListener("click", clickedTrue, {
        once: true
    });
});

var i = 0,
    z = 0;

for (c = 0; c < k.length; c++) {
    k[c].value = c;
}

clik = (n) => {
    z = z + 1;
    if (z % 2 == 0) {
        k[n - 1].value = "O";
    } else {
        k[n - 1].value = "X";
    }

    if ((k[0].value == k[1].value && k[1].value == k[2].value)) {
        text.style.top = "-6%";
        img.style.transform = "rotateZ(45deg)";
        img.style.display = "block";
        document.querySelector(".main").style["pointer-events"] = "none";
    }
    if (k[3].value == k[4].value && k[4].value == k[5].value) {
        text.style.top = "12%";
        img.style.transform = "rotateZ(45deg)";
        img.style.display = "block";
        document.querySelector(".main").style["pointer-events"] = "none";
    }
    if (k[6].value == k[7].value && k[7].value == k[8].value) {
        text.style.top = "30%";
        img.style.transform = "rotateZ(45deg)";
        img.style.display = "block";
        document.querySelector(".main").style["pointer-events"] = "none";
    }
    if (k[0].value == k[3].value && k[3].value == k[6].value) {
        text.style.top = "12%";
        text.style.marginRight = "260px";
        img.style.transform = "rotateZ(135deg)";
        img.style.display = "block";
        document.querySelector(".main").style["pointer-events"] = "none";
    }
    if (k[2].value == k[5].value && k[5].value == k[8].value) {
        text.style.top = "12%";
        text.style.marginLeft = "260px";
        img.style.transform = "rotateZ(135deg)";
        img.style.display = "block";
        document.querySelector(".main").style["pointer-events"] = "none";
    }
    if (k[1].value == k[4].value && k[4].value == k[7].value) {
        text.style.top = "12%";
        img.style.transform = "rotateZ(135deg)";
        img.style.display = "block";
        document.querySelector(".main").style["pointer-events"] = "none";
    }
    if (k[0].value == k[4].value && k[4].value == k[8].value) {
        text.style.top = "12%";
        img.style.transform = "rotateY(180deg)";
        img.style.display = "block";
        document.querySelector(".main").style["pointer-events"] = "none";
    }
    if (k[2].value == k[4].value && k[4].value == k[6].value) {
        text.style.top = "12%";
        img.style.display = "block";
        document.querySelector(".main").style["pointer-events"] = "none";
    }
};