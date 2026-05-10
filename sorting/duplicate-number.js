/**
 * ⏱️ Time : O(n) | 🧠 Space : O(1)
 * =============================================
 */

var findDuplicate = function(nums) {

    // Step 1: Initialize slow and fast pointers
    let slow = nums[0];
    let fast = nums[0];

    // Step 2: Detect cycle
    do {
        slow = nums[slow];          // move 1 step
        fast = nums[nums[fast]];    // move 2 steps
    } while (slow !== fast);

    // Step 3: Find entrance of cycle
    slow = nums[0];

    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    // Step 4: Duplicate number
    return slow;
};
let nums = [1, 3, 4, 2, 2]
console.log(findDuplicate(nums))