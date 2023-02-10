// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  alphabeticalCharacters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numbers:["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharacters:["!", "#", "$", "%", "&"],
  createPasswordCriteria: function() {
  console.log(this.alphabeticalCharacters[2] + this.numbers[4] + this.specialCharacters[3]);
}
}



//Write password to the #password input

function generatePassword() {
  prompt("How many characters would you like your password to conatin?");


}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
