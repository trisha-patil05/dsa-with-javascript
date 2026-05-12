/**
 * ⏱️ Time : O(log n) | 🧠 Space : O(1)
 * =============================================
 */

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        else if (nums[mid] < target) {
            left = mid + 1;
        }

        else {
            right = mid - 1;
        }
    }

    return -1;
};
let nums = [2, 4, 7, 15, 22, 45, 57, 68, 79, 80]
target = 79
let index = search(nums, target)    
if (index == -1) console.log("not found");
else console.log("target is found at " + index + " index");