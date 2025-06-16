"use strict";

// Варіант 9 — чи є хоча б одне від’ємне число
function hasNegative(arr) {
  return arr.some(n => n < 0);
}

// Демо
const a = [5, 3, -2, 8, 0];
const b = [4, 6, 1, 9];

console.log("Масив a:", a, ">", hasNegative(a)); // true
console.log("Масив b:", b, ">", hasNegative(b)); // false
