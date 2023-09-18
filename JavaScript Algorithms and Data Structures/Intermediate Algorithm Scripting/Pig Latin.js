#task
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

#solution
function toPigLatin(str) {
  // Define an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Check if the word starts with a vowel
  if (vowels.includes(str[0])) {
    return str + 'way'; // If it does, add "way" to the end
  } else {
    // Find the index of the first vowel in the word
    let firstVowel = -1;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        firstVowel = i;
        break;
      }
    }
     if (firstVowel === -1) {
      // If no vowel was found, just add "ay" to the end
      return str + 'ay';
    }
    // Move the consonant cluster to the end and add "ay"
    return str.slice(firstVowel) + str.slice(0, firstVowel) + 'ay';
  }
}
