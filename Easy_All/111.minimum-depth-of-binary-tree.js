/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 */

// @lc code=start
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
var minDepth = function (root) {
    if (!root) return 0;
    let depth = 1;
    // 需要一個陣列把每一層的node存進來，再跑回圈一個一個node判斷
    let queue = [root];
    if (!root.left && !root.right) return depth;

    while (queue.length > 0) {
        // 陣列長度(每一層的node個數)要先存下來，因為shift/push操作後，陣列長度一直在變。跑回圈的次數就會出錯
        let queueLength = queue.length;
        for (let i = 0; i < queueLength; i++) {
            let node = queue.shift();
            if (!node.left && !node.right) return depth;
            else {
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }
        depth++;
    }
};
// @lc code=end
