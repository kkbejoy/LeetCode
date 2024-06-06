/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    const length = hand.length;
    if (length % groupSize !== 0) return false
    hand.sort((a, b) => a - b)

    for (let i = 0; i < length; i++) {
        if (hand[i] >= 0 && !isConsecutive(hand, groupSize, i,length)) return false

    }
    return true
}


function isConsecutive(array, groupSize, index, length) {
    let nextValue = array[index] + 1;
    array[index] = -1;
    let count = 1;
    index++;

    while (count < groupSize && index < length) {
        if (array[index] === nextValue) {
            count++;
            nextValue = array[index] + 1
            array[index] = -1
        }
        index++
    }
    return count === groupSize

}