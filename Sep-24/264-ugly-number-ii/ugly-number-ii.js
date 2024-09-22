/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    const ugly = [1]
    let index2 = 0
    let index3 = 0
    let index5 = 0
    let next2 = 2
    let next3 = 3
    let next5 = 5

    for (let i = 1; i < n; i++) {
        const nextUgly = Math.min(next2, next3, next5)
        ugly.push(nextUgly)

        if (nextUgly === next2) {
            index2++
            next2 = ugly[index2] * 2
        }
        if (nextUgly === next3) {
            index3++
            next3 = ugly[index3] * 3
        } if (nextUgly === next5) {
            index5++
            next5 = ugly[index5] * 5
        }
    }

    return ugly[n - 1]
};