function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
// Time:  O(2ⁿ) — doubles with each increment of n
// Space: O(n)  — call stack depth = n