/**
 * =============================================
 * 📌 Topic     : While Loop
 * 🔢 Problem   : Sum of Digits
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Input : 1234 → 10
 *
 * ⏱️ Time : O(d) | 🧠 Space : O(1)
 * =============================================
 */

let n = 1234;
let sum = 0;

while (n > 0) {
    let rem = n % 10;
    sum = sum + rem;
    n = Math.floor(n / 10);
}

console.log(sum);