// desafio3-multiplos.js
function somaMultiplos(limite) {
  let soma = 0;
  for (let n = 1; n < limite; n++) {
    if (n % 5 === 0 || n % 7 === 0) {
      soma += n;
    }
  }
  return soma;
}

console.log(somaMultiplos(1000)); // 156361

module.exports = somaMultiplos;