// const sizes = [34,51,64];
const person = {
    name: 'John',  
    age: 23,
    size: {
        height: 23,
        width: 41
    },
    stack: ['HTML', 'CSS', 'JS'],
};

// person.name = 'Valerchik';
// person.city = 'Gomel';

console.log(person);

const pupyrky = {
    blue: 234,
    red: 214,
    orange: 23,
    purple: 124,
}

let sum = 0;

for(key in pupyrky){
    sum += pupyrky[key];
}
alert(sum);
// const sum = Object.keys(pupyrki).reduce((sum, pup) => sum + pupyrki[pup] ,0);
// console.log(sum);

// let sum = 0;

// for (let key in pupyrki) {
//     sum += pupyrki[key];
// }