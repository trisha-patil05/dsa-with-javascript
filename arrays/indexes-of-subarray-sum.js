let arr = [1, 2, 3, 4, 5, 6];
let target = 9;

let i = 0, j = 0;
let sum = 0;

while (i < arr.length) {
    sum += arr[i];

    while (sum > target) {
        sum -= arr[j];
        j++;
    }

    if (sum === target) {
        console.log("index of " + (j + 1) + " to " + (i + 1));
        break;
    }

    i++;
}