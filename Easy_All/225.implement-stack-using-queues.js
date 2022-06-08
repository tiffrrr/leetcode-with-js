/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queue=[];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */

//  stack 跟 queue新增，都是直接加到最後面
// 只有push跟shift兩個功能
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */

// 目的：把queue反轉，移除
MyStack.prototype.pop = function() {
    for(i=1;i<this.queue.length;i++){
        this.queue.push(this.queue.shift())
    }
    let last = this.queue.shift();
    return last;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    for(i=1;i<this.queue.length;i++){
        this.queue.push(this.queue.shift())
    }
    let lastOne = this.queue.shift();
    this.queue.push(lastOne)
    return lastOne;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.queue.length > 0){
        return false;
    }else{
        return true;
    }
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

