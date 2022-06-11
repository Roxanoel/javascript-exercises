const fibonacci = num => { 
    // Make sure it will work as intended with strings
    num = +num;

    if (num <= 0) return "OOPS";
    if (num === 1 || num === 2) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);

};

// Do not edit below this line
module.exports = fibonacci;
