/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function (n, k) {


    const result = [];
    const queue = [];
    for (let i = 1; i <= 9; i++) {
        queue.push(i)
    }
    if (n === 1) queue.push(0);

    while (queue.length > 0) {
        const num = queue.shift();
        if (num.toString().length === n) {
            result.push(num)
            continue
        }
        const last = num % 10;
        const nextDigits = new Set([last + k, last - k])
        for (let next of nextDigits) {
            if (next >= 0 && next <= 9) {
                queue.push(num * 10 + next)
            }
        }

    }
    return result

};