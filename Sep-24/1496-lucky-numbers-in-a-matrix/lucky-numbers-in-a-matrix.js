/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    const rowMin = []
    const colMax = []
    const luckyNumbers = []
    for (let i = 0; i < row; i++) {
        rowMin.push(Math.min(...matrix[i]))
    }
    for (let i = 0; i < col; i++) {
        let max = -Infinity
        for (let j = 0; j < row; j++) {
            max = Math.max(max, matrix[j][i])
        }
        colMax.push(max)
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === rowMin[i] && matrix[i][j] === colMax[j]) {
                luckyNumbers.push(matrix[i][j])

            }
        }
    }
    return luckyNumbers
};