/**
 * ⏱️ Time : O(log n) | 🧠 Space : O(1)
 * =============================================
 */

var searchInsert = function(nums, target) {

    let first = 0;
    let last = nums.length - 1;

    while(first <= last){

        let mid = Math.floor((first + last) / 2);

        // Target found
        if(nums[mid] === target){
            return mid;
        }

        // Move left
        else if(nums[mid] > target){
            last = mid - 1;
        }

        // Move right
        else{
            first = mid + 1;
        }
    }

    // Insert position
    return first;
};
let nums = [1, 3, 5, 6];
let target = 5;
console.log(searchInsert(nums, target))