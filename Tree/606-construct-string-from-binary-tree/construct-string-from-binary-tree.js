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
 * @return {string}
 */
var tree2str = function(node) {
    if(!node.left&&!node.right) return node.val.toString();
    if(!node.left) return `${node.val}()(${tree2str(node.right)})`
    if(!node.right) return `${node.val}(${tree2str(node.left)})`
    return `${node.val}(${tree2str(node.left)})(${tree2str(node.right)})`
};