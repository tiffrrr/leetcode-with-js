/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.stack = [];
    this.temp = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */

// 都是直接放進去
// [1,2,3,4]
MyQueue.prototype.push = function (x) {
    this.stack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
// 目的：把stack的一個一個pop到新陣列，第一個就會被放到最後面
// stack = [1,2,3,4]   temp = []
// stack = []   temp = [4,3,2,1]  移除並回傳1
// 再把temp一個一個pop回stack
// stack = [2,3,4]   temp = []

MyQueue.prototype.pop = function () {
    var stackLength = this.stack.length;
    for (var i = 1; i < stackLength; i++) {
        this.temp.push(this.stack.pop())
    }
    let first = this.stack.pop();
    var tempLength = this.temp.length;
    for (i = 0; i < tempLength; i++) {
        this.stack.push(this.temp.pop())
    }
    return first;
    // while(this.stack.length !==0){
    //     this.temp.push(this.stack.pop());
    // }
    // var first  = this.temp.pop();
    // while(this.temp.length !==0){
    //     this.stack.push(this.temp.pop());
    // }
    // return first;

};

/**
 * Get the front element.
 * @return {number}
 */
// 同上
// 目的：把stack的一個一個pop到新陣列，第一個就會被放到最後面
// stack = [1,2,3,4]   temp = []
// stack = [1]   temp = [4,3,2]  回傳1
// 再把temp一個一個pop回stack
// stack = [2,3,4]   temp = []
MyQueue.prototype.peek = function () {
    var stackLength = this.stack.length
    for (i = 1; i < stackLength; i++) {
        this.temp.push(this.stack.pop())
    }
    let first = this.stack.pop();
    this.stack.push(first);
    var temLength = this.temp.length
    for (i = 0; i < temLength; i++) {
        this.stack.push(this.temp.pop())
    }
    return first;
    // while(this.stack.length !==0){
    //     this.temp.push(this.stack.pop());
    // }
    // var first = this.temp.pop();
    // this.stack.push(first);
    // while(this.temp.length !==0){
    //     this.stack.push(this.temp.pop());
    // }
    // return first;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    if (this.stack.length > 0) {
        return false;
    } else {
        return true;
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
