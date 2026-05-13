/**
 * ⏱️ Time : O(n) | 🧠 Space : O(1)
 * =============================================
 */

var reverseList = function(head) {

    let prev = null;
    let current = head;

    while (current) {
        let nextTemp = current.next; // Store next node
        current.next = prev; // Reverse the link
        prev = current; // Move prev to current
        current = nextTemp; // Move to next node
    }

    return prev; // New head of the reversed list
};
let head = [1,2,3,4,5];
console.log(reverseList(head)); 