// let i;
// let j;
// for(i=1;i<5;++i){
//     for(j=1;j<5;++j){
//     if(i==3 &&j===3){
//         continue;
//     }
//     console.log(`${i}.${j}`);
// }
// }

// let n = +prompt(`Number?`);
// let summ = 0;
// for (let i = 0;i<=n;i++){
//    summ = i + summ;
// }
// console.log(summ);

// Задача про хомячка 
// Мой вариант 
let hamster = 100;
let startUserHamster = 0;
let i;
for(i = 1;;i++){
   let userHamster = prompt(`How many hamsters do you want to take?`);
   if (userHamster===null){
      alert("Вы завершили игру");
      break;
}  else{
   userHamster = +userHamster;
   if (startUserHamster>hamster){
      alert("Нет столько хомячков");
      continue;
   }
 if (startUserHamster<hamster){
      startUserHamster += userHamster;
      alert(`У вас уже ${startUserHamster} хомячков`);
}   if(startUserHamster===hamster){
   alert(`Вы поймали всех хомячокв за ${i} попыток`);
   break;
} 
}
}
alert(`the end`);

// правильное решение 
// let hamsters = 100;
// let userHamsters;

// for (let counter = 0;; counter++) {2
//     userHamsters = prompt('how many hamsters ?');
//     if (userHamsters === null) {
//         alert('you have quit the game');
//         break;       
//     }
//     userHamsters = Math.abs(userHamsters);

//     // забирание хомячков
//     if (userHamsters > hamsters) {
//         alert(' there is no such amount of hamsters');
//         continue;
//     }

//     hamsters -= userHamsters;
//     alert(`you successfully got ${userHamsters} hamsters`);

//     if (hamsters === 0) {
//         alert(`You successfully got all hamsters ${counter} times`);
//         break;
//     }
// }

// 1. Пользователь вводит число n. Написать цикл, который выводит все числа от n до 0.

// let n = +prompt("input negative number");
// while(n<=0){
//     console.log(n);
//     ++n
// }

// 2. Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.

// let i = 9;
// while(i<100){
//     ++i
// if(i%4===0 && i%6!==0){
//     console.log(i);
// }
// }


// 3. Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. В
// начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем
// вводит сами числа.
// Пример вывода:
// «Положительных: 2 шт.
// Отрицательных: 5 шт.
// Нулей: 3 шт.»

let countNum = +prompt("How many numbers do you want to input?");
let counerPositive = 0;
let counterNegative = 0;
let counterNull = 0;
while(countNum--){
    let num = +prompt("press number");
    if(num>0){
        ++counerPositive;
    } else if (num<0){
        ++counterNegative;
    } else {++counterNull} 
}
console.log(`Positive numbers: ${counerPositive}`);
console.log(`Тegative numbers: ${counterNegative}`);
console.log(`Nulls: ${counterNull}`);


// 1. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

let sum = 0;
let number=0;
let arithmeticMean;
let i=0;
while(true){
    number = prompt(`Number?`);
    if(number!==null){
        number = +number;
        sum = sum + number;
        i++;
    }    else {break;}
}
arithmeticMean = sum/i;
alert(arithmeticMean);

// 2. Пользователь вводит два числа n и m, с помощью цикла вывести квадраты всех
// чисел от n до m.
// Например:
// Ввели число 2
// Ввели число 5
// выводим: 2*2 потом 3*3 потом 4*4 потом 5*5

// let n = +prompt(`min namber`);
// let m = +prompt(`max namber`);
// let cuadr;
// for(;n<=m;n++){
//     cuadr= n*n;
//     console.log(cuadr);
// }

// 3. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.
// Мое решение 
// let i = 0;
// let lastNumber = 0;
// let nextNumber = 1;
// while(i<5){
//     if(lastNumber>nextNumber){
//         alert("ERROR");
//         break;
//     }
//     lastNumber = +prompt(`Number?`);
//     i++;
//     if(i>=5){
//         break;
//     }
//     nextNumber = +prompt(`Number?`);
//     i++;
// }

// Правильное решение
// let currentNum;
// let previousNum;

// for (let i = 0; i < 5; i++) {
//     if (previousNum === undefined) {
//         previousNum = +prompt('enter a num');
//         continue;
//     }

//     currentNum = +prompt('enter a num bigger than previous');

//     if (currentNum > previousNum) {
//         previousNum = currentNum;
//     } else {
//         alert('ERROR');
//         break;
//     }
// }


// 4. Написать программу-заику. Пользователь вводит число. Вывести количество "за"
// (в слове "заика") равное этому числу.
// Например:
// Вводим 3
// Программа выводит "зазазаика"
// Вводим 5
// Программа выводит "зазазазазаика"

// let number = +prompt(`how many za?`);
// let sum = "";
// for(let i =0;i<number;i++){
//     sum = 'za' + sum;
// }
// alert(`${sum}ika`);



