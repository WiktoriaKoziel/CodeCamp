#task
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

#solution
function myReplace(sentence, before, after) {
  // Split the sentence into words
  const words = sentence.split(' ');

  // Iterate through the words
  for (let i = 0; i < words.length; i++) {
    // Check if the current word matches the "before" word
    if (words[i] === before) {
      // Determine the capitalization of the "before" word
      const isCapitalized = before[0] === before[0].toUpperCase();

      // Apply the same capitalization to the "after" word
      if (isCapitalized) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
      } else {
        after = after.toLowerCase();
      }

      // Replace the "before" word with the correctly capitalized "after" word
      words[i] = after;
    }
  }

  // Reconstruct the modified sentence by joining the words
  const modifiedSentence = words.join(' ');

  // Return the modified sentence
  return modifiedSentence;
}
