/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let sign = x >= 0 ? 1 : -1
    const INT_Min = -Math.pow(2, 31)
    const INT_Max = Math.pow(2, 31) - 1
    x = Math.abs(x)
    let reverse = 0
    while (x > 0) {
        const remainder = x % 10;
        x = Math.floor(x / 10)
        reverse = reverse * 10 + remainder

    }
    reverse *= sign
    return (reverse < INT_Min || reverse > INT_Max) ? 0 : reverse
};