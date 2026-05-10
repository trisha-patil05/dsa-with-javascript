/**
 * ⏱️ Time : O(n) | 🧠 Space : O(1)
 * =============================================
 */

//cyclic sort approach
var findErrorNums = function(nums) {

    let i = 0;

    // Cyclic Sort
    while (i < nums.length) {

        let correctIdx = nums[i] - 1;

        if (nums[i] != nums[correctIdx]) {

            let temp = nums[i];
            nums[i] = nums[correctIdx];
            nums[correctIdx] = temp;

        } else {
            i++;
        }
    }

    // Find duplicate and missing number
    for (let j = 0; j < nums.length; j++) {

        if (nums[j] != j + 1) {
            return [nums[j], j + 1];
        }
    }
};
let nums = [1, 2, 2, 4]
console.log(findErrorNums(nums))