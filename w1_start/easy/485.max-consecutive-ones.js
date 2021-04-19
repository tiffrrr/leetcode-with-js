/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var result = 0;
    var count = 0;
    for(i=0;i<nums.length;i++){
        if(nums[i] == 0){
            count = 0;
        }else{
            count++;
            if(count > result){
                result = count;
            }
        }
    }
    return result;
};
// @lc code=end

