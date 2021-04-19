/*
 * @lc app=leetcode id=1603 lang=javascript
 *
 * [1603] Design Parking System
 */

// @lc code=start
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
// var ParkingSystem = function(big, medium, small) {
//     this.big = big;
//     this.medium = medium;
//     this.small = small;
// };

// /** 
//  * @param {number} carType
//  * @return {boolean}
//  */
// ParkingSystem.prototype.addCar = function(carType) {
    
//     if(carType ==3){
//         if(this.small > 0){
//             this.small--
//         }else{
//             return false;
//         }
//     }
//     if(carType ==2){
//         if(this.medium > 0){
//             this.medium--
//         }else{
//             return false;
//         }
//     }
//     if(carType == 1){
//         if(this.big > 0){
//             this.big--
//         }else{
//             return false;
//         }
//     }
//     return true;
// };
var ParkingSystem = function(big, medium, small) {
    this.sizes = [big,medium,small]
}

ParkingSystem.prototype.addCar = function(carType) {
    return this.sizes[carType-1]-- > 0
    // 原本是0，減完就會變-1，<0，return false
    // arr[0]--，會是原本的數字，所以是>0，不是>=0，（原本要是1才可以停車）
    // 比完後會自己把你-1
}
/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
// @lc code=end

