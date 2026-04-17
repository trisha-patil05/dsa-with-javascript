/**
 * =============================================
 * 📌 Topic     : Conditional Statements
 * 🔢 Problem   : INR Denomination Breakdown
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Input : "abc" → "Please enter a valid amount."
 *  Input : -500  → "Amount cannot be negative."
 *  Input : 1385  → 500×2, 200×1, 100×1, 50×1, 20×1, 10×1, 5×1
 *  Input : 1     → "1 coin: 1"
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */
let result = Number(prompt("Enter the amount: "));
if(result>500){
    console.log("500 notes: " + Math.floor(result/500));
    result = result % 500;
}
if(result>200){
    console.log("200 notes: " + Math.floor(result/200));
    result = result % 200;
}
if(result>100){
    console.log("100 notes: " + Math.floor(result/100));
    result = result % 100;
}
if(result>50){
    console.log("50 notes: " + Math.floor(result/50));
    result = result % 50;
}
if(result>20){
    console.log("20 notes: " + Math.floor(result/20));
    result = result % 20;
}
if(result>10){
    console.log("10 notes: " + Math.floor(result/10));
    result = result % 10;
}
if(result>5){
    console.log("5 notes: " + Math.floor(result/5));
    result = result % 5;
}
if(result>2){
    console.log("2 notes: " + Math.floor(result/2));
    result = result % 2;
}
if(result===1){
    console.log("1 note: " + result);
}