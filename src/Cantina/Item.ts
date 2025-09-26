export class Item{
    nome: string;
    preco: number;
    categoria: string;
    codigo: string;
    desconto: number;

    constructor(){
        this.nome = "";
        this.preco = 0;
        this.categoria = "";
        this.codigo = "";
        this.desconto = 0;
    }

    aplicarDesconto(percentual: number): void{
        if(percentual < 0 || percentual > 100){
            throw new Error("Percentual inválido")
        }
        this.desconto = percentual;
        
    }

    obterPrecoFinal(){
        const desconto = (this.preco * (this.desconto/100))
        const valorComDesconto = this.preco - desconto;

        return valorComDesconto;
    }

    emPromocao(){
        return(this.preco > this.obterPrecoFinal())
    }
}