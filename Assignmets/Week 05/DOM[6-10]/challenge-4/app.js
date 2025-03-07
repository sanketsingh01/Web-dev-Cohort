const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');

function createTask(TaskValue) {
  // creating a list
  const li = document.createElement('li');
  li.classList.add('task-item');

  // craeting an checkbox
  const Checkbtn = document.createElement('input');
  Checkbtn.type = 'checkbox';
  Checkbtn.classList.add('complete-checkbox');

  // creating a span
  const TaskText = document.createElement('span');
  TaskText.classList.add('task-text');
  TaskText.textContent = TaskValue;

  // Creating a deleet-button
  const delbtn = document.createElement('button');
  delbtn.innerText = 'delete';
  delbtn.classList.add('delete-button');

  // Appending all things to the li
  li.appendChild(Checkbtn);
  li.appendChild(TaskText);
  li.appendChild(delbtn);

  return li;
}

function update() {
  const tasks = document.querySelectorAll('.task-item');
  const completed = document.querySelectorAll('.task-item.completed');
  totalTasks.innerText = `Total tasks: ${tasks.length}`;
  completedTasks.innerText = `Completed: ${completed.length}`;
}

taskList.addEventListener('click', (e) => {
  const target = e.target;
  const taskItem = target.closest('.task-item');

  if (target.classList.contains('complete-checkbox')) {
    taskItem.classList.toggle('completed');
  } else if (target.classList.contains('delete-button')) {
    taskItem.remove();
    if (taskList.children.length === 0) {
      taskList.innerHTML = `<li class="empty-list">No tasks yet. Add one above!</li?`;
    }
  }
  update();
});

function AddTask() {
  const value = taskInput.value.trim();
  if (value === '') {
    alert('Please Enter a Valid Task');
    return;
  }
  if (document.querySelector('.empty-list')) {
    taskList.innerHTML = '';
  }

  const taskItem = createTask(value);
  taskList.appendChild(taskItem);
  update();
  taskInput.value = '';
}

addButton.addEventListener('click', () => {
  AddTask();
});

taskInput.addEventListener('keypress', (e) => {
  if (e.key == 'Enter') {
    AddTask();
  }
});
