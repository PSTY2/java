// Lab 14 � IIFE random (variant 9)
(() => {
  const rnd = Math.floor(Math.random() * 100) + 1;   // 1?100
  console.log("��������� �����:", rnd);
  document.getElementById("out").textContent = rnd;
  return rnd;                // ������'������ � ������ ������������
})();
