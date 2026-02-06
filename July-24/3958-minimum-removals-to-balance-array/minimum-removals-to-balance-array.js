/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function (nums, k) {
    nums.sort((a, b) => a - b)
    let n = nums.length;
    let left = 0
    let maxWindow = 0

    for (let right = 0; right < n; right++) {
        while (nums[right] > k * nums[left]) {
            left++
        }

        maxWindow = Math.max(maxWindow, right - left + 1)
    }

    return n - maxWindow
};