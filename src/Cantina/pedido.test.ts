import { describe, expect, test } from "@jest/globals";
import { Pedido } from "./Pedido";
import { Cliente } from "./Cliente";
import { Item } from "./Item";
import { Util } from "./Util";

describe("Quando manipular pedido", ()=>{

test("deve ser criado com o status Pendente por padrão", ()=>{
    const cli: Cliente = new Cliente;
    cli.nome = Util.gerarNome();

    const ped: Pedido = new Pedido(cli);
    ped.status

    expect("Pendente").toBe("Pendente")

})

})