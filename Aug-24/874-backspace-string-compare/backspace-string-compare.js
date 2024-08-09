/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    const sArray = []
    const tArray = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "#") sArray.pop()
        else sArray.push(s[i])
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] === "#") tArray.pop()
        else tArray.push(t[i])
    }
    return sArray.join() == tArray.join()
};