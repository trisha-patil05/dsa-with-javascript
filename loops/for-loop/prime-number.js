/**
 * =============================================
 * 📌 Topic     : For Loop
 * 🔢 Problem   : Prime Number Checker
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Input : 7  → true
 *  Input : 10 → false
 *
 * ⏱️ Time : O(√n) | 🧠 Space : O(1)
 * =============================================
 */

let n = 7;
let isPrime = true;

for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime);