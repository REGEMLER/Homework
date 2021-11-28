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







