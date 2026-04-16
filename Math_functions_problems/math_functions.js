/**
 * =============================================
 * 📌 Topic     : Math Functions
 * 🔢 Problem   : All Math Methods
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Math.round(4.5) → 5
 *  Math.sqrt(25)   → 5
 *  Math.abs(-5)    → 5
 *  Math.random()   → 0.0 to 0.99
 *  (3.14).toFixed(2) → "3.14"
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

// --- Rounding ---
console.log("round(4.5) :", Math.round(4.5));  // 5
console.log("round(4.4) :", Math.round(4.4));  // 4
console.log("ceil(4.1)  :", Math.ceil(4.1));   // 5
console.log("floor(4.9) :", Math.floor(4.9));  // 4

// --- Truncate, Power, Root ---
console.log("trunc(4.9) :", Math.trunc(4.9));  // 4
console.log("pow(2,3)   :", Math.pow(2, 3));   // 8
console.log("sqrt(25)   :", Math.sqrt(25));    // 5
console.log("cbrt(27)   :", Math.cbrt(27));    // 3

// --- Absolute, Max, Min ---
console.log("abs(-5)        :", Math.abs(-5));         // 5
console.log("max(1, 9, 3)   :", Math.max(1, 9, 3));    // 9
console.log("min(1, 9, 3)   :", Math.min(1, 9, 3));    // 1

// --- Random ---
console.log("random(0-1)    :", Math.random());
console.log("random(1-10)   :", Math.floor(Math.random() * 10) + 1);
console.log("random(1-100)  :", Math.floor(Math.random() * 100) + 1);

// --- toFixed ---
let num = 3.14159;
console.log("toFixed(2) :", num.toFixed(2));  // "3.14"
console.log("toFixed(4) :", num.toFixed(4));  // "3.1416"
console.log("toFixed(0) :", num.toFixed(0));  // "3"