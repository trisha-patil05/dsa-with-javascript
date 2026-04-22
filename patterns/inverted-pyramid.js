let prompt =require("prompt-sync")();
let n =prompt("enter a number:");
for(let i=n; i>=1; i--){
    for(let j=1; j<=n-i; j++){
        process.stdout.write("  ");
    }
    for(let k=1; k<=2*i-1; k++){
        process.stdout.write("* ");
    }   
    console.log();
}