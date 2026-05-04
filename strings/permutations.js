// permutation.js

function nextPermutation(arr) {
    const n = arr.length;

    // 1) Find the rightmost index i such that arr[i] < arr[i+1]
    let i = n - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    // if no such i, this is the last permutation
    if (i < 0) return false;

    // 2) Find rightmost index j > i such that arr[j] > arr[i]
    let j = n - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }

    // 3) Swap arr[i] and arr[j]
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    // 4) Reverse the part from i+1 to end
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return true;
}

// ====== TEST EXAMPLE ======

let chars = "abc".split("");       // ['a','b','c']
console.log("Start:", chars.join(""));

while (nextPermutation(chars)) {
    console.log("Next :", chars.join(""));
}