/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let wordCount = map.get(arr[i])
        if (!wordCount) map.set(arr[i], 1);
        else map.set(arr[i], ++wordCount);
    }
    let uniqueCount = 0
    for (let [key, value] of map) {
        if (value > 1) continue;
        uniqueCount++
        if (uniqueCount === k) return key
    }
    return ""
};


