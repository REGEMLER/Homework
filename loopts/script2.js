// 1. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

// 2. Пользователь вводит два числа n и m, с помощью цикла вывести квадраты всех
// чисел от n до m.
// Например:
// Ввели число 2
// Ввели число 5
// выводим: 2*2 потом 3*3 потом 4*4 потом 5*5

// 3. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.

// 4. Написать программу-заику. Пользователь вводит число. Вывести количество "за"
// (в слове "заика") равное этому числу.
// Например:
// Вводим 3
// Программа выводит "зазазаика"
// Вводим 5
// Программа выводит "зазазазазаика"
// Задание 1
// let sum = 0;
// let number=0;
// let arithmeticMean;
// let i;
// for(i = 0;number!==null;++i){
// number = prompt(`Number?`);
// if(number!==null){number = +number
// }
// sum = sum + number;
// }
// i--;
// arithmeticMean = sum/i;
// alert(arithmeticMean);

// Решение 2
// let sum = 0;
// let number=0;
// let arithmeticMean;
// let i=0;
// while(true){
// number = prompt(`Number?`);
// if(number!==null){number = +number;
// sum = sum + number;
// i++;
// } else {break;}
// }
// arithmeticMean = sum/i;
// alert(arithmeticMean);

// // Задание 2
// let n = +prompt(`min namber`);
// let m = +prompt(`max namber`);
// let cuadr;
// for(;n<=m;n++){
// cuadr= n*n;
// console.log(cuadr);
// }

// // Задание 3
let i = 0;
let lastNumber = 0;
let nextNumber = 1;
while(i<5){
if(lastNumber>nextNumber){
alert("ERROR");
break;
}
lastNumber = +prompt(`Number?`);
i++;
if(i>=5){
break;
}
nextNumber = +prompt(`Number?`);
i++;
}

// Решение от препода
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

// // Задание 4
// let number = +prompt(`how many za?`);
// let sum = "";
// for(let i =0;i<number;i++){
// sum = 'za' + sum;
// }
// alert(`${sum}ika`);


