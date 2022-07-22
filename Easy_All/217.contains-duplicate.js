/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    var arr = [];
    for (var i = 0; i < nums.length; i++) {
        if (arr.indexOf(nums[i]) > -1) {
            return true
        } else {
            arr.push(nums[i]);
        }
    }
    return false;
};
// @lc code=end

