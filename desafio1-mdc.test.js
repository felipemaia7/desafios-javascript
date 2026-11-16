const mdc = require('./desafio1-mdc');

describe('mdc', () => {
  test('MDC de 12 e 18 é 6', () => {
    expect(mdc(12, 18)).toBe(6);
  });
});