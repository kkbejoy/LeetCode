/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    const index = word.indexOf(ch);
    let newWord = ""
    for (let i = index; i >= 0; i--) {
        newWord += word[i]
    }
     for (let i = index+1; i< word.length; i++) {
        newWord += word[i]
    }
    return newWord
};