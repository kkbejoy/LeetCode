/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    const n = isConnected.length;
    const visited = [];
    let count = 0
    for (let i =0; i < n; i++) {
        if (!visited[i]) {
            count++
            dfs(isConnected, i, visited, n)
        }
    }
    return count
};

const dfs = (isConnected, curr, visited, n) => {
    for (let i = 0; i < n; i++) {
        if (isConnected[curr][i] && !visited[i]) {
            visited[i] = true;
            dfs(isConnected, i, visited, n)
        }
    }
}