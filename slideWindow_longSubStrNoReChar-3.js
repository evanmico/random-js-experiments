/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = (s) => {
    if (s.length <= 1) return s.length;
    let lLength = 1;
    let lP = 0;
    const charMap = new Map();
    for (i = 0; i < s.length; i++) {
        if (charMap.has(s[i]) && charMap.get(s[i]) >= lP) {
            lP = charMap.get(s[i]) + 1;
            if (s.length - 1 - lP < lLength) {
                break;
            }
        }
        const currWindow = i + 1 - lP;
        if (currWindow > lLength) lLength = currWindow;
        charMap.set(s[i], i);
    }
    return lLength;
};

const test = "abba";
console.log(lengthOfLongestSubstring(test));
