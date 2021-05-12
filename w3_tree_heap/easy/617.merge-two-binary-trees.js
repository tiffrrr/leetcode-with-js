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
    function check(root1,root2){
        if(root1 && root2){
            const newNode = new TreeNode(root1.val + root2.val);
            newNode.left = check(root1.left, root2.left);
            newNode.right = check(root1.right, root2.right);
            return newNode;
        };
        // t1或t2其中一個有值的話，就return 誰
        // 兩個都null的話，就會return null
        return root1 || root2;
    }
    return check(root1,root2);
};


// @lc code=end

