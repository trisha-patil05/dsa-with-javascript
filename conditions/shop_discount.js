/**
 * =============================================
 * 📌 Topic     : Conditional Statements
 * 🔢 Problem   : Shop Discount Calculator
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Input : 3000  → 0% off  → ₹3000
 *  Input : 6000  → 5% off  → ₹5700
 *  Input : 8000  → 10% off → ₹7200
 *  Input : 10000 → 20% off → ₹8000
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

let amount = Number(prompt("What is the final amount? "));
let dis = 0;

if (amount > 0 && amount <= 5000) {
  dis = 0;
} else if (amount > 5001 && amount <= 7000) {
  dis = 5;
} else if (amount > 7001 && amount <= 9000) {
  dis = 10;
} else if (amount > 9001) {
  dis = 20;
}

console.log(Math.floor(amount - (dis * amount) / 100));