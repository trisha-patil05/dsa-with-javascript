let n = 5;

for (let i = 1; i <= n; i++) {
    // spaces
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ");
    }

    // numbers
    for (let k = 1; k <= n; k++) {
        process.stdout.write(k.toString()); //for * simply write "*"
                                            //for alphabet write String.fromCharCode(64 + k) //for uppercase
    }

    console.log();
}