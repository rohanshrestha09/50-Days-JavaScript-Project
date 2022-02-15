var question = document.querySelector(".que");
var ans = document.querySelectorAll(".ans");
var next = document.querySelector(".next");
var points = document.querySelectorAll(".points");
var k = 0,
    i = 0;

document.querySelector(".restart").addEventListener("click", () => {
    k = 0, i = 0;
    document.querySelector(".gain").innerHTML = `Points: ${i}`;
    document.querySelector(".banner").style["grid-template-columns"] = "4fr 2fr 1fr 1fr";
    next.innerHTML = "Next &#xbb;";
    document.querySelector(".restart").innerHTML = "Restart";
    points.forEach(element => {
        element.style.color = "rgb(201, 226, 225)";
    });
    document.querySelectorAll(".ans").forEach(element => {
        element.style.backgroundColor = "rgb(1, 27, 40)";
    });
    firstQuestion();
})


next.addEventListener("click", () => {
    ans.forEach(element => {
        element.style["background-color"] = "initial";
    });
    if (k == 0) {
        secondQuestion();
        k = 1;
    } else if (k == 1) {
        thirdQuestion();
        k = 2;
    } else if (k == 2) {
        fourthQuestion();
        k = 3;
    } else if (k == 3) {
        fifthQuestion();
        k = 4;
    } else if (k == 4) {
        sixthQuestion();
        k = 5;
    } else if (k == 5) {
        seventhQuestion();
        k = 6;
    } else if (k == 6) {
        eighthQuestion();
        k = 7;
    } else if (k == 7) {
        ninthQuestion();
        k = 8;
    } else if (k == 8) {
        tenthQuestion();
        k = 9;
    } else if (k == 9) {
        eleventhQuestion();
        k = 10;
    } else if (k == 10) {
        twelvethQuestion();
        k = 11;
    } else if (k == 11) {
        thirteenthQuestion();
        k = 12;
    } else if (k == 12) {
        fourteenthQuestion();
        k = 13;
    } else if (k == 13) {
        fifteenthQuestion();
        k = 14;
    } else if (k == 14) {
        endth();
        k = 15;
    }
});

function add() {
    i += 5;
    document.querySelector(".gain").innerHTML = `Points: ${i}`;
}

firstQuestion = () => {
    document.querySelector(".banner1").innerHTML = "Question 1";
    question.innerHTML = "Which snippet of CSS is commonly used to center a website horizontally?";
    ans[0].innerHTML = "site-align: center;";
    ans[1].innerHTML = "margin: center;";
    ans[2].innerHTML = "margin: auto 0;";
    ans[3].innerHTML = "margin: 0 auto;";
    points[14].style.color = "green";
    ans.forEach(element => {
        element.addEventListener("click", () => {
            ans.forEach(element => {
                if (element.innerText == "margin: 0 auto;")
                    element.style.backgroundColor = "#6ECE53";
                else
                    element.style.backgroundColor = "#F35F5D";
            });
            ans[3].removeEventListener("click", add, true);
        });
    });
    ans[3].addEventListener("click", add, true);
    ans[3].onclick = () => {
        ans[3].removeEventListener("click", add, true);
    }
    fiftyfifty = () => {
        ans[0].innerHTML = "";
        ans[2].innerHTML = "";
    }
}
firstQuestion();

secondQuestion = () => {
    document.querySelector(".banner1").innerHTML = "Question 2";
    question.innerHTML = "What is not an HTML5 element?";
    ans[0].innerHTML = "section";
    ans[1].innerHTML = "header";
    ans[2].innerHTML = "blink";
    ans[3].innerHTML = "main";
    points[13].style.color = "green";
    ans.forEach(element => {
        element.addEventListener("click", () => {
            ans.forEach(element => {
                if (element.innerText == "blink")
                    element.style.backgroundColor = "#6ECE53";
                else
                    element.style.backgroundColor = "#F35F5D";
            });
            ans[2].removeEventListener("click", add, true);
        });
    });
    ans[2].addEventListener("click", add, true);
    ans[2].onclick = () => {
        ans[2].removeEventListener("click", add, true);
    }
    fiftyfifty = () => {
        ans[0].innerHTML = "";
        ans[3].innerHTML = "";
    }
}

thirdQuestion = () => {
    document.querySelector(".banner1").innerHTML = "Question 3";
    question.innerHTML = "What property is used to change the text color of an element?";
    ans[0].innerHTML = "fontcolor";
    ans[1].innerHTML = "textcolor";
    ans[2].innerHTML = "color";
    ans[3].innerHTML = "background-color";
    points[12].style.color = "green";
    ans.forEach(element => {
        element.addEventListener("click", () => {
            ans.forEach(element => {
                if (element.innerText == "color")
                    element.style.backgroundColor = "#6ECE53";
                else
                    element.style.backgroundColor = "#F35F5D";
            });
            ans[2].removeEventListener("click", add, true);
        });
    });
    ans[2].addEventListener("click", add, true);
    ans[2].onclick = () => {
        ans[2].removeEventListener("click", add, true);
    }
    fiftyfifty = () => {
        ans[0].innerHTML = "";
        ans[1].innerHTML = "";
    }
}

fourthQuestion = () => {
    document.querySelector(".banner1").innerHTML = "Question 4";
    question.innerHTML = "Which is not a JavaScript data type?";
    ans[0].innerHTML = "boolean";
    ans[1].innerHTML = "undefined";
    ans[2].innerHTML = "string";
    ans[3].innerHTML = "double";
    points[11].style.color = "green";
    ans.forEach(element => {
        element.addEventListener("click", () => {
            ans.forEach(element => {
                if (element.innerText == "double")
                    element.style.backgroundColor = "#6ECE53";
                else
                    element.style.backgroundColor = "#F35F5D";
            });
            ans[3].removeEventListener("click", add, true);
        });
    });
    ans[3].addEventListener("click", add, true);
    ans[3].onclick = () => {
        ans[3].removeEventListener("click", add, true);
    }
    fiftyfifty = () => {
        ans[1].innerHTML = "";
        ans[2].innerHTML = "";
    }
}

fifthQuestion = () => {
    document.querySelector(".banner1").innerHTML = "Question 5";
    question.innerHTML = "Inside which HTML element do we put the JavaScript?";
    ans[0].innerHTML = "script";
    ans[1].innerHTML = "javascript";
    ans[2].innerHTML = "JS";
    ans[3].innerHTML = "link";
    points[10].style.color = "green";
    ans.forEach(element => {
        element.addEventListener("click", () => {
            ans.forEach(element => {
                if (element.innerText == "script")
                    element.style.backgroundColor = "#6ECE53";
                else
                    element.style.backgroundColor = "#F35F5D";
            });
            ans[0].removeEventListener("click", add, true);
        });
    });
    ans[0].addEventListener("click", add, true);
    ans[0].onclick = () => {
        ans[0].removeEventListener("click", add, true);
    }
    fiftyfifty = () => {
        ans[3].innerHTML = "";
        ans[2].innerHTML = "";
    }
}

sixthQuestion = () => {
    document.querySelector(".banner1").innerHTML = "Question 6";
    question.innerHTML = "How do you call the function 'myFunction'?";
    ans[0].innerHTML = "myFunction";
    ans[1].innerHTML = "func myFunction()";
    ans[2].innerHTML = "myFunction()";
    ans[3].innerHTML = "None of these";
    points[9].style.color = "green";
    ans.forEach(element => {
        element.addEventListener("click", () => {
            ans.forEach(element => {
                if (element.innerText == "myFunction()")
                    element.style.backgroundColor = "#6ECE53";
                else
                    element.style.backgroundColor = "#F35F5D";
            });
            ans[2].removeEventListener("click", add, true);
        });
    });
    ans[2].addEventListener("click", add, true);
    ans[2].onclick = () => {
        ans[2].removeEventListener("click", add, true);
    }
    fiftyfifty = () => {
        ans[0].innerHTML = "";
        ans[3].innerHTML = "";
    }
}

seventhQuestion = () => {
    document.querySelector(".banner1").innerHTML = "Question 7";
    question.innerHTML = "var a = []; What does 'typeof a' return?";
    ans[0].innerHTML = "object";
    ans[1].innerHTML = "array";
    ans[2].innerHTML = "string";
    ans[3].innerHTML = "undefined";
    points[8].style.color = "green";
    ans.forEach(element => {
        element.addEventListener("click", () => {
            ans.forEach(element => {
                if (element.innerText == "object")
                    element.style.backgroundColor = "#6ECE53";
                else
                    element.style.backgroundColor = "#F35F5D";
            });
            ans[0].removeEventListener("click", add, true);
        });
    });
    ans[0].addEventListener("click", add, true);
    ans[0].onclick = () => {
        ans[0].removeEventListener("click", add, true);
    }
    fiftyfifty = () => {
        ans[3].innerHTML = "";
        ans[2].innerHTML = "";
    }
}

eighthQuestion = () => {
    document.querySelector(".banner1").innerHTML = "Question 8";
    question.innerHTML = "What keyword is used to create a JavaScript variable?";
    ans[0].innerHTML = "variable";
    ans[1].innerHTML = "varies";
    ans[2].innerHTML = "string";
    ans[3].innerHTML = "var";
    points[7].style.color = "green";
    ans.forEach(element => {
        element.addEventListener("click", () => {
            ans.forEach(element => {
                if (element.innerText == "var")
                    element.style.backgroundColor = "#6ECE53";
                else
                    element.style.backgroundColor = "#F35F5D";
            });
            ans[3].removeEventListener("click", add, true);
        });
    });
    ans[3].addEventListener("click", add, true);
    ans[3].onclick = () => {
        ans[3].removeEventListener("click", add, true);
    }
    fiftyfifty = () => {
        ans[0].innerHTML = "";
        ans[2].innerHTML = "";
    }
}

ninthQuestion = () => {
    document.querySelector(".banner1").innerHTML = "Question 9";
    question.innerHTML = "How can you print information to the console?";
    ans[0].innerHTML = "console(info)";
    ans[1].innerHTML = "console.log(info)";
    ans[2].innerHTML = "print(info)";
    ans[3].innerHTML = "cout << info;";
    points[6].style.color = "green";
    ans.forEach(element => {
        element.addEventListener("click", () => {
            ans.forEach(element => {
                if (element.innerText == "console.log(info)")
                    element.style.backgroundColor = "#6ECE53";
                else
                    element.style.backgroundColor = "#F35F5D";
            });
            ans[1].removeEventListener("click", add, true);
        });
    });
    ans[1].addEventListener("click", add, true);
    ans[1].onclick = () => {
        ans[1].removeEventListener("click", add, true);
    }
    fiftyfifty = () => {
        ans[3].innerHTML = "";
        ans[2].innerHTML = "";
    }
}

tenthQuestion = () => {
    document.querySelector(".banner1").innerHTML = "Question 10";
    question.innerHTML = "Which doctype is correct for HTML5?";
    ans[0].innerHTML = "!DOCTYPE HTML5";
    ans[1].innerHTML = "!DOCTYPE html";
    ans[2].innerHTML = "!DOCTYPE";
    ans[3].innerHTML = "None of these";
    points[5].style.color = "green";
    ans.forEach(element => {
        element.addEventListener("click", () => {
            ans.forEach(element => {
                if (element.innerText == "!DOCTYPE html")
                    element.style.backgroundColor = "#6ECE53";
                else
                    element.style.backgroundColor = "#F35F5D";
            });
            ans[1].removeEventListener("click", add, true);
        });
    });
    ans[1].addEventListener("click", add, true);
    ans[1].onclick = () => {
        ans[1].removeEventListener("click", add, true);
    }
    fiftyfifty = () => {
        ans[3].innerHTML = "";
        ans[2].innerHTML = "";
    }
}

eleventhQuestion = () => {
    document.querySelector(".banner1").innerHTML = "Question 11";
    question.innerHTML = "What is jQuery?";
    ans[0].innerHTML = "A framework";
    ans[1].innerHTML = "A library";
    ans[2].innerHTML = "jQuery?";
    ans[3].innerHTML = "None of these";
    points[4].style.color = "green";
    ans.forEach(element => {
        element.addEventListener("click", () => {
            ans.forEach(element => {
                if (element.innerText == "A library")
                    element.style.backgroundColor = "#6ECE53";
                else
                    element.style.backgroundColor = "#F35F5D";
            });
            ans[1].removeEventListener("click", add, true);
        });
    });
    ans[1].addEventListener("click", add, true);
    ans[1].onclick = () => {
        ans[1].removeEventListener("click", add, true);
    }
    fiftyfifty = () => {
        ans[2].innerHTML = "";
        ans[3].innerHTML = "";
    }
}

twelvethQuestion = () => {
    document.querySelector(".banner1").innerHTML = "Question 12";
    question.innerHTML = "The # symbol specifies that the selector is?";
    ans[0].innerHTML = "class";
    ans[1].innerHTML = "tag";
    ans[2].innerHTML = "id";
    ans[3].innerHTML = "first";
    points[3].style.color = "green";
    ans.forEach(element => {
        element.addEventListener("click", () => {
            ans.forEach(element => {
                if (element.innerText == "id")
                    element.style.backgroundColor = "#6ECE53";
                else
                    element.style.backgroundColor = "#F35F5D";
            });
            ans[2].removeEventListener("click", add, true);
        });
    });
    ans[2].addEventListener("click", add, true);
    ans[2].onclick = () => {
        ans[2].removeEventListener("click", add, true);
    }
    fiftyfifty = () => {
        ans[0].innerHTML = "";
        ans[3].innerHTML = "";
    }
}

thirteenthQuestion = () => {
    document.querySelector(".banner1").innerHTML = "Question 13";
    question.innerHTML = "What value is given for the left margin: margin: 5px 10px 3px 8px;";
    ans[0].innerHTML = "5px";
    ans[1].innerHTML = "8px";
    ans[2].innerHTML = "3px";
    ans[3].innerHTML = "10px";
    points[2].style.color = "green";
    ans.forEach(element => {
        element.addEventListener("click", () => {
            ans.forEach(element => {
                if (element.innerText == "8px")
                    element.style.backgroundColor = "#6ECE53";
                else
                    element.style.backgroundColor = "#F35F5D";
            });
            ans[1].removeEventListener("click", add, true);
        });
    });
    ans[1].addEventListener("click", add, true);
    ans[1].onclick = () => {
        ans[1].removeEventListener("click", add, true);
    }
    fiftyfifty = () => {
        ans[0].innerHTML = "";
        ans[2].innerHTML = "";
    }
}

fourteenthQuestion = () => {
    document.querySelector(".banner1").innerHTML = "Question 14";
    question.innerHTML = "Which HTML5 element defines navigation links?";
    ans[0].innerHTML = "navigation";
    ans[1].innerHTML = "links";
    ans[2].innerHTML = "nav";
    ans[3].innerHTML = "navigate";
    points[1].style.color = "green";
    ans.forEach(element => {
        element.addEventListener("click", () => {
            ans.forEach(element => {
                if (element.innerText == "nav")
                    element.style.backgroundColor = "#6ECE53";
                else
                    element.style.backgroundColor = "#F35F5D";
            });
            ans[2].removeEventListener("click", add, true);
        });
    });
    ans[2].addEventListener("click", add, true);
    ans[2].onclick = () => {
        ans[2].removeEventListener("click", add, true);
    }
    fiftyfifty = () => {
        ans[0].innerHTML = "";
        ans[3].innerHTML = "";
    }
}

fifteenthQuestion = () => {
    document.querySelector(".banner1").innerHTML = "Question 15";
    question.innerHTML = "Alpha in RGB extension named RGBA, defines";
    ans[0].innerHTML = "Hue";
    ans[1].innerHTML = "Saturation";
    ans[2].innerHTML = "Lightness";
    ans[3].innerHTML = "Opacity";
    points[0].style.color = "green";
    ans.forEach(element => {
        element.addEventListener("click", () => {
            ans.forEach(element => {
                if (element.innerText == "Opacity")
                    element.style.backgroundColor = "#6ECE53";
                else
                    element.style.backgroundColor = "#F35F5D";
            });
            ans[3].removeEventListener("click", add, true);
        });
    });
    ans[3].addEventListener("click", add, true);
    ans[3].onclick = () => {
        ans[3].removeEventListener("click", add, true);
    }
    fiftyfifty = () => {
        ans[0].innerHTML = "";
        ans[2].innerHTML = "";
    }
}

function endth() {
    i = 0;
    document.querySelector(".restart").innerHTML = "Play again";
    question.innerHTML = "Thank You!";
    next.innerHTML = "";
    document.querySelector(".banner").style["grid-template-columns"] = "4fr 2fr 2fr 0";
    ans.forEach(element => {
        element.innerHTML = "";
    });
}