// es5

// function Animal (name, age) {
//     this.name = name;
//     this.age = age;
// }

// Animal.rename = function (animal) {
//     animal.name = 'blabla';
// };

// Animal.prototype.eat = function (food) {
//     return `${this.name} eats ${food}`;
// };

// Animal.prototype.sleep = function () {
//     return `${this.name} sleeps`;
// };

// const dog = new Animal('bobik', 23);
// // console.log(dog);

// function Human (name, age, job) {
//     // this = {};
//     Animal.call(this, name, age);
//     this.job = job;
// }

// Human.prototype = Object.create(Animal.prototype); 
// Human.prototype.constructor = Human;

// Human.prototype.learn = function () {
//     return `${this.name} learns JS`;
// };

// const h1 = new Human('John', 23, 'bus driver');

// создать класс Programmer 
// инстанс которого должен иметь метод code
// и поле isProgrammer = true
// отнаследовать Programmer от Human

// function Programmer(){
//     Human.apply(this, arguments);
//     this.isProgrammer = true;
// }
// Programmer.prototype = Object.create(Human.prototype); 
// Programmer.prototype.constructor = Programmer;
// Programmer.prototype.code = function () {
//     return `${this.name} is codding`;
//  };



// es6

//  class Animal {
//     constructor (name,age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat () {
//         return `${this.name} eats`;
//     }
// }

// const dog = new Animal('Tuzik',10);

// class Human extends Animal {
//     constructor (job, ...args) { // [name, age]
//         super(...args);
//         this.job = job;
        
//     }

//     learn (technology){
//         console.log(super.eat());
//         return `${this.name} learns ${technology}`;
//     }

//     eat () {
//         const eatAsAnimal = super.eat();
//         return eatAsAnimal + ' with a fork';
//     }
// }

// const h1 = new Human('bus-driver', 'David', 23);

// console.log(h1.eat());

// Tasks 

// 1. Создать класс House, инстанс которого иммет поля
// adress: {city:, street:, number:}
// apartments: Apartment[]
// maxApartments: number
// метод addApartment который принимает объект Appartment
// и добавляет его в массив apartments
// добавлять квартир больше чем maxApartments - запрещено
// добавлять квартиру без владельца запрещено
// добавлять квартиру без номера - запрещено
// нельзя добавлять квартиру если квартира с таким номером уже существует
// в массиве.
// Создать класс Apartment, интсанс которого имеет поля
// apartmentNumber: number
// owner: string // по умолчанию - пустая строка
// и метод setOwner('Vasya')
// [
//     {apartmentNumber:2, owner:'Vasya'},
//     {apartmentNumber:3, owner:'Petya'}
// ]

// Создаем конструктор для House 
class House{
    constructor(city,street,number,maxApartments){
        this.adress = {
            city: city,
            street: street,
            number:number
        }
        // Создаем пустой массив куда будем добавлять квартиры 
        this.apartments = [];
        this.maxApartments = maxApartments;
    }
    addApartment(apart){
        if( 
            // Проверка на максимальное колчичество квартир  
            this.apartments.length<this.maxApartments 
            // Проверка на налчичие владельца  
            && apart.owner !== `` 
            // Проверка на несовпадение номеров квартир   
            && !this.apartments.some(({apartmentNumber}) => apartmentNumber === apart.apartmentNumber )){
            this.apartments.push(apart);
        } 
    }
}
// Создаем конструктор для кваритры
class Apartment{
    constructor(number,owner = ``){
        this.apartmentNumber =  number;
        this.owner = owner
    }
    setOwner(name){
        this.owner = name
    }
}

let apartment1 = new  Apartment(1);
apartment1.setOwner(`Nike`);
let apartment2 = new  Apartment(2);
apartment2.setOwner(`Vasiya`);
let apartment3 = new  Apartment(3);
apartment3.setOwner(`Grzegosz`);
let apartment4 = new  Apartment(4);
apartment4.setOwner(`Ludomir`);
let apartment5 = new  Apartment(3);
apartment5.setOwner(`Pedro`);
let apartment6 = new  Apartment(56);

let house1 = new House(`Ulan-Ude`, `Lenina`, 1, 13);
house1.addApartment(apartment1);
house1.addApartment(apartment2);
house1.addApartment(apartment3);
house1.addApartment(apartment4);
house1.addApartment(apartment5);
house1.addApartment(apartment6);
// console.log(house1);

// 2. Создать класс Device, который имеет параметр isOn (по 
//     умолчанию false), метод callSmbd, который принимает имя 
//     вызываемого абонента и метод switchDevice, который 
//     переключает параметр isOn. Позвонить абоненту можно 
//     только тогда, когда параметр isOn == true, иначе вывести 
//     сообщение, что звонок невозможен. Необходимо также 
//     создать классы Smartphone(принимает имя и диагональ 
//     экрана(не может быть больше 8)) и Tablet(принимает имя и 
//     диагональ экрана (не может быть меньше 8)), которые 
//     наследуют от класса Device

// class Device{
//     constructor(){
//         this.isON = false
//     }
//     callSmbd(name,switchDevice){
//         if(switchDevice){
//          this.isON = !this.isON;
//         }
//         if(this.isON === true){
//             console.log(`${name} is calling`)
//         } else{
//             console.log(`The number you have called is not available.`)
//         }
//     }
// }

// let divice = new  Device();
// divice.callSmbd(`Petya`);
// divice.callSmbd(`Vasia`, 45);

// class Smartphone extends Device{
//     constructor(name,diagonal,...args){
//         super(...args);
//         this.name = name;
//         if(diagonal<=8){
//             this.diagonal = diagonal;
//         }
//     }
// }

// class Tablet extends Device{
//     constructor(name,diagonal,...args){
//         super(...args);
//         this.name = name;
//         if(diagonal>=8){
//             this.diagonal = diagonal;
//         }
//     }
// }

// let smart = new  Smartphone(`X5`, 5);
// console.log(smart);
// let tablet = new  Tablet(`P34`, 9);
// console.log(tablet);



// 3. Создать класс Battery, который инициализирует поля type,
// energy (заряд, по умолчанию 100). Создать класс Device, 
// который принимает параметр batteryType и метод
// insertBattery, который принимает два параметра (две 
// батарейки). Создать класс Gamepad, который наследует от 
// Device. Класс Gamepad должен содержать поле model, поле 
// isConnected (boolean) и методы connectTo(), который 
// принимает название другого девайса и выводит сообщение 
// типа “gamepadModel connected to TV”, метод disconnect(), 
// который отключает Gamepad и метод play(), который 
// отнимает 10 зарядов от каждой батареи. Если хотя бы одно 
// поле batteryType у Device и type у Battery не совпадают, то 
// вывести сообщение что батарейки не вставлены. 
// Подключить один девайс к другому можно только если есть 
// 2 батарейки. Подключить Gamepad можно только если 
// isConnected == false. Если заряд батареек == 0, то метод 
// play вернет сообщение с требованием замены батареек

class Battery{
    constructor(type){
        this.energy = 100; 
        this.type  = type;
    }
}

const b1 = new Battery(`XXL`);
const b2 = new Battery(`XL`);
const b3 = new Battery(`XL`);

class Device{
    constructor(batteryType){
        this.batteryType =batteryType;
        this.bat1 = ``;
        this.bat2 = ``; 
    }
    insertBattery(battery1,battery2){
        this.bat1 = battery1;
        this.bat2 = battery2;
    }
}

class Gamepad extends Device{
    constructor(model,...args){
        super(...args);
        this.model = model;
        this.isConnected = false; 
    }
    connectTo(name){
        if(this.isConnected === false
            && this.bat1 !== undefined
            && this.bat2 !== undefined ){
                this.isConnected = true;
                console.log(`${this.model} connected to ${name}`);
            } else {
                console.log(`Невозможно подключить`);
            }
    }
    disconnect(){
        this.isConnected = false; 
    }
    play(){
        if(this.batteryType!==this.bat1.type
            || this.batteryType!==this.bat2.type){
          return console.log(`Батарейки не вставлены`)
        }
        if(this.bat1.energy===0
            && this.bat2.energy===0){
            return console.log(`Замените батарейки`)
        }
        this.bat1.energy =this.bat1.energy - 10; 
        this.bat2.energy =this.bat2.energy - 10;
    }
}

const gamepad = new Gamepad(`Ultra`, `XL`);
gamepad.insertBattery(b2,b3);
// gamepad.insertBattery(b1,b3); // батарейки не вставлены
gamepad.connectTo(`tv`);
gamepad.play();
gamepad.play();
gamepad.play();
gamepad.play();
gamepad.play();
gamepad.play();
// gamepad.play();
// gamepad.play();
// gamepad.play();
// gamepad.play(); // На 11 раз "замените батарейки"
gamepad.play();
// gamepad.connectTo(`rgrtgrtgr`); //невозможно подключить 

console.log(gamepad);




////////////////////////////////////////////////////////////////////////////////

// 2. Создать класс Device, который имеет параметр isOn (по 
//     умолчанию false), метод callSmbd, который принимает имя 
//     вызываемого абонента и метод switchDevice, который 
//     переключает параметр isOn. Позвонить абоненту можно 
//     только тогда, когда параметр isOn == true, иначе вывести 
//     сообщение, что звонок невозможен. Необходимо также 
//     создать классы Smartphone(принимает имя и диагональ 
//     экрана(не может быть больше 8)) и Tablet(принимает имя и 
//     диагональ экрана (не может быть меньше 8)), которые 
//     наследуют от класса Device

// class Device {
//     constructor () {
//         this.isOn = false;
//     }

//     callSmbd (who) {
//         if (this.isOn) {
//             console.log(`you are calling ${who}`);
//         } else {
//             console.log(`You cant call anyone`);
//         }
//     }

//     switchDevice () {
//         this.isOn = !this.isOn;
//     }
// }

// class Smartphone extends Device {
//     constructor (name, diag) {
//         super();
//         this.name = name;
//         if (diag > 8) {
//             this.diag = 8;
//         } else {
//             this.diag = diag;
//         }
//     }
// }

// class Samsung extends Smartphone {
//     constructor (name, diag) {
//         super(name, diag);
//     }
// }

// const dev = new Device();
// dev.switchDevice();
// dev.callSmbd('Oleg');


// 3. Создать класс Battery, который инициализирует поля type,
// energy (заряд, по умолчанию 100). Создать класс Device, 
// который принимает параметр batteryType и метод
// insertBattery, который принимает два параметра (две 
// батарейки). Создать класс Gamepad, который наследует от 
// Device. Класс Gamepad должен содержать поле model, поле 
// isConnected (boolean) и методы connectTo(), который 
// принимает название другого девайса и выводит сообщение 
// типа “gamepadModel connected to TV”, метод disconnect(), 
// который отключает Gamepad и метод play(), который 
// отнимает 10 зарядов от каждой батареи. Если хотя бы одно 
// поле batteryType у Device и type у Battery не совпадают, то 
// вывести сообщение что батарейки не вставлены. 
// Подключить один девайс к другому можно только если есть 
// 2 батарейки. Подключить Gamepad можно только если 
// isConnected == false. Если заряд батареек == 0, то метод 
// play вернет сообщение с требованием замены батареек

class Battery {
    constructor (type) {
        this.type = type;
        this.energy = 100;
    }
}

class Device {
    constructor (type) {
        this.batteryType = type;
        this.btrs = [];
    }

    insertBattery (b1,b2) {
        if (b1.type !== this.batteryType
            || b2.type !== this.batteryType) {
                console.error(`you cant insert type because batteries have different types: ${b1.type} and ${b2.type}`);
        } else {
            this.btrs.push(b1,b2);
        }
    }
}

class Gamepad extends Device {
    constructor (model, type) {
        super(type);
        this.model = model;
        this.isConnected = false;
    }

    connectTo (deviceName) {
        if (!this.isConnected       
            && this.isAllBatteriesCharged()) {
                this.isConnected = true;
                console.log('connected! to ' + deviceName);
        } else {
            console.log('could not connect!');
        }
    }
    
    disconnect () {
        this.isConnected = false;
        console.log('Device disconnected!');
    }

    play () {
        if (this.btrs.length > 1 
            && this.isAllBatteriesCharged() ) {
            console.log('you play game!');
            this.btrs = this.btrs.map((btr) => ({
                ...btr,
                energy: btr.energy <= 0 ? 0 : btr.energy - 10
            }))
        } else {
            console.error('you cant play due to batteries, change them!');
        }
    }

    isAllBatteriesCharged () {
        return this.btrs.every(({energy}) => energy > 0 );
    }
}

const b1 = new Battery ('AAA');
const b2 = new Battery ('AAA');
const b3 = new Battery ('BBB');

const ps5gamepad = new Gamepad('ps5', 'AAA');

ps5gamepad.insertBattery(b1,b2);
ps5gamepad.connectTo('ps5');
ps5gamepad.disconnect();
ps5gamepad.connectTo('xbox');
ps5gamepad.play();
ps5gamepad.play();
ps5gamepad.play();
ps5gamepad.play();
ps5gamepad.play();
ps5gamepad.play();
ps5gamepad.play();
ps5gamepad.play();
ps5gamepad.play();
ps5gamepad.play();
ps5gamepad.play();
ps5gamepad.play();
ps5gamepad.play();
ps5gamepad.play();

class Human{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHi(){
        console.log(`Hello ${this.name}`)
    }
}

////////////////////////////////////////////////////////////////

class Programmer extends Human{
    constructor(technology, ...args){
        super(...args);
        this.technology = technology;
    }
    startCodding(){
        console.log(`${this.name} is codding using ${this.technology.join(` `)}`)
    }

}

const programmer1 = new Programmer([`CSS`, `HTML`],`David`, 35);
 console.log(programmer1);
 programmer1.startCodding()
 programmer1.sayHi()
/////////////////////////////////////////////////////////////////////////////////////////////////

 class Sportsman extends Human{
    constructor(medals, ...args){
        super(...args);
        this.medals = medals;
    }
}

/////////////////////////////////////////////////////////
 class FootballPlayer extends Sportsman{
    constructor(team, ...args){
        super(...args);
        this.team =team;
    }
    run(spead){
        console.log(`${this.name} is running with spead ${spead} kmph`)
    }
}

const footbalPlayer1 = new FootballPlayer(`Real`, 5, `Marco`, 20);
console.log(footbalPlayer1);
footbalPlayer1.run(33);

//////////////////////////////////////////

 class HockeyPlayer extends Sportsman{
    constructor(weight, ...args){
        super(...args);
        this.weight =weight;
    }
    run(spead){
        console.log(`${this.name} is running with spead ${spead} kmph`)
    }
    pushOpponentName(opponentName){
        console.log(`${this.name} pushed ${opponentName} and used ${this.weight} kg`)
    }
}

const hocheyPlayer1 = new HockeyPlayer(90, 2, `Ben`, 33);
console.log(hocheyPlayer1);
hocheyPlayer1.pushOpponentName(`Boris`)



class Human {
    constructor () {
        this._age = 0;
    }

    set age (number) {
        if (number < 120 && number > 0) {
            this._age = number;
        }
    }

    get age () {
        return (this._age).toFixed(2) + '$';
    }

}

const h1 = new Human();

h1.age = 20;

console.log( h1.age );


class Human {
    #age = 0;
    static #planet = 'Earth';
    test = 0;
    static isHuman (human) {
        return human instanceof Human;
    }

    whereILive () {
        console.log(Human.#planet);
    }

    set age (number) {
        if (number < 120 && number > 0) {
            this.#age = number;
        }
    }

    get age () {
        return (this.#age).toFixed(2) + '$';
    }
}

Human.someMethod = () => {
    console.log(2323);
};

const h1 = new Human();
const h2 = new Human();

console.log( Human.someMethod({age: 23}) );

// создать класс Lada 
// инстанс лады должен обладать полями 
// model (строго определнный набор) (сокрытый статик)
// ['vesta', 'xray', 'niva', 'granta', 'priora']
// new Lada ('x5', 24000, 1990) ===>>> {model:'vesta'}
// price число, не может быть ниже 0 
// yearOfProduction число 
// у всех лад должно быть вычисляемое свойтво age 
// age не должен быть доступен для ЗАПИСИ
 

//Мое решение 
// const date = new Date();
// let year = date.getFullYear();

// class Lada {
//     static #models = ['vesta', 'xray', 'niva', 'granta', 'priora'];
//     constructor(model,price,yearOfProduction){
//         this.model = Lada.#models.includes(model) ? model : Lada.#models[0];
//         this.#price = price < 0 ? 0 : price;
//         this.yearOfProduction = yearOfProduction;
//         this._age  = year - this.yearOfProduction;
//     }
//     set price (price){
//             this.#price = price <0 ? this.#price : price;
//     }
//     get price () {
//         return this.price + '$';
//     }
//     set model (model){
//         if(Lada.#models.includes(model)){
//             this._model = model;
//         }
//     }
// }

// const lada  = new Lada(`xrey`, 5000, 1990);
// lada.price = 1000;
// lada. model = `gfhfghfgh`;
// this.age = 40;
// console.log(lada);



// Правильное решение 
class Lada {
    static #models = ['vesta', 'xray', 'niva', 'granta', 'priora'];
    static addModel = function (model) {
        this.#models.push(model);
    }

    #price = 0;
    #year = 0;

    constructor (model, price, year) {
        this.model = Lada.#models.includes(model) ? model : Lada.#models[0] ;
        this.#price = price < 0 ? 0 : price;
        this.#year = year;
    }

    get price () {
        return this.#price + '$';
    }
    set price (price) {
        this.#price = price < 0 ? this.#price : price;
    }

    get age () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.#year;
    }
}

const lada = new Lada('priora', -2000, 1990);

console.log(lada);


//////////////////////Ошибки/////////////////////////////////////////




class Lada {
    static #models = ['vesta', 'xray', 'niva', 'granta', 'priora'];
    static addModel = function (model) {
        this.#models.push(model);
    }

    #price = 0;
    #year = 0;

    constructor (model, price, year) {
        

        if (Lada.#models.includes(model)) {
            this.model = model;
        } else {
            const myErr = new Error(`no ${model} model exist`);
            throw myErr;
        }

        if (price > 0 ) {
            this.#price = price;
        } else {
            throw new Error(`price ${price} is lower than zero and cant be set`);
        }

        this.#year = year;
    }

    get price () {
        return this.#price + '$';
    }
    set price (price) {
        this.#price = price < 0 ? this.#price : price;
    }

    get age () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.#year;
    }
}

const price = +prompt('ente your price');

let lada;

try {
    lada = new Lada('priora', price, 1990);
} catch (err) {
    console.log(err);
    lada = new Lada('priora', -price, 1990);
}

console.log(lada);


///////////////////////////////////////////////////////////////////////////////
class ModelError extends Error {}
class PriceError extends Error {}

class Lada {
    static #models = ['vesta', 'xray', 'niva', 'granta', 'priora'];
    static addModel = function (model) {
        this.#models.push(model);
    }

    #price = 0;
    #year = 0;

    constructor (model, price, year) {
        

        if (Lada.#models.includes(model)) {
            this.model = model;
        } else {
            const myErr = new ModelError(`no ${model} model exist`);
            throw myErr;
        }

        if (price > 0 ) {
            this.#price = price;
        } else {
            throw new PriceError(`price ${price} is lower than zero and cant be set`);
        }

        this.#year = year;
    }

    get price () {
        return this.#price + '$';
    }
    set price (price) {
        this.#price = price < 0 ? this.#price : price;
    }

    get age () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.#year;
    }
}

const price = +prompt('ente your price');

let lada;

try {
    lada = new Lada('priora', price, 1990);
} catch (err) {

    if (err instanceof PriceError) {
        lada = new Lada('priora', -price, 1990);
    } else if (err instanceof ModelError) {
        lada = new Lada('vesta', price, 1990);
    } else {
        throw err;
    }    
}

console.log(lada);


// Define Properties
'use strict';

const person = {
    name: 'John', // {enumerable: true, configurable: true}
    city: 'Gomel', // {enumerable: true, configurable: true}
    age: 23, // {enumerable: true, configurable: true}
    size: {
        width: 20, // {enumerable: true, configurable: true}
        height: 30 // {enumerable: true, configurable: true}
    }
};

// Object.defineProperty(person, 'job', {
//     writable: false,
//     value: 'JS DEVELOPER',
//     configurable: true
// });


Object.defineProperties(person, {
    adress: {
        enumerable: false,
        writable: true
    },
    city: {
        enumerable: false
    }
});

console.log(person);

console.log(Object.getOwnPropertyDescriptors(person));

// console.log(Object.keys(person));

// for (let key in person) {
//     console.log(key);
// }

// Object.defineProperty()
// Object.defineProperties()
// Object.getOwnPropertyDescriptors()
// Object.getOwnPropertyDescriptor()






// Создать класс Shop, инстанс которого обладает полем
// shopItems - массив объектов типа shopItem
// У инстанса класса Shop должен быть метод setSales(discountPercent),
// который устанавливает всем shopItem'ам isOnSale = true,
// а также снижает цену на discountPercent процентов.
// У инстанса также должен быть метод purchaseItem(itemName)
// которое находит в массиве shopItems, необходимый shopItem и уменьшает его
// количество на 1.
// Если количество shopItem равно нулю, то нужно выбросить ошибку о том, что
// айтемов больше нет в наличии. Обработайте эту ошибку и выведите в консоль
// сообщение что айтем нельзя заказать тк он закончился.
// У инстанса Shop также должно быть поле totalProfit - число (общее
// количество заработанных денег), в которое складывается
// цена каждого проданного айтема.

// Создать класс ShopItem, инстанс которого должен обладать полями
// itemName - название товара
// price - цена товара (не может быть меньше нуля, используйте сеттер)
// amount - количество товара (не может быть меньше нуля, используйте сеттер)
// isOnSale - булево значение

// Создать класс Clothes - который наследует от ShopItem
// инстанс должен обладать дополнительными полями
// size - строка характеризующая размер (может принимать значения только 'S', 'M', 'L', 'XL', обрабатывать
// сеттером, иначе выбрасывать ошибку)
// material - строка характеризующая материал
// color - строка цвета
// Класс Clothes, должен обладать статическим методом .changeColor(cloth, color)
// который принимает инстанс этого класса и цвет, метод меняет инстансу цвет на color;

// Создать класс TV который наследует от ShopItem
// инстанс должен обладать дополнительными полями
// diagonal - число
// withSmartTV - булево значение
// Оба поля должны быть недоступны для изменения, но доступны для чтения
// т.е. значения этих полей устанавливаются только в конструкторе, дальше сеттерами
// запрещаем их изменять

// Создать инстанс Shop и прокинуть в него несколько инстансов TV и Clothes
// проверить все методы на работоспособность

class ShopItem{
    constructor(itemName,price,amount){
        this.itemName = itemName;
        if(price>0){
            this._price = price;
        } else {
            throw new Error(`Price cannot be less than 0`)
        }
        if(amount>0){
            this._amount = amount;
        } else {
            throw new Error(`Amount cannot be less than 0`)
        }
        this.isOnSale = false; 
    }
    set price(price){
        this._price = price<0 ? this._price : price;
    }
    get price(){
        return this._price + `$`;
    }
    set amount(price){
        this._amount = amount<0 ? this._amount : amount;
    }
    get amount(){
        return this._amount + `units`;
    }
}   


class Clothes extends ShopItem{
    #size = 'S';
    static #sizes = ['S', 'M', 'L', 'XL'];
    static changeColor = function(cloth, color){
        cloth.color = color; 
    }
    constructor(size,material,color, ...args){
        super(...args);
        this.material = material;
        this.color = color; 
        if(Clothes.#sizes.includes(size)){
            this.#size = size;
        } else{
            throw new Error(`This size does not exist`)
        }
    }
    set size(size){
        if(Clothes.#sizes.includes(size)){
            this.#size = size;
        } else{
            throw new Error(`This size does not exist`)
        }
    }
}


class TV extends ShopItem{
     #diagonal = 0;
     #withSmartTV = false;
    constructor(diagonal, withSmartTV, ...args){
        super(...args)
        if(diagonal>0){
            this.#diagonal = diagonal;
        } else {
            throw new Error(`Diagonal cannot be less than 0`);
        }
        if(typeof withSmartTV == `boolean`){
            this.#withSmartTV = withSmartTV;
        } else {
            throw new Error(`Logic ERROR`)
        }
    }
    set diagonal(diagonal){
        this.#diagonal = this.diagonal;
    }
    set withSmartTV(withSmartTV){
        this.#withSmartTV =this.#withSmartTV;
    }
    get diagonal(){
        return `Diagonal is ${diagonal}`
    }
    get withSmartTV(){
        if(this.#withSmartTV){
            return `This tv has smart tv`
        } else {
            return `This tv does not have smart tv`
        }
    }
}

class Shop{
    constructor(){
        this.shopItems = [];
        this.totalProfit = 0;
    }
    addItem(item){
        if(item instanceof ShopItem || item instanceof TV || item instanceof ShopItem){
            this.shopItems.push(item);
        } else {
            throw new Error(`This is not a shopItem`)
        }
    }
    setSales(discountPercent){
        this.shopItems.forEach(i => i.isOnSale = true);
        this.shopItems.forEach(i => i._price = i._price - i._price*discountPercent/100);
    }
    purchaseItem(itemName){
        let productIndex = this.shopItems.findIndex(i => i.itemName===itemName);
        if(this.shopItems[productIndex]._amount === 0){
			throw new Error(`There is not products any more`);
		}
		this.shopItems[productIndex]._amount-- ; 
		this.totalProfit = this.totalProfit + this.shopItems[productIndex]._price;
    }
}


const cloth1 = new Clothes(`M`, `silk`, `yellow`, `T-shirt`, 180, 50);
const cloth2 = new Clothes(`L`, `cotton`, `red`, `shirt`, 400, 6);
const cloth3 = new Clothes(`XL`, `wool`, `green`, `hat`, 5000, 22);
const tv = new TV(20, false, `samsung`, 50000, 1);
Clothes.changeColor(cloth1,`blue`);
const shop = new Shop();
shop.addItem(cloth1);
shop.addItem(cloth2);
shop.addItem(cloth3);
shop.addItem(tv);
shop.setSales(10);
shop.purchaseItem(`hat`);
shop.purchaseItem(`hat`);
shop.purchaseItem(`hat`);
console.log(shop);