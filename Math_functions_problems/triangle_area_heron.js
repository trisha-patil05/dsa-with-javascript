/**
 * =============================================
 * 📌 Topic     : Math Problems
 * 🔢 Problem   : Area of Triangle by Heron's Formula
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Input : 3, 4, 5 → Area = 6.00
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

let a = Number(prompt("Enter side a: "));
let b = Number(prompt("Enter side b: "));
let c = Number(prompt("Enter side c: "));

let s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("Area = " + area.toFixed(2));