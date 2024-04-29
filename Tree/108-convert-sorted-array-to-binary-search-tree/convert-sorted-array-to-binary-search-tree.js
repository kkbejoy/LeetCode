/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const createTree=(start,end)=>{
        if(start>end) return null;

        const midPoint=Math.floor((start+end)/2)
        const node=new TreeNode(nums[midPoint])
        node.left=createTree(start,midPoint-1);
        node.right=createTree(midPoint+1,end)
        return node
    }
    return createTree(0,nums.length-1)
};