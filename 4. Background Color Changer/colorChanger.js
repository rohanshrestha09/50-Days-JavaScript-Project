clicked1 = () => {
    color = document.getElementById("input").value;
    document.querySelector(".container").style["background-color"] = color;
    /*document.querySelector(".container").style.backgroundColor = color;*/
}
clicked = () => {
    var name = event.key;
    if (name == "Enter") {
        clicked1();

    } else {
        return;
    }
}

defaultColor = "#202020";
window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#color");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
}

function updateFirst(event) {
    var p = document.querySelector(".container");
    p.style.backgroundColor = event.target.value;
}

function updateAll(event) {
    document.querySelectorAll(".container").forEach(function (p) {
        p.style.backgroundColor = event.target.value;
    });
}