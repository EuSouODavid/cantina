import { Cliente } from "./Cliente";
import { Item } from "./Item";
import { Util } from "./Util";

export class Pedido{
    itens: Item[];
    cliente: Cliente;
    status: string;
    numero: string;
    valorPagar: number;

    constructor(cliente: Cliente){
        this.itens = [];
        this.cliente = cliente;
        this.status = "Pendente";
        this.numero = Util.gerarNumeroDePedido()
        this.valorPagar = 0;
    }

    cancelarPedido(): void{
        this.status = "Cancelado";
    }

    alterarStatus(status: string): void{
        this.status = status;
    }

    adicionarItem(item: Item){
        if(this.status === "Cancelado"){
            throw new Error("Não é possível alterar um pedido cancelado")
        }
        this.itens.push(item);
        this.atualizarValorPagar();

    }
    removeItem(codigo: string){
        this.itens = this.itens.filter(item => item.codigo !== codigo);
        this.atualizarValorPagar();

    }

    obterCliente(): Cliente{
        return this.cliente;
    }

    atualizarValorPagar(){
        this.valorPagar = 0;
        for (const item of this.itens) {
            this.valorPagar += item.obterPrecoFinal()
        }
    }
}