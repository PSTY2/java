/*
 * Lab 10 — Об’єкти (варіант 9)
 *   Створюємо об’єкт "book" із властивостями:
 *     title, author, year
 *   Перебираємо всі властивості та виводимо їх у консоль.
 */

// оголошення об’єкта
const book = {
  title : "Майстер і Маргарита",
  author: "Михайло Булгаков",
  year  : 1967
};

// перебір властивостей for…in
for (const key in book) {
  if (book.hasOwnProperty(key)) {
    console.log(`${key}: ${book[key]}`);
  }
}

/* Демо-запуск (node lab10.js):
title: Майстер і Маргарита
author: Михайло Булгаков
year: 1967
*/
