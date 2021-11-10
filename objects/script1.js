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
