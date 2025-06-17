/*
 * Lab 10 � �ᒺ��� (������ 9)
 *   ��������� �ᒺ�� "book" �� �������������:
 *     title, author, year
 *   ���������� �� ���������� �� �������� �� � �������.
 */

// ���������� �ᒺ���
const book = {
  title : "������� � ���������",
  author: "������� ��������",
  year  : 1967
};

// ������ ������������ for�in
for (const key in book) {
  if (book.hasOwnProperty(key)) {
    console.log(`${key}: ${book[key]}`);
  }
}

/* ����-������ (node lab10.js):
title: ������� � ���������
author: ������� ��������
year: 1967
*/
