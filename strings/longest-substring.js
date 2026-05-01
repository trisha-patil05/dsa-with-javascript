function lengthOfLongestSubstring(s) {
    let map = new Map();
    let left = 0;
    let maxLen = 0;
    
    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        
        // Repeat? Shrink window
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1;
        }
        
        // Update max length
        maxLen = Math.max(maxLen, right - left + 1);
        
        // Update last seen index
        map.set(char, right);
    }
    
    return maxLen;
}