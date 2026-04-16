/**
 * =============================================
 * 📌 Topic     : Math Problems
 * 🔢 Problem   : Area and Perimeter of Rectangle
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Input : l=5, b=3 → Area=15, Perimeter=16
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

let l = Number(prompt("Enter length: "));
let b = Number(prompt("Enter breadth: "));

console.log("Area      = " + (l * b));
console.log("Perimeter = " + (2 * (l + b)));