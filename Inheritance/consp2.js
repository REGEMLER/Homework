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
// gamepad.play();
// gamepad.play();
// gamepad.play();
// gamepad.play();
// gamepad.play();
// gamepad.play();
// gamepad.play();
// gamepad.play();
// gamepad.play(); // На 11 раз "замените батарейки"
gamepad.play();
// gamepad.connectTo(`rgrtgrtgr`); //невозможно подключить 

console.log(gamepad);