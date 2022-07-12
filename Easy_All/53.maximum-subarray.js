/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//  [-2,1,-3,4,-1,2,1,-5,4] 6
// [1]
// [5,4,-1,7,8] 23


// Greedy
var maxSubArray = function (nums) {
    var max = (-1) * Math.pow(10, 4) - 1;
    // var max = -Number.MAX_VALUE;
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        max = Math.max(max, sum)
    }
    return max;
};

// DP
// var maxSubArray = function (nums) {
//     let result = nums[0]
//     for (let i = 1; i < nums.length; ++i) {
//         if (nums[i - 1] > 0){
//             nums[i] += nums[i - 1];
//         }
//         result = Math.max(result, nums[i]);
//     }
//     return result;
// };
//  [-2,1,-3,4,-1,2,1,-5,4] 6


// ===最暴力的解法，雙層回圈找出全部的可能再比較 ===
// -2
// -2+1
// -2+1-3
// -2+1-3+4...

// 1
// 1-3
// 1-3+4
// 1-3+4-1...
// === 發現其實可以沿用上一步累積的和，不需要每次從頭算 ===
// 每一個點都有兩條路走：
// 1. 自成一派，自己當開頭往後加
// 2. 跟著前面的人排隊，加進前面的
// 所以比較1 跟 2 誰大，就走大的那邊。
// sum
// -2
// -2+1       1  = 1
// 1-3       -3  = 1-3
// 1-3+4      4  = 4
// 4-1       -1  = 4-1
// 4-1+2      2  = 4-1+2
// 4-1+2+1    1  = 4-1+2+1
// 4-1+2+1-5 -5  = 1
// 1+4        4  = 5

// @lc code=end