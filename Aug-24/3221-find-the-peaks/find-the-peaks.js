/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
    const peaks = [];
    if (mountain.length <= 2) return peaks
    for (let i = 0; i < mountain.length; i++) {
        if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) peaks.push(i)
    }
    return peaks
};