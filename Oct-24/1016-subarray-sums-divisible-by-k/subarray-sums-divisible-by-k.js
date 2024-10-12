/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    let count = 0;
    let prefixSum = 0;
    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i]
        const modulo = (prefixSum % k + k) % k
      if(map.has(modulo))count+=map.get(modulo)
      map.set(modulo,(map.get(modulo)||0) +1)
    }
    return count
};