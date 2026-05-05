/**
 * ⏱️ Time : O(n^2) | 🧠 Space : O(1)
 * =============================================
 */

let arr = [1, 20, 13, 7, 8, 5, 10]
let n = arr.length

for (let i = 1; i < n; i++) {
    let key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]
        j--
    }
    arr[j + 1] = key
}

console.log(arr)