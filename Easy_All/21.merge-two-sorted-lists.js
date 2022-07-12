/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1   1 3
 * @param {ListNode} l2   1 2   1123
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let mergedHead = { val: -1, next: null }
    let currentNode = mergedHead;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            currentNode.next = l1
            l1 = l1.next
        } else {
            currentNode.next = l2
            l2 = l2.next
        }
        currentNode = currentNode.next
    }
    currentNode.next = l1 || l2
    return mergedHead.next
};
// @lc code=end

