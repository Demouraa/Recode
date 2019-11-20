let op = document.getElementById("operation");

let formA = document.getElementById("formA");
let formB = document.getElementById("formB");
let formC = document.getElementById("formC");
let formD = document.getElementById("formD");
let formE = document.getElementById("formE");

let result = 0;

function calcA(e) {
    e.preventDefault();
    let result = 0;
    let numA1 = Number(document.getElementById("numA1").value);
    let numA2 = Number(document.getElementById("numA2").value);

    result = Math.pow(numA1, numA2);

    document.getElementById("formatA").innerHTML = `Resultado: ${result}`;;
}

function calcB(e) {
    e.preventDefault();

    let numB = Number(document.getElementById("numB").value);
    result = Math.sqrt(numB);
    document.getElementById("formatB").innerHTML = `Resultado: ${result}`;
}

function calcC(e) {
    e.preventDefault();
    let numC = Number(document.getElementById("numC").value);
    result = Math.floor(numC);
    document.getElementById("formatC").innerHTML =` Resultado: ${result}`;
}

function calcD(e) {
    e.preventDefault();
    let numD = Number(document.getElementById("numD").value);
    result = Math.ceil(numC);
    document.getElementById("formatD").innerHTML = `Resultado: ${result}`;
}

function calcE(e) {
    e.preventDefault();
    let numE = Number(document.getElementById("numE").value);
    result = numE * Math.PI;
    document.getElementById("formatE").innerHTML = `Resultado: ${result.toFixed(2)}`;
}



formA.addEventListener("submit", calcA);
formB.addEventListener("submit", calcB);
formC.addEventListener("submit", calcC);
formD.addEventListener("submit", calcD);
formE.addEventListener("submit", calcE);