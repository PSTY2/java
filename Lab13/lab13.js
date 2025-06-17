// Lab 13 – Spread operator  (Variant 9)
// Функція, що перетворює рядок на масив символів за допомогою [...str]

function stringToChars(str) {
  return [...str];          // spread розгортає рядок в окремі символи
}

// -------------------- демо для сторінки --------------------
function convert() {
  const src   = document.getElementById('str').value;
  const chars = stringToChars(src);
  document.getElementById('out').textContent = JSON.stringify(chars);
  console.log(chars);
}

// -------------------- коротке консольне демо --------------------
console.log( stringToChars('JavaScript') );   // ['J','a','v','a','S','c','r','i','p','t']
