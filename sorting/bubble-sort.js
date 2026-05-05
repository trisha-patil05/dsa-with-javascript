/**
 * ⏱️ Time : O(n^2) | 🧠 Space : O(1)
 * =============================================
 */

let arr = [1, 20, 13, 7, 8, 5, 10]
let n = arr.length

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j <= n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }

}
console.log(arr)