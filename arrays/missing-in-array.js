let arr = [1, 2, 3, 5];
let n=arr.length+1;

let sum = (n * (n + 1)) / 2;

for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
}

console.log("missing number is " + sum);
