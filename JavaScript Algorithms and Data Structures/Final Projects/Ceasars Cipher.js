#task
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

#solution
function rot13(str) {
  // Define a function to decode a single character
  function decodeChar(char) {
    // Check if the character is an uppercase letter
    if (/[A-Z]/.test(char)) {
      // Convert the character to its Unicode code point
      const code = char.charCodeAt(0);
      // Decode the character by shifting it by 13 positions
      let decodedCode = code - 13;
      // Ensure it stays within the uppercase letter range
      if (decodedCode < 65) {
        decodedCode += 26;
      }
      // Convert the decoded code back to a character
      return String.fromCharCode(decodedCode);
    } else {
      // If the character is not an uppercase letter, return it unchanged
      return char;
    }
  }
  // Use the decodeChar function to decode each character in the string
  const decodedChars = str.split('').map(decodeChar);
  // Join the decoded characters to form the decoded string
  return decodedChars.join('');
}
