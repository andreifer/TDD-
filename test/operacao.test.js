const { describe, expect, it } = require("@jest/globals");
const calculadora = require("../src/operacoes");

describe("Teste da calculadora", () => {
  it("Operação de soma", () => {
    let resultado = calculadora.sum(1, 2);
    expect(resultado).toEqual(3);

    resultado = calculadora.sum(50, 50);
    expect(resultado).toEqual(100);

    resultado = calculadora.sum(30, 20);
    expect(resultado).toEqual(50);

    resultado = calculadora.sum(12, 24);
    expect(resultado).toEqual(36);

    resultado = () => calculadora.sum("a", 2);
    expect(resultado).toThrow("Não é um número");
  });

  it("Operacao Sub", () => {
    let resultado = calculadora.sub(1, 3);
    expect(resultado).toEqual(-2);

    resultado = calculadora.sub(0, 2);
    expect(resultado).toEqual(-2);

    resultado = calculadora.sub(5, 5);
    expect(resultado).toEqual(0);

    resultado = calculadora.sub(10, 2);
    expect(resultado).toEqual(8);

    resultado = () => calculadora.sub(50, "a");
    expect(resultado).toThrow("Não é um número");
  });

  it("Operacao Mult", () => {
    let resultado = calculadora.mult(1, 3);
    expect(resultado).toEqual(3);

    resultado = calculadora.mult(2, 3);
    expect(resultado).toEqual(6);

    resultado = calculadora.mult(5, 3);
    expect(resultado).toEqual(15);

    resultado = calculadora.mult(30, 10);
    expect(resultado).toEqual(300);

    resultado = calculadora.mult(100, 10);
    expect(resultado).toEqual(1000);

    resultado = calculadora.mult(28, 9);
    expect(resultado).toEqual(252);

    resultado = calculadora.mult(15, 15);
    expect(resultado).toEqual(225);

    resultado = () => calculadora.mult(3, "a");
    expect(resultado).toThrow("Não é um número");
  });

  it("Operacao div", () => {
    let resultado = calculadora.div(4, 2);
    expect(resultado).toEqual(2);

    resultado = calculadora.div(10, 5);
    expect(resultado).toEqual(2);

    resultado = calculadora.div(6, 2);
    expect(resultado).toEqual(3);

    resultado = () => calculadora.div(3, "a");
    expect(resultado).toThrow("Não é um número");

    resultado = calculadora.div(3, 10);
    expect(resultado).toEqual(0.3);

    resultado = calculadora.div(2, 10);
    expect(resultado).toEqual(0.2);

    resultado = calculadora.div(2, 2);
    expect(resultado).toEqual(1);

    resultado = calculadora.div(5, 4);
    expect(resultado).toEqual(1.25);

    resultado = calculadora.div(5, 5);
    expect(resultado).toEqual(1);
  });

  it("Operacao pot", () => {
    let resultado = calculadora.pot(4, 4);
    expect(resultado).toEqual(256);

    resultado = calculadora.pot(89, 3);
    expect(resultado).toEqual(704969);

    resultado = calculadora.pot(2, 4);
    expect(resultado).toEqual(16);

    resultado = calculadora.pot(9, 5);
    expect(resultado).toEqual(59049);

    resultado = calculadora.pot(66, 3);
    expect(resultado).toEqual(287496);

    resultado = calculadora.pot(4, 2);
    expect(resultado).toEqual(16);

    resultado = calculadora.pot(3, 4);
    expect(resultado).toEqual(81);

    resultado = calculadora.pot(2, 8);
    expect(resultado).toEqual(256);

    resultado = () => calculadora.pot(4, "a");
    expect(resultado).toThrow("Não é um número");
  });

  it("Operacao raiz", () => {
    let resultado = calculadora.raiz(9);
    expect(resultado).toEqual(3);
    resultado = calculadora.raiz(4);
    expect(resultado).toEqual(2);
    resultado = calculadora.raiz(0);
    expect(resultado).toEqual(0);
    resultado = calculadora.raiz(36);
    expect(resultado).toEqual(6);
    resultado = calculadora.raiz(16);
    expect(resultado).toEqual(4);
    resultado = calculadora.raiz(81);
    expect(resultado).toEqual(9);
    resultado = calculadora.raiz(1);
    expect(resultado).toEqual(1);
    resultado = calculadora.raiz(49);
    expect(resultado).toEqual(7);
    resultado = () => calculadora.raiz("a");
    expect(resultado).toThrow("Não é um número");
  });
});
