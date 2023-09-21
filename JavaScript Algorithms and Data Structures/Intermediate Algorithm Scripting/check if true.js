#task
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.

#solution
function binaryAgent(str) {
  // Split the binary string into an array of binary words
  const binaryWords = str.split(' ');
  // Initialize an empty string to store the result
  let result = '';
  // Iterate through each binary word
  for (let i = 0; i < binaryWords.length; i++) {
    // Convert the binary word to decimal using parseInt with base 2
    const decimalValue = parseInt(binaryWords[i], 2);
    // Convert the decimal value to its ASCII character and concatenate it to the result
    result += String.fromCharCode(decimalValue);
  }
  return result;
}
