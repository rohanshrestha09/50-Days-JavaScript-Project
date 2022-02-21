var cross = document.querySelectorAll("li");
cross.forEach(element => {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    element.appendChild(span);
})

var closes = document.getElementsByClassName("close");
var i;
for (i = 0; i < closes.length; i++) {
    closes[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var inputValue = document.getElementById("input");
document.querySelector(".button").addEventListener("click", () => {
    var add = document.createElement("li");
    add.innerHTML = `<div><span>&#10004;</span>${inputValue.value}</div>`;
    document.querySelector(".elements").appendChild(add);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    add.appendChild(span);
    for (i = 0; i < closes.length; i++) {
        closes[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    strike();
})
strike();

function strike() {
    document.querySelectorAll("li").forEach(element => {
        element.onclick = function () {
            element.style.textDecoration = "line-through";
            element.style.color = "#fff";
            element.style["background-color"] = "#888";
        }
    })
}