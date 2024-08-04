/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    const sentenceArray=sentence.split(" ")
    let prefix = 1
    for (let i = 0; i < sentenceArray.length; i++) {
        if (sentenceArray[i].startsWith(searchWord))return i + 1
    
    }
     return -1
};