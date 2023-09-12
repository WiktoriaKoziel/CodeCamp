#1 solution
function repeatStringNumTimes(str, num) {
  let repeatedstring = ("")
  for (let i = 0; i < num; i++) {
    repeatedstring += str
  }
  return repeatedstring
}

repeatStringNumTimes("abc", 3)

#2 solution
function repeatStringNumTimes(str, num) {
  let repeatedstring = "";
  while (num > 0) {
    repeatedstring += str;
    num--;
  }
  return repeatedstring;
}
repeatStringNumTimes("abc", 3);
