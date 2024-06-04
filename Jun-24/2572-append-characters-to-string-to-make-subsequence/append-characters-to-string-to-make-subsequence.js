/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
    let count = 0;
    let tIndex = 0, sIndex = 0;
    let tLength = t.length, sLength = s.length

    while (tIndex < tLength && sIndex < sLength) {
        if (s[sIndex] === t[tIndex]) {
            tIndex++;
        }
        sIndex++
    }
    count=tLength-tIndex
    return count
};