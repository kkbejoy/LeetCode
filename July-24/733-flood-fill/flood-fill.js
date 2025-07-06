/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const startingColor = image[sr][sc];
    if (startingColor === color) return image
    const m = image.length
    const n = image[0].length
    bfs(image, sr, sc, startingColor,color, m, n)
    return image
};

const isSafe = (i, j, m, n) => {
    return (i >= 0 && i < m && j >= 0 && j < n)
}
const dfs = (image, i, j, startingColor, color, m, n) => {

    image[i][j] = color

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    for (let k = 0; k < 4; k++) {
        const newI = i + directions[k][0]
        const newJ = j + directions[k][1]

        if (isSafe(newI, newJ, m, n) && image[newI][newJ] === startingColor) {
            dfs(image, newI, newJ, startingColor, color, m, n)
        }

    }
}

const bfs = (image, i, j, startingColor, color, m, n) => {
    const queue = []
    queue.push([i, j]);
    while (queue.length > 0) {
        const curr = queue.shift()
        const r = curr[0]
        const c = curr[1]
        image[r][c]=color
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

        for (let k = 0; k < 4; k++) {
            const newI = r + directions[k][0]
            const newJ = c + directions[k][1]

            if (isSafe(newI, newJ, m, n) && image[newI][newJ] === startingColor) {
                queue.push([newI, newJ])
            }

        }


    }
}