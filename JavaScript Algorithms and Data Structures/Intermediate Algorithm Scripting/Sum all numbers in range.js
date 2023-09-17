#task
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

#solution
function sumAll(arr) {
  const max = Math.max(arr[0], arr[1]) //finding max value
  const min = Math.min(arr[0], arr[1]) //finging min value
  let total = 0 /defining total
  for (let num = min; num<=max; num++) { //loop through all numbers
    total+=num
  }
  return total
}

console.log(sumAll([1, 4])); //equal 10
