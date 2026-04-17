/**
 * =============================================
 * 📌 Topic     : Conditional Statements — Nested Ternary
 * 🔢 Problem   : Number Sign Checker
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧠 Syntax:
 *  condition1 ? val1 : condition2 ? val2 : val3
 *
 * 🧪 Examples:
 *  Input : "abc" → "Invalid input"
 *  Input : 7     → "Positive"
 *  Input : -3    → "Negative"
 *  Input : 0     → "Zero"
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

let num = Number(prompt("Enter a number: "));

let sign = isNaN(num)
  ? "Invalid input"
  : num > 0
  ? "Positive"
  : num < 0
  ? "Negative"
  : "Zero";

console.log(sign);