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
var hasCycle = function (head) {
    let fast = head;
    let slow = head;
    // 停止條件1:出現null，表示不是環狀，return false
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
        // 停止條件2: 快慢指標相遇，return true，while迴圈停止
        if (fast === slow) {
            return true;
        }
    }
    return false;
};


// // 寫第二次：第一版
// 只有一個node 也會分 [1]有環 [1]無環

// var hasCycle = function (head) {
//     // 其實不需要額外判斷，因為如果null的話後面會直接回傳false
//     if (!head) { return false };
//     let slow = head;
//     let fast = head;
//     // 條件寫錯，無窮回圈。這裡要寫的是「執行的條件」，不是「停止的條件」
//     while (slow == fast) {
//         // 不用判斷slow,因為fast走過，所以slow一定都有。
//         //  反而要判斷fast + fast.next +fast.next.next。不然如果後面是null的話會出錯。
//         if (fast && slow) {
//             slow = slow.next;
//             fast = fast.next.next;
//         } else {
//             return false;
//         }
//     }
//     return true;
// };


// // 寫第二次：第二版
// var hasCycle = function (head) {
//     let slow = head;
//     let fast = head;
//     // 因為slow = fast = head,不滿足while的執行條件
//     // 所以根本不會進到while。永遠回傳true
//     while (slow !== fast) {
//         if (fast && fast.next && fast.next.next) {
//             slow = slow.next;
//             fast = fast.next.next;
//         } else {
//             return false;
//         }
//     }
//     return true;
// };


// // 寫第二次：第三版
// var hasCycle = function (head) {
//     if (!head || !head.next || !head.next.next) { return false };
//     let slow = head.next;
//     let fast = head.next.next;

//     while (slow !== fast) {
//         if (fast && fast.next && fast.next.next) {
//             slow = slow.next;
//             fast = fast.next.next;
//         } else {
//             return false;
//         }
//     }
//     return true;
// };


// @lc code=end
