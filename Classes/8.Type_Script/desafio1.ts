class Caixa {
    resultado: number;
    constructor(presultado: number) {
        this.resultado = presultado;
    }

    depositar(valor: number) {
        this.resultado += valor;
    }

    sacar(valor: number) {
        this.resultado -= valor;
    }

    saldoFinal() {
        return this.resultado;
    }
}

let calc = new Caixa(1000);

calc.sacar(300);

console.log(calc.saldoFinal());