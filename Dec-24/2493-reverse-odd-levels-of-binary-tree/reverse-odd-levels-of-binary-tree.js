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
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {
    if(root===null) return root
    const queue = [root];
    let isOddLevel = false
    while (queue.length > 0) {
        let levelSize = queue.length
        const currentLevelNodes = []
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (node.left !== null) queue.push(node.left)
            if (node.right !== null) queue.push(node.right)
            currentLevelNodes.push(node)
        }
        if (isOddLevel) {
            let left = 0
            let right = currentLevelNodes.length - 1
            while (left < right) {
                let temp = currentLevelNodes[left].val
                currentLevelNodes[left].val = currentLevelNodes[right].val
                currentLevelNodes[right].val = temp
                left++;
                right--

            }
        }
            isOddLevel = !isOddLevel
    }
        return root
};