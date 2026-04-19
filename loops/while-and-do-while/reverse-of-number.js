/**
 * =============================================
 * 📌 Topic     : While Loop
 * 🔢 Problem   : Reverse of a Number
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Input : 1234 → 4321
 *
 * ⏱️ Time : O(d) | 🧠 Space : O(1)
 * =============================================
 */

let n = 1234;
let rev = 0;

while (n > 0) {
  let rem = n % 10;
  rev = rev * 10 + rem;
  n = Math.floor(n / 10);
}

console.log(rev);