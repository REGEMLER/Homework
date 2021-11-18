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

class House{
    constructor(city,street,number,maxApartments){
        this.adress = {
            city: city,
            street: street,
            number:number
        }
        this.apartments = [];
        this.maxApartments = maxApartments;
    }
    addApartment(apart){
        if(this.apartments.length<this.maxApartments && apart.owner !== `` && pravda !== false){
            this.apartments.push(apart);
        } 
    }
}



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

console.log(house1);
