/**
 * =============================================
 * 📌 Topic     : Math Problems
 * 🔢 Problem   : Circumference of Circle
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Input : r=7 → Circumference = 43.98
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

let r = Number(prompt("Enter radius: "));

let circumference = 2 * Math.PI * r;
console.log("Circumference = " + circumference.toFixed(2));