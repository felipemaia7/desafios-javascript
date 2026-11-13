// desafio1-mdc.js
function mdc(a, b) {
  while (b !== 0) {
    const resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}

console.log(mdc(48, 18)); // 6
console.log(mdc(100, 75)); // 25
console.log(mdc(17, 5)); // 1