let prompt = require("prompt-sync")();
let n= Number(prompt("enter a number:"));
for(let i=1; i<=n; i++){
    for(let j=1; j<=2*n-1; j++){
        if(i+j==2*n || i==j){
        process.stdout.write("* ");
        }else{
            process.stdout.write("  ");
        }   
    }
    console.log();
}


