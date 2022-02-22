const color = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const Btn = document.querySelector("button");
var hexcolor = document.getElementById("hex");
Btn.addEventListener("click", () => {
    k = Math.floor(Math.random() * 10);
    if (k < 5) {
        hexColor = "#";
        for (i = 0; i < 6; i++) {
            hexColor += color[Math.floor(Math.random() * 14)];
            console.log(hexColor);
        }
        hexcolor.innerText = hexColor;
        document.querySelector(".container").style["background-color"] = hexColor;
    } else {
        rgbColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
        hexcolor.innerText = rgbColor;
        document.querySelector(".container").style["background-color"] = rgbColor;
    }
})