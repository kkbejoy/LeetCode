/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    function dfs(node, value) {
        if (!node) return 0;
        value = value * 10 + node.val
        if (!node.left && !node.right) {
            return value;
        }
        return dfs(node.left,value)+dfs(node.right,value)

    }
    return dfs(root, 0)
};