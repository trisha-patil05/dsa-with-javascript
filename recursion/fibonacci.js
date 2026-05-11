/**
 * ⏱️ Time : O(n) | 🧠 Space : O(n)
 * =============================================
 */


function fibonacci(n, first = 0, second = 1) {
    if (n <= 0) return;
    let third = first + second;
    process.stdout.write(third + " ");
    fibonacci(n - 1, second, third);
}
let n = 10;
process.stdout.write("Fibonacci Series: ");
fibonacci(n);
