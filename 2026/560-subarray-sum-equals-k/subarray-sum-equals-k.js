/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {

    const prefixCount = new Map();
    let curSum = 0;
    let count = 0

    prefixCount.set(0, 1)
    for (let i = 0; i < nums.length; i++) {
        curSum += nums[i]
        const dif = curSum - k

        if (prefixCount.has(dif)) {
            count += prefixCount.get(dif)
        }
        prefixCount.set(curSum, (prefixCount.get(curSum) || 0) + 1)
    }
    return count
};