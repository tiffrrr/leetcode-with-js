/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    var root3 = new TreeNode(0,null,null);
    check(root1,root2);
    function check(root1,root2){
        if(root1.val && root2.val){
            root3.val = root1.val+root2.val;
        };
        
        root3.left = check(root1.left,root2.left);
        root3.right = check(root1.right,root2.right);

    }
    
};
// @lc code=end

