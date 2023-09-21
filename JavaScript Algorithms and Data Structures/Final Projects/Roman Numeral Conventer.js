#task
Convert the given number into a roman numeral.

#solution
function convertToRoman(num) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = '';
  // Loop through the Roman numeral values
  for (let key in romanNumerals) {
    const value = romanNumerals[key];
    // Subtract the value while it's less than or equal to 'num'
    while (value <= num) {
      result += key; // Append the Roman numeral
      num -= value;  // Subtract the value from 'num'
    }
  }
  return result;
}
