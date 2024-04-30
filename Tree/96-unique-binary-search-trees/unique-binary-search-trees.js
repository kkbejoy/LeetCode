/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    const cache = new Array(n+1).fill(1)
    // if(n<2)return cache[n+1]
    for (let i = 2; i <= n; i++) {
        let total = 0
        for (let j = 1; j <= i; j++) {
            let left = j - 1;
            let right = i - j
            total += cache[left] * cache[right]

        }
        cache[i] = total
    }
    // console.log(cache)
    return cache[n]
}; 