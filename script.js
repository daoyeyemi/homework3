// Create possible arrays for upper, lower, special, numbers
var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
'y', 'z']
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z']
var numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialArr = ['!','@','#','$','%','&','*','?','/']

// Create array for possible characters to be shosen from for password
var possibleCharacters = []
// Prompt for length of password (btwn 8 and 128 characters)
var pwdLength = prompt("How many characters would you prefer your password to have? (Must be between 8 and 128 characters)")
if (pwdLength >= 8 && pwdLength <= 129) {
  alert("Your password has " + pwdLength + " characters.");
}
console.log(pwdLength)
while (pwdLength < 8 || pwdLength > 128) {
  alert("Password length must be at least 8 characters and at most 128 characters");
  var pwdLength = prompt("How many characters would you prefer your password to have? (Must be between 8 and 128 characters)");
} 

// Prompt for lowercase, uppercase, numeric, and special characters 

// create variable for lowercase letter confirmation
var possibleLower = confirm("Would you like lowercase letters to be included?")
  if (possibleLower===true) {
    possibleCharacters.push(lowerArr);
    alert("Lower case characters have been added to your password.");
  } else {
    possibleCharacters.push('');
    alert("Lower case characters have not been added to your password.");
  }
  console.log(possibleCharacters)

  // create variable for uppercase letter confirmation
  var possibleUpper = confirm("Would you like uppercase letters to be included?")
  if (possibleUpper===true) {
    possibleCharacters.push(upperArr);
    alert("Upper case characters have been added to your password.");
  } else {
    possibleCharacters.push('');
    alert("Upper case characters have not been added to your password.");
  }
// create variable for number confirmation
var possibleNumbers = confirm("Would you like numbers to be included? (0-9) ")
  if (possibleNumbers===true) {
    possibleCharacters.push(numberArr);
    alert("Numbers have been added to your password.");
  } else {
    possibleCharacters.push('');
    alert("Numbers have not been added to your password.");
  }
// create variable for special character confirmation
var possibleSpecial = confirm("Would you like special characters to be included?")
  if (possibleSpecial===true) {
    possibleCharacters.push(specialArr);
    alert("Special characters have been added to your password.");
  } else {
    possibleCharacters.push('');
    alert("Special characters have not been added to your password.");
  }
// Input validation
confirm("We have considered your criteria. Press the 'Generate Password' button to recieve your password.")
// Prompts answered ---> password is generated
// Create loops for password generation
// After password is generated, password is displayed on page or in alert

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword(
//     function randomgenerate 
//   );
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//create random generator

for (i = 0; i < pwdLength; i++) {
  var random = Math.floor(Math.random() * 10)+ 1
console.log(random)
}