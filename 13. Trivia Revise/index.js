import elem from './db.js'

const question = document.getElementById("questions");
const ans = document.querySelectorAll(".ans");
const next = document.getElementById("next-question");
const points = document.getElementById("pts");
const restart = document.getElementById("restart-click");

const questions = function (id, answer, truth, k) {
    return new Promise((resolve, reject) => {
        const init = function () {
            points.textContent = `${k} / 15`;
            question.textContent = id;
            ans.forEach(element => element.style.backgroundColor = "rgb(243,243,243)");
            for (let i = 0; i < ans.length; i++) {
                ans[i].textContent = answer[i];
            }
            const solved = () => {
                ans.forEach(element => element.style.backgroundColor = "#F35F5D")
                ans[truth].style.backgroundColor = "#6ECE53";
            }
            ans.forEach(element => element.addEventListener("click", () => solved()))
        }
        init();
        next.onclick = function () {
            ans.forEach(element => element.style.backgroundColor = "initial");
            if (k != 15)
                resolve();
            else
                reject();
        }
    })
}

const mainFunction = questions;
function myFunction() {
    mainFunction(elem[0].id, elem[0].ans, elem[0].correction, 1)
        .then(() => mainFunction(elem[1].id, elem[1].ans, elem[1].correction, 2))
        .then(() => mainFunction(elem[2].id, elem[2].ans, elem[2].correction, 3))
        .then(() => mainFunction(elem[3].id, elem[3].ans, elem[3].correction, 4))
        .then(() => mainFunction(elem[4].id, elem[4].ans, elem[4].correction, 5))
        .then(() => mainFunction(elem[5].id, elem[5].ans, elem[5].correction, 6))
        .then(() => mainFunction(elem[6].id, elem[6].ans, elem[6].correction, 7))
        .then(() => mainFunction(elem[7].id, elem[7].ans, elem[7].correction, 8))
        .then(() => mainFunction(elem[8].id, elem[8].ans, elem[8].correction, 9))
        .then(() => mainFunction(elem[9].id, elem[9].ans, elem[9].correction, 10))
        .then(() => mainFunction(elem[10].id, elem[10].ans, elem[10].correction, 11))
        .then(() => mainFunction(elem[11].id, elem[11].ans, elem[11].correction, 12))
        .then(() => mainFunction(elem[12].id, elem[12].ans, elem[12].correction, 13))
        .then(() => mainFunction(elem[13].id, elem[13].ans, elem[13].correction, 14))
        .then(() => mainFunction(elem[14].id, elem[14].ans, elem[14].correction, 15))
        .catch(() => {
            question.textContent = "Thank You!!";
            ans.forEach(element => {
                element.textContent = "";
                element.style.pointerEvents = "none";
            })
        })
}
myFunction();

restart.onclick = () => {
    myFunction();
    ans.forEach(element => {
        element.style.backgroundColor = "rgb(243,243,243)";
        element.style.pointerEvents = "auto";
    });
}