/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
var maxDepth = function (root) {
    if (!root) return 0;
    var leftDepth = maxDepth(root.left);
    var rightDepth = maxDepth(root.right);
    return 1 + Math.max(leftDepth, rightDepth)
};

//   1
// 2  3

// @lc code=end

// depth不需要額外用變數計算，直接從最下面累加上來就好了