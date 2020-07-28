// Prompt for length of password (btwn 8 and 128 characters)
prompt("What length would you prefer your password to be? (Must be at least 8 characters)")
// Prompt for lowercase, uppercase, numeric, and special characters 
prompt("Would you like lowercase letters to be included?")
prompt("Would you like uppercase letters to be included?")
prompt("Would you like numbers to be included? (0-9) ")
prompt("Would you like special characters to be included?")
// Push array possibly?
// Input should be validated
// Prompts answered ---> password is generated
// after password is generated, password is displayed on page or in alert

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

