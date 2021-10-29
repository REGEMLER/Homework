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
// функцию число меньше 100, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 100, то функция считает
// количество от этого числа до 0.
// function makerFuncCounter(){
// 	let counter = 0;
// 	let toggler = true;
// 	return function(i){
// 	if(i && i<100){
// 		counter = i;
// 		toggler = true;
// 		return console.log(++counter);
// 	} if(i && i>100){
// 			counter = i;
// 			toggler = false; 
// 			return console.log(--counter);
// 	} if(counter===0 && toggler ===false){
// 		toggler = true;
// 	    } if(counter<=100 && toggler ===false){
// 		return console.log(--counter);
// 		} if(counter<=100 && toggler ===true){
// 		return console.log(++counter);
// 		} if(counter>=100 && toggler ===false){
// 		return console.log(--counter);
// 		} if(counter>=100 && toggler ===true){
// 		return console.log(++counter);
// 	} 
// }
// }
// const funcCounter = makerFuncCounter();
// funcCounter();
// funcCounter();
// funcCounter(99);
// funcCounter();
// funcCounter();
// funcCounter(7);
// funcCounter();
// funcCounter(11);
// funcCounter();
// funcCounter();

// 3. Создать функцию classNameEditor(), которая
// принимает строку с названием класса и добавляет
// его в класс, если вторым параметром было
// передано true, если вторым параметром было
// передано false, то функция пытается удалить из
// класса переданное имя. Если удаление не было
// совершено, то просто вернуть строку с названием
// класса. Функция должна возвращать текущее
// название класса.
function makerClassName(){
	return function (name,toggler){
		let newClass = prompt("WHat is the name of your class");
		let klass;
		if(toggler == true){
		  klass = newClass;
		} if(toggler == false){
			klass = name;
		}
		return alert(klass); 
	}
}
const classNameEditor = makerClassName();
classNameEditor(`Hon`,true);
classNameEditor(`gok`,false);
classNameEditor(`deer`,true);