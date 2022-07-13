/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // 先兩輛比對完。大的再從最後面合併進來。
    // [1,3,5,0,0,0],[1,2,6]
    var insertPos = m + n - 1;// length-1 = index
    m = m - 1;
    n = n - 1;
    while (n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[insertPos] = nums1[m];
            m--;
        } else {
            nums1[insertPos] = nums2[n];
            n--;
        }
        insertPos--;
    }

    // var insertPos = m + n - 1;// length-1 = index
    // m--; n--;
    // while (n >= 0) {
    //     nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
    // }
};
// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
// @lc code=end
// ===較不佳的解法：先把nums2合併進nums1再說 ===
    // 再來sort
    // nums1.splice(m, n, ...nums2);
    // for (var i = 0; i < nums1.length; i++) {
    //     for (var j = i + 1; j < nums1.length; j++) {
    //         if (nums1[i] > nums1[j]) {
    //             let small = nums1[j];
    //             let large = nums1[i];
    //             nums1[j] = large;
    //             nums1[i] = small
    //         }
    //     }
    // }
// 氣泡排序法執行過程
// [1,3,5,1,2,6]
// i=0 j=1～5 都不換
// i=1 j=2    5,3 換 [1,3,5,2,6,1]
//     j=3    3,2 換 [1,2,5,3,6,1]
//     j=4    2,6 不換
//     j=5    2,1 換  [1,1,5,3,6,2]

// i=2 j=3    5,2 換 [1,1,3,5,6,2]
//     j=4    3,6 不換
//     j=5    3,2 換 [1,1,2,5,6,3]

// i=3 j=4    5,6 不換
//     j=5    5,2 換 [1,1,2,3,6,5]
// i=4 j=5    6,6 換 [1,1,2,3,4,6]

