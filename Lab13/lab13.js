// Lab 13 � Spread operator  (Variant 9)
// �������, �� ���������� ����� �� ����� ������� �� ��������� [...str]

function stringToChars(str) {
  return [...str];          // spread �������� ����� � ����� �������
}

// -------------------- ���� ��� ������� --------------------
function convert() {
  const src   = document.getElementById('str').value;
  const chars = stringToChars(src);
  document.getElementById('out').textContent = JSON.stringify(chars);
  console.log(chars);
}

// -------------------- ������� ��������� ���� --------------------
console.log( stringToChars('JavaScript') );   // ['J','a','v','a','S','c','r','i','p','t']
