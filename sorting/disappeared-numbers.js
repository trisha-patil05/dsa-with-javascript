/**
 * ⏱️ Time : O(n) | 🧠 Space : O(1)
 * =============================================
 */

//cyclic sort approach
var findDisappearedNumbers = function (nums) {
    let i = 0;
    while (i < nums.length) {
        let correctIdx = nums[i] - 1
        if (nums[i] != nums[correctIdx]) {
            let temp = nums[i]
            nums[i] = nums[correctIdx]
            nums[correctIdx] = temp
        } else i++;
    }
    let arr = [];
    for (let j = 0; j < nums.length; j++) {
        if (j + 1 != nums[j]) {
            arr.push(j + 1);
        }
    }
    return arr;
};