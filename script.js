document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const addBtn = document.getElementById('add-btn');

    // Load existing todos from localStorage
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    todos.forEach(todo => {
        addTodoItem(todo);
    });

    addBtn.addEventListener('click', function() {
        if (todoInput.value.trim() !== "") {
            const todoText = todoInput.value;
            addTodoItem(todoText);
            todos.push(todoText);
            localStorage.setItem('todos', JSON.stringify(todos));
            todoInput.value = "";
        }
    });

    function addTodoItem(text) {
        const li = document.createElement('li');
        li.textContent = text;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = '×';
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener('click', function() {
            todoList.removeChild(li);
            const index = todos.indexOf(text);
            if (index > -1) {
                todos.splice(index, 1);
            }
            localStorage.setItem('todos', JSON.stringify(todos));
        });

        li.appendChild(removeBtn);
        todoList.appendChild(li);
    }
});
