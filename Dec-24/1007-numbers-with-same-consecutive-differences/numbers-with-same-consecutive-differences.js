/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function (n, k) {
    const result = [];
    const dfs = (num, length) => {
        if (length === n) {
            result.push(num);
            return;
        }
        const lastDigit = num % 10;
        const nextDigits = new Set([lastDigit + k, lastDigit - k])
        for (let next of nextDigits) {
            if (next >= 0 && next <= 9) {
                dfs(num * 10 + next, length + 1)
            }
        }

    }
    for (let i = 1; i <= 9; i++) {
        dfs(i, 1);
    }
    if (n === 1) result.push(0);
    return result;
};