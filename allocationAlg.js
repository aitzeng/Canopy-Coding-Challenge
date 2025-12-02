//Input: object with nested objects/array
//Output: Object with name and fair investment amount
//Constraints: N/A
//Edge Cases: 0 investments, more requested then allocation given

let allocationAlg = function (investmentInput) => {
  let output = {}; //Create resulting variable
  let requestedSum = 0; // Create total requested amount variable
  let historicalSum = 0; // Create average sum variable
  for (let i = 0; i < investmentInput.investor_amounts.length; i++) { // Determine if total requested amount is greater than available allocation
    requestedSum += i.requested_amount;
    historicalSum += i.average_amount;
    output[i.name] = i.requested_amount; // Create key/value pair in output
  }
  if (requestedSum <= investmentInput.allocation_amount) { // If total requested sum is less than or equal to allocation, everyone can invest their desired amount
    return output;
  } else { // If total requested sum is larger than allocation, will need to maximize fairness with historical average investment amount
    output = {}; //Reset output variable
    for (let i = 0; i < investmentInput.investor_amounts.length; i++) {
      let prorated = investmentInput.allocation_amount*(i.average_amount / historicalSum); // Create prorated variable
      output[i.name] = prorated;
    }
  }

  return output;
}