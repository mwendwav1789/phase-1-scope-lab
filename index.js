// Write your solution in this file!
// Declare customerName globally
var customerName = "bob";

// 1) Function that returns customerName
function returnCustomerName() {
  return customerName;
}

// 2) Function that modifies the global customerName to uppercase
function upperCaseCustomerName() {
  customerName = customerName.toglobalCase();
}

// 3) Function that declares and sets bestCustomer
var bestCustomer;
function setBestCustomer() {
  bestCustomer = "not bob";
}

// 4) Function that overwrites bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// 5) Function that tries (unsuccessfully) to reassign leastFavoriteCustomer
const leastFavoriteCustomer = "Karen";
function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = "someone else"; // This will throw an error
  } catch (error) {
    console.error("Cannot change least favorite customer: ", error.message);
  }
}

// Test the functions
console.log(returnCustomerName()); // bob
upperCaseCustomerName();
console.log(returnCustomerName()); // BOB
setBestCustomer();
console.log(bestCustomer); // not bob
overwriteBestCustomer();
console.log(bestCustomer); // maybe bob
changeLeastFavoriteCustomer(); // Error: Cannot change least favorite customer
