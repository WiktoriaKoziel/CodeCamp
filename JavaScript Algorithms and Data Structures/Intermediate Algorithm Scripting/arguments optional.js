#task
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

#solution
function addTogether() {
  // Check if both arguments are numbers
  if (arguments.length === 2 && typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
    return arguments[0] + arguments[1];
  } else if (arguments.length === 1 && typeof arguments[0] === 'number') {
    // If only one argument is provided and it's a number, return a function
    const firstArg = arguments[0];
    return function (secondArg) {
      // Check if the second argument is a number
      if (typeof secondArg === 'number') {
        return firstArg + secondArg;
      } else {
        return undefined; // Return undefined if the second argument is not a number
      }
    };
  } else {
    return undefined; // Return undefined if the arguments are not valid
  }
}
