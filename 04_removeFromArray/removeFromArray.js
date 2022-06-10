const removeFromArray = function(array, ...toRemove) {

    let newArray = []
    const argsArray = toRemove;

    for (let i = 0; i < array.length ; i++)
    {
        if (!checkIfArgsMatchValue(argsArray, array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
};

function checkIfArgsMatchValue(array, valueToCheck) {
    for (let i = 0; i < array.length; i++) {
        // If there is a match between the argument and the value to check, return true
        if (array[i] === valueToCheck) return true;
    }
    // If no match was found, return false.
    return false;
}

// Do not edit below this line
module.exports = removeFromArray;
