//////////////////////////////////JSON 
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
/////////////////////////////////////////////////////////////////////// DOM


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
