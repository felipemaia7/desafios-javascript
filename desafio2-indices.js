// desafio2-indices.js
function indicesMaiorMenor(array) {
  let indiceMaior = 0;
  let indiceMenor = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMaior]) {
      indiceMaior = i;
    }
    if (array[i] < array[indiceMenor]) {
      indiceMenor = i;
    }
  }

  return { indiceMaior, indiceMenor };
}

const numeros = [15, 3, 42, 8, 27];
const resultado = indicesMaiorMenor(numeros);
console.log("Índice do maior:", resultado.indiceMaior); // 2
console.log("Índice do menor:", resultado.indiceMenor); // 1

module.exports = indicesMaiorMenor;