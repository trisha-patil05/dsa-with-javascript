/**
 * =============================================
 * 📌 Topic     : Loops
 * 🔢 Problem   : Easy Calculator
 * ⚡ Difficulty : Easy
 * =============================================
 * 🧪 Examples:
 *  Input : cancel  → "Game cancelled"
 *  Input : "x"     → "Invalid input"
 *  Input : 5 + 3   → 8
 *  Input : 10 / 0  → "Cannot divide by zero"
 *
 * ⏱️ Time : O(1) | 🧠 Space : O(1)
 * =============================================
 */

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calculate() {
    readline.question("Enter first number: ", (a) => {
        if (a === null) {
            console.log("Game cancelled");
            readline.close();
            return;
        }

        a = a * 1;

        if (a !== a) {
            console.log("Invalid input");
            calculate();
            return;
        }

        readline.question("Enter operator (+, -, *, /): ", (op) => {
            readline.question("Enter second number: ", (b) => {
                b = b * 1;

                if (b !== b) {
                    console.log("Invalid input");
                    calculate();
                    return;
                }

                let result;

                if (op === "+") result = a + b;
                else if (op === "-") result = a - b;
                else if (op === "*") result = a * b;
                else if (op === "/") {
                    if (b === 0) {
                        console.log("Cannot divide by zero");
                        calculate();
                        return;
                    }
                    result = a / b;
                } else {
                    console.log("Invalid operator");
                    calculate();
                    return;
                }

                console.log("Result: " + result);

                readline.question("Continue? (yes/no): ", (ans) => {
                    if (ans === "yes") calculate();
                    else {
                        console.log("Game cancelled");
                        readline.close();
                    }
                });
            });
        });
    });
}

calculate();