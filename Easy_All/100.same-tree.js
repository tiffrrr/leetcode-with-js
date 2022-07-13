/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p == null && q == null) { return true };
    if (p == null || q == null) { return false };
    if (p.val !== q.val) { return false };
    var isLeftNodeSame = isSameTree(p.left, q.left);
    var isRightNodeSame = isSameTree(p.right, q.right);
    return isLeftNodeSame && isRightNodeSame;

    // if(!p && !q) return true;
    // if(!p || !q) return false;
    // if(p.val !== q.val) return false;
    // return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
};
// @lc code=end
// === 錯誤的地方 沒有考慮到null的情境






