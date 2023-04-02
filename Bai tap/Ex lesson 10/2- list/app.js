function addTask() {
    var input = document.getElementById("new-task-input");
    var taskList = document.getElementById("task-list");
    var newTask = document.createElement("li");
    newTask.textContent = input.value;
    taskList.appendChild(newTask);
    input.value = "";
}