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
        tel.telefone = NTelefone;
        
        const novoTelefone = "53999998888";
        tel.atualizarTelefone(novoTelefone);

        expect(tel.telefone).toBe("53999998888")
    })
    test("deve lançar um erro ao tentar atualizar com um telefone inválido",()=>{
        const NTelefone ="53981560341";
        const tel: Cliente = new Cliente;
        tel.telefone = NTelefone;
        
        expect(() => tel.atualizarTelefone("5399999888")).toThrow("Telefone Inválido");
    })
    test("deve lançar um erro ao tentar criar um cliente com nome inválido (menos de 3 caracteres)",()=>{
        const NTelefone ="53981560341";
        const tel: Cliente = new Cliente;
        tel.telefone = NTelefone;
        
        expect(() => tel.criarCliente("Al", "53981560341")).toThrow("Nome inválido");
    })
})

