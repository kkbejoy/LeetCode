/**
 * @param {number} n
 * @return {boolean}
 */

const sumOfSquares = (n) => {
    let result = 0;
    while (n > 0) {
        result = result + Math.pow(n % 10, 2);
        n = Math.floor(n / 10)
    }
    return result
}
var isHappy = function (n) {
    if (n == 1) return true;
    const set = new Set()
    let status = false
    while (!status) {
        n = sumOfSquares(n)
        if (n == 1) return true
        if (set.has(n)) {
            status = true
            return false
        }
        set.add(n)
    }
    return false
};
