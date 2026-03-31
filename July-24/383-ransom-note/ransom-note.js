/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const r = ransomNote
    // .split("")
    const m = magazine
    // .split("")
    const freq = {}
    for (let char of m) {
        if (!Object.hasOwn(freq, char)) {
            freq[char] = 1
        } else {
            freq[char]++
        }

    }
    for (let char of r) {
        if (!Object.hasOwn(freq, char) || freq[char] === 0) return false
        else freq[char]--

    }
    return true
};