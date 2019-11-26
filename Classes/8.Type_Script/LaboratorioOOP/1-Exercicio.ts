class Salario {
    hAula: number;
    nAula: number;
    dInss: number;

    constructor(p_hAula: number, p_nAula: number, p_Inss: number) {
        this.hAula = p_hAula;
        this.nAula = p_nAula;
        this.dInss = p_Inss;
    }

    rSalario(): number {
        return (this.hAula * this.nAula) * (1 - (this.dInss/100)); 
    }
}

let horaA:number = Number(prompt(`Digite o valor hora aula`));
let numeroA:number = Number(prompt(`Digite a Quantidade de Aulas`));
let inss:number = Number(prompt(`Digite valor do INSS`));


let x = new Salario(horaA, numeroA, inss);
alert(`${x.rSalario()}`);
console.log(x.rSalario());