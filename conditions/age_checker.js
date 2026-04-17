/**
 * =============================================
 * 📌 Topic     : Conditional Statements
 * 🔢 Problem   : Age Category Checker
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Input : "abc" → "Please enter a valid number"
 *  Input : 15    → "You are a minor."
 *  Input : 20    → "You are a senior."
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

let age = Number(prompt("Enter your age: "));

if (isNaN(age)) {
  console.log("Please enter a valid number for age.");
} else if (age < 18) {
  console.log("You are a minor.");
} else {
  console.log("You are a senior.");
}