/**
 * =============================================
 * 📌 Topic     : Basics - Variables
 * 🔢 Problem   : Swap Two Variables (3 Methods)
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  a=5, b=10 → after swap: a=10, b=5
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

// Method 1: Using temp variable
let a = 5, b = 10;
let temp = a; a = b; b = temp;
console.log("Method 1 →", a, b);

// Method 2: Arithmetic
a = 5; b = 10;
a = a + b; b = a - b; a = a - b;
console.log("Method 2 →", a, b);

// Method 3: Destructuring
a = 5; b = 10;
[a, b] = [b, a];
console.log("Method 3 →", a, b);