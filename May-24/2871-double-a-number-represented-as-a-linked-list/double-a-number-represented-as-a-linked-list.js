/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function (head) {


    const doubleL = (head) => {
        if (!head) return 0;
        const doubled = head.val * 2 + doubleL(head.next);
        head.val = doubled % 10;
        return Math.floor(doubled / 10)
    }
    const rem = doubleL(head)
    if (rem > 0) head = new ListNode(rem, head)
    return head
};

