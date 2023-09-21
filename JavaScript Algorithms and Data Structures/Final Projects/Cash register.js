#task
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

#solution
function checkCashRegister(price, cash, cid) {
  // Define an array of currency units and their values
  const currencyUnits = [
    { name: "PENNY", value: 0.01 },
    { name: "NICKEL", value: 0.05 },
    { name: "DIME", value: 0.1 },
    { name: "QUARTER", value: 0.25 },
    { name: "ONE", value: 1 },
    { name: "FIVE", value: 5 },
    { name: "TEN", value: 10 },
    { name: "TWENTY", value: 20 },
    { name: "ONE HUNDRED", value: 100 }
  ];
  let changeDue = cash - price; // Calculate the amount of change needed
  let change = []; // Initialize an array to store the change
  let totalCid = 0; // Initialize a variable to calculate the total amount in the cash drawer (cid)
  // Calculate the total amount in the cash drawer (cid)
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  // Check three possible scenarios
  if (totalCid < changeDue) {
    // If there's not enough money in the cash drawer, return "INSUFFICIENT_FUNDS"
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCid === changeDue) {
    // If the exact change is available, return "CLOSED"
    return { status: "CLOSED", change: cid };
  } else {
    // Iterate through currency units in reverse order (highest to lowest)
    for (let i = currencyUnits.length - 1; i >= 0; i--) {
      const { name, value } = currencyUnits[i]; // Destructure name and value from currencyUnits
      let availableAmount = cid[i][1]; // Get the available amount of the current currency
      let neededChange = 0; // Initialize a variable to track the change needed in this currency unit
      // Calculate how many units of this currency can be used
      while (changeDue >= value && availableAmount > 0) {
        changeDue -= value; // Subtract the currency value from changeDue
        availableAmount -= value; // Subtract the currency value from availableAmount
        neededChange += value; // Increment the change needed in this currency
        changeDue = parseFloat(changeDue.toFixed(2)); // Fix floating-point precision issue
      }
      // If change was given using this currency, add it to the change array
      if (neededChange > 0) {
        change.push([name, neededChange]);
      }
    }
    // Check if exact change was provided
    if (changeDue === 0) {
      return { status: "OPEN", change };
    } else {
      // If exact change couldn't be provided, return "INSUFFICIENT_FUNDS"
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  }
}
