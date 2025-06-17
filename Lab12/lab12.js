// Функція: бере перший аргумент, а решту збирає оператором rest і з’єднує у рядок
function joinRest(first, ...rest) {
  if (!rest.length) return String(first);
  return `${first}: ${rest.join(" ")}`;
}

/* ----- Демо ----- */
console.log(joinRest("Місяці", "січень", "лютий", "березень"));
console.log(joinRest("ID", 101, 202, 303, 404));
console.log(joinRest("solo-only"));
