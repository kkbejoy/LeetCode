/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let candidate = null
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i]
        }
        count = (candidate === nums[i]) ? (count + 1) : (count - 1)
    }
    return candidate
};