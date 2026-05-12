/**
 * ⏱️ Time : O(log n) | 🧠 Space : O(1)
 * =============================================
 */

var binaryGap = function(n) {

    let binary = n.toString(2);

    let prev = -1;
    let maxDistance = 0;

    for (let i = 0; i < binary.length; i++) {

        if (binary[i] === '1') {

            if (prev !== -1) {
                maxDistance = Math.max(maxDistance, i - prev);
            }

            prev = i;
        }
    }

    return maxDistance;
};
let n = 22
console.log(binaryGap(n));