/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */

function factorial(n) {
  let result=1;
  for(i=1;i<=n;i++)
  {
    result=result*i
  }
  return result;
}
