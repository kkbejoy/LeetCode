/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    let distinctCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isDistinct(arr, i)) distinctCount++
        if (distinctCount == k) return arr[i]
    }
    return ""
};


const isDistinct = (arr, i) => {
    return arr.filter(word => word === arr[i]).length === 1
}