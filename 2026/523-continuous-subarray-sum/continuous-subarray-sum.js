/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    const rem = new Map()
    rem.set(0,-1)
    let prefixSum = 0;
    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i]
        const r = prefixSum % k
        if (!rem.has(r)) {
            rem.set(r, i)
        }
        else if (i - rem.get(r) > 1) {
            return true
        }
    }
    return false

};