/*
 * @lc app=leetcode id=860 lang=javascript
 *
 * [860] Lemonade Change
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */

var lemonadeChange = function(bills) {
    var five = 0;
    var ten = 0;
    var twenty = 0;
    for(var i=0;i<bills.length;i++){
        var bill = bills[i]
        if(bill ==5){
            five++;
        }else if (bill == 10){
            if(five >= 1){
                five--;
                ten++
            }else{
                return false;
            }
        }else if (bill ==20){
            if(five >=1 && ten>=1){
                five--
                ten--
                twenty++
            }else if(five >=3){
                five=five-3;
                twenty++;
            }else{
                return false;
            }
        }
    }
    
    return true;

};
// @lc code=end

