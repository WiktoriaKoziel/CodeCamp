#1 solution
function confirmEnding(str, target) {
  if (str.substring(str.lastIndexOf(target)) == target) {
    return true
  } else {
  return false }
}
confirmEnding('Bastian', 'n');

#2 solution

function confirmEnding(str, target) {
  return string.endsWith(target); 
}
confirmEnding('Bastian', 'n');
