document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const taskDesc = document.getElementById("new-task-description");
  
  taskForm.addEventListener("submit", newTask);

});

const newTask = event => {
  event.preventDefault();
  const taskDesc = document.getElementById("new-task-description");
  const task = document.createElement("li");
  task.innerHTML = taskDesc.value;

  addTask(task);
  event.target.reset();
};

const addTask = task => {
  document.getElementById("tasks").appendChild(task);

};
