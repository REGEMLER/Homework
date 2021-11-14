// 1. Напишите функцию, которая вычисляет длину линий в
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
// function Line(startX,endX,startY,endY){
//     this.point1 = {
//         startX: startX,
//         startY: startY,
//     };
//     this.point2 = {
//         endX: endX,
//         endY: endY,
//     };
// }
// Line.prototype.countLength = function(){
//     let lineLength = Math.sqrt((this.point2.endX - this.point1.startX)**2 + (this.point2.endY - this.point1.startY)**2); 
//     return lineLength;
// };
// let line1 = new Line(4,7,8,10);
// console.log(line1);
// let line2 = new Line(8,29,16,19);
// console.log(line2);
// let line3 = new Line(14,17,5,9);
// console.log(line3);
    
// const length1 = line1.countLength();
// console.log(length1);
// const length2 = line2.countLength();
// console.log(length2);
// const length3 = line3.countLength();
// console.log(length3);
// function threeAng(line1,line2,line3){
//     if(line1<line2+line3 && line2<line1+line3 && line3<line1+line2){
//         return alert(`It is possible to build a triangle`);
//     } return alert(`It is NOT possible to build a triangle`);
// }
// threeAng(length1,length2,length3);

// 2. Создать конструктор Car, который принимает параметры
// model, color, price. Конструктор должен возвращать объект в
// котором присутствуют вышеназванные поля со значениями.
// Каждый представитель класса Car должен обладать методом
// run() который выводит сообщение вида : MODEL + “ ” +
// COLOR + ” is running”.
// function Car(model, color, price){
//     this.model = model;
//     this.color = color;
//     this.price = price;
// }
// Car.prototype.run = function(){
//     console.log(`${this.model.toUpperCase()} ${this.color.toUpperCase()} is running`)
// }
// let car1 = new Car(`Opel`, `Blue`, 300);
// let car2 = new Car(`Audi`, `White`, 600);
// let car3 = new Car(`Mersedes`, `Black`, 1000);
// car3.run();

// 3. Создать конструктор Book, с помощью этого конструктора
// создать массив из 8 книг (объектов). Каждая книга должна
// представлять из себя объект, в котором есть три поля:
// author, bookName, pageAmount.
// Создать функцию getBiggerBook(), которая принимает
// массив книг и возвращает ОДНУ книгу с наибольшим
// количеством страниц
function Book(author, bookName, pageAmount){
    this.author = author;
    this.bookName = bookName;
    this.pageAmount = pageAmount;
}
let book1 = new Book(`Пушкин`, `Евгений Онегин`, 180);
let book2 = new Book(`Толстой`, `Война и мир`, 2000);
let book3 = new Book(`Достоевкий`, `Преступление и наказание`, 500);
let book4 = new Book(`Стивенсон`, `Остров сокровищ`, 300);
let book5 = new Book(`Лондон`, `Мартин Иден`, 700);
let book6 = new Book(`Толкиен`, `Властелин колец`, 1200);
let book7 = new Book(`Дюма`, `Три мушкетера`, 600);
let book8 = new Book(`Тарле`, `Наполеон`, 800);
let arrBook = [book1,  book2,  book3,  book4,  book5,  book6,  book7,  book8];
console.log(arrBook);
function getBiggerBook() {
    let obj =arrBook[0];
    let max = arrBook[0].pageAmount;
    for(let i = 0; i<arrBook.length; i++){
        if(max<arrBook[i].pageAmount){
         max = arrBook[i].pageAmount;
         obj = arrBook[i];
        }
    }
    return obj;
}
console.log(getBiggerBook());

// 4. Создать класс Timer, инстанс которого запускает таймер и выводит в консоль
// прошедшее время в секундах (1 2 3 4 5 и тд)
// инстанс должен обладать методами .start() .stop() которые запускают и останавливают таймер
// а также методом .reset() который сбрасывает таймер на 0.
// С помощью Timer вы должны создать несколько таймеров и убедится в том, что они 
// работают независимо друг от друга.
// останавливайте таймер через некоторое время после запуска с помощью setTimeout()

// function Timer () {
//     this.time = 0;
//     this.timerId = null;
// }

// Timer.prototype.start = function () {
//     this.timerId = setInterval(() => {
//         console.log(this.time++);
//     },1000);
// };

// Timer.prototype.stop = function () {
//     clearInterval(this.timerId);
// };

// Timer.prototype.reset = function () {
//     this.time = 0;
// };

// const timer = new Timer();

// timer.start();

// setTimeout(()=>{
//     timer.reset();
// },3000);

// setTimeout(()=>{
//     timer.stop();
// }, 6000);



// Побочное 
// let dw = {};
// daniel = {fn: `Dan`};
// jason = {ky: `jason`};
// ju = {ajaj: `hol`}
// dw[daniel] =123;
// dw[jason] = 456;
// dw[ju] = 555
// console.log(dw[daniel]);

// function foo(a){
//     delete a;
//     return a;
// }
// console.log(foo(5))