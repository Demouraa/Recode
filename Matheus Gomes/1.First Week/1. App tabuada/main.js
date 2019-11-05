var eMultiplicador = prompt(`Infome o multiplicador:`);
var eMultiplicando = prompt(`Você quer ver a tabuada até que numero?`);
document.writeln(`O resultado da tabuada do ${eMultiplicador} de a 1 a ${eMultiplicando}, é de: `);

for(multiplier = 1; multiplier <= eMultiplicando && eMultiplicando < 10000; multiplier++){
    let product = eMultiplicador * multiplier;
    document.writeln(`<p>${eMultiplicador} X ${multiplier} = ${product}.<p>`);
}
