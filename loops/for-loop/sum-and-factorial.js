/**
 * =============================================
 * 📌 Topic     : For Loop
 * 🔢 Problem   : Sum of N Natural Numbers & Factorial
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Input : 5 → Sum: 15 | Factorial: 120
 *
 * ⏱️ Time : O(n) | 🧠 Space : O(1)
 * =============================================
 */

let n = 5;
let sum = 0;
let factorial = 1;

for (let i = 1; i <= n; i++) {
  sum = sum + i;
  factorial = factorial * i;
}

console.log("Sum: " + sum);
console.log("Factorial: " + factorial);