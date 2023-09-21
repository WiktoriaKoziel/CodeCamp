#task
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)
Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object. Each test will declare a new Person instance as new Person('Bob', 'Ross').

#solution
const Person = function(first, last) {
  // Store the first and last names using closures
  let firstName = first;
  let lastName = last;
  // Define the getFirstName method
  this.getFirstName = function() {
    return firstName;
  };
  // Define the getLastName method
  this.getLastName = function() {
    return lastName;
  };
  // Define the getFullName method
  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  };
  // Define the setFirstName method
  this.setFirstName = function(first) {
    firstName = first;
  };
  // Define the setLastName method
  this.setLastName = function(last) {
    lastName = last;
  };
  // Define the setFullName method
  this.setFullName = function(first, last) {
    firstName = first;
    lastName = last;
  };
};
