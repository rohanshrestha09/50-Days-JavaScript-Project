const color = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const Btn = document.querySelector("button");
var hexcolor = document.getElementById("hex");
Btn.addEventListener("click", () => {
    hexColor = "#";
    for (i = 0; i < 6; i++) {
        hexColor += color[Math.floor(Math.random() * 14)];
        console.log(hexColor);
    }
    hexcolor.innerText = hexColor;
    document.querySelector(".container").style["background-color"] = hexColor;
})