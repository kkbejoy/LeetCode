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
 * @return {number[]}
 */

var rightSideView = function (root) {
    const outer = [];
    
    const rightSide = (node,height) => {
        if (!node) return
        outer[height]=node.val
        height++
        rightSide(node.left,height)
        rightSide(node.right,height) 
        return
    }
    rightSide(root,0)
    return outer
};