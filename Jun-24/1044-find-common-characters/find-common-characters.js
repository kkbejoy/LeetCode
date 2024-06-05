/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    const map = new Map()
    const base = words[0]
    for (let i = 0; i < base.length; i++) {
        if (map.has(base[i])) {
            let value = map.get(base[i])
            map.set(base[i], ++value);
        }
        else map.set(base[i], 1)
    }
    for (let i = 1; i < words.length; i++) {
        let count = {};
        let word = words[i]
        for (let j = 0; j < word.length; j++) {
            count[word[j]] = count[word[j]] + 1 || 1
        }
        for ([key, value] of map) {
            if (count[key]) map.set(key, Math.min(value, count[key]) || 0)
            else map.delete(key)
        }
    }
    const result = []
    for ([key, value] of map) {
        for (let i = 0; i < value; i++) {
            result.push(key)
        }
    }

    return result
};