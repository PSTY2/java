// Lab 9 � �������� �������, �� ������� ����� > 10 (������ 9)

const filterGreaterThanTen = arr => arr.filter(n => n > 10);

// ����:
const data   = [3, 11, 7, 25, 4, 18];
const result = filterGreaterThanTen(data);
console.log('������� ����� :', data);
console.log('> 10          :', result); // [11, 25, 18]
