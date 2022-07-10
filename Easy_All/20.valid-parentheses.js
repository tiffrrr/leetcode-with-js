/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let originArray = s.split('');
    let newArray = [];
    for (let i = 0; i < originArray.length; i++) {
        if (originArray[i] == '(') {
            newArray.push(')');
        }
        else if (originArray[i] == '[') {
            newArray.push(']');
        }
        else if (originArray[i] == '{') {
            newArray.push('}');
        } else {
            // 忘記比對。變成“（]”這個狀況會回傳true
            if (originArray[i] !== newArray.pop()) {
                return false;
            }
        }
    }
    return newArray.length == 0;
};
// @lc code=end

