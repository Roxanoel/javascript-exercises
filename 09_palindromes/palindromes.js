const palindromes = string => {
    // First step: making sure the method is case insensitive
    string = string.toLowerCase();

    // Using regex to remove characters which are not alphanumeric
    string = string.replace(/[^a-z0-9]/gi,"");

    // Last step: reverse and check if it worked!
    return (string === reverseString(string)) ? true : false;
}


function reverseString(string) {
    return string.split("").reverse().join("");
}

// Do not edit below this line
module.exports = palindromes;
