/**
 * @param {number} n
 * @return {boolean}
 */

const isHappy  = (n) => {
    let slow = n;
    let fast = getSquare(n)

    while (slow !== 1 && fast !== slow) {
        slow = getSquare(slow)
        fast = getSquare(getSquare(fast))
    }
    return slow === 1
}

const getSquare = (num) => {
    let sum = 0
    while (num > 0) {
        const digit = num % 10;
        sum += Math.pow(digit, 2)
        num = Math.floor(num / 10)
    }
    return sum
}
