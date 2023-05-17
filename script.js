// Assignment code here
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '()'];


//main funtion//
function generatePassword() {
  //prompt for password length + alert for invalid response//
  var passwordLength = prompt("what length would you like your password to be?", "enter a number between 8-128");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("this is not a valid response please try again");
    //restart function//
    return generatePassword();
  }
  //confirm character choices//
  var lowCase = confirm("would you like to include lowercase letters?", "choose ok for yes and cancel for no");
  if (lowCase) {
    alert("you have chose to include lower case letters");
  }
  else alert("you have chose not to include lower case letters");

  var upCase = confirm("would you like to include uppercase letters?", "choose ok for yes and cancel for no");
  if (upCase) {
    alert("you have chose to include upper case letters");
  }
  else alert("you have chose not to include upper case letters");

  var spChar = confirm("would you like to include special characters?", "choose ok for yes and cancel for no");
  if (spChar) {
    alert("you have chose to include special characters");
  }
  else alert("you have chose not to include special charaters");

  var numb = confirm("would you like to include numbers?", "choose ok for yes and cancel for no");
  if (numb) {
    alert("you have chose to include numbers");
  }
  else alert("you have chose not to include numbers");

  //alert if no character types are selected//
  if (!lowCase && !upCase && !spChar && !numb) {
    alert("you must include at least 1 character type. Please start over")
    //restart function//
    return generatePassword();
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