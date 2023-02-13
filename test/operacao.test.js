const { describe, expect, it } = require("@jest/globals");
const calculadora = require("../src/operacoes");

describe("Teste da calculadora", () => {
  it("Operação de soma", () => {
    let resultado = calculadora.sum(1, 2);
    expect(resultado).toEqual(3);

    resultado = calculadora.sum(0, 2);
    expect(resultado).toEqual(2);

    
    resultado = () => calculadora.sum("a", 2);
    expect(resultado).toThrow("Não é um número");

  });
  
  
  it("Operacao Sub", () => {
    let resultado = calculadora.sub(1, 3);
    expect(resultado).toEqual(-2);

    resultado = calculadora.sub(0, 2);
    expect(resultado).toEqual(-2);
  });


  it("Operacao Mult", () => {
    let resultado = calculadora.mult(1, 3);
    expect(resultado).toEqual(3);

    resultado = calculadora.mult(2, 3);
    expect(resultado).toEqual(6);
  });


  it("Operacao div", () => {
    let resultado = calculadora.div(4, 2);
    expect(resultado).toEqual(2);

    resultado = calculadora.div(2, 10);
    expect(resultado).toEqual(0.2);
  });


  it("Operacao pot", () => {
    let resultado = calculadora.pot(4, 4);
    expect(resultado).toEqual(256);
  });
})

