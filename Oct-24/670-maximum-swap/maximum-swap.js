/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    num = num.toString().split("");
    let max = 0;
    let maxIndex = -1;
    let swap1 = -1;
    let swap2 = -1;
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] > max) {
            max = num[i]
            maxIndex = i
        }
        if (num[i] < max) {
            swap1 = i;
            swap2 = maxIndex
        }
    }
    const temp = num[swap2];
    num[swap2] = num[swap1];
    num[swap1] = temp

    return Number(num.join(""))
};