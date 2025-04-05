const taskInput = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

function createListItem(taskText) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    return listItem;
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = createListItem(taskText);
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

addTaskButton.addEventListener("click", addTask);
