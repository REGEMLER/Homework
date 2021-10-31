// Задание 1
// let arr = [12,23,56,67,2,43,12,53,45,10];
// let sum = 0;
// for(let i = 0;i<arr.length;i++){
//     sum = sum + arr[i];
// }
// alert(sum);
// Задание 2
// let arr = [12,23,56,67,2,43,12,53,45,10];
// let arifmet; 
// let sum = 0;
// let i;
// let n =0;
// for(i = 0;i<arr.length;i++){
//     if(i%2===0){
//             sum = sum + arr[i];
//             n++;
//     } 
// }
// arifmet = sum/n;
// alert(arifmet);

// Задание от 17.10.21 
// Задание 1
// const arr = [1, 2, 3, 4, 5, 4, 1, 2,3, 4, 2, 3];
// let  result = [];
// for(let i = 0; i<arr.length;i++){
//     if (arr.includes(arr[i], i + 1) && !result.includes(arr[i])) {
//         result.push(arr[i]);
//      }
// }
// console.log(result);

// Задание 2
// const arr = [1, 2, 3, 4, 5, 4, 1, 2,3, 4, 2, 3];
// let max = arr[0];
// for(let i = 1; i<arr.length;i++){
// if(max<arr[i]){
// max = arr[i];
// }
// }
// alert(max);

// Задание 3
// const arr = [1, 2, 3, 4, 5, 4, 1, 2,3, 4, 2, 3];
// let sum = 0;
// for(let i = 0; i<arr.length;i++){
//     if(arr[i]%2===0){
//         sum +=arr[i];
//     }
// }
// alert(sum);


Лекция 

// for 
// methods


// .push();
// .pop();
// .shift();
// .unshift();
// .concat();
// .slice();
// .splice();
// .includes();
// .indexOf();
// .lastIndexOf();
// .join();

// .split();

// const arr = ['one',false,'three',23, 'four','five', 'six'];

// 1. создать любой массив из 10 чисел, вывести в консоль сумму всех
// элементов массива


// let sum = 0;

// for (let i = 0; i < massiv.length; i++) {
//     sum += massiv[i];
// }

// console.log(sum);


// 2. найти среднее арифметическое элементов массива которые стоят
// на четных местах

// let sum = 0;
// let counter = 0;

// for (let i = 0; i < massiv.length; i++) {
//     if (i%2 === 0) {
//         counter++;
//         sum += massiv[i];
//     }
// }

// console.log( sum/counter );



// 3. создать массив элементы которого равны элементам исходного 
// массива (созаем его сами), но с противоположными знаками

const massiv = [2,-32, 3, -12, -65, 3, -46, 86];
const result = [];

for (let i=0; i < massiv.length; i++) {
    result.push(-massiv[i]);

    // result[i] = -massiv[i];
}

console.log(result);