// Assignment code here
function generatePassword() {
  // Define character options
  var lowerChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var specialChars = ['!','@','#','$','%','^','&','*','(',')'];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];

  // Define an object containing the users choices for the password
  var choices = {};

  // Prompt user for character limit between 8 and 128
  wordLength = parseInt(window.prompt("How long would you like your password? min 8, max 128"));
  if(!wordLength) {
    window.alert("You need to give a password length!");
  } 
  else if (wordLength < 8 || wordLength > 128) {
    window.alert("Please select a valid length.");

    wordLength = parseInt(window.prompt("Your password must be between 8 and 128 characters. How long would you like it to be?"));
  } else {
    // Prompt confirmation of criteria options
    choices.confirmUppercase = window.confirm("Will it contain uppercase letters?");
    choices.confirmLowercase = window.confirm("Will it contain lowercase letters?");
    choices.confirmSpecial = window.confirm("Will it contain special characters?");
    choices.confirmNumbers = window.confirm("Will it contain numbers?");
  };

  console.log(choices);
  // If no choices selected alert user and return to start
  if(!choices.confirmUppercase && !choices.confirmLowercase && !choices.confirmSpecial && !choices.confirmNumbers) {
    window.alert("Please select minimum of one character type.");
    generatePassword();
  }
  var finalChoice = [];
  if(choices.confirmUppercase) {
    for(let i = 0; i < upperChars.length; i++) {
      finalChoice.push(upperChars[i]);
    }
  }
  if(choices.confirmLowercase) {
    for(let i = 0; i < lowerChars.length; i++) {
      finalChoice.push(lowerChars[i]);
    }
  }
  if(choices.confirmSpecial) {
    for(let i = 0; i < specialChars.length; i++) {
      finalChoice.push(specialChars[i]);
    }
  }
  if(choices.confirmNumbers) {
    for(let i = 0; i < numbers.length; i++) {
      finalChoice.push(numbers[i]);
    }
  }

  // Then run array through for loop using wordLength as limiter for loop and Math.random
  var password = [];
  for(let i = 0; i < wordLength; i++) {
    charPick = finalChoice[Math.floor(Math.random() * finalChoice.length)];
    password.push(charPick)
  }
  // return password without commas
  return password.join('');
  
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
