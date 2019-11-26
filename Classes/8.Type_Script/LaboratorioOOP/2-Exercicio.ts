/*2 -Em épocas de pouco dinheiro, os comerciantes estão procurando aumentar suas vendas oferecendo desconto. Crie uma classe que tenha um método que possa entrar com o valor de um produto e retorne o novo valor deste produto tendo em vista que o desconto foi de 9%. */

class Descontos {
    vProduto: number;
    vDesconto: number;

    constructor(p_vProduto:number, p_vDesconto:number) {
        this.vProduto = p_vProduto; 
        this.vDesconto = p_vDesconto;
    }

    desconto(p_vProduto:number){
        return this.vProduto * (1 - (this.vDesconto/100));
    }
}

let preco: number = Number(prompt(`Qual o valor do Produto?`));
let iDesconto: number = Number(prompt(`Qual a porcentagem de desconto do cliente??`))

let result = new Descontos(preco, iDesconto); 

alert(`O valor do produto com ${result.desconto()} R$`);