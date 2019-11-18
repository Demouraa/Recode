let vReal = document.getElementById("n1");
let conv = document.getElementById("convertion");
let form = document.getElementById("myForm");
var result = 0;

function calc(e) {
    e.preventDefault();
    let toDol = vReal.value / 4.15;
    let toEu = vReal.value / 5.10;
    let toPeso = vReal.value / 0.07;
    let toIene = vReal.value / 0.03;

    switch (conv.value) {
        case "dol":
            result = toDol;
            document.getElementById("result").innerHTML = `The result is ${result.toFixed(2)}`;
            console.log("teste1");
            break;

        case "eu":
            result = toEu;
            document.getElementById("result").innerHTML = `The result is ${result.toFixed(2)}`;
            break;

        case "peso":
            result = toPeso;
            document.getElementById("result").innerHTML = `The result is ${result.toFixed(2)}`;
            break;

        case "iene":
            result = toIene;
            document.getElementById("result").innerHTML = `The result is ${result.toFixed(2)}`;
            break;

        default:
            document.getElementById("result").innerHTML = `Escolha uma operação`;
            break;
    }
}

form.addEventListener("submit", calc);