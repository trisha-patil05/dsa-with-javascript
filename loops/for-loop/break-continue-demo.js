/**
 * =============================================
 * 📌 Topic     : Break and Continue
 * 🔢 Problem   : Break & Continue Demo
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  break    → prints 1 to 5, stops at 6
 *  continue → skips even, prints odd 1 to 10
 *
 * ⏱️ Time : O(n) | 🧠 Space : O(1)
 * =============================================
 */

// break
for (let i = 1; i <= 10; i++) {
  if (i === 6) break;
  console.log(i);
}

// continue
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}