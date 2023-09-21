#task
Flatten a nested array. You must account for varying levels of nesting.

#solution
function steamrollArray(arr) {
  const flattened = [];
  // Define a recursive function to flatten nested arrays
  function flattenArray(element) {
    if (!Array.isArray(element)) {
      // If the element is not an array, add it to the 'flattened' array
      flattened.push(element);
    } else {
      // If the element is an array, recursively call flattenArray on its elements
      for (let subElement of element) {
        flattenArray(subElement);
      }
    }
  }
  // Call the recursive function for each element in the input array 'arr'
  for (let element of arr) {
    flattenArray(element);
  }
  return flattened;
}
