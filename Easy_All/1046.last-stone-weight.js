/*
 * @lc app=leetcode id=1046 lang=javascript
 *
 * [1046] Last Stone Weight
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    function sortStone(stones){
        stones.sort(function(a,b){
            return a-b
        })
    }
    sortStone(stones);

    while(stones.length > 1){
        result = stones.pop() - stones.pop() 
        if(result != 0){
            stones.push(result)
        }
        sortStone(stones);
    }
    return stones;
};
// @lc code=end

