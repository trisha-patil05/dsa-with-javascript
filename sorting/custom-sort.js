/**
 * ⏱️ Time : O(n log n) | 🧠 Space : O(1)
 * =============================================
 */


// Function to sort array based on fn
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

// Example 1
let arr1 = [5, 4, 1, 2, 3];
let fn1 = (x) => x;

let result1 = sortBy(arr1, fn1);
console.log("Sorted Array 1:", result1);  // [1, 2, 3, 4, 5]

// Example 2
let arr2 = [-2, -1, 0, 1, 2];
let fn2 = (x) => x * x;

let result2 = sortBy(arr2, fn2);
console.log("Sorted Array 2:", result2);  // [0, -1, 1, -2, 2]