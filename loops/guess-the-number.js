/**
 * =============================================
 * 📌 Topic     : Loops
 * 🔢 Problem   : Guess the Number Game
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Input : 45 → "Too low!" / "Too high!" / "Correct!"
 *
 * ⏱️ Time : O(attempts) | 🧠 Space : O(1)
 * =============================================
 */

let random = Math.floor(Math.random() * 50 + 1);
let guess;

while (true) {
    guess = prompt("Guess the number between 1 and 200");

    if (guess === null) {
        console.log("Game cancelled");
        break;
    }

    guess = guess * 1;

    if (guess !== guess || guess < 1 || guess > 200) {
        console.log("Enter valid number (1-200)");
    } 
    else if (guess < random) {
        console.log("Too low");
    } 
    else if (guess > random) {
        console.log("Too high");
    } 
    else {
        console.log(" Correct!");
        break;
    }
}