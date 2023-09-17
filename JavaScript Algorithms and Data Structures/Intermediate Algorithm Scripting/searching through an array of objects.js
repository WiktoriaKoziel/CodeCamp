#task
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

#solution
function whatIsInAName(collection, source) {
  //Create an empty array to store matching objects
  const matchingObjects = [];
  //Iterate through each object in the collection
  for (const object of collection) {
    //Check if the object matches the criteria specified in the source object
    let isMatching = true; // Assume the object matches until proven otherwise
    //Iterate through the properties (name-value pairs) of the source object
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        //Check if the property (name) exists in the object using hasOwnProperty and if its value matches
        if (!object.hasOwnProperty(key) || object[key] !== source[key]) {
          isMatching = false; //If not, set isMatching to false
          break; //Exit the loop since there's no need to check further
        }
      }
    }
    //After checking all properties of the source object, if isMatching is still true, add the object to matchingObjects
    if (isMatching) {
      matchingObjects.push(object);
    }
  }
  //Return the matchingObjects array as the result
  return matchingObjects;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
