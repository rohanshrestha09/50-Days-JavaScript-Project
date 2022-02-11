document.getElementById("add").addEventListener("click", () => {
    var a = parseInt(document.getElementById("firstInput").value);
    var b = parseInt(document.getElementById("secondInput").value);
    sum = a + b;
    document.getElementById("ans").innerHTML = sum;
});

subtract = () => {
    var a = parseInt(document.getElementById("firstInput").value);
    var b = parseInt(document.getElementById("secondInput").value);
    diff = a - b;
    document.getElementById("ans").innerHTML = diff;
}
multiply = () => {
    var a = parseInt(document.getElementById("firstInput").value);
    var b = parseInt(document.getElementById("secondInput").value);
    product = a * b;
    document.getElementById("ans").innerHTML = product;
}
divide = () => {
    var a = parseInt(document.getElementById("firstInput").value);
    var b = parseInt(document.getElementById("secondInput").value);
    division = a / b;
    document.getElementById("ans").innerHTML = division;
}

palindrome = () => {
    var temp, rem, rev = 0;
    var num = parseInt(document.getElementById("first2Input").value);
    temp = num;
    while (temp != 0) {
        rem = temp % 10;
        rev = rev * 10 + rem;
        temp = Math.floor(temp / 10);
    }
    if (rev == num) {
        document.getElementById("ans3").innerHTML = `${num} is a palindrome number.`;
    } else {
        document.getElementById("ans3").innerHTML = `${num} is not a palindrome number.`;
    }
}
reverse = () => {
    var temp, rem, rev = 0;
    var num = parseInt(document.getElementById("first2Input").value);
    temp = num;
    while (temp != 0) {
        rem = temp % 10;
        rev = rev * 10 + rem;
        temp = Math.floor(temp / 10);
    }
    document.getElementById("ans3").innerHTML = rev;
}
prime = () => {
    var temp, count = 0;
    var num = parseInt(document.getElementById("first2Input").value);
    temp = num;
    for (i = 1; i <= temp; i++) {
        if ((temp % i) == 0) {
            count++;
        }
    }
    if (count == 2) {
        document.getElementById("ans3").innerHTML = `${num} is a prime number.`;
    } else {
        document.getElementById("ans3").innerHTML = `${num} is not a prime number.`;
    }
}
amstrong = () => {
    var temp, rem, rev = 0,
        count = 0;
    var num = parseInt(document.getElementById("first2Input").value);
    c = num;
    temp = num;
    while (c != 0) {
        c = Math.floor(c / 10);
        count++;
    }
    while (temp != 0) {
        rem = temp % 10;
        if (count == 3) {
            rev = Math.pow(rem, 3) + rev;
        } else {
            rev = Math.pow(rem, 4) + rev;
        }
        temp = Math.floor(temp / 10);
    }
    if (rev == num) {
        document.getElementById("ans3").innerHTML = `${num} is an amstrong number.`;
    } else {
        document.getElementById("ans3").innerHTML = `${num} is not an amstrong number.`;
    }
}
factorial = () => {
    var i = 1,
        fact = 1;
    var num = parseInt(document.getElementById("first2Input").value);
    while (i <= num) {
        fact = fact * i;
        i++;
    }
    document.getElementById("ans3").innerHTML = fact;
}
oddoreven = () => {
    var num = parseInt(document.getElementById("first2Input").value);
    if (num % 2 == 0) {
        document.getElementById("ans3").innerHTML = `${num} is an even number.`;
    } else {
        document.getElementById("ans3").innerHTML = `${num} is an odd number.`;
    }
}
palindromer = () => {
    let text = "";
    var temp, rem, rev;
    var start = parseInt(document.getElementById("first1Input").value);
    var end = parseInt(document.getElementById("second1Input").value);
    while (start <= end) {
        temp = start;
        rev = 0;
        while (temp != 0) {
            rem = temp % 10;
            rev = rev * 10 + rem;
            temp = Math.floor(temp / 10);
        }
        if (rev == start) {
            text += rev + " ";
        }
        start++;
    }
    document.getElementById("ans2").innerHTML = text;
    document.getElementById("ans3").innerHTML = "";
    document.getElementById("ans").innerHTML = "";
}
reverser = () => {
    let text = "";
    var temp, rem, rev;
    var start = parseInt(document.getElementById("first1Input").value);
    var end = parseInt(document.getElementById("second1Input").value);
    while (start <= end) {
        temp = start;
        rev = 0;
        while (temp != 0) {
            rem = temp % 10;
            rev = rev * 10 + rem;
            temp = Math.floor(temp / 10);
        }
        text += rev + " ";
        start++;
    }
    document.getElementById("ans2").innerHTML = text;
    document.getElementById("ans3").innerHTML = "";
    document.getElementById("ans").innerHTML = "";
}
primer = () => {
    let text = "";
    var temp, count;
    var start = parseInt(document.getElementById("first1Input").value);
    var end = parseInt(document.getElementById("second1Input").value);
    while (start <= end) {
        temp = start;
        count = 0;
        for (i = 1; i <= temp; i++) {
            if ((temp % i) == 0) {
                count++;
            }
        }
        if (count == 2) {
            text += start + " ";
        }
        start++;
    }
    document.getElementById("ans2").innerHTML = text;
    document.getElementById("ans3").innerHTML = "";
    document.getElementById("ans").innerHTML = "";
}
amstrongr = () => {
    let text = "";
    let temp, rem, rev, count, c;
    var start = parseInt(document.getElementById("first1Input").value);
    var end = parseInt(document.getElementById("second1Input").value);
    while (start <= end) {
        rev = 0;
        count = 0;
        c = start;
        temp = start;
        while (c != 0) {
            c = Math.floor(c / 10);
            count++;
        }
        while (temp != 0) {
            rem = temp % 10;
            if (count == 3) {
                rev = Math.pow(rem, 3) + rev;
            } else {
                rev = Math.pow(rem, 4) + rev;
            }
            temp = Math.floor(temp / 10);
        }
        if (rev == start) {
            text += rev + " ";
        }
        start++;
    }
    document.getElementById("ans2").innerHTML = text;
    document.getElementById("ans3").innerHTML = "";
    document.getElementById("ans").innerHTML = "";
}
odd = () => {
    let text = "";
    var start = parseInt(document.getElementById("first1Input").value);
    var end = parseInt(document.getElementById("second1Input").value);
    while (start <= end) {
        if (start % 2 != 0) {
            text += start + " ";
        }
        start++;
    }
    document.getElementById("ans2").innerHTML = text;
    document.getElementById("ans3").innerHTML = "";
    document.getElementById("ans").innerHTML = "";
}
even = () => {
    let text = "";
    var start = parseInt(document.getElementById("first1Input").value);
    var end = parseInt(document.getElementById("second1Input").value);
    while (start <= end) {
        if (start % 2 == 0) {
            text += start + " ";
        }
        start++;
    }
    document.getElementById("ans2").innerHTML = text;
    document.getElementById("ans3").innerHTML = "";
    document.getElementById("ans").innerHTML = "";
}