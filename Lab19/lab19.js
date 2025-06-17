// Lab 19 – reduce (variant 9)
export function frequencyMap(arr) {
  return arr.reduce((acc, v) => {
    acc[v] = (acc[v] ?? 0) + 1;
    return acc;
  }, {});
}
console.log( frequencyMap(['a','b','a','c']) );
