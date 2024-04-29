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
 * @return {boolean}
 */
const checkBST = (node, min, max) => {
    if (!node) return true
    if (node.val <= min || node.val >= max) return false
    return checkBST(node.left,min,node.val) && checkBST(node.right,node.val,max)
}
var isValidBST = function (root) {
return checkBST(root,-Infinity,Infinity)

};