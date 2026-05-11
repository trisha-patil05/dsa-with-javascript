/**
 * ⏱️ Time : O(log n) | 🧠 Space : O(1)
 * =============================================
 */

var search = function(nums, target) {

    let first = 0;
    let last = nums.length - 1;

    while(first <= last){

        let mid = Math.floor((first + last) / 2);

        // Target found
        if(nums[mid] === target){
            return mid;
        }

        // Left half sorted
        if(nums[first] <= nums[mid]){

            if(target >= nums[first] && target < nums[mid]){
                last = mid - 1;
            }
            else{
                first = mid + 1;
            }
        }

        // Right half sorted
        else{

            if(target > nums[mid] && target <= nums[last]){
                first = mid + 1;
            }
            else{
                last = mid - 1;
            }
        }
    }

    return -1;
};
let nums = [4,5,6,7,0,1,2];
let target = 5;
console.log(searchInsert(nums, target))