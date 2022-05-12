const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-input");
const tasks = document.getElementById("tasks");

// getTasks
const getTasks = () => {
    let allTasks = localStorage.getItem("taskList");
    allTasks = allTasks.split(",");
    console.log(allTasks);
if(allTasks!=""){

    tasks.innerHTML = allTasks.map(
        (task,index) => `
        <div class="task">
        <div class="content">
        <input class="text" type="text" readonly="readonly" value="${task}">
        </div>
        <div class="actions">
        <button class="delete" onclick="deleteTask(${index})">Delete</button>
        </div>
        </div>
        `).join("");
    } else{
        tasks.innerHTML = `
        <div class="no-tasks-found">
        <h2>No tasks found!</h2>
        </div>`;
    }
    };
    //addTasks
const addTasks = (task) =>{
    let allTasks = localStorage.getItem("taskList"); // Hämtar alla element i localstorage
    allTasks = allTasks ? allTasks.split(",") : []; // Om allTasks är tomt så skapar vi en tom array
    allTasks.push(task); // Lägger till task i slutet av arrayen
    localStorage.setItem("taskList",allTasks); // Sparar alla element till localstorage

}; 

//deleteTasks
const deleteTask = (index) => {
    let allTasks = localStorage.getItem("taskList"); // Hämtar alla element
    allTasks = allTasks.split(",");
    allTasks.splice(index,1);
    localStorage.setItem("taskList",allTasks); // Skickar upp arrayen igen och skriver över tidigare info.
    getTasks();

}

// Form submit
form.onsubmit = (event) => {
event.preventDefault();
const task = input.value;
addTasks(task);
getTasks();
form.reset();
};

window.onload = getTasks;

