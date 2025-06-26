/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if (!node) return null;

    const map = new Map()
    const queue = [node]
    map.set(node, new _Node(node.val, []))

    while (queue.length > 0) {
        const current = queue.shift();
        for (let neighbour of current.neighbors) {
            if (!map.has(neighbour)) {
                map.set(neighbour, new _Node(neighbour.val, []))
                queue.push(neighbour)
            }
            map.get(current).neighbors.push(map.get(neighbour))
        }

    }
    return map.get(node)
};