// DOM

// Document
// Object
// Model


const mainLink = document.body.children[3].children[1].children[1].children[1].children[0].children[2].children[0];
const second = mainLink.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[1].children[0];
const h2 = second.parentElement.parentElement.parentElement.previousElementSibling.children[0].children[1];
console.log(h2.parentElement.parentElement.parentElement.children[1].children[1].children[1].children[0].children[2].children[0]);

const lis = document.getElementsByTagName('li');
const items = document.getElementsByClassName('item');
const menu = document.getElementById('menu');
const shopItems = document.querySelectorAll('#shop > li');

console.dir(menu.getElementsByTagName('li'));


// changing creating adding removing cloning nodes
// events

const shop = document.getElementById('shop');
const items = [...shop.getElementsByTagName('li')];


items.forEach((item, index)=>{
    item.addEventListener('click', () => {
        console.log(items[index].textContent);
    });
})


const valerchikFunc = function () {
    console.log(this);
};

const shop = document.getElementById('shop');
const items = [...shop.getElementsByTagName('li')];


items.forEach((item, index)=>{
    item.addEventListener('click', valerchikFunc);
})


const a = document.getElementById('link');

window.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('HREN');
 }); //Запрет вызова браузерного меню 


 // Map and Set and Obj assign 
 // const person = {
//     name: 'John',
//     age: 23,
//     city: 'Gomel',
//     isProgrammer: false,
//     run: () => {console.log('RUN');}
// };

// console.log( Object.assign(person, {run: () => {console.log('RUUUUUN');}}, {c:4, b:200}) );

// const a = {a:2};
// const b = {b:3, d:4};
// const c = {c:5, b:100};

// const result = {
//     ...a,
//     ...b,
//     ...c
// };

// console.log(result);

//////////////////////////////////////////////////

const person = {
    name: 'John',
    age: 23,
    city: 'Gomel',
    isProgrammer: false,
    run: () => {console.log('RUN');}
};
const passports = new Set([2,2,3,5]);
for (let item of passports) {
    console.log(item);
}
const arr = [...passports];
console.log(arr);
for (let item of passports.values()) {
    console.log(item);
}
//////////////////////////////////////////////////////
const myMap = new Map([
    [4,5],
    ['hi','there']
]);

const h1 = {
    name: 'John',
    age: 23,
    city: 'Gomel',
    isProgrammer: false,
    run: () => {console.log('RUN');}
};

console.log(myMap.set( h1 , {nick: 'Bobik', tail: true} ));


for (let item of myMap.keys()) {
    console.log(item);
}

console.log(Array.from(myMap))

console.log(Object.fromEntries(myMap.entries()))



//////////////////////////////////JSON ////////////////////////////////////////
const person = {
    name: 'John',
    age: 23,
    tail: false,
    stack: ['HTML', 'CSS', null]
};


console.log( typeof JSON.stringify(person) );

const JSONperson = JSON.stringify(person);

console.log( JSON.parse(JSONperson));


const personCopy = JSON.parse(JSON.stringify(person));

console.log(person === personCopy)



////////////////////////////////////////// DOM //////////////////////////


// class 
// event listeners
// attributes
// css in js
// data attr
// create add update delete element

const menu = document.getElementById('menu');
const items = menu.getElementsByClassName('item');

items[1].addEventListener('click', () => {
    console.log('HELLO!');
}); //window

items[1].addEventListener('click', () => {
    console.log(this);
}); //window


items[1].addEventListener('click', function () {
    console.log(this.textContent);
}); //  items[1] посмотрели текст                                  


items[1].addEventListener('click', function () {
    console.log(this.innerText);
}); // посмотрели содержимое  

items[1].addEventListener('click', function () {
    console.log(this.innerHTML);
}); // посмотрели тег 


items[1].addEventListener('click', function () {
    this.innerHTML = `
        <h1> Hello world </h1>;
    ` 
});   //Превратило two в Hello world



const menu = document.getElementById('menu');
const items = [...menu.getElementsByClassName('item')];

items.forEach((item)=>{
    item.addEventListener('click', function () {
        console.log(this.textContent);
    })
});

menu.addEventListener('click', (event) => {
    console.log(event.target.textContent);
});


const handler = (event) => {
    console.log(event.target.textContent);
};

menu.addEventListener('click', handler);

menu.removeEventListener('click', handler);              


const handler = function (event) {
    if (event.target.nodeName === 'LI') {
        console.log('HELLO');
    } else {
        console.log('NE HELLO!');
    }

};

menu.addEventListener('click', handler);


parent.addEventListener('click', function (event) {
    event.stopImmediatePropagation();
    console.log(this.nodeName);
}, true);

parent.addEventListener('click', function () {
    console.log('SECOND DIV');
}, true);

span.addEventListener('click', function () {
    console.log(this.nodeName);
});




const form = document.getElementById('reg');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (Math.random() > 0.5) {
        form.submit();    
    }
});


////Others 

const menu = document.getElementById('menu');

menu.addEventListener('click', ({target}) => {
    if (target.nodeName === 'LI'){
        console.dir(target.classList.contains('item'));
    }
});
//посмотрели 


menu.addEventListener('click', ({target}) => {
    if (target.nodeName === 'LI'){
        target.classList.add('active');
    }
});
//добавили класс


menu.addEventListener('click', ({target}) => {
    if (target.nodeName === 'LI'){
        target.classList.remove('active');
    }
});
//удалили класс


menu.addEventListener('click', ({target}) => {
    if (target.nodeName === 'LI'){
        target.classList.toggle('active');
    }
});
//переключили

const menu = document.getElementById('menu');

menu.addEventListener('click', ({target}) => {
    if (target.nodeName === 'LI'){
        if (target.classList.contains('active')) {
            target.classList.remove('active');
        } else {          

            const elem = [...menu.children].find((elem)=>elem.classList.contains('active'));
            if (elem) {
                elem.classList.remove('active');
            }

            target.classList.add('active');
        }       
    }
});
// класс целиком 


menu.addEventListener('click', ({target}) => {

    target.style.border = '1px solid red';
    target.style.color = 'purple';

});
// свойство стайл. Редко используется 


document.body.addEventListener('mousemove', function ({ offsetX, offsetY}) {
    this.style.backgroundImage = `radial-gradient(at ${offsetX}px ${offsetY}px, orange, purple)`;
});
//Градиент 
