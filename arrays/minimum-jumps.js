function minJumps(arr) {
    let n = arr.length;

    // If only one element → no jumps needed
    if (n === 1) return 0;

    // If first element is 0 → can't move
    if (arr[0] === 0) return -1;

    let jumps = 0;
    let currentEnd = 0;
    let farthest = 0;

    for (let i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + arr[i]);

        // When we reach the end of current range
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;

            // If we can't move forward
            if (currentEnd <= i) return -1;
        }
    }

    return jumps;
}