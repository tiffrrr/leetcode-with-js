/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var length = nums.length
    var res=[];
    for(var i=1;i<= length;i++){
        if(nums.indexOf(i) == -1){
            res.push(i)
        }
    }
    return res;
};
findDisappearedNumbers([4,3,2,7,8,2,3,1])
// @lc code=end

