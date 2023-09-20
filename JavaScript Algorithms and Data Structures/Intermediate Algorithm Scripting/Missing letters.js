#task
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

#solution
function findMissingLetter(str) {
  // Iterate through the input string from the beginning to the second-to-last character.
  for (let i = 0; i < str.length - 1; i++) {
    // Calculate the difference in ASCII codes between the next character and the current character.
    const charCodeDiff = str.charCodeAt(i + 1) - str.charCodeAt(i);
    // If the difference is greater than 1, there is a gap between letters.
    if (charCodeDiff > 1) {
      // Return the missing letter by adding 1 to the ASCII code of the current character.
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  // If no missing letter is found, return undefined.
  return undefined;
}
