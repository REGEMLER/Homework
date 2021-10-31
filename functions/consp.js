// function italian (userName) {
//     console.log(`Ciao ${userName}`);
// }

// function english (userName) {
//     console.log(`Hello ${userName}`);
// }

// function russian (userName) {
//     console.log(`Привет ${userName}`);
// }

// function sayHello(userName, language) {
//     const upperUserName = userName.toUpperCase();
//     language(upperUserName);
// }

// sayHello('joHn', italian);

// function  switcherMaker() {
//     let n = false;
//     return function(){
//         console.log(n = !n);
//     }
// }

// const switcher = switcherMaker();
// switcher();
// switcher();
// switcher();
// switcher();
///////////////////////////////////

// function countMaker() {
//     let n = 0;
//     return function(a){
//         if(a){
//             return console.log(n +=a); 
//         }
//          return console.log(n++);
//     }
// }

// const count = countMaker();
// count();
// count();
// count();
// count();
// count();
// count(50);
// count();
// count();
// Задача на свойство arguments
function foo(){
    let sum = 0;
    for(let i =0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum/arguments.length;
}
alert(foo(11,45,565,233));


// Лекция от 27.10.2021
// FP
// partial application
// curry
// r,s, arr, def val
// setTimeout, setInterval
// rest, spread


// let phrase = "Hello";

// function sum (a,b,c) {
//     return a + b + c;
// }

// function sum (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// const tmp = sum(2)(3)

// tmp(5);


// функция принимает n аргументов и выводит их среднее арифметическое

// function avg () {
//     let args = [];

//     for (let i = 0; i < arguments.length; i++) {
//         args.push(arguments[i]);
//     }

//     console.log(args);
// }
// console.log(avg(2,3,4,3,4,5,342,4,23,423,4));

// arrow functions

// function sum (a,b) {
//     return a + b;
// }

// const pow = (a) => a**2;

// console.log(pow(3));

// function sum (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// const sum = a => b => c => a + b + c;

// no arguments
// const sum = () => {
//     console.log(arguments);
// };

// const foo = cb => cb(4) / 2;

// console.log(foo(a => a**2));


// function foo (cb) {
//     return cb(4) / 2;
// }

// console.log(foo(function (a) { return a**2}));



// .splice()
// .push()
// .concat()
// .shift()
// .unshift()
// .pop()
// .slice()
// .sort()
// .indexOf()
// .includes()
// .join('@')
// .reverse()

// const arr = ['John', 'Peter', 'David', 'Victor', 'Andrey', 'Ahmed', 'Vasilij'];
// const arr2d = [[1,23,3], [65,213,61,12], [5,213,12]];
// const someArr = [23,2,41,2,31,23,12];

// .forEach() **
// .map() *****
// .filter() ****
// .some() *
// .every() *
// .find() ***
// .REDUCE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ['Victor']
// const result = someArr.sort((a,b) => {
//     return b - a;
// });

// console.log(result);
// console.log(arr);
