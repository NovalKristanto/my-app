const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const addButton = document.getElementById('add-btn');

addButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = ""; // Reset input
}
// Menangani Enter untuk menambah tugas
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
window.onload = function() {
    loadTasksFromLocalStorage();
};

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.onclick = function () {
        taskList.removeChild(li);
        updateLocalStorage();
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = ""; // Reset input

    saveTaskToLocalStorage(taskText); // Save to Local Storage
}

function saveTaskToLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.onclick = function () {
            taskList.removeChild(li);
            updateLocalStorage();
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function updateLocalStorage() {
    let tasks = [];
    const items = taskList.querySelectorAll('li');
    items.forEach(item => {
        tasks.push(item.textContent.replace('Delete', '').trim());
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
const editButton = document.createElement('button');
editButton.textContent = 'Edit';
editButton.className = 'edit';
editButton.onclick = function() {
    taskInput.value = taskText;
    taskList.removeChild(li);
    updateLocalStorage();
};
li.appendChild(editButton);
