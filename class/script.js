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

// 2. Создать конструктор Car, который принимает параметры
// model, color, price. Конструктор должен возвращать объект в
// котором присутствуют вышеназванные поля со значениями.
// Каждый представитель класса Car должен обладать методом
// run() который выводит сообщение вида : MODEL + “ ” +
// COLOR + ” is running”.
function Car(model, color, price){
    this.model = model;
    this.color = color;
    this.price = price;
}
Car.prototype.run = function(){
    console.log(`${this.model.toUpperCase()} ${this.color.toUpperCase()} is running`)
}
let car1 = new Car(`Opel`, `Blue`, 300);
let car2 = new Car(`Audi`, `White`, 600);
let car3 = new Car(`Mersedes`, `Black`, 1000);
car3.run();
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

// function getBiggerBook() {
//     arrBook.sort((a,b) => {
//       return  a.pageAmount - b.pageAmount;

//     })

// }
// alert(getBiggerBook());

// 4. Создать класс Timer, инстанс которого запускает таймер и выводит в консоль
// прошедшее время в секундах (1 2 3 4 5 и тд)
// инстанс должен обладать методами .start() .stop() которые запускают и останавливают таймер
// а также методом .reset() который сбрасывает таймер на 0.
// С помощью Timer вы должны создать несколько таймеров и убедится в том, что они 
// работают независимо друг от друга.
// останавливайте таймер через некоторое время после запуска с помощью setTimeout()




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