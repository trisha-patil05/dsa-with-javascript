/**
 * ⏱️ Time : O(n^2) | 🧠 Space : O(1)
 * =============================================
 */

let arr = [1, 20, 13, 7, 8, 5, 10]
let n = arr.length

for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex])
            minIndex = j;
    }
    if (minIndex != i) {
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
}

console.log(arr)