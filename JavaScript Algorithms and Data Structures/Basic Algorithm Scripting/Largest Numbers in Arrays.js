#1 solution

function largestOfFour(arr) {
   // Step 1. Create an array that will host the result of the 4 sub-arrays
   var largestNumber = [0,0,0,0];
 
   // Step 2. Create the first FOR loop that will iterate through the arrays
   for(var i = 0; i < arr.length; i++) {
   /* The starting point, index 0, corresponds to the first array */
 
    // Step 3. Create the second FOR loop that will iterate through the sub-arrays
    for(var x = 0; x < arr[i].length; x++) {
    /* The starting point, index 0, corresponds to the first sub-array */
       
       if(arr[i][x] > largestNumber[i]) {          
          largestNumber[i] = arr[i][j];
        }
    }
 }
 // Step 4. Return the largest numbers of each sub-arrays
 return largestNumber; 
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

#2 solution

function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
//Function.prototype.apply.bind(Math.max, null) makes a new function accepting the arr.map values i.e. the inner arrays.

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
