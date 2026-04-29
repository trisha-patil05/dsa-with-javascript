function rotateLeft(arr, d) {
    let n = arr.length;

    for (let i = 0; i < d; i++) {
        let first = arr[0];

        for (let j = 0; j < n - 1; j++) {
            arr[j] = arr[j + 1];
        }

        arr[n - 1] = first;
    }

    return arr;
}

// Example
console.log(rotateLeft([1,2,3,4,5], 2)); // [3,4,5,1,2]