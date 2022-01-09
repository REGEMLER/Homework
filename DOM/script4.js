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

