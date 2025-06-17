// �������: ���� ������ ��������, � ����� ����� ���������� rest � 璺��� � �����
function joinRest(first, ...rest) {
  if (!rest.length) return String(first);
  return `${first}: ${rest.join(" ")}`;
}

/* ----- ���� ----- */
console.log(joinRest("̳����", "�����", "�����", "��������"));
console.log(joinRest("ID", 101, 202, 303, 404));
console.log(joinRest("solo-only"));
