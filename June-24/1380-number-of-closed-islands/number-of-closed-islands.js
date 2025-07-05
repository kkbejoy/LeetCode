/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
    const m = grid.length
    const n = grid[0].length


    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 0) {
            dfs(grid, i, 0, m, n)
        }
        if (grid[i][n - 1]===0) dfs(grid, i, n - 1, m, n)
    }
    for (let i = 0; i < n; i++) {
        if (grid[0][i] === 0) dfs(grid, 0, i, m,n)
        if (grid[m - 1][i] === 0) dfs(grid, m - 1, i, m, n)
    }
    let islands = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                islands++
                dfs(grid, i, j, m, n)
            }
        }
    }
    return islands
};
const isSafe = (i, j, m, n) => {
    return (i >= 0 && i <m && j >= 0 && j < n)
}

const dfs = (grid, i, j, m, n) => {
    grid[i][j] = 1;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    for (let d = 0; d < 4; d++) {
        const newI = i + directions[d][0]
        const newJ = j + directions[d][1]
        if (isSafe(newI, newJ, m, n) && grid[newI][newJ] === 0) {
            dfs(grid, newI, newJ, m, n)
        }
    }
}