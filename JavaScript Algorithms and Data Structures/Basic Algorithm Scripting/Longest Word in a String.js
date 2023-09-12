#1 solution
function findLongestWord(str) {
  // Step 1. Split the string into an array of strings
  var strArr = str.split(' ');
	
  // Step 2. Initiate a variable that will hold the length of the longest word
  var longest = 0;

  // Step 3. Create the FOR loop
  for(var x = 0; x < strArr.length; x++){
    if(strArr[x].length > longest){ 
	longest = strArr[x].length; // 
     }
  }

  //Step 4. Return the longest word
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

#2 solution

function findLongestWord(str) {
  // Step 1. Split the string into an array 
  var strArr = str.split(' ');
  
  // Step 2. Sort the elements in the array
  var longest = strArr.sort(function(x, y) { 
    return y.length - x.length;
  });
  
  // Step 3. Return the length of the first element of the array
  return longest[0].length; 
}

findLongestWord("The quick brown fox jumped over the lazy dog");
