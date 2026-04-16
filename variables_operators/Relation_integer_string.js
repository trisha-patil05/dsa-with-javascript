/**
 * =============================================
 * 📌 Topic     : Basics — Variables & Operators
 * 🔢 Problem   : Relation Between Integer and String
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧠 Concept: Type Coercion
 *  "5" + 5  → "55"  (string concatenation)
 *   5  + 5  → 10    (numeric addition)
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

console.log("5" + 5);    // "55" — string concat
console.log("5" - 5);    // 0    — numeric coercion
console.log("5" * 2);    // 10   — numeric coercion
console.log("abc" * 2);  // NaN
console.log(5 + 5);      // 10