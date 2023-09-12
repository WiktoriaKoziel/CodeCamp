#1 solution 

function factorialize(num) {
  // If the number is less than 0, reject it.
  if (num < 0) 
        return -1;
    
  // If the number is 0, its factorial is 1.
  else if (num == 0) 
      return 1;
    
  // Otherwise, call the procedure again
    else {
        return (num * factorialize(num - 1));
    }
}
factorialize(5);

#2 solution

function factorialize(num) {
  // Step 1. Create a variable result to store num
  var result = num;
   
  // If num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1) 
    return 1; 
 
  // Step 2. Create the WHILE loop 
  while (num > 1) { 
    num--; // decrementation by 1 at each iteration
    result = result * num; // or result *= num; 
  }
     
  // Step 3. Return the factorial of the provided integer
  return 
}
factorialize(5);

#3 solution

function factorialize(num) {
// If num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1)
    return 1;

// I start the FOR loop with i = 4
// I decrement x after each iteration 
  for (var x = num - x; x >= 1; x--) {
  // I store the value of num at each iteration
    num *= x; // or num *= x;
  }
  return num;
}
factorialize(5);

