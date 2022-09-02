// 1. пользователь вводит номер дня недели
// вывести название этого дня в консоль
// если пользователь ввел некорректные данные то вывести 'incorrect data'
// switch(x){
//     case y:
//         dosmth();
//     case z:
//         dosmth2();
//     case w: 
//         dosmth3();
//     default:
//         default();
// }

// 2. Переписать в тернарный оператор
// x ? y : z
// let age = 20;

// if (age < 10) {
//     console.log('HI!');
// } else if (age < 20) {
//     console.log('Hello!');
// } else {
//     console.log('Good day!');
// }
// №1
// let day;
// day = +prompt("day of the week");
// switch(day) {
//     case 1: console.log("Понедельник");
//     break;
//     case 2: console.log("Вторник");
//     break;
//     case 3: console.log("Среда");
//     break;
//     case 4: console.log("Четверг");
//     break;
//     case 5: console.log("Пятница");
//     break;
//     case 6: console.log("Суббота");
//     break;
//     case 7: console.log("Воскресенье");
//     break;
//     default: console.log("incorrect data")
// }
// №2
let age = +prompt("Age?");;
console.log(age<10 ? "hi" : age<20 ? "hello" : "good day");


//1. пользователь вводит 2 числа, вывести в консоль большее из них

let a = +prompt("Ведите первое число");
let b = +prompt("Ведите второе число");
if (a>b){
    console.log("a more than b");
} else if (a<b) {
    console.log("a less than b");
} else {
        console.log("a === b");
    }

//2. пользователь вводит 3 числа, первые два это числа которые он хочет перемножить
// третье число, это результат умножения по мнению пользователя
// выяснить правильно ли ответил пользователь и вывести в консоль ОК если правильно
// NOT OK {rightAnswer} если неправильно

// const num1 = +prompt('enter num1');
// const num2 = +prompt('enter num2');
// const userResult = +prompt('enter result');

// const rightAnswer = num1 * num2;

// if (userResult === rightAnswer) {
//     console.log('OK');
// } else {
//     console.log(`NOT OK ${rightAnswer}`);
// }