/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function (grid) {
    const m = grid.length
    const n = grid[0].length
    const visited = Array.from({ length: m }, () => Array(n).fill(false))

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j] && dfs(grid, visited, i, j, -1, -1, m, n, grid[i][j])) return true
        }
    }

    return false

};
const isSafe = (i, j, m, n) => {
    return (i >= 0 && i < m && j >= 0 && j < n)
}
const dfs = (grid, visited, i, j, prevI, prevJ, m, n, prev) => {
    visited[i][j] = true
    const directions = [[1, 0], [-1, 0], [0, -1], [0, 1]]

    for (let k = 0; k < 4; k++) {
        const newI = i + directions[k][0]
        const newJ = j + directions[k][1]
        if (isSafe(newI, newJ, m, n) && grid[newI][newJ] === prev) {
            if (newI === prevI && newJ === prevJ) continue;
            if (visited[newI][newJ]) return true
            if (!visited[newI][newJ] && dfs(grid, visited, newI, newJ, i, j, m, n, prev)) return true

        }
    }
    return false
}