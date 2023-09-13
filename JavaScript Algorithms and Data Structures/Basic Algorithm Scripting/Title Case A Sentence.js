#1 solution
function titleCase(str) {
  return str
    .toLowerCase() //change everything to lower case
    .split(" ") //split into array of strings
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase())) //replace first letter to UpperCase
    .join(" "); //join the string
}

titleCase("I'm a little tea pot");

#2 solution

function titleCase(str) {
  //Lowercase the string
  str = str.toLowerCase();
  
  //Split string into array of strings
  str = str.split(' ');
  
  //Create the FOR loop
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  
  // join the string
  return str.join(' ');
}

titleCase("I'm a little tea pot");
