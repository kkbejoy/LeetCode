/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
    const group = {}
    for (let i = 1; i <= n; i++) {
        const sum = String(i).split("").reduce((sum, num) => sum + Number(num), 0)
        group[sum] = (group[sum] || 0) + 1
    }
    const largest = Math.max(...Object.values(group))
    const result = Object.values(group).reduce((accu, value) => {
        if (value === largest)
            accu++
        return accu
    }, 0)
    return result
};