/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    const expected = heights.map((height)=>height)
    expected.sort((a, b) => a - b)
    let count = 0
    for (let i = 0; i < expected.length; i++) {
        if (expected[i] !== heights[i]) count++

    }
    return count
};