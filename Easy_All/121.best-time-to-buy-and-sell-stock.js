/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length == 1) return 0;
    var min = prices[0];
    var maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else {
            maxProfit = Math.max(prices[i] - min, maxProfit);
        }
    }
    return maxProfit;

};



// @lc code=end

// [7,1,5,3,6,4]
// min = 7 maxProfit = 0
// i = 0
// min = 1, maxProfir = 0
// i = 2
// maxProfit = 4

// [7,6,4,3,1]
// min maxProfit
// 是最小的嗎？放入min
// 比最小的大嗎？考慮放入max，比max大嗎？ 放入max

// 每個點的一個選擇：
// 1. 是否當最小的那個買進價？
// 2. 是否當賣出價？

