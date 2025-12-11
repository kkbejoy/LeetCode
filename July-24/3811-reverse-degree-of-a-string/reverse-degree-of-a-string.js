/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    let result = 0
    for (let i = 0; i < s.length; i++) {
        let reversePosition = 26 - (s.charCodeAt(i) - "a".charCodeAt(0));
        result += reversePosition * (i + 1)
    }
    return result
};