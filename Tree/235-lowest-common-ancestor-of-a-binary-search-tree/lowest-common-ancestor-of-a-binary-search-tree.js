/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let max = Math.max(p.val, q.val);
    let min = Math.min(p.val, q.val);
    if (root.val < max && root.val > min) return root;
    if (root.val == max || root.val == min) return root;

    return lowestCommonAncestor(min > root.val ? root.right : root.left, p, q)
};