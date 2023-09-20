#task
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

#solution
function uniteUnique(...args) {
  let uniqueArray = [];
  // Loop through the arrays in the 'args' array
  for (let i = 0; i < args.length; i++) {
    // Loop through the elements of the current array
    for (let j = 0; j < args[i].length; j++) {
      // Check if the element is not already in the uniqueArray
      if (uniqueArray.indexOf(args[i][j]) === -1) {
        // If it's not in the uniqueArray, add it
        uniqueArray.push(args[i][j]);
      }
    }
  }
  return uniqueArray;
}
