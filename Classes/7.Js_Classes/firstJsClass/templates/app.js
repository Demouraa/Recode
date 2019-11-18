let num1 = Number(document.getElementById("n1").value);
let num2 = Number(document.getElementById("n2").value);
let op = document.getElementById("operation");
let form = document.getElementById("myForm");

function calc(e) {
    e.preventDefault();
    let result = 0;

    switch (op.value) {
        case "sub":
            result = num1 - num2;
            document.getElementById("result").innerHTML = `The result is ${result}`;
            break;

        case "add":
            result = num1 + num2;
            document.getElementById("result").innerHTML = `The result is ${result}`;
            break;

        case "mult":
            result = num1 * num2;
            document.getElementById("result").innerHTML = `The result is ${result}`;
            break;

        case "division":
            result = num1 / num2;
            document.getElementById("result").innerHTML = `The result is ${result}`;
            break;

        default:
            document.getElementById("result").innerHTML = `Escolha uma operação`;
            break;
    }
}

form.addEventListener("submit", calc);