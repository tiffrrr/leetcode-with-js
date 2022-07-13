/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    let sum = root.val;
    // check leaf
    if (!root.left && !root.right) return sum == targetSum;
    // continue DFS
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

// @lc code=end

// 解法：全部路走一遍。但原本寫到這裡就卡住了：
// var hasPathSum = function(root, targetSum) {
//     if(!root)return false;
//     let sum = root.val;
//     if(!root.left && !root.right) return sum;
//     if(root.left) return hasPathSum(root.left)
//     if(root.right) return hasPathSum(root.right);
// };
// 卡住的點：怎麼把每條路線的sum全部紀錄起來？到底要回傳什麼？

// 比對答案後發現錯的地方：hasPathSum是要傳2個參數的！這邊完全忽略！
// if(root.left) return hasPathSum(root.left)
// if(root.right) return hasPathSum(root.right);
// 那要傳的第二個參數其實就是targetSum - root.val。
// 不用去想怎麼把每條路線的sum都記下來，最後再跑回圈比對。
// 而是把問題拆小。
// 先解決每一個小tree。每一個小tree的sum正確的話，加起來最後每條大路線的sum就會是正確。
// 那要怎麼判斷每個小tree的sum正確呢？就是用targetSum - root.val就可以得到。
