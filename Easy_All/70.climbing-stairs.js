/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let arr = [-1, 1, 2];
    if (n == 1) return arr[1]
    if (n == 2) return arr[2]
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n];
};
// @lc code=end
// ===== 中間犯的錯：======
// n跟arr[i]的i會搞混，因為差1，所以寫錯。改進方法：直接忽略arr[0]，從1開始編號。
// 「==」 寫成 「=」 QQ
//=== 先暴力解法找規律 ===
// 1 1
// 2 11 2
// 3 111 12 21
// 4 1111 22 112 211 121
// 5 11111  2111 1211 1121 1112 122 212 221
// 6 
//     111111
//     222
//     21111 *5種
//     2211 2121 2112
//     1221 1212
//     1122
// === 找出規律 ===
{
    // n=1 1
    // n=2 2
    // 規律：fn = f(n-1) + f(n-2)
}
