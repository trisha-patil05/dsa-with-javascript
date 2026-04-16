/**
 * =============================================
 * 📌 Topic     : Basics - Type Coercion
 * 🔢 Problem   : Sum and Message
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Input : 5, 10  → "Sum is 15"
 *  Input : 5, "3" → "Sum is 53"  (type coercion)
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

let a = 5;
let b = "3";

console.log("Sum is " + (a + b));      // "53" — coercion
console.log("Sum is " + (a + Number(b))); // "8"  — correct