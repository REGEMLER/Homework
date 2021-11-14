// function Point (x,y) {
//     this.x = x;
//     this.y = y;
// }

// function Line (point1, point2) {
//     this.point1 = point1;
//     this.point2 = point2;
// }

// Line.canTriangleExist = function (line1,line2,line3) {
//     const l1Length = line1.getLength();
//     const l2Length = line2.getLength();
//     const l3Length = line3.getLength();

//     return (l1Length < l2Length + l3Length
//         && l2Length < l1Length + l3Length 
//         && l3Length < l1Length + l2Length)
// };

// Line.prototype.getLength = function  () {
//     return Math.sqrt(Math.pow((this.point1.x - this.point2.x),2) + Math.pow((this.point1.y - this.point2.y),2));
// };

// const p1 = new Point(23,154);
// const p2 = new Point(51,21);
// const p3 = new Point(75,65);
// const p4 = new Point(86,321);
// const p5 = new Point(67,234);
// const p6 = new Point(89,76);

// const line1 = new Line(p1,p2);
// const line2 = new Line(p3,p4);
// const line3 = new Line(p5,p6);

// console.log(line2);

// console.dir(Line)

// es5

function Animal (name, age) {
    this.name = name;
    this.age = age;
}

Animal.rename = function (animal) {
    animal.name = 'blabla';
};

Animal.prototype.eat = function (food) {
    return `${this.name} eats ${food}`;
};

Animal.prototype.sleep = function () {
    return `${this.name} sleeps`;
};

// const dog = new Animal('bobik', 23);
// // console.log(dog);

function Human (name, age, job) {
    // this = {};
    Animal.call(this, name, age);
    this.job = job;
}

Human.prototype = Object.create(Animal.prototype); 
Human.prototype.constructor = Human;

Human.prototype.learn = function () {
    return `${this.name} learns JS`;
};

// const h1 = new Human('John', 23, 'bus driver');

// создать класс Programmer 
// инстанс которого должен иметь метод code
// и поле isProgrammer = true
// отнаследовать Programmer от Human

function Programmer(){
    Human.apply(this, arguments);
    this.isProgrammer = true;
}
Programmer.prototype = Object.create(Human.prototype); 
Programmer.prototype.constructor = Programmer;
Programmer.prototype.code = function () {
    return `${this.name} is codding`;
 };


 class Animal {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }

    eat () {
        return `${this.name} eats`;
    }
}

// const dog = new Animal('Tuzik',10);

class Human extends Animal {
    constructor (job, ...args) { // [name, age]
        super(...args);
        this.job = job;
        
    }

    learn (technology){
        console.log(super.eat());
        return `${this.name} learns ${technology}`;
    }

    eat () {
        const eatAsAnimal = super.eat();
        return eatAsAnimal + ' with a fork';
    }
}

const h1 = new Human('bus-driver', 'David', 23);

console.log(h1.eat());