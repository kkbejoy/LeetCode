/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    const sorrtedWeight = people.sort((a,b)=>a-b)
    let left = 0;
    count = 0
    let right = sorrtedWeight.length - 1
    while (left <= right) {
        const weight = sorrtedWeight[left] + sorrtedWeight[right]
        count++
        if (weight > limit) {
            right--
        }
        else {
            right--;
            left++
        }
    }
    return count
};