'use strict';

// ? ¬ар≥ант 9: додаЇмо 10 до кожного елемента
function addTen(arr) {
  return arr.map(num => num + 10);
}

// ƒемо:
const data   = [1, 3, 7, 12, 25];
const result = addTen(data);
console.log('¬х≥дний масив :', data);
console.log('–езультат (+10):', result);
