// Lab 16 Ц forEach (variant 9)
export function allEven(arr) {
  let ok = true;
  arr.forEach(n => {
    if (n % 2 !== 0) ok = false;
  });
  return ok;
}
// консольне демо
console.log( allEven([2,4,6]) );   // true
console.log( allEven([1,4,6]) );   // false
