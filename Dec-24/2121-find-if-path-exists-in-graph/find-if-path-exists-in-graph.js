/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

const createList = (edges, n) => {
    const list = new Map()
    for (let [u, v] of edges) {
        if (list.has(u)) list.get(u).push(v)
        else list.set(u, [v])
        if (list.has(v)) list.get(v).push(u)
        else list.set(v, [u])

    }
    return list
}

const dfs = (list, source, destination,visited = new Set()) => {
    visited.add(source)
    const edge = list.get(source)
    if (edge && edge.length > 0) {
        for (const neighbor of edge) {
            if (!visited.has(neighbor)) dfs(list,neighbor,destination,visited)
        }
    }
    return visited
}
var validPath = function (n, edges, source, destination) {
    const list = createList(edges, n)
    return dfs(list,source,destination).has(destination)
};