let op = document.getElementById("operation");
let form = document.getElementById("myForm");

function calc(e) {
    e.preventDefault();
    d = new Date();
    d.setMonth(op.value);
    document.getElementById("result").innerHTML = d;
}

form.addEventListener("submit", calc);