/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
    const subArraySum = [];
    const mod = Math.pow(10, 9) + 7
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            subArraySum.push(sum % mod)
        }
    }
    subArraySum.sort((a, b) => a - b)
    let sum = 0
    for (let i = left - 1; i < right; i++) {
        sum = (sum + subArraySum[i]) % mod
    }
    return sum
};