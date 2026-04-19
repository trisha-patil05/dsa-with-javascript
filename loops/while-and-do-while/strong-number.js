/**
 * =============================================
 * 📌 Topic     : While Loop
 * 🔢 Problem   : Strong Number Checker
 * ⚡ Difficulty : Medium
 * =============================================
 * 🧪 Examples:
 *  Input : 145 → true  (1! + 4! + 5! = 145)
 *  Input : 123 → false
 *
 * ⏱️ Time : O(d) | 🧠 Space : O(1)
 * =============================================
 */

let n = 145;
let original = n; // store original number

if (n > 0) {
    let sum = 0;

    while (n > 0) {
        let rem = n % 10;

        let fact = 1;
        for (let i = 1; i <= rem; i++) {
            fact *= i;
        }

        sum += fact;
        n = Math.floor(n / 10); 
    }

    if (sum === original) {
        console.log("Strong Number");
    } else {
        console.log("Not a Strong Number");
    }
}