/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const row = [/^[qwertyuiop]+$/, /^[asdfghjkl]+$/, /^[zxcvbnm]+$/]
    const result = words.filter((word) => row.some((regex) => regex.test(word.toLowerCase())))
    return result
};