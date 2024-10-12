/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let sum = 0;
    let count = 0;
    const map = new Map();
    map.set(0,1)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        const remainder = sum - k
        if (map.has(remainder)) count += map.get(remainder)
        map.set(sum, (map.get(sum) || 0) + 1)

    }
    return count
};