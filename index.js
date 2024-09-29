// Declare a global variable called customerName and assign it the value 'bob'
var customerName = "bob";

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function that declares a global variable called bestCustomer and assigns it the value 'not bob'
function setBestCustomer() {
  bestCustomer = "not bob"; // Implicitly global variable (not recommended in practice)
}

// Function to overwrite the value of the global variable bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Declare a constant in global scope called leastFavoriteCustomer and assign an initial value
const leastFavoriteCustomer = "someone";

// Function that tries to change the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "anyone"; // This will throw an error because constants cannot be reassigned
}
