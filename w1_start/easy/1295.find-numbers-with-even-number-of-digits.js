/*
 * @lc app=leetcode id=1295 lang=javascript
 *
 * [1295] Find Numbers with Even Number of Digits
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var count = 0;
    nums.forEach(element => {
        element.toString().length % 2 == 0 ? count++ : count = count;
    });
    return count;
};

// @lc code=end

