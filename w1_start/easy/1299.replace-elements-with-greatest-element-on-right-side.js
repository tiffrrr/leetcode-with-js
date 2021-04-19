/*
 * @lc app=leetcode id=1299 lang=javascript
 *
 * [1299] Replace Elements with Greatest Element on Right Side
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    var resultarr = [];
    var findMax = function(arr,max) {
        return arr.reduce(function(max, curValue,index,array) {
            return max > curValue ? max : curValue;
        })
    }
    var max = arr[1];
    arr.forEach((element,i,arr) => {
        arr[i] = -1;
        resultarr[i] = findMax(arr,max)

    });
    return resultarr;
};
// @lc code=end

