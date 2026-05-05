/**
 * ⏱️ Time : O(n log n) | 🧠 Space : O(n)
 * =============================================
 */

function conquer(arr, first, mid, last) { //o(n)
    let temp = new Array(last - first + 1);
    let i = first, j = mid + 1, k = 0;

    while (i <= mid && j <= last) {
        if (arr[i] < arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

    while (i <= mid) {
        temp[k++] = arr[i++];
    }

    while (j <= last) {
        temp[k++] = arr[j++];
    }

    let p = 0, t = first;
    while (p < temp.length) {
        arr[t++] = temp[p++];
    }
}

function divide(arr, first, last) {  //o(log n)

    if (first >= last) return;

    let mid = Math.floor((first + last) / 2);
    divide(arr, first, mid);
    divide(arr, mid + 1, last);
    conquer(arr, first, mid, last);
}

let arr = [1, 20, 13, 7, 8, 5, 10]
divide(arr, 0, arr.length - 1);
console.log(arr)    