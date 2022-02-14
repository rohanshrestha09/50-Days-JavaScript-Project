document.getElementById("button").addEventListener("click", () => {
    var num = document.getElementById("input").value;

    var binary = document.getElementById("binary").checked;
    var decimal = document.getElementById("decimal").checked;
    var octal = document.getElementById("octal").checked;
    var hexadecimal = document.getElementById("hexadecimal").checked;

    var binary1 = document.getElementById("binary1").checked;
    var decimal1 = document.getElementById("decimal1").checked;
    var octal1 = document.getElementById("octal1").checked;
    var hexadecimal1 = document.getElementById("hexadecimal1").checked;

    if ((binary && binary1) ||
        (decimal && decimal1) ||
        (octal && octal1) ||
        (hexadecimal && hexadecimal1) == true) {
        document.getElementById("ans").innerHTML = num;
    }

    binaryToDecimal = () => {
        var i = 0,
            rem,
            result = 0;
        len = num.length;
        for (j = 0; j < len; j++) {
            if ((num[j] >= 'A' && num[j] <= 'Z') || (num[j] >= 'a' && num[j] <= 'z')) {
                return null;
                break;
            }
        }
        k = num.includes(2) || num.includes(3) || num.includes(4) || num.includes(5) || num.includes(6) || num.includes(7) || num.includes(8) || num.includes(9);
        if (k) {
            return "Please input binary bits only.";
        } else {
            len = num.length;
            temp = parseInt(num);
            while (i < len) {
                rem = temp % 10;
                result += rem * Math.pow(2, i);
                i++;
                temp = Math.floor(temp / 10);
            }
            return result;
        }
    }

    decimalToBinary = () => {
        let text = "";
        let retext = "";
        len = num.length;
        for (j = 0; j < len; j++) {
            if ((num[j] >= 'A' && num[j] <= 'Z') || (num[j] >= 'a' && num[j] <= 'z')) {
                return null;
                break;
            }
        }
        temp = parseInt(num);
        while (temp != 0) {
            rem = temp % 2;
            text += rem + "";
            temp = Math.floor(temp / 2);
        }
        len = text.length;
        for (i = 0; i < len; i++) {
            retext += text[len - i - 1] + "";
        }
        return retext;
    }

    decimalToOctal = () => {
        let text = "";
        let retext = "";
        len = num.length;
        for (j = 0; j < len; j++) {
            if ((num[j] >= 'A' && num[j] <= 'Z') || (num[j] >= 'a' && num[j] <= 'z')) {
                return null;
                break;
            }
        }
        temp = parseInt(num);
        while (temp != 0) {
            rem = temp % 8;
            text += rem + "";
            temp = Math.floor(temp / 8);
        }
        len = text.length;
        for (i = 0; i < len; i++) {
            retext += text[len - i - 1] + "";
        }
        return retext;
    }

    decimalToHexadecimal = () => {
        let text = "";
        retext = "";
        len = num.length;
        for (j = 0; j < len; j++) {
            if ((num[j] >= 'A' && num[j] <= 'Z') || (num[j] >= 'a' && num[j] <= 'z')) {
                return null;
                break;
            }
        }
        temp = parseInt(num);
        while (temp != 0) {
            rem = temp % 16;
            if (rem == 10) {
                rem = "A";
            }
            if (rem == 11) {
                rem = "B";
            }
            if (rem == 12) {
                rem = "C";
            }
            if (rem == 13) {
                rem = "D";
            }
            if (rem == 14) {
                rem = "E";
            }
            if (rem == 15) {
                rem = "F";
            }
            text += rem + "";
            temp = Math.floor(temp / 16);
        }
        len = text.length;
        for (i = 0; i < len; i++) {
            retext += text[len - i - 1] + "";
        }
        return retext;
    }

    binaryToDecimalToOctal = () => {
        var num = binaryToDecimal();
        if (typeof num == "string") {
            return "Please input binary bits only.";
        } else {
            let text = "";
            let retext = "";
            temp = num;
            while (temp != 0) {
                rem = temp % 8;
                text += rem + "";
                temp = Math.floor(temp / 8);
            }
            len = text.length;
            for (i = 0; i < len; i++) {
                retext += text[len - i - 1] + "";
            }
            return retext;
        }
    }

    binaryToDecimalToHexadecimal = () => {
        var num = binaryToDecimal();
        if (typeof num == "string") {
            return "Please input binary bits only.";
        } else {
            let text = "";
            retext = "";
            temp = num;
            while (temp != 0) {
                rem = temp % 16;
                if (rem == 10) {
                    rem = "A";
                }
                if (rem == 11) {
                    rem = "B";
                }
                if (rem == 12) {
                    rem = "C";
                }
                if (rem == 13) {
                    rem = "D";
                }
                if (rem == 14) {
                    rem = "E";
                }
                if (rem == 15) {
                    rem = "F";
                }
                text += rem + "";
                temp = Math.floor(temp / 16);
            }
            len = text.length;
            for (i = 0; i < len; i++) {
                retext += text[len - i - 1] + "";
            }
            return retext;
        }
    }

    octalToDecimal = () => {
        var i = 0,
            rem,
            result = 0;
        len = num.length;
        for (j = 0; j < len; j++) {
            if ((num[j] >= 'A' && num[j] <= 'Z') || (num[j] >= 'a' && num[j] <= 'z')) {
                return null;
                break;
            }
        }
        if (num.includes(8) || num.includes(9)) {
            return null;
        } else {
            temp = parseInt(num);
            while (temp != 0) {
                rem = temp % 10;
                result += rem * Math.pow(8, i);
                i++;
                temp = Math.floor(temp / 10);
            }
            return result;
        }
    }

    octalToDecimalToBinary = () => {
        let text = "";
        let retext = "";
        temp = octalToDecimal();
        while (temp != 0) {
            rem = temp % 2;
            text += rem + "";
            temp = Math.floor(temp / 2);
        }
        len = text.length;
        for (i = 0; i < len; i++) {
            retext += text[len - i - 1] + "";
        }
        return retext;
    }

    octalToDecimalToHexadecimal = () => {
        let text = "";
        retext = "";
        temp = octalToDecimal();
        while (temp != 0) {
            rem = temp % 16;
            if (rem == 10) {
                rem = "A";
            }
            if (rem == 11) {
                rem = "B";
            }
            if (rem == 12) {
                rem = "C";
            }
            if (rem == 13) {
                rem = "D";
            }
            if (rem == 14) {
                rem = "E";
            }
            if (rem == 15) {
                rem = "F";
            }
            text += rem + "";
            temp = Math.floor(temp / 16);
        }
        len = text.length;
        for (i = 0; i < len; i++) {
            retext += text[len - i - 1] + "";
        }
        return retext;
    }

    hexadecimalToDecimal = () => {
        num = num.toUpperCase();
        len = num.length;
        base = 1;
        dec_val = 0;
        for (i = len - 1; i >= 0; i--) {

            if (num[i] >= '0' && num[i] <= '9') {
                dec_val += (num.charCodeAt(i) - 48) * base;
                base = base * 16;
            } else if (num[i] >= 'A' && num[i] <= 'F') {
                dec_val += (num.charCodeAt(i) - 55) * base;
                base = base * 16;
            }
        }
        return dec_val;
    }

    hexadecimalToDecimalToBinary = () => {
        let text = "";
        let retext = "";
        temp = hexadecimalToDecimal();
        while (temp != 0) {
            rem = temp % 2;
            text += rem + "";
            temp = Math.floor(temp / 2);
        }
        len = text.length;
        for (i = 0; i < len; i++) {
            retext += text[len - i - 1] + "";
        }
        return retext;
    }

    hexadecimalToDecimalToOctal = () => {
        let text = "";
        let retext = "";
        temp = hexadecimalToDecimal();
        while (temp != 0) {
            rem = temp % 8;
            text += rem + "";
            temp = Math.floor(temp / 8);
        }
        len = text.length;
        for (i = 0; i < len; i++) {
            retext += text[len - i - 1] + "";
        }
        return retext;
    }

    if (binary && decimal1 == true) {
        document.getElementById("ans").innerHTML = binaryToDecimal();
    }
    if (binary && octal1 == true) {
        document.getElementById("ans").innerHTML = binaryToDecimalToOctal();
    }
    if (binary && hexadecimal1 == true) {
        document.getElementById("ans").innerHTML = binaryToDecimalToHexadecimal();
    }
    if (decimal && binary1 == true) {
        document.getElementById("ans").innerHTML = decimalToBinary();
    }
    if (decimal && octal1 == true) {
        document.getElementById("ans").innerHTML = decimalToOctal();
    }
    if (decimal && hexadecimal1 == true) {
        document.getElementById("ans").innerHTML = decimalToHexadecimal();
    }
    if (octal && binary1 == true) {
        document.getElementById("ans").innerHTML = octalToDecimalToBinary();
    }
    if (octal && decimal1 == true) {
        document.getElementById("ans").innerHTML = octalToDecimal();
    }
    if (octal && hexadecimal1 == true) {
        document.getElementById("ans").innerHTML = octalToDecimalToHexadecimal();
    }
    if (hexadecimal && binary1 == true) {
        document.getElementById("ans").innerHTML = hexadecimalToDecimalToBinary();
    }
    if (hexadecimal && octal1 == true) {
        document.getElementById("ans").innerHTML = hexadecimalToDecimalToOctal();
    }
    if (hexadecimal && decimal1 == true) {
        document.getElementById("ans").innerHTML = hexadecimalToDecimal();
    }
})