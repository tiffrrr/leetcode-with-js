/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
    if (!head) return head;
    if (!head.next) return head;
    let last = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return last
};
// (1 -> 2 -> 3)
// last = reverse(2)
//         last = reverse(3)
//         2 -> 3 -> null
//             return 3 -> null
//         2.next.next = 2  (2 <-> 3)
//         2.next = null  (null <- 2 <- 3)
//         return  (null <- 2 <- 3)
// // (1 -> 2 <- 3且有另一條 2 -> null   )
// 1.next.next = 1  (1 <-> 2 <- 3)
// 1.next= null( null <-1 <- 2 <- 3)
// return ( null <-1 <- 2 <- 3)


// @lc code=end

// 錯誤思考：在想怎麼把點交換位置，但應該要思考中間的箭頭怎麼走。
// 箭頭也是可以先拔掉的喔！之後再連回來
// 圈圈不動，線動，而不是線不動，圈圈動。
// 不是array，有固定排序只能交換位置。


// var reverseList = function(head) {
//     if(!head){
//         return null
//     }
//     if(!head.next){
//         return head;
//     }
//     let currNode = head;
//     let prevNode = null;
//     let nextNode;
//     while(nextNode !== null){
//         nextNode = currNode.next
//         currNode.next = prevNode
//         prevNode = currNode
//         currNode = nextNode
//     }
//     return prevNode

// };
// 1 -> 2 -> 3 -> null
// null <- 1   2 -> 3
// null <- 1 <-2    3
// null <- 1 <-2 <- 3
