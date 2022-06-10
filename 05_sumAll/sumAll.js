const sumAll = function(n1, n2) { 
    // Safeguard against invalid values
    if (!(typeof n1 === "number") 
        || !(typeof n2 === "number" ) 
        || n1 < 0
        || n2 < 0)
    {return "ERROR"};
    
    // This variable will store the result of the addition
    let sum = 0;

    // Before the loop, determine which number is lower and which is greater.
    const min = (n1 <= n2) ? n1 : n2;
    const max = (n1 > n2) ? n1 : n2;

    // Loop starts at min and ends at max inclusively. Adds all results.
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
