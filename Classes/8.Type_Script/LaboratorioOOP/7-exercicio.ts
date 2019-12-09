/*7 - Para um consórcio, sabe-se:
 1- o número total de prestações,
2- a quantidade de prestações pagas
3- o valor atual da prestação,
4- mostre o total pago pelo consorciado e 
5- o saldo devedor. */

class Consorcio {
    nPrestacoes: number; //1
    prestPagas: number; //2
    valorPrest: number; //3
    vPago: number; //4
    saldoDevedor: number = 0; //5

    constructor(p_nPrestacoes:number, p_prestPagas:number, p_valorPrest:number, p_vPago: number) {
        this.nPrestacoes = p_nPrestacoes;
        this.prestPagas = p_prestPagas;
        this.valorPrest = p_valorPrest;
        this.vPago = p_vPago;
    }

    //Mostrar o Total pago:
    pago(){
        return this.prestPagas * this.valorPrest;
    }
}



let result = new Consorcio(1000 , 10, 5);