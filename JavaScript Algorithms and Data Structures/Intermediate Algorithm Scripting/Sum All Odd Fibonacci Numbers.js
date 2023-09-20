#task
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

#solution
function sumFibs(num) {
  // Initialize an array to store Fibonacci numbers with the first two numbers [1, 1].
  let fib = [1, 1];
  // Initialize a variable to store the sum of odd Fibonacci numbers, starting with 2 (the first two numbers).
  let sum = 2;
  // Continue generating Fibonacci numbers while the last number in the sequence is less than or equal to 'num'.
  while (fib[fib.length - 1] <= num) {
    // Calculate the next Fibonacci number by summing the last two numbers in the sequence.
    const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
    // Check if the next Fibonacci number is odd and less than or equal to 'num'.
    if (nextFib % 2 !== 0 && nextFib <= num) {
      // If it is, add it to the 'sum' variable.
      sum += nextFib;
    }
    // Push the next Fibonacci number to the 'fib' array.
    fib.push(nextFib);
  }
  // Return the sum of odd Fibonacci numbers less than or equal to 'num'.
  return sum;
}
