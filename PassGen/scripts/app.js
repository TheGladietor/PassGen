
const passwordBox = document.getElementById("password");
const length = 16; //  Length of the generated password

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Uppercase letters (A-Z)
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";  // Lowercase letters (a-z)
const numbers = "0123456789";
const specialSymbols = "!@#$%^&*()_-=+~|[]{}:/<>?/,.;";

const allChars = upperCaseLetters + lowerCaseLetters +  numbers + specialSymbols;

function generatePassword(){
    let password =  "";
    password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}