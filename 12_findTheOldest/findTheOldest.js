const findTheOldest = array => {
    return array.reduce((oldestPerson, currentPerson) => {
        const oldestAge = calculateAge(oldestPerson);
        const currentAge = calculateAge(currentPerson);
        return oldestAge < currentAge ? currentPerson : oldestPerson;
    }
    )
}

function calculateAge(person) {
    if (!('yearOfDeath' in person)) {
        person.yearOfDeath = new Date().getFullYear();
    }
    
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
