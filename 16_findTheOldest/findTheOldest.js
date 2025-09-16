const findTheOldest = function(objeto) {
    const oldest = objeto.map((people) => {
        if(people.hasOwnProperty("yearOfDeath")){
            return people.yearOfDeath-people.yearOfBirth;
        }else{
            const currentYear = new Date().getFullYear();
            return currentYear-people.yearOfBirth;
        }
    })
    const oldesPeople= oldest.reduce((accumulator, currentValue) => {
        return Math.max(accumulator,currentValue);
    });
    let index=0;
    for (let i=0; i<oldest.length;i++){
        if(oldesPeople==oldest[i]){
            index=i;
        }
    }
    return objeto[index];
};

const people = [
    {
    name: "Carly",
    yearOfBirth: 1066,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
