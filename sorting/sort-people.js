/**
 * ⏱️ Time : O(n log n) | 🧠 Space : O(n)
 * =============================================
 */

var sortPeople = function(names, heights) {
    // Step 1: combine names and heights
    let arr = names.map((name, i) => [name, heights[i]]);

    // Step 2: sort by height (descending)
    arr.sort((a, b) => b[1] - a[1]);

    // Step 3: extract only names
    return arr.map(item => item[0]);
};

// Example
let names = ["Mary","John","Emma"];
let heights = [180,165,170];

console.log(sortPeople(names, heights)); 
// Output: ["Mary","Emma","John"]