/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 快慢指標
var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    // 停止條件1:出現null，表示不是環狀，return false
    while(fast && fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
        // 停止條件2: 快慢指標相遇，return true，while迴圈停止
        if(fast === slow){
            return true;
        }
    }
    return false;
};
// @lc code=end

