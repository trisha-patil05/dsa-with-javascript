/**
 * =============================================
 * 📌 Topic     : Operators - Unary (Tricky)
 * 🔢 Problem   : Predict the Output
 * ⚡ Difficulty : Medium
 * =============================================
 * 🧪 Examples:
 *  let i = 11;
 *  let j = --(i++); → ReferenceError
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

// i++ returns a value (not a reference)
// --( value ) → Invalid left-hand side → ReferenceError
let i = 11;
let j = --(i++);
console.log("j =", j);