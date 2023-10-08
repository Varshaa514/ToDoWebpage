const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}
