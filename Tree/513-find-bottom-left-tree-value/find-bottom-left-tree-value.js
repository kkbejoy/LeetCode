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
var findBottomLeftValue = function (root) {
    const queue = [root];
    console.log(queue)
    let leftMost = queue
    while (queue.length > 0) {
        leftMost = queue.shift()
        if (leftMost.right) queue.push(leftMost.right)
        if (leftMost.left) queue.push(leftMost.left)

    }

    return leftMost.val
};