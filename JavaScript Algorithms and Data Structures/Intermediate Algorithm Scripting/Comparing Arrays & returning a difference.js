#task
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

#1 solution
function diffArray(arr1, arr2) {
  const diff1 = arr1.filter((item) => !arr2.includes(item)) //filtering through 1st array
  const diff2 = arr2.filter((item) => !arr1.includes(item)) //filtering through 2nd array
  return [...diff1, ...diff2]; //return the difference
}


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

#2 solution

function diffArray(arr1, arr2) {
  const newArr = [];

  function onlyIn(first, second) { 
    for (let i = 0; i < first.length; i++) { // Looping through an array to find elements that don't exist in another array
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]); // Pushing the elements unique to first to newArr
      }
    }
  }

  onlyIn(arr1, arr2);
  onlyIn(arr2, arr1);

  return newArr;
}
