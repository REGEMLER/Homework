// 'use strict';
// function Animal (name, age) {
//     // 1. this = {};    
    
//     this.age = age;
//     this.name = name;
//     this.toString = function () {
//         return 'smth';
//     };
//     // 2. return this;
// }

// Animal.prototype.run = function (where = 'itstep') {
//     console.log(`${this.name} runs to ${where}`);
// };

// Animal.prototype.toString = function () {
//     return this.name;
// }

// // Animal.prototype === obj.__proto__ === obj2.__proto__ === obj3.__proto__

// let obj = new Animal('Sharik', 10);
// let obj2 = new Animal('Bobik', 20);
// let obj3 = new Animal.prototype.constructor('Sobaka', 30);

// console.log(obj3.paws);
// 1. Написать конструктор товара который принимает 3 параметра
// название 
// цвет
// цена
// Добавить в прототип классу метод showPrice ===>>> "товар ИМЯ стоит ЦЕНА"

function Product (name, color, price){
    this.name = name;
    this.color = color;
    this.price = price;
}
Product.prototype.showPrice = function(){
    console.log(`Товар ${this.name} стоит ${this.price}`);
}

let product1 = new Product(`Apple`, `Green`, 18);
let product2 = new Product(`Repa`, `Red`, 180);
product2.showPrice();

// 2. Создать класс Device у инстансов которого есть поле isON (boolean)
// В прототипе класса Device создайте метод .switch() который переключает
// поле инстанса в true/false при каждом вызове

function Device (){
    this.isON = true;
}
Device.prototype.switch = function(){
    this.isON = !this.isON;
}

let Dev1 = new Device();
console.log(Dev1);
Dev1.switch();
console.log(Dev1);
Dev1.switch();
console.log(Dev1);
Dev1.switch();
console.log(Dev1);

//////////////////////////////////////////////

function RRR(name, ahe){
    this.name = name;
    this.ahe = ahe;
}
let aaa  = new RRR(`hhhh`, 56);
console.log(aaa.__proto__ === RRR.prototype)
