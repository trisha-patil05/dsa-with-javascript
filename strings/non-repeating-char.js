function firstNonRepeating(s) {
    // Check each character
    for (let i = 0; i < s.length; i++) {
        let count = 0;

        // Compare with all characters
        for (let j = 0; j < s.length; j++) {
            if (s[i] === s[j]) {
                count++;
            }
        }

        // If appears only once → return it
        if (count === 1) {
            return s[i];
        }
    }

    return '$'; // if no non-repeating character
}

// Example
console.log(firstNonRepeating("geeksforgeeks")); // f