/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
    let happySum = 0;
    happiness.sort((a, b) => b - a)
    console.log(happiness);
    let i = 0;
    while (k > 0 && i < happiness.length) {
        happiness[i] = Math.max(happiness[i] - i, 0)
        happySum += happiness[i]
        k--
        i++
    }
    return happySum
};