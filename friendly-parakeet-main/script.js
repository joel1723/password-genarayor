// Assignment code here
//array variables
var numbers =[
  "0","1","2","3","4"
];
var upperCase = [
  "A","S","D","F","G"
];
var lowerCase = [
  "a","s","d","f","g"
]
var symbols= [
  "!","@","#","%","&",
]
// declartion
var confirmLength = "";
var symbols;
var upperCase;
var lowerCase;
var numbers;

function generatePassword (){
  var confirmLength = window.prompt( "how many chracters would you like your password to have?")

// while loop
  while(confirmLength < 8 ||confirmLength > 128){
    window.prompt( "password must be betwwen 8 and 120 chracters try again ")
    var confirmLength= prompt ( "how many chracters would you like your password to have?")

  }
    var confirmSymbols = confirm(" Click OK to  confirm the use of symbols")
    var confirmUpperCase = confirm("Click OK to confirm the of uppercase")
    var confirmNumbers = confirm("Click OK to confirm the use of numbers")
    var confirmLowerCase = confirm( "Click OK to confirm the use of lowercase")
//while loop
while(confirmLowerCase === false && confirmNumbers === false && confirmSymbols === false && confirmUpperCase === false){
  window.prompt("you must choose one !!");
  var confirmSymbols = confirm(" Click OK to  confirm the use of symbols")
  var confirmUpperCase = confirm("Click OK to confirm the of uppercase")
  var confirmNumbers = confirm("Click OK to confirm the use of numbers")
  var confirmLowerCase = confirm( "Click OK to confirm the use of lowercase")
}
var passwordChar = []

if (confirmUpperCase){
  passwordChar = passwordChar.concat(upperCase)
}
if (confirmLowerCase){
  passwordChar=passwordChar.concat(lowerCase)

}
if(confirmNumbers){
  passwordChar=passwordChar.concat(numbers)
}
if(confirmSymbols){
  passwordChar=passwordChar.concat(symbols)
}
var password= ""

for (var i =0; i < confirmLength; i++){
  password=password + passwordChar[Math.floor(Math.random())* passwordChar.length];
}
return password;

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
