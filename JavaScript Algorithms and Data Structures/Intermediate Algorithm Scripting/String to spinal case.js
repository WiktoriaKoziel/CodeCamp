#solution
function spinalCase(str) {
  // Replace spaces and underscores with hyphens
  str = str.replace(/[\s_]/g, '-');

  // Use a regular expression to insert hyphens between lowercase and uppercase letters
  str = str.replace(/([a-z])([A-Z])/g, '$1-$2');

  // Convert the string to lowercase
  return str.toLowerCase();
}

spinalCase('This Is Spinal Tap');
