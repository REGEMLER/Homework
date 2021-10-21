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
