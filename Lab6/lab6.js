'use strict';

// ? ������ 9: ������ 10 �� ������� ��������
function addTen(arr) {
  return arr.map(num => num + 10);
}

// ����:
const data   = [1, 3, 7, 12, 25];
const result = addTen(data);
console.log('������� ����� :', data);
console.log('��������� (+10):', result);
