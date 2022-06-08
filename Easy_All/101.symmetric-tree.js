/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
// tree是否對稱
var isSymmetric = function(root) {
    if(!root) return true;
    return check(root.left,root.right)
    function check(left,right){
        if(!left && !right) return true;
        if(!left || !right) return false;
        if(left.val !== right.val) return false;
        return check(left.left,right.right)&&check(left.right,right.left)
    }

};
//          1
//     2             2
//   3    4       4     3
// 5  6     8    8     6  5
// @lc code=end

