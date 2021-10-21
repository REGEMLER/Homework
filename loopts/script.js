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