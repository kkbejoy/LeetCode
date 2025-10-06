/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
    const vowels = ["a", "e", "i", "o", "u"]
    const symbols = ["@", "#", "$"]
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const minLength = 3;
    let isVowel = false;
    let isConsonant = false;
    if (word.length < minLength) return false;
    for (let i = 0; i < word.length; i++) {
        if (symbols.includes(word[i])) return false
        else if (digits.includes(Number(word[i]))) continue
         if (vowels.includes(word[i].toLowerCase())) isVowel = true
        else isConsonant = true
    }
    return isVowel && isConsonant

};