import { describe, expect, test } from "@jest/globals";
import { Pedido } from "./Pedido";
import { Cliente } from "./Cliente";
import { Item } from "./Item";
import { Util } from "./Util";

describe("Quando manipular pedido", ()=>{

test("deve ser criado com o status Pendente por padrão", ()=>{
    const cli: Cliente = new Cliente;
    const ped: Pedido = new Pedido(cli);

    ped.status;

    expect(ped.status).toBe("Pendente")
})
test("deve alterar o status do pedido ao usar o método alterarStatus", ()=>{
    const cli: Cliente = new Cliente;
    const ped: Pedido = new Pedido(cli);

    ped.status;
    ped.alterarStatus("Em preparo");


    expect(ped.status).toBe("Em preparo")
})
test("deve alterar o status para Cancelado ao chamar cancelarPedido", ()=>{
    const cli: Cliente = new Cliente;
    const ped: Pedido = new Pedido(cli);

    ped.alterarStatus("Cancelado");

    expect(ped.status).toBe("Cancelado")
})
test("deve atualizar o valorPagar corretamente ao adicionar um item SEM desconto", ()=>{
    const cli: Cliente = new Cliente;
    const item1 = new Item();
    item1.preco = 15; 
    const ped: Pedido = new Pedido(cli)

    ped.adicionarItem(item1);
    

    expect(ped.valorPagar).toBe(15)
})
//acho q ja esta feito
test("deve atualizar o valorPagar corretamente ao adicionar múltiplos itens", ()=>{
    const cli: Cliente = new Cliente;
    const item1 = new Item();
    item1.preco = 15; 
    const ped: Pedido = new Pedido(cli)

    ped.adicionarItem(item1);
    

    expect(ped.valorPagar).toBe(15)
})
test("deve atualizar o valorPagar corretamente ao adicionar um item COM desconto", ()=>{
    const cli: Cliente = new Cliente;
    const item1 = new Item();
    item1.preco = 100; 
    const ped: Pedido = new Pedido(cli)

item1.aplicarDesconto(20)
    ped.adicionarItem(item1);

    expect(ped.valorPagar).toBe(80)
})

//TDD 1
test("deve remover um item do pedido pelo seu codigo", ()=>{
    const cli: Cliente = new Cliente;
    cli.nome = "Edécio" 
    const ped:Pedido = new Pedido(cli)
    const item1:Item = new Item();
    item1.codigo = "1";
    item1.nome = "Ampola de botox"
    const item2:Item = new Item;
    item2.codigo = "2"
    item2.nome ="Colgate total white"
    ped.adicionarItem(item1);
    ped.adicionarItem(item2);

    ped.removeItem("1");

    expect(ped.itens.length).toBe(1)
})
test("deve atualizar o valorPagar após remover um item", ()=>{
    const cli: Cliente = new Cliente;

    const item1 = new Item();
    item1.categoria = "SALGADO";
    item1.codigo = "1";
    item1.nome = "Pastel morte lenta";
    item1.preco = 5;
    
    const item2 = new Item();
    item2.categoria = "SALGADO";
    item2.codigo = "2";
    item2.nome = "Pão de queijo";
    item2.preco = 6;
    
    const ped: Pedido = new Pedido(cli)
    ped.adicionarItem(item1);
    ped.adicionarItem(item2);
    ped.removeItem("1");

    expect(ped.valorPagar).toBe(6)
})
test("não deve fazer nada ao tentar remover um item que não está no pedido", ()=>{
    const cli: Cliente = new Cliente;
    const item1 = new Item();
    item1.categoria = "SALGADO";
    item1.codigo = "1";
    item1.nome = "Coxão de frango";
    item1.preco = 5; 
    const ped: Pedido = new Pedido(cli)

    ped.adicionarItem(item1);
    ped.removeItem("99");
    
    expect(ped.valorPagar).toBe(5)
})
//TDD3
test("deve lançar um erro ao tentar adicionar um item a um pedido cancelado",()=>{
    const item1:Item = new Item();
    item1.preco = 40
    const cliente: Cliente = new Cliente();
    const pedido: Pedido = new Pedido(cliente);
    
    pedido.cancelarPedido()
    
    expect(()=> pedido.adicionarItem(item1)).toThrow()
})
test("deve lançar um erro ao tentar remover um item de um pedido cancelado",()=>{
    const item1:Item = new Item();
    item1.preco = 40
    item1.codigo = "1"
    const cliente: Cliente = new Cliente();
    const pedido: Pedido = new Pedido(cliente);
    
    pedido.cancelarPedido()
    
    expect(()=> pedido.removeItem("1")).toThrow()
})
})

//mudar o nome e corrigir
// test("SLA oq era pra fazer" ()=>{
//     const cli: Cliente = new Cliente;
//     const item:Item = new Item()    
//     const ped: Pedido = new Pedido(cli);

//     ped.adicionarItem(item)

//     expect(ped.itens.length).toBe(1)
// })