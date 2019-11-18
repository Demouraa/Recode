let arr = [];
for(i = 1; i <= 10; i++){
    let entrada = prompt(`Digite o numero ${i}`);
    arr.push(entrada);
    if(i == 10){
        for(j = 9; j >= 0; j--){
            var p = document.createElement("p");
            p.innerHTML = `${arr[j]}`

            document.getElementById("child").appendChild(p);
        }
    }
}