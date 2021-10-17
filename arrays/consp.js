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

// Задание 4
let arr = [1, 2, 3, 4, 5, 4, 1, 2,3, 4, 2, 3];

function BubbleSort(arr)       // A - массив, который нужно
{                            // отсортировать по возрастанию.
    var n = arr.length;
    for (var i = 0; i < n-1; i++)
     { for (var j = 0; j < n-1-i; j++)
        { if (arr[j+1] < arr[j])
           { var t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t; }
        }
     }                     
    return arr;    
}
console.log(arr);
