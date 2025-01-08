/**
 * Write a function called `sumArrayRecursively` that takes an array of numbers
 * and returns the sum of its elements using recursion.
 *
 * Examples:
 *  sumArrayRecursively([]) => 0
 *  sumArrayRecursively([1]) => 1
 *  sumArrayRecursively([1, 2, 3]) => 6
 *
 * @param {number[]} arr - An array of numbers
 * @return {number} - The sum of the array's elements
 */
// Khalid: we should remove this before it gets distributed to fellows
// Khalid: we should also add a second problem, in case they finish this one early
 function sumArrayRecursively(arr) {
    // Base case: if the array is empty, return 0
    if (arr.length === 0) {
      return 0;
    }

    // Recursive case: first element + sum of the rest of the array
    const [first, ...rest] = arr;
    return first + sumArrayRecursively(rest);
  }

  module.exports = sumArrayRecursively;
