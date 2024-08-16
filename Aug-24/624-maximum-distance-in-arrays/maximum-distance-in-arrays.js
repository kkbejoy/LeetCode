/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
    let globalMin = arrays[0][0];
    let globalMax = arrays[0][arrays[0].length - 1];
    let maxDistance = 0;

    for (let i = 1; i < arrays.length; i++) {
        let min = arrays[i][0]
        let max = arrays[i][arrays[i].length - 1]
        maxDistance = Math.max(maxDistance, Math.abs(max - globalMin),Math.abs(min - globalMax))
        // maxDistance = Math.max(maxDistance, )

        globalMax = Math.max(globalMax, max)
        globalMin = Math.min(globalMin, min)

    }
        console.log(globalMin, globalMax)

    return maxDistance
};