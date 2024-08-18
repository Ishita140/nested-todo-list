document.getElementById('task-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText, parentElement = document.getElementById('task-list')) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const subTaskButton = document.createElement('button');
    subTaskButton.textContent = 'Add Subtask';
    subTaskButton.style.marginLeft = '10px';

    const subTaskInput = document.createElement('input');
    subTaskInput.type = 'text';
    subTaskInput.placeholder = 'Subtask...';
    subTaskInput.style.marginLeft = '10px';

    li.appendChild(subTaskButton);
    li.appendChild(subTaskInput);

    const subTaskList = document.createElement('ul');
    li.appendChild(subTaskList);

    parentElement.appendChild(li);

    subTaskButton.addEventListener('click', function () {
        const subTaskText = subTaskInput.value.trim();
        if (subTaskText !== '') {
            addTask(subTaskText, subTaskList);
            subTaskInput.value = '';
        }
    });
}
