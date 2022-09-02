// 1. Создать функцию, которая принимает массив и callback. Функция
// должна каждый элемент массива обрабатывать callback’ом.

function helloArr(i){
    return `Hello + ${i}`;
   }
   function arrPlus(i){
    return i + 1;	
   }
   function callArr(arr, callBack){
       let result = [];
       for(let i = 0; i<arr.length;i++){
           result.push(callBack(arr[i]));
       }
       return result;
   }
   let arr1 = [1, 3, 45, 34, 22];
   console.log(callArr(arr1,arrPlus));
   
   // 2. Создать функцию sumTo, которая принимает два числа и callback.
   // Задача функции складывать 2 числа, а задача callback’a заставлять
   // функцию sumTo возвращать результат в виде числа, строки или
   // логического типа данных.
   
   // function string(n){
   // 	n = String(n);
   // 	console.log(n)
   // 	console.log(typeof(n))
   // }
   // function numb(n){
   // 	n = Number(n);
   // 	console.log(n)
   // 	console.log(typeof(n))
   // }
   // function bool(n){
   // 	n = Boolean(n);
   // 	console.log(n)
   // 	console.log(typeof(n))
   // }
   // function sumTo(a,b,convert){
   // 	let summ = a+b;
   // 	return convert(summ);
   // }
   // sumTo(5,7,bool)
   
   // 3. Создать функцию checkLogin, которая принимает 4 параметра. 1
   // параметр - это логин, введенный пользователем, 2 –
   // правильный логин, 3 – callback, который вызовется если логин
   // верный, 4 – callback, который вызовется если логин ложный.
   // 	function trueCall(){
   // 		alert("Welcome!");
   // 	}
   // 	function falseCall(){
   // 		alert("Go away");
   // 	}
   // function checkLogin(userLogin,trueLogin,a,b){
   // 	if(userLogin===trueLogin){
   // 		a();
   // 	} else{
   // 		b();
   // 	}
   // }
   // let userName = prompt("What is your login?");
   // let name = "Troll";
   // checkLogin(userName, name,trueCall,falseCall);
   
   // 4. Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
   // Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null).
   // function checkNumber(num){
   // 	if(typeof(num)!=="number"){
   // 		return alert("This is not a number");
   // 	}
   // }
   // function checkLessThanOne(num){
   // 	if(num<1){
   // 		return alert("Number cannot be less than 1");
   // 	}
   // }
   // function checkNull(num){
   // 	if(num===null){
   // 		return alert("You refused to enter a number");
   // 	}
   // }
   // function sumTo(number){
   //     checkNumber(number);
   // 	checkLessThanOne(number);
   // 	checkNull(number);
   // 	let sum = 0;
   // 	for(let i = 0;i<=number;i++){
   // 		sum +=i;
   // 	}
   // 	return sum;
   // } 
   // alert(sumTo(12));
   
   // 5. Написать программу, которая определяет количество
   // положительных, отрицательных чисел и нулей. В
   // начале программы, пользователь самостоятельно
   // задает какое количество чисел будет вводить, затем
   // вводит сами числа.
   // Пример вывода:
   // «Положительных: 2 шт.
   // Отрицательных: 5 шт.
   // Нулей: 3 шт.»
   
   // let countNegative = 0;
   // let countPositive = 0;
   // let countNull = 0;
   // function showNulls(num){
   // 	if(num===0){
   // 		return countNull++;
   // 	}
   // }
   // function showPositives(num){
   // 	if(num>0){
   // 		return countPositive++;
   // 	}
   // }
   // function showNegatives(num){
   // 	if(num<0){
   // 		return countNegative++;
   // 	}
   // }
   
   // function count(){
   // 	let n = +prompt("How many numbers do you want?");
   // 	for(let i = 0;i<n;i++){
   // 		let number = +prompt("Press number");
   // 		showNulls(number);
   // 		showPositives(number);
   // 		showNegatives(number);
   // 		}
   // 	alert(`Positive numbers: ${countPositive}, Negative numbers: ${countNegative}, Nulles: ${countNull}`)
   // 	}
   // count();
   
   // 6. Написать программу, которая просит ввести с
   // клавиатуры 10 пар чисел, сравнивает эти числа и
   // выводит большие из них. (Используйте массив)
   
   // Задание 6 Вариант 1
   // let biggests = [];
   // function toPush(a,b,arr){
   // 	if(a>b){
   // 		arr.push(a)
   // 	} else{
   // 		arr.push(a)
   // 	}
   // }
   // function compare(){
   // 	for(i=0;i<10;i++){
   // 		let num1 = +prompt("Press 1 number");
   // 		let num2 = +prompt("Press 2 number");
   // 		toPush(num1,num2,biggests);
   // 	}
   // 	return biggests;
   // }
   // console.log(compare());
   
   // Задание 6 Вариант 2
   // let numbers = [];
   // function selectBig(a,b,arr){
   // 	if(a>b){
   // 		arr.push(a)
   // 	} else{
   // 		arr.push(b)
   // 	}
   // }
   // function selectSmall(a,b,arr){
   // 	if(a<b){
   // 		arr.push(a)
   // 	} else{
   // 		arr.push(b)
   // 	}
   // }
   // function toInput(n,func){
   // 	for(i=0;i<n;i++){
   // 	let num1 = +prompt("Press 1 number");
   // 	let num2 = +prompt("Press 2 number");
   // 	func(num1,num2, numbers)
   // 	}
   // }
   // function compare(){
   // 	toInput(10,selectSmall)
   // 	return numbers;
   // }
   // console.log(compare());
   
   // 7. Написать программу, которая выводит на экран
   // двузначные числа, которые делятся на 4, но не
   // делятся на 6.
   
   // let arr1 = [];
   // function check(number,arr){
   // 	if(number%4===0&& number%6>0){
   // 	arr.push(number);
   // 	}
   // }
   //  function func(n,arr,f1){
   // 	for(let i = 0;i<n;i++){
   // 		f1(i,arr1);
   // 	}
   // 	return arr;
   //  }
   //  console.log( func(100,arr1,check));
   
   //  8. Написать программу, которая выводит среднее
   // арифметическое n чисел введенных пользователем.
   // Ввод чисел прекращается
   // тогда, когда нажали «отмена», после чего выводится
   // среднее арифметическое.
   
   // let sum = 0;
   // let counter = 0;
   // function toSum(n){
   //  sum += n;
   // }
   // function toCount(){
   // 	return counter++;
   // }
   // function arifm(a,b){
   // 	return a/b;
   // }
   // function arithmeticMean(){
   // 	while(true){
   // 		number = prompt(`number?`);
   // 		if(number===null){
   // 			break;
   // 		} else {
   // 		number = Number(number);
   // 		toSum(number);
   // 		toCount();
   // 		}
   // 	}
   // 	alert(arifm(sum,counter));
   // }
   // arithmeticMean();
   // alert(sum);
   // alert(counter);


// CB/////////////////////
// function italian (userName) {
//     console.log(`Ciao ${userName}`);
// }

// function english (userName) {
//     console.log(`Hello ${userName}`);
// }

// function russian (userName) {
//     console.log(`Привет ${userName}`);
// }

// function sayHello(userName, language) {
//     const upperUserName = userName.toUpperCase();
//     language(upperUserName);
// }

// sayHello('joHn', italian);

// function  switcherMaker() {
//     let n = false;
//     return function(){
//         console.log(n = !n);
//     }
// }

// const switcher = switcherMaker();
// switcher();
// switcher();
// switcher();
// switcher();
///////////////////////////////////

// function countMaker() {
//     let n = 0;
//     return function(a){
//         if(a){
//             return console.log(n +=a); 
//         }
//          return console.log(n++);
//     }
// }

// const count = countMaker();
// count();
// count();
// count();
// count();
// count();
// count(50);
// count();
// count();
// Задача на свойство arguments
function foo(){
    let sum = 0;
    for(let i =0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum/arguments.length;
}
alert(foo(11,45,565,233));


// Лекция от 27.10.2021
// FP
// partial application
// curry
// r,s, arr, def val
// setTimeout, setInterval
// rest, spread


// let phrase = "Hello";

// function sum (a,b,c) {
//     return a + b + c;
// }

// function sum (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// const tmp = sum(2)(3)

// tmp(5);


// функция принимает n аргументов и выводит их среднее арифметическое

// function avg () {
//     let args = [];

//     for (let i = 0; i < arguments.length; i++) {
//         args.push(arguments[i]);
//     }

//     console.log(args);
// }
// console.log(avg(2,3,4,3,4,5,342,4,23,423,4));

// arrow functions

// function sum (a,b) {
//     return a + b;
// }

// const pow = (a) => a**2;

// console.log(pow(3));

// function sum (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// const sum = a => b => c => a + b + c;

// no arguments
// const sum = () => {
//     console.log(arguments);
// };

// const foo = cb => cb(4) / 2;

// console.log(foo(a => a**2));


// function foo (cb) {
//     return cb(4) / 2;
// }

// console.log(foo(function (a) { return a**2}));








//Closure 

// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).
// function makerToggleMe(){
// 	let a = true;
// 	return function(){
// 		return alert(a = !a); 
// 	}
// }
// const toggleMe = makerToggleMe();
// toggleMe();
// toggleMe();
// toggleMe();
// toggleMe();
// toggleMe();

// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 10, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 10, то функция считает
// количество от этого числа до 0.
// Решение джуна
function makerFuncCounter(){
	let counter = 0;
	let toggler = true;
	return function(i){
        if(i){
            counter = i;
            toggler = (i<=10);
            return console.log(counter);
        }
        if(counter===0||toggler){
            toggler = true;
            return console.log(++counter);
        } else{
             return console.log(--counter);
        }
}
}
const funcCounter = makerFuncCounter();
funcCounter();
funcCounter();
funcCounter(8);
funcCounter();
funcCounter();
funcCounter(11);
funcCounter();
funcCounter();
funcCounter();
funcCounter();
funcCounter();
funcCounter();
funcCounter();
funcCounter();
funcCounter();
funcCounter();
funcCounter();
funcCounter();
  
// Правильное решение 
// function counterMaker () {
//     let counter = 0;
//     let ascend = true;
//     return (val) => {
//         if (val && val === 0) {
//             counter = val;
//             ascend = !(val >= 10);
//             return counter;
//         }
//         if (ascend) {
//             return ++counter;
//         } 
//         return --counter;      
//     };
// }
// const counter = counterMaker();
// console.log(counter());
// console.log(counter());
// console.log(counter(9));
// console.log(counter());
// console.log(counter());
// console.log(counter(11));
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// 3. Создать функцию classNameEditor(), которая
// принимает строку с названием класса и добавляет
// его в класс, если вторым параметром было
// передано true, если вторым параметром было
// передано false, то функция пытается удалить из
// класса переданное имя. Если удаление не было
// совершено, то просто вернуть строку с названием
// класса. Функция должна возвращать текущее
// название класса.
// function makerClassName(){
// 	return function (name,toggler){
// 		let newClass = prompt("WHat is the name of your class");
// 		let klass;
// 		if(toggler == true){
// 		  klass = newClass;
// 		} if(toggler == false){
// 			klass = name;
// 		}
// 		return alert(klass); 
// 	}
// }
// const classNameEditor = makerClassName();
// classNameEditor(`Hon`,true);
// classNameEditor(`gok`,false);
// classNameEditor(`deer`,true);

// Правильное решение 
// function classNameEditorMaker () {
//     let className = '';
//     return function (val, isAdding) {
//         if (val && isAdding) {
//             className += ' ' + val;
//         }
//         if (val && isAdding === false) {
//             const classNameArr = className.split(' ');
//             const indexToDelete = className.indexOf(val);
//             if(indexToDelete >= 0) {
//                 classNameArr.splice(indexToDelete, 1);
//                 className = classNameArr.join(' ');
//             }
//         }
//         return className.trim();
//     };
// }
// const classNameEd = classNameEditorMaker();
// console.log(classNameEd('test', true));
// console.log(classNameEd('smth', true));
// console.log(classNameEd('adasdsd', false));
// console.log(classNameEd('test', false));





