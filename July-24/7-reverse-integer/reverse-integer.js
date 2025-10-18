/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const reverse = parseFloat(String(x).split("").reverse().join("")) * Math.sign(x);
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;
    return (reverse >INT_MIN && reverse <INT_MAX) ? reverse : 0
};