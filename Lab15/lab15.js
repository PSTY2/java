// Lab 15 � Higher-Order Function + closure (variant 9)
export function run(fn, ...args) {
  return fn(...args);                      // HOF ������ ������
}
export function makeCounter(start = 0) {
  let count = start;                       // ���������
  return () => ++count;
}
