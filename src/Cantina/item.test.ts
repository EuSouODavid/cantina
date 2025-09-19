import { describe, expect, test } from "@jest/globals";
import { Item } from "./Item";

describe("Quando manipular o item", () => {

    test("deve calcular o preço final corretamente sem desconto", () => {
        //Cenário
        const PRECO_ITEM = 10;
        const it:Item = new Item();
        it.preco = PRECO_ITEM;
        it.nome = "Derby";

        //Execução
        const precoFinal = it.obterPrecoFinal()

        //Verificação
        expect(precoFinal).toBe(PRECO_ITEM)
    })

    test("deve aplicar um desconto e calcular o preço final corretamente", () => {

        const PRECO_ITEM = 20;
        const it:Item = new Item();
        it.preco = PRECO_ITEM;
        it.nome = "Vinho";

       
        it.aplicarDesconto(10);
        const precoFinal = it.obterPrecoFinal();
        const desc = PRECO_ITEM * 0.9; 

       expect(precoFinal).toBe(desc);
})
    test("deve indicar que não está em promoção se não houver desconto", ()=>{
        const PRECO_ITEM = 6;
        const it:Item = new Item();
        it.preco = PRECO_ITEM;
        it.nome = "Kaiser";

        it.aplicarDesconto(0);

        expect(it.emPromocao()).toBe(false);
    })
      test("deve indicar que está em promoção após aplicar um desconto", ()=>{
        const PRECO_ITEM = 6;
        const it:Item = new Item();
        it.preco = PRECO_ITEM;
        it.nome = "Kaiser";

        it.aplicarDesconto(10);

        expect(it.emPromocao()).toBe(true);
      })

})

