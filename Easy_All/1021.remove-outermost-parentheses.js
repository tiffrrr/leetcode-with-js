/*
 * @lc app=leetcode id=1021 lang=javascript
 *
 * [1021] Remove Outermost Parentheses
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    var snew = '';
    var count = 0;
    for (const letter of S) {
        if(letter =='('){
            if(count > 0 ){
                snew+=letter;
            }
            count++
        }else{
            count--
            if(count > 0 ){
                snew+=letter;
            }
        }
    }
    return snew;
};
// @lc code=end

