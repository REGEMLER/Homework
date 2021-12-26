// DOM

// Document
// Object
// Model

// if (Math.random() > 0.5) {
//     document.bgColor = "orange";
// }

// const lis = document.getElementsByTagName('li');

// console.dir(lis[2]); 

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
