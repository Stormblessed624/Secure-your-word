// Assignment code here
function generatePassword() {
  // Define character options
  var lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialChars = '!@#$%^&*()';
  var numbers = '0123456789';

  var confirmUppercase;
  var confirmLowercase;
  var confirmSpecial;
  var confirmNumbers;

  // Prompt user for character limit between 8 and 128
  wordLength = parseInt(window.prompt("How long would you like your password? min 8, max 128"));
  if(!wordLength) {
    window.alert("You need to give a password length!")
  } 
  else if (wordLength < 8 || wordLength > 128) {
    window.alert("Please select a valid length.")

    wordLength = parseInt(window.prompt("Your password must be between 8 and 128 characters. How long would you like it to be?"));
  } else {
    confirmUppercase = confirm("will this contain numbers?")
  }


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
