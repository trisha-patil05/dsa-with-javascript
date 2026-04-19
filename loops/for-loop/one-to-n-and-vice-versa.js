/**
 * =============================================
 * 📌 Topic     : For Loop
 * 🔢 Problem   : One to N and Vice Versa
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Input : 5 → 1 2 3 4 5 then 5 4 3 2 1
 *
 * ⏱️ Time : O(n) | 🧠 Space : O(1)
 * =============================================
 */

let n = 5;

for (let i = 1; i <= n; i++) {
  console.log(i);
}

for (let i = n; i >= 1; i--) {
  console.log(i);
}