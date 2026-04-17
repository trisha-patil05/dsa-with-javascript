/**
 * =============================================
 * 📌 Topic     : Conditional Statements — Ternary
 * 🔢 Problem   : Valid Voter using Ternary Operator
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧠 Syntax:
 *  condition ? value_if_true : value_if_false
 *
 * 🧪 Examples:
 *  Input : "abc" → "Please enter a valid number"
 *  Input : 15    → "You are not eligible to vote."
 *  Input : 20    → "You are eligible to vote."
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

// Example 2: Max of two numbers
let a = Number(prompt("Enter a: "));
let b = Number(prompt("Enter b: "));
let max = a > b ? a : b;
console.log("Maximum:", max);

// Example 3: Pass or Fail
let marks = Number(prompt("Enter marks: "));
let status = marks >= 40 ? "Pass" : "Fail";
console.log(status);