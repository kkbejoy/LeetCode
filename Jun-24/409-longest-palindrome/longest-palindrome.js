/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const map = new Map();
    let oddCount = 0
    for (let i = 0; i < s.length; i++) {
        let value = map.get(s[i]) || 0;
        map.set(s[i], ++value);
        if (map.get(s[i]) % 2 == 1) {
            oddCount++
        }
        else oddCount--
    }
    if (oddCount > 1) return s.length - oddCount + 1
    return s.length
};