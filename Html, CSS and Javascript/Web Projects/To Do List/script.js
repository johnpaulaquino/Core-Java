const taskInput = document.querySelector('#newTask input');
const taskSelection = document.querySelector(".task");

taskInput.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        createTask();
    }
});

document.querySelector("#addButton").onclick = function(){
    createTask();
}

function createTask() {
    if (taskInput.value.length == 0) {
        alert("The task field is blank. Enter a taskname and try again");
    }else{
        taskSelection.innerHTML +=
        `<div class="task">
        <label id="taskname">
        <input onclick="updateTask(this)" type="checkbox" id="check-task">
        <p>${document.querySelector("#newtask input").value}</p>
        </label>
        <div class="delete">
        <i class="uil uil-trash"></i>
        </div>
        </div> `; 
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        taskSelection.offsetHeight >= 300? taskSelection.classList.add("overflow"): 
        taskSelection.classList.remove("overflow");
    }
}

function updateTask(task) {
    let taskItem = task.parentElement.lastElementChild;
    if (task.checked) {
        taskItem.classList.add("checked");
    }else{
        taskItem.classList.remove("checked");
    }
}
