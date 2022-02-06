// import {person as smth, addTodo} from './todo-utils.js';
import {addTodo} from './todo-utils.js';
import {a} from './promise.js'; 




// data attr
// localstorage


// const a = required('module.js'); common js

const userInput = document.querySelector('.user-input');
const addBtn = document.querySelector('.add');
const todoList = document.querySelector('.todo-list');
const todos = [];



{/* <i class="fas fa-check-circle"></i> */}


addBtn.addEventListener('click', () => addTodo(userInput, todoList, todos )); 

userInput.addEventListener('keydown', ({keyCode}) => {
    if (keyCode === 13) {
        addTodo(userInput, todoList, todos);
    }
});


let origin = 'https://github.com/fashion-prepod/todo_pure_js.git';


todoList.addEventListener('click', function ({target}) {
    if (target.classList.contains('fa-trash')) {
        // target.parentElement.remove();
        target.closest('.todo').remove();
    }
});


todoList.addEventListener('click', function ({target}) { // p, button, i

    if (target.classList.contains('fa-check-circle')) {
        const clickedTodo = todos.find((todo) => todo.id === target.parentElement.id);
    
        clickedTodo.done = !clickedTodo.done;

        if (clickedTodo.done) {
            target.parentElement.classList.add('done');
            target.classList.replace('far', 'fas');
        } else {
            target.parentElement.classList.remove('done');
            target.classList.replace('fas', 'far');
        }           

        console.log(todos);
    }
});



