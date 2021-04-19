/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2);
    for(var i=0;i<nums1.length;i++){
        for(var j=i+1;j<nums1.length;j++){
            if(nums1[i] > nums1[j]){
                sm = nums1[j]
                lg = nums1[i]
                nums1[i] = sm;
                nums1[j] = lg
            }
        }
    }
};

merge([1,2,3,0,0,0],3,[2,5,6],3)
// @lc code=end

