"use strict";

// ������ 9 � �� � ���� � ���� �䒺��� �����
function hasNegative(arr) {
  return arr.some(n => n < 0);
}

// ����
const a = [5, 3, -2, 8, 0];
const b = [4, 6, 1, 9];

console.log("����� a:", a, ">", hasNegative(a)); // true
console.log("����� b:", b, ">", hasNegative(b)); // false
