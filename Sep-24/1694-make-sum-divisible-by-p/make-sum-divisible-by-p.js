/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
    const sum = sumCalc(nums)
    const rem = sum % p
    if (rem == 0) return 0

    const prefixMod = new Map();
    let minLength = nums.length;
    prefixMod.set(0,-1)
    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        let currentMod = prefixSum % p;
        let targetMod = (currentMod - rem + p) % p

        if (prefixMod.has(targetMod)) minLength = Math.min(minLength, i - prefixMod.get(targetMod))
        prefixMod.set(currentMod, i)
    }

    return minLength === nums.length ? -1 : minLength
};

function sumCalc(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}