// Create possible arrays for upper, lower, special, numbers
var lowerArr = "abcdefghijklmnopqrstuvwxyz"
var upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberArr = "0123456789"
var specialArr = "!@#$%&*?/"
// Prompt for length of password (btwn 8 and 128 characters)
var pwdLength = prompt("What length would you prefer your password to be? (Must be at least 8 characters)")
  if (pwdLength < 8) {
    prompt("Password length must be at least 8 characters")
  } else(Math.floor(Math.random))
// create array
// Prompt for lowercase, uppercase, numeric, and special characters 

// create variable for lowercase letter confirmation
var possibleLower = confirm("Would you like lowercase letters to be included?")
  if (possibleLower===true) {
    // push array
  }
  // create variable for uppercase letter confirmation
  var possibleUpper = confirm("Would you like uppercase letters to be included?")
  if (ossibleUpper===true) {
    // push array
  }
// create variable for number confirmation
var possibleNumbers = confirm("Would you like numbers to be included? (0-9) ")

// create variable for special character confirmation
var possibleSpecial = confirm("Would you like special characters to be included?")

// Push array possibly?
// Input should be validated
confirm("We have considered your criteria. Press the 'Generate Password' button to recieve your password.")
// Prompts answered ---> password is generated
// Create loops for password generation
// After password is generated, password is displayed on page or in alert

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

