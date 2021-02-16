
const clicker = (element) => {
    let result = document.getElementById("result");
    if (result.value == "0" || result.value == "Syntax error") {
        result.value = element.textContent;
    }
    else {
        result.value += element.textContent;
    }
}

const operation = (element) => {
    let result = document.getElementById("result");
    if (result.value == "0" || result.value == "Syntax error") {
        result.value = "0";
    }
    else {
        result.value += element.textContent;
    }
}

const res = () => {
    try {
        let result = document.getElementById("result");
        if (result.value != "") {
            let calc = eval(result.value);
            result.value = calc;
        }
    }
    catch (err) {
        result.value = "Syntax error";
    }
}

const erase = () => {
    let result = document.getElementById("result");
    let resultNum = result.value;
    result.value = resultNum.substring(0, resultNum.length - 1);
}

const cleaner = () => {
    let result = document.getElementById("result");
    result.value = "0";
}

const symbol = () => {
    let result = document.getElementById("result");
    if (result.value == "0" || result.value == "Syntax error") {
        result.value = "0";
    }
    else {
        result.value = result.value * -1;
    }
}

