/**
 * @param {character[][]} grid
 * @return {number}
 */

const isWithinLimist = (i, j, m, n) => {
    return (i >= 0 && i < m && j >= 0 && j < n
    )
}
const dfs = (grid, visited, i, j, m, n) => {
    visited[i][j] = true;
    const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    for (let k = 0; k < 4; k++) {
        const newI = i + directions[k][0]
        const newJ = j + directions[k][1]

        if (isWithinLimist(newI, newJ, m, n) && grid[newI][newJ] === "1" && !visited[newI][newJ]) {
            dfs(grid, visited, newI, newJ, m, n)
        }
    }
}
var numIslands = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = Array.from({ length: m }, () => Array(n).fill(false))
    // console.log(m,n,visited)
    let islands = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1" && !visited[i][j]) {
                islands++;
                dfs(grid, visited, i, j, m, n)
            }
        }
    }

    return islands
};