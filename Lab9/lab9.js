// Lab 9 — стрілкова функція, що повертає числа > 10 (варіант 9)

const filterGreaterThanTen = arr => arr.filter(n => n > 10);

// Демо:
const data   = [3, 11, 7, 25, 4, 18];
const result = filterGreaterThanTen(data);
console.log('Вхідний масив :', data);
console.log('> 10          :', result); // [11, 25, 18]
