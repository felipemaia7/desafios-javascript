const somaMultiplos = require('./desafio3-multiplos');

describe('somaMultiplos', () => {
  test('abaixo de 10 os múltiplos são 5 e 7, soma 12', () => {
    expect(somaMultiplos(10)).toBe(12);
  });

  test('abaixo de 16 soma 5 + 7 + 10 + 14 + 15 = 51', () => {
    expect(somaMultiplos(16)).toBe(51);
  });

  test('o limite não entra na soma (abaixo de 5 não há múltiplos)', () => {
    expect(somaMultiplos(5)).toBe(0);
  });

  test('limite 0 retorna 0', () => {
    expect(somaMultiplos(0)).toBe(0);
  });

  test('abaixo de 1000 a soma é 156361', () => {
    expect(somaMultiplos(1000)).toBe(156361);
  });
});