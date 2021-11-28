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
