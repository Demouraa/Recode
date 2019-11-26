class Calculadora {
    resultado: number;
    constructor(presultado: number) {
        this.resultado = presultado;
    }

    somar(valor: number) {
        this.resultado += valor;
    }

    subtrair(valor: number) {
        this.resultado -= valor;
    }

    multiplicar(valor: number) {
        this.resultado *= valor;
    }

    dividir(valor: number) {
        this.resultado /= valor;
    }

    mostrarResultado() {
        return this.resultado;
    }
}

let calc = new Calculadora(3);

calc.somar(3);

console.log(calc.mostrarResultado());