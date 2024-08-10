/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const sMap = {};
    const tMap = {};

    for (let i = 0; i < s.length; i++) {
        if (!sMap[s[i]] && !tMap[t[i]]) {
            sMap[s[i]] = t[i]
            tMap[t[i]] = s[i]
        } else if (sMap[s[i]] !== t[i] || tMap[t[i]] !== s[i]) {
            return false
        }
    }
    return true
};