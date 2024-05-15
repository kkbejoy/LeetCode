/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    const size = grid.length;
    const array = []
    // new Array(size - 2).fill(new Array(size - 2).fill(0));
    const resultSize = size - 2;
    for (let i = 0; i < resultSize; i++) {
        let temp = []
        for (let j = 0; j < resultSize; j++) {
            let lar = 0
            for (let r = i; r < i + 3; r++) {
                for (let c = j; c < j + 3; c++) {
                    lar = Math.max(grid[r][c], lar)
                }
            }
            temp.push(lar)

        }
        array.push(temp)
    }
    return array
};