/**
 * =============================================
 * 📌 Topic     : Conditional Statements
 * 🔢 Problem   : Electricity Bill Calculator
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Input : 50   → ₹200
 *  Input : 150  → ₹700
 *  Input : 300  → ₹1400
 *  Input : 500  → ₹3500
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

let units = Number(prompt("Enter the number of units: "));
let amount = 0;
if(units>400){
    amount += (units-400) * 13;
    units = 400;
}
if(units>200 && units<=400){
    amount += (units-200) * 8;
    units = 200;
}
if(units>100 && units<=200){
    amount += (units-100) * 6;
    units = 100;            
}
if(units>0){
    amount += units * 4;
}

console.log(amount);