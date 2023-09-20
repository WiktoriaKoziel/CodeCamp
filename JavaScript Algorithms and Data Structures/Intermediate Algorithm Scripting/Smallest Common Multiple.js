#task
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

#solution
function smallestCommons(arr) {
  // Create an array containing all numbers in the range
  const numbers = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    numbers.push(i);
  }
  // Initialize the result to the first number in the array
  let result = numbers[0];
  // Iterate through the numbers and find the least common multiple (LCM)
  for (let i = 1; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    // Start with a multiple of the current LCM
    let multiple = result;
    // Find a multiple that is divisible by the current number
    while (multiple % currentNumber !== 0) {
      multiple += result; // Increment by the current LCM
    }
    // Update the result with the new LCM
    result = multiple;
  }
  return result;
}
