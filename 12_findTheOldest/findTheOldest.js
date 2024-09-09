const getAge = function(person) {
    if(!person.yearOfDeath) {
        person.yearOfDeath = new Date().getFullYear();
    }

    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.sort((a, b) => getAge(b) - getAge(a))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
