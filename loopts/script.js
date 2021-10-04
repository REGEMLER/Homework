// Задание 1
// let n = +prompt("input negative number");
// while(n<=0){
// console.log(n);
// ++n
// }
// Задание 2
// let i;
// i=9;
// while(i<100){
// ++i
// if(i%4==0 && i%6!=0){
// console.log(i);
// }
// }
// Задание 3
let countNum = +prompt("How much numbers?");
let counerPositive = 0;
let counterNegative = 0;
let counterNull = 0;
while(countNum--){
let num = +prompt("press number");
if(num>0){++counerPositive;
} else if (num<0){
++counterNegative;
} else {++counterNull} 
}
console.log(`Positive numbers: ${counerPositive}`);
console.log(`Тegative numbers: ${counterNegative}`);
console.log(`Nulls: ${counterNull}`);