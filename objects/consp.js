// const sizes = [34,51,64];
// const person = {
//     name: 'John',  
//     age: 23,
//     size: {
//         height: 23,
//         width: 41
//     },
//     stack: ['HTML', 'CSS', 'JS'],
// };

// // person.name = 'Valerchik';
// // person.city = 'Gomel';

// console.log(person);

// const pupyrky = {
//     blue: 234,
//     red: 214,
//     orange: 23,
//     purple: 124,
// }

// let sum = 0;

// for(key in pupyrky){
//     sum += pupyrky[key];
// }
// alert(sum);
// const sum = Object.keys(pupyrki).reduce((sum, pup) => sum + pupyrki[pup] ,0);
// console.log(sum);

// let sum = 0;

// for (let key in pupyrki) {
//     sum += pupyrki[key];
// }
function run(where,speed){
    console.log(this);
   console.log(`${this.name} run to ${where} with speed ${speed}`) 
}
const person = {
    name: `John`,
    age: 23,
    size: {
        width: 100,
        height: 300,
    },
    run
}
setTimeout(person.run.bind(person), 2000)


/////////////////////////////
function eat () {
    const that = this;
    function eatInner () {
        console.log(that);
    }
    eatInner();
}

eat.call(person);
/////////////////////////////////
function eat () {
    function eatInner () {
        console.log(this);
    }
    const eatInnerArrow = () => {
        console.log(this);
    }
    eatInner();
    eatInnerArrow();
}
eat.call(person);
