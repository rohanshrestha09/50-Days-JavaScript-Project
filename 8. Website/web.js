var darkmode = document.getElementById("dark");
var i = 1;
darkmode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (i % 2 != 0)
        darkmode.innerText = "!Dark";
    else
        darkmode.innerText = "Dark";
    i++;
})