/**
 * =============================================
 * 📌 Topic     : Math Problems
 * 🔢 Problem   : Generate OTP
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Output : 4821
 *  Output : 1093
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

let otp = Math.floor(Math.random() * 9000) + 1000;
console.log("Your OTP : " + otp);