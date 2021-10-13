// Задание 1
// let arr = [12,23,56,67,2,43,12,53,45,10];
// let sum = 0;
// for(let i = 0;i<arr.length;i++){
//     sum = sum + arr[i];
// }
// alert(sum);
// Задание 2
let arr = [12,23,56,67,2,43,12,53,45,10];
let arifmet; 
let sum = 0;
let i;
let n =0;
for(i = 0;i<arr.length;i++){
    if(i%2===0){
            sum = sum + arr[i];
            n++;
    } 
}
arifmet = sum/n;
alert(arifmet);
