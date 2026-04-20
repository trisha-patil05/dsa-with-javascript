let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number "))

for(let i=1; i<=n; i++){

    // inverted (spaces)
    for(let j=1; j<=n-i; j++){
        process.stdout.write(" ");
    }

    for(let j=1; j<=2*i-1; j++){
        process.stdout.write("*");
    }


    console.log(); // line break (important)
}