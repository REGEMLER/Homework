// 1. Напишите функцию isEmptyObj(), которая проверяет пуст
// объект или нет. Если объект пуст, функция вернет true, если в
// объекте есть хотя бы одно поле, функция вернет false.
// let full = {
//     name: 12,
//     ten: 23,
//     rom: 34,
//     }
// let empty = {
// };
// function isEmptyObj(obj){
//     let checkLength = Object.keys(obj);
//     if(checkLength.length===0){
//          return false;
//     } return true;
//     }
// alert(isEmptyObj(empty));

// 2.Создайте объект shtuchki. Добавьте в объект поля shtuchka1:
// 200, shtuchka2: 521, shtuchka3: 113, shtuchka4: 314, shtuchka5:
// 871. Напишите программу, которая выведет на экран
// наибольшую штучку (программа должна быть универсальна
// и выводить наибольшую штучку даже если поменяются
// значения)
// let things = {
//     thing1: 200,
//     thing2: 521,
//     thing3: 113,
//     thing4: 314,
//     thing5: 871,
//     }
// let max = things.thing1;
// for(let key in things){
//     if(max<things[key]){
//         max = things[key];
//         }
// }
// alert(max);

// 3. Дан объект:
// student { math: 5, biology: 3, language: 2, isOboltus: ‘yes’ }.
// Напишите программу, которая умножит все ЧИСЛОВЫЕ (и
// только числовые) значения на 2 и перезапишет каждое
// свойство объекта (числового типа).
// let student = {
//     math: 5,
//     biology: 3,
//     language: 2,
//     isOboltus: `yes`,
//     }
// let key;
// for(key in student){
//     if(typeof(student[key])=== `number`){
//         student[key] *= 2;
//     }
// }
// console.log(student);
// const arr = [
//         {a: 2, b: 1},
//         {a: 5, b: 12},
//         {a: 95, b: 7}
//       ]
// Используя ТОЛЬКО методы массивов (циклы запрещены):
// 1. Вывести в консоль 'its valid', если во всех объектах поле a > b, вывести 'its invalid' если хотя бы в одном объекте a<=b
// const arr = [
// 	{a:2, b:1},
// 	{a:5, b: 12},
// 	{a:95, b:7}
// ];
// const answer = arr.map(function(item){
// 	if(item.a>item.b){
// 		return true;
// 	} return false;
// })
// const checkAnswer = answer.every(item => item===true)
// if(checkAnswer===true){
// 	alert(`It is valid`);
// } else{	alert(`It is invalid`);}

//2. На основе массива arr, создать массив объектов у которых поле b возведено в квадрат
const arr = [
	{a:2, b:1},
	{a:5, b: 12},
	{a:95, b:7}
];
const arr2 =arr.map(function(item){
	item.a = item.a;
	item.b = item.b*item.b;
	return item = {a:item.a, b:item.b}

})
console.log(arr);
console.log(arr2);

// 3. С помощью метода/методов взять все поля a и b и последовательно поместить их в массив
// пример получившегося массива: [2,1,5,12,95,7]
// можно делать копию
// const arr = [
// 	{a:2, b:1},
// 	{a:5, b: 12},
// 	{a:95, b:7}
// ];
// let arrNew = arr.map(item => {
//     return item = [item.a, item.b];
// });
// let result = arrNew.flat();
// console.log(result);
