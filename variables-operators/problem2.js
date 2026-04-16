/**
 * =============================================
 * 📌 Topic     : Operators - Arithmetic + Unary
 * 🔢 Problem   : Predict the Output
 * ⚡ Difficulty : Medium
 * =============================================
 * 🧪 Examples:
 *  a=11, b=22 → predict final a, b, c
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

let a = 11, b = 22;
let c = a + b + a++ + b++ + ++a + ++b;

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);