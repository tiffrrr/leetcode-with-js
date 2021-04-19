/*
 * @lc app=leetcode id=457 lang=javascript
 *
 * [457] Circular Array Loop
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    for(let i =0;i<nums.length;i++){  //跑迴圈，確認每個數字是否是起始點
        let cycle = [];


        let startI = i;   // 0 
        let startEle = nums[startI]  //2
        let nextEle;
        while(nextEle !=0){   //2!=0   1!=0
            let nextI = startI + startEle   // 0+2=2   2+1=3    3+2 = 5
            if(nextI >= nums.length){    
                nextI = nextI % nums.length    // 5%5 = 0 
            }
            if(nextI < 0 ){
                nextI = nextI+nums.length 
            }
            nextEle = nums[nextI]   // 1  2  1
            if (nextEle * startEle > 0 ){  // 1*2 > 0    2*1>0   1*3 > 0
                cycle.push(startI)   //[0]   [0,2]   [0,2,3]
                nums[startI] = 0;  // [0,-1,1,2,2]     [0,-1,0,2,2]  [0,-1,0,0,2]
                startI = nextI   // 2  3 0
                startEle = nextEle //  1  2 0
            }
        }

        if(cycle.length > 1){
            return true;
        }else{
            return false;
        }
    }
};
// @lc code=end

