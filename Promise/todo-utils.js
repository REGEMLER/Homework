

export const addTodo = (userInput, todoList, todoData) => {
    if (userInput.value === '') {
        return;
    }

    const todo = generateTodo(userInput.value);
    const id = String(Math.random());
    const todoModel = {id, text: userInput.value, done: false, anchor: todo};
    todoData.push(todoModel);
    userInput.value = '';
    userInput.focus();
    todo.id = id;
    todoList.append(todo);
};

const generateTodo = (innerText) => {
    const myDiv = document.createElement('div');
    myDiv.classList.add('todo');
    myDiv.insertAdjacentHTML(
        `afterbegin`,
        `
            <i class="fas fa-trash"></i>
            <i class="far fa-check-circle"></i>
            <p class="todo__text">${innerText}</p>
        `);

    return myDiv;
};

