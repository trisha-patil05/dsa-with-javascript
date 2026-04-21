let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number "))

for(let i=1; i<=n; i++){

    // spaces
    for(let j=1; j<=i-1; j++){
        process.stdout.write("  ");
    }

    // stars
    for(let j=1; j<=n-i+1; j++){
        process.stdout.write("* ");
    }

    console.log();
}