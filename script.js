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
var pwdLength = prompt("What length would you prefer your password to be? (Must be at least 8 characters)")
  if (pwdLength < 8 || pwdLength > 128)
      confirm("Password length must be at least 8 characters")
    } else {
      
    }
// create array
// Prompt for lowercase, uppercase, numeric, and special characters 

// create variable for lowercase letter confirmation
var possibleLower = confirm("Would you like lowercase letters to be included?")
  if (possibleLower===true) {
    possibleCharacters.push(lowerArr)
  } else {
    possibleCharacters.push('');
  }
  // create variable for uppercase letter confirmation
  var possibleUpper = confirm("Would you like uppercase letters to be included?")
  if (possibleUpper===true) {
    possibleCharacters.push(upperArr)
  } else {
    possibleCharacters.push('');
  }
// create variable for number confirmation
var possibleNumbers = confirm("Would you like numbers to be included? (0-9) ")
  if (possibleNumbers===true) {
    possibleCharacters.push(numberArr)
  } else {
    possibleCharacters.push('');
  }
// create variable for special character confirmation
var possibleSpecial = confirm("Would you like special characters to be included?")
  if (possibleSpecial===true) {
    possibleCharacters.push(specialArr)
  } else {
    possibleCharacters.push('');
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