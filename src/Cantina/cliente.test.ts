import { describe, expect, test } from "@jest/globals";
import { Cliente } from "./Cliente";
describe("Quando manipular Cliente", ()=>{


    test("deve validar corretamente um número de telefone com 11 dígitos)",()=>{
        const NTelefone ="53981560341";
        const tel: Cliente = new Cliente;
        tel.telefone = NTelefone
        
        const telValido = tel.validarTelefone(tel.telefone);
        
        expect(telValido).toBe(true);
       
    })
    test("deve invalidar um número de telefone com mais ou menos de 11 dígitos", ()=>{
        const NTelefone ="123456";
        const tel: Cliente = new Cliente;
        tel.telefone = NTelefone
        
        const telValido = tel.validarTelefone(tel.telefone);
        
        expect(telValido).toBe(false);
    })
    test("deve atualizar o telefone se o novo número for válido",()=>{
        const NTelefone ="53981560341";
        const tel: Cliente = new Cliente;
        tel.telefone = NTelefone

        const telValido = tel.validarTelefone(tel.telefone);
        const novoTelefone= tel.atualizarTelefone("53999998888")

        expect(novoTelefone).toBe("53999998888")
    })

})

