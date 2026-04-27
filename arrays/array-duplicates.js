function findDuplicates(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) count++;
        }

        if (count === 2 && !res.includes(arr[i])) {
            res.push(arr[i]);
        }
    }

    return res;
}

// Example
console.log(findDuplicates([4,3,2,7,8,2,3,1])); // [2, 3]