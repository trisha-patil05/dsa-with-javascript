/**
 * ⏱️ Time : O(n) | 🧠 Space : O(1)
 * =============================================
 */


let arr = [2, 4, 6, 5, 3, 1, 7, 8, 10, 9]
let i = 0;

while (i <= arr.length) {
    let correctIdx = arr[i] - 1;     //if your elements start with 0 then remove -1 here.
    if (arr[i] != arr[correctIdx]) {
        let temp = arr[i]
        arr[i] = arr[correctIdx]
        arr[correctIdx] = temp
    }
    else i++;
}
console.log(arr);