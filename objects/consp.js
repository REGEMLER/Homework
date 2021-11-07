// const sizes = [34,51,64];
// const person = {
//     name: 'John',  
//     age: 23,
//     size: {
//         height: 23,
//         width: 41
//     },
//     stack: ['HTML', 'CSS', 'JS'],
// };

// // person.name = 'Valerchik';
// // person.city = 'Gomel';

// console.log(person);

// const pupyrky = {
//     blue: 234,
//     red: 214,
//     orange: 23,
//     purple: 124,
// }

// let sum = 0;

// for(key in pupyrky){
//     sum += pupyrky[key];
// }
// alert(sum);
// const sum = Object.keys(pupyrki).reduce((sum, pup) => sum + pupyrki[pup] ,0);
// console.log(sum);

// let sum = 0;

// for (let key in pupyrki) {
//     sum += pupyrki[key];
// }
// function run(where,speed){
//     console.log(this);
//    console.log(`${this.name} run to ${where} with speed ${speed}`) 
// }
// const person = {
//     name: `John`,
//     age: 23,
//     size: {
//         width: 100,
//         height: 300,
//     },
//     run
// }
// setTimeout(person.run.bind(person), 2000)


/////////////////////////////
// function eat () {
//     const that = this;
//     function eatInner () {
//         console.log(that);
//     }
//     eatInner();
// }

// eat.call(person);
/////////////////////////////////
// function eat () {
//     function eatInner () {
//         console.log(this);
//     }
//     const eatInnerArrow = () => {
//         console.log(this);
//     }
//     eatInner();
//     eatInnerArrow();
// }
// eat.call(person);

//////////Лекция от 7 ноября 

function showStack(){
    this.stack.forEach(item => console.log(item))
}

 const person = {
     name: `John`,
     age: 23,
     stack: [`HTML`, `CSS`, `JS`],
     run: function(){
         console.log(`${this.name} runs`);
     },
     showStack
 };

 const person2 = {
    name: `David`,
    age: 24,
    stack: [`C++`, `JAVA`, `SQL`],
    showStack
 }
 person.showStack();
 person2.showStack();

// let slowShowStack1 = person.showStack.bind(person);
// let slowShowStack2 = person2.showStack.bind(person2);
// setTimeout(slowShowStack1,5000);
// setTimeout(slowShowStack2,5000);

// Правильное решение 
// function showStack () {
//     this.stack.forEach((item) => {
//         console.log(item);
//     });    
// }

// const person = {
//     name: 'John',
//     age: 23,
//     stack: ['HTML', 'CSS', 'JS'],
//     showStack
// };

// const person2 = {
//     name:'David',
//     age: 24,
//     stack: ['C++', 'JAVA', 'SQL'],
//     showStack,
//     run: function () {
//         console.log(`${this.name} runs`);
//     }
// };

// // person.showStack()
// // person2.showStack()

// setTimeout(() => {
//     person.showStack();
// },1000); // person showStack
// setTimeout(person2.showStack.bind(person2),1000 ); // person2 showStack

// rest, spread
// arrays, object destucturization

// spread, rest

// const person = {
//     name: 'John',
//     age: 23,
//     stack: ['HTML', 'CSS', 'JS']
// };

// const copy = [...arr, false , ...arr2, 'asdasd', false];
// const programmer = {
//     ...person,
//     isProgrammer: true,
//     stack: [...person.stack]
// };

// programmer.stack.push('blabla');

// console.log(person);

// const foo = (muha, ...kotlety) => {
//     console.log(muha);
// };

// .call(this, arg1, arg2, arg3)
// .splice(2, 1, 'asd', 'asdasd', 'zxcxzc', 'asdasd')

// foo(person);

// destucturization

const person = {
    age: 23,
    name: 'John',
    stack: ['HTML', 'CSS', 'JS']
};

const {name: imya , age: vozrast, stack} = person;
// const imya = person.name;
// const vozrast = person.age;
// const age = person.age;

console.log(vozrast)



// const arr = [2,3,12,312,3213,12,3];

// let one = arr[0];
// const two = arr[1];
// let [zero, one, two, ...ostalnoe] = arr; // [2,3,12,312,3213,12,3]