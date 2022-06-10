const leapYears = function(year) {
    // Safeguard for invalid values


    // Checks if conditions are failed
    if (!(year%4 === 0)) return false;

    if (year%100 === 0 && !(year%400 === 0)) return false;

    // Returns true if no condition was failed
    return true;
};

// Do not edit below this line
module.exports = leapYears;
