/**
 * =============================================
 * 📌 Topic     : Operators - Unary
 * 🔢 Problem   : Unary Operators ( ++, -- )
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  i=5, i++ → prints 5, then i becomes 6
 *  i=5, ++i → prints 6 immediately
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

let i = 5;
console.log("Post-increment :", i++);  // 5
console.log("After           :", i);   // 6

i = 5;
console.log("Pre-increment  :", ++i);  // 6

i = 5;
console.log("Post-decrement :", i--);  // 5
console.log("After           :", i);   // 4

i = 5;
console.log("Pre-decrement  :", --i);  // 4