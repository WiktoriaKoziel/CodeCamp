#task
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

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
