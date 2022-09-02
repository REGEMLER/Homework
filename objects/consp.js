// const sizes = [34,51,64];
// const person = {
//     name: 'John',  
//     age: 23,
//     size: {
//         height: 23,
//         width: 41
//     },
//     stack: ['HTML', 'CSS', 'JS'],
// };

// // person.name = 'Valerchik';
// // person.city = 'Gomel';

// console.log(person);

// const pupyrky = {
//     blue: 234,
//     red: 214,
//     orange: 23,
//     purple: 124,
// }

// let sum = 0;

// for(key in pupyrky){
//     sum += pupyrky[key];
// }
// alert(sum);
// const sum = Object.keys(pupyrki).reduce((sum, pup) => sum + pupyrki[pup] ,0);
// console.log(sum);

// let sum = 0;

// for (let key in pupyrki) {
//     sum += pupyrki[key];
// }
// function run(where,speed){
//     console.log(this);
//    console.log(`${this.name} run to ${where} with speed ${speed}`) 
// }
// const person = {
//     name: `John`,
//     age: 23,
//     size: {
//         width: 100,
//         height: 300,
//     },
//     run
// }
// setTimeout(person.run.bind(person), 2000)


/////////////////////////////
// function eat () {
//     const that = this;
//     function eatInner () {
//         console.log(that);
//     }
//     eatInner();
// }

// eat.call(person);
/////////////////////////////////
// function eat () {
//     function eatInner () {
//         console.log(this);
//     }
//     const eatInnerArrow = () => {
//         console.log(this);
//     }
//     eatInner();
//     eatInnerArrow();
// }
// eat.call(person);

//////////Лекция от 7 ноября 

function showStack(){
    this.stack.forEach(item => console.log(item))
}

 const person = {
     name: `John`,
     age: 23,
     stack: [`HTML`, `CSS`, `JS`],
     run: function(){
         console.log(`${this.name} runs`);
     },
     showStack
 };

 const person2 = {
    name: `David`,
    age: 24,
    stack: [`C++`, `JAVA`, `SQL`],
    showStack
 }
 person.showStack();
 person2.showStack();

// let slowShowStack1 = person.showStack.bind(person);
// let slowShowStack2 = person2.showStack.bind(person2);
// setTimeout(slowShowStack1,5000);
// setTimeout(slowShowStack2,5000);

// Правильное решение 
// function showStack () {
//     this.stack.forEach((item) => {
//         console.log(item);
//     });    
// }

// const person = {
//     name: 'John',
//     age: 23,
//     stack: ['HTML', 'CSS', 'JS'],
//     showStack
// };

// const person2 = {
//     name:'David',
//     age: 24,
//     stack: ['C++', 'JAVA', 'SQL'],
//     showStack,
//     run: function () {
//         console.log(`${this.name} runs`);
//     }
// };

// // person.showStack()
// // person2.showStack()

// setTimeout(() => {
//     person.showStack();
// },1000); // person showStack
// setTimeout(person2.showStack.bind(person2),1000 ); // person2 showStack

// rest, spread
// arrays, object destucturization

// spread, rest

// const person = {
//     name: 'John',
//     age: 23,
//     stack: ['HTML', 'CSS', 'JS']
// };

// const copy = [...arr, false , ...arr2, 'asdasd', false];
// const programmer = {
//     ...person,
//     isProgrammer: true,
//     stack: [...person.stack]
// };

// programmer.stack.push('blabla');

// console.log(person);

// const foo = (muha, ...kotlety) => {
//     console.log(muha);
// };

// .call(this, arg1, arg2, arg3)
// .splice(2, 1, 'asd', 'asdasd', 'zxcxzc', 'asdasd')

// foo(person);

// destucturization

const person = {
    age: 23,
    name: 'John',
    stack: ['HTML', 'CSS', 'JS']
};

const {name: imya , age: vozrast, stack} = person;
// const imya = person.name;
// const vozrast = person.age;
// const age = person.age;

console.log(vozrast)



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
	return item = {a:item.a, b:item.b**2}

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




// const arr = [2,3,12,312,3213,12,3];

// let one = arr[0];
// const two = arr[1];
// let [zero, one, two, ...ostalnoe] = arr; // [2,3,12,312,3213,12,3]


// 1. Дан объект:
// var person = {
// name:’Pablo Picasso’
// }
// Создайте функцию addName(obj, name), которая
// добавляет в список имя name, но только если его там еще
// нет:
// addName(person, 'Garcia');
// // person.name=>'Pablo Picasso Garcia'
// addName(person, 'Pablo');
// // без изменений (имя уже существует)
// addName(person, 'Rodrigez');
// // person.name=>'Pablo Picasso Garcia Rodrigez'
let person = {
	name: "Pablo Picasso"
}
function addName(obj, lastName){
	if(obj.name.includes(lastName)){
		return obj.name;
	} 	 obj.name = obj.name + ` ${lastName}`;
}
addName(person, `Garcia`);
console.log(person);
addName(person, `Juan`);
console.log(person);

// 2. Дан объект:
// var person = {
// name: ‘Pablo Picasso Garcia Rodrigez'’
// }
// Создайте функцию removeName(obj, name), которая
// удаляет из имени слово name, но только если оно там есть:
removeName(person, 'Garcia');
// person.name=>'Pablo Picasso Rodrigez '
removeName(person, 'Akakij');
// без изменений (такого имени нет)
removeName(person, 'Rodrigez');
// obj.name=>'Pablo Picasso'
let person = {
	name: "Pablo Picasso Garcia Rodrigez"
}
function addName(obj, lastName){
	if(obj.name.includes(lastName)){
		const nameArr = obj.name.split(` `);
		const indexDelete = nameArr.indexOf(lastName);
		nameArr.splice(indexDelete,1);
		return obj.name = nameArr.join(` `);
	} 	 obj.name = obj.name;
}
addName(person, `Garcia`);
console.log(person);
addName(person, `Juan`);
console.log(person);

// 3. Существует массив(длина: 4) футболистов (каждый
// футболист – это объект). Напишите функцию
// addAbility(array), которая добавляет к каждому
// объекту массива функцию run(), при запуске которой
// выводится сообщение (“ИМЯ_ФУТБОЛИСТА is
// running”)
let team = [
    player1 = {
    name: `John`
    },
    player2 = {
    name: `Abraham`
    },
    player3 = {
    name: `Abdula`
    },
    player4 = {
    name: `Pedro`
    },
]
function addAbility(arr){
    for(let i = 0; i<arr.length;i++){
        arr[i].run = function (){
        console.log(`${this.name} is running`);
    }
    }
}
addAbility(team);
team[2].run();

// 4. Напишите функцию, которая вычисляет длину линий в
// стандартной двухмерной системе координат. Координаты
// начала и конца линий должны храниться в объектах.
//  Создайте три линии.
//  Вычислите их длины с помощью функции
//  Проверьте, могут ли три линии сформировать
// треугольник
// Помните:
// Длину линии можно найти по теореме Пифагора.
// Стороны могут сформировать треугольник если длина
// каждой стороны треугольника должны быть меньше суммы
// длин остальных сторон.
let line1 = {
    start: {
        X: 15,
        Y: 3
    },
    end:{
        X: 5,
         Y: 7
    }
};
let line2 = {
    start: {
        X: -15,
        Y: 3
    },
    end:{
        X: -5,
        Y: 7
    }
};
let line3 = {
    start: {
        X: -15,
        Y: 3
    },
    end:{
        X: 15,
        Y: 3
    }
};
function countLength(){
    let lineLength = Math.sqrt((this.end.X - this.start.X)**2 + (this.end.Y - this.start.Y)**2); 
    return lineLength;
};
const length1 = countLength.call(line1);
const length2 = countLength.call(line2);
const length3 = countLength.call(line3);
function threeAng(line1,line2,line3){
    if(line1<line2+line3 && line2<line1+line3 && line3<line1+line2){
        return alert(`It is possible to build a triangle`);
    } return alert(`It is NOT possible to build a triangle`);
}
threeAng(length1,length2,length3);
