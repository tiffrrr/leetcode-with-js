/*
 * @lc app=leetcode id=1089 lang=javascript
 *
 * [1089] Duplicate Zeros
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    var length = arr.length 
    var i=0;
    while(i<= length){
        if(arr[i] == 0 ){
            arr.splice(i,0,0);
            arr.pop();
            i=i+2;
        }else{
            i++;
        }
    }

    // best solution 
    // for (var i=0; i<arr.length; i++) {
    //     if (arr[i] === 0) {
    //         arr.splice(i, 0, 0);
    //         arr.pop();
    //         i+=1
    //     }
    // }
};
// @lc code=end

