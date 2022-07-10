/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 雙重回圈，效能差
    // for (var i = 0; i < nums.length; i++) {
    //     for (var j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] == target) {
    //             return [i, j]
    //         }
    //     }
    // }
    for (var i = 0; i < nums.length; i++) {
        var anotherIndex = nums.indexOf(target - nums[i]);
        if (anotherIndex > -1 && anotherIndex !== i) {
            return [i, anotherIndex]
        }
    }
};
// @lc code=end

