//Input: object with nested objects/array
//Output: Object with name and fair investment amount
//Constraints: More requested than allocation given, use historical average investment
//Edge Cases: Historical amount is 0

let allocationAlg = (investmentInput) => {
  let output = {}; //Create resulting variable
  let requestedSum = 0; // Create total requested amount variable
  let historicalSum = 0; // Create average sum variable
  let remainingAllocation = investmentInput.allocation_amount;
  let investmentArray = investmentInput.investor_amounts;
  for (let i = 0; i < investmentArray.length; i++) { // Determine if total requested amount is greater than available allocation
    requestedSum += investmentArray[i].requested_amount;
    historicalSum += investmentArray[i].average_amount;
    output[investmentArray[i].name] = investmentArray[i].requested_amount; // Create key/value pair in output
  }

  if (requestedSum <= investmentInput.allocation_amount) { // If total requested sum is less than or equal to allocation, everyone can invest their desired amount
    return output;
  }

  if (historicalSum === 0) { //Edge case, no historical amount. Prorate based on how much each is willing to invest.
    output = {};
    let factor = investmentInput.allocation_amount / requestedSum; // Create scaling ratio to prorate allocation

    for (let k = 0; k < investmentArray.length; k++) {
      output[investmentArray[k].name] = investmentArray[k].requested_amount * factor;
    }
    return output;
  }

  output = {}; // Reset output variable
  let active = new Array(investmentArray.length).fill(true); // Variable to track which investor still not capped

  while (true) {
    let capList = []; // If empty, all investors are fairly invested
    let remainingRatio = remainingAllocation / historicalSum; // Constant ratio through each loop

    for (let j = 0; j < investmentArray.length; j++) {
      if (!active[j]) continue; // Skip capped investors

      let inv = investmentArray[j];
      let tentative = remainingRatio * inv.average_amount; //Possible amount to invest

      if (tentative >= inv.requested_amount) { // If more than requested amount, push investor to cap list.
        capList.push(j);
      }
    }

    if (capList.length === 0) { // If none capped, push remaining investment amounts
      for (let l = 0; l < investmentArray.length; l++) {
        if (!active[l]) continue; // Skip capped investors

        let inv = investmentArray[l];
        output[inv.name] = remainingRatio * inv.average_amount;
      }
      break;
    }

    for (let h = 0; h < capList.length; h++) { // Iterate through cap list to set requested amount as the cap
      let idx = capList[h];
      let inv = investmentArray[idx];

      output[inv.name] = inv.requested_amount;
      remainingAllocation -= inv.requested_amount;
      historicalSum -= inv.average_amount;
      active[idx] = false;
    }

    if (remainingAllocation <= 0 || historicalSum <= 0) { // Nothing left to allocate or no history left
      break;
    }
  }
  return output;
}

console.log(
  allocationAlg(
    {
      "allocation_amount": 100,
      "investor_amounts": [
        {
          "name": "Investor A",
          "requested_amount": 100,
          "average_amount": 95
        },
        {
          "name": "Investor B",
          "requested_amount": 1,
          "average_amount": 1
        },
        {
          "name": "Investor C",
          "requested_amount": 1,
          "average_amount": 4
        }
      ]
    }

  )
);