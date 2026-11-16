const indicesMaiorMenor = require('./desafio2-indices');

describe('indicesMaiorMenor', () => {
  test('encontra os índices no array do enunciado', () => {
    expect(indicesMaiorMenor([15, 3, 42, 8, 27])).toEqual({
      indiceMaior: 2,
      indiceMenor: 1,
    });
  });

  test('maior no início e menor no fim', () => {
    expect(indicesMaiorMenor([10, 5, 3])).toEqual({
      indiceMaior: 0,
      indiceMenor: 2,
    });
  });

  test('maior no fim e menor no início', () => {
    expect(indicesMaiorMenor([1, 4, 9])).toEqual({
      indiceMaior: 2,
      indiceMenor: 0,
    });
  });

  test('array com um único elemento', () => {
    expect(indicesMaiorMenor([4])).toEqual({
      indiceMaior: 0,
      indiceMenor: 0,
    });
  });

  test('funciona com números negativos', () => {
    expect(indicesMaiorMenor([-5, -1, -10])).toEqual({
      indiceMaior: 1,
      indiceMenor: 2,
    });
  });
});