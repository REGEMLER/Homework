// Define Properties
'use strict';

const person = {
    name: 'John', // {enumerable: true, configurable: true}
    city: 'Gomel', // {enumerable: true, configurable: true}
    age: 23, // {enumerable: true, configurable: true}
    size: {
        width: 20, // {enumerable: true, configurable: true}
        height: 30 // {enumerable: true, configurable: true}
    }
};

// Object.defineProperty(person, 'job', {
//     writable: false,
//     value: 'JS DEVELOPER',
//     configurable: true
// });


Object.defineProperties(person, {
    adress: {
        enumerable: false,
        writable: true
    },
    city: {
        enumerable: false
    }
});

console.log(person);

console.log(Object.getOwnPropertyDescriptors(person));

// console.log(Object.keys(person));

// for (let key in person) {
//     console.log(key);
// }

// Object.defineProperty()
// Object.defineProperties()
// Object.getOwnPropertyDescriptors()
// Object.getOwnPropertyDescriptor()



