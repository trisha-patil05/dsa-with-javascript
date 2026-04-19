/**
 * =============================================
 * 📌 Topic     : For Loop
 * 🔢 Problem   : Factors of a Number
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Input : 12 → 1 2 3 4 6 12
 *
 * ⏱️ Time : O(n) | 🧠 Space : O(1)
 * =============================================
 */

let n = 74044774;

for (let i = 1; i <= Math.floor(n/2); i++) {
  if (n % i === 0) {
    console.log(i);
  }
}
console.log(n);