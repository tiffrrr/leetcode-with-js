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
var twoSum = function(nums, target) {
    const m = new Map();
    for(i=0;i<nums.length;i++){
        let secondValue = target - nums[i];
        if (m.has(secondValue)) {
            return [m.get(secondValue), i];
        }
        m.set(nums[i], i);
    }
    return [];
};
twoSum([2,7,11,15],9);
// @lc code=end

