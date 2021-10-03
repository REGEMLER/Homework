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