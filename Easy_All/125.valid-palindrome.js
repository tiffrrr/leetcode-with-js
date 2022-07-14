/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 0 7
// 1 6
// 2 5
// 3 4

// 0 6
// 1 5
// 2 4
// 3
var isPalindrome = function (s) {
    if (s.length <= 1) { return true; }
    const arr = s.toLowerCase().split('').filter(e => e.match(/^[a-z0-9]/));
    // 如果全是特殊符號的話，清完會等於[]，不排除的話後面會出錯。
    if (arr.length < 2) return true;
    let start = 0;
    let end = arr.length - 1;
    let isSame = false;
    while (start < end) {
        if (arr[start] == arr[end]) {
            start += 1;
            end -= 1;
            isSame = true;
            console.log('same', start)
        } else {
            console.log('not same', end)
            isSame = false;
            break;
        }
    }
    return isSame;

};
// const string = "A man, a plan, a canal: Panama";
// const string = "rac e a car";
// const string = ".,";
// const string = "0p";
// console.log(isPalindrome(string))
// @lc code=end
// 錯誤的地方
// 忘記考慮全是特殊符號的狀況ex:".,"
// 題目沒讀懂。non-alphanumeric characters = 英文+數字ex:“0p”