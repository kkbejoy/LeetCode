/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let result = []

    let initial = words[0];

    initial.split("").forEach((char, index) => {
        if (words.every(word => word.includes(char))) {
            result.push(char);
            words = words.map(word => word.replace(char, ""))

        }
    })
    return result
};