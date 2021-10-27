// 1. Создать функцию, которая принимает массив и callback. Функция
// должна каждый элемент массива обрабатывать callback’ом.

<<<<<<< HEAD
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
=======
// function helloElement(i){
// 	return i = `hello ${i}`
// }
// function elementPlus(i){
// 	return ++i;
// }
// function callArr(arr, callBack){
// 	let result = [];
// 	for(let i=0;i<arr.length;i++){	 
// 		result.push(callBack(arr[i]))
// 	}
// 	console.log(result);
// 	return result;
// }
// let arr1 = [1, 3, 45, 34, 22];
// callArr(arr1,helloElement);
>>>>>>> 774fe4997e93d2e934c4e96e55189d86b7a73b26

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
<<<<<<< HEAD
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
=======

// function trueCall(){
// 	return "Welcome!";
// }
// function falseCall(){
// 	return "Go away!";
// }

// function checkLogin(userLogin,trueLogin,call1,call2){
// 	if(userLogin===trueLogin){
// 		alert(call1());
// 	} else{
// 		alert(call2());
// 	}
// }
// let userName = prompt("What is your login?");
// let login = "Troll";
// checkLogin(userName, login,trueCall,falseCall);
>>>>>>> 774fe4997e93d2e934c4e96e55189d86b7a73b26

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

<<<<<<< HEAD
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
=======
>>>>>>> 774fe4997e93d2e934c4e96e55189d86b7a73b26
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