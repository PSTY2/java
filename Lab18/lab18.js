// Lab 18 – filter (variant 9)
export function unique(arr) {
  return arr.filter((x, i) => arr.indexOf(x) === i);
}
console.log( unique([3,1,3,5,1,7]) );
