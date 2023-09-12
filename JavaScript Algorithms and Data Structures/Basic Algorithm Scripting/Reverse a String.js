#1 solution

function reverseString(str) {
  if (str === "") { // This is the terminal case that will end the recursion
    return "";
    }  else {
    return reverseString(str.substr(1)) + str.charAt(0);
    }
}
reverseString("hello");

#2 solution

function reverseString(str) {
    // Step 1. Create an empty string for hosting
    var newString = "";
 
    // Step 2. Create the FOR loop
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
    }
 
    // Step 3. Return the reversed string
    return newString; // "olleh"
}
 
reverseString('hello');

#3 solution

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
reverseString("hello");
