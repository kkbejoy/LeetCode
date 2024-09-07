/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
    return dfs(head, head, root)
};

const dfs = (head, current, root) => {
    if (current === null) return true
    if (root === null) return false

    if (current.val === root.val) {
        current = current.next;
    }
    else if (head.val === root.val) head = head.next
    else current = head
    return dfs(head, current, root.left) || dfs(head, current, root.right)
}