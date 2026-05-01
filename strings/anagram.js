function isAnagram(s1, s2) {
    // Step 1: Check length
    if (s1.length !== s2.length) return false;

    // Step 2: Sort both strings
    let str1 = s1.split('').sort().join('');
    let str2 = s2.split('').sort().join('');

    // Step 3: Compare
    return str1 === str2;
}

// Example
console.log(isAnagram("geeks", "kseeg")); // true