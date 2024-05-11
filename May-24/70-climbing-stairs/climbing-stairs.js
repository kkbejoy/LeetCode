/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const sqrt5 = Math.sqrt(5);
  // define the golden ratio
  const phi = (1 + sqrt5) / 2;
  // use the Binet's formula to compute the nth Fibonacci number
  return Math.round(Math.pow(phi, n + 1) / sqrt5);
};