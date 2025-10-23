/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {

    const squares = nums.map(num => Math.pow(num, 2)).sort((a, b) => a - b)
    console.log(squares)
    return squares
    // return sorttedSquares
};