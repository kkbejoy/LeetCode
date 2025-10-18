/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    const diagonal = {}
    const area = {}

    for (let i = 0; i < dimensions.length; i++) {
        const diaLen = Math.sqrt(dimensions[i][0]*dimensions[i][0] + dimensions[i][1]*dimensions[i][1])
        const area1 = dimensions[i][0] * dimensions[i][1]
        diagonal[i] = diaLen;
        area[i] = area1

    }
    const maxDiagonal = Math.max(...Object.values(diagonal))
    const maxIndexArray = Object.values(diagonal).reduce((arr, len, idx) => {
        if (len === maxDiagonal) arr.push(idx)
        return arr
    }, [])

    if (maxIndexArray.length === 1) return area[maxIndexArray[0]]
    const maxAreaIndex = maxIndexArray.reduce((maxAIdx, maxIdx) => {
       if(area[maxAIdx]<area[maxIdx])maxAIdx=maxIdx
        return maxAIdx
    }, 0)
    return area[maxAreaIndex]
};