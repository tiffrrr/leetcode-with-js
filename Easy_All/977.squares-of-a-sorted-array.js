/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    nums.forEach((element,index,arr) => {
        arr[index] =  element ** 2
    })
    nums.sort((x,y) => x - y);
    return nums
};
// @lc code=end

