// let ul = document.getElementById("ul");
// let task = document.getElementById("input").value;
// function addfunction(){
//     document.createElement("li");
//     li.innerHTML=task
   
    


// }

// function addfunction(e) {
//     console.log(e);
//     e.preventDefault();
//     let ul = document.getElementById("ul");
//     let li = document.createElement("li");
//     let input = document.getElementById("input");
//     li.innerText = input.value;
//     ul.append(li);

// }

// let button = document.getElementById("button");
// button.addEventListener('onsubmit',addTask)

// function addTask(){
//     alert('pressed');
//     let ul = document.getElementById("ul");
//     let li = document.createElement("li");
//     let input = document.getElementById("input").value;
//     console.log(input);
//     li.innerHTML = input;
//     ul.append(li);

// }

// let form = document.getElementById('form');
// form.addEventListener('submit', function(ev)) {
//     ev.preventDefault();
//     console.log("function is work");
//     let newTask = document.getElementById('newTask').value;
//     let li = document.createElement("li");
//     let ul = document.getElementById('ul');
//     li.innerHTML = newTask;
//     ul.append(li);
// }

function addTask(e) {
    console.log(e);
    e.preventDefault();
    const newTodoText = document.getElementById("newTaskInput");
    const todoListEl = document.getElementById("todoList");
    console.log(todoListEl);
    console.log(newTodoText.value, "newTodoTextEl.value");
    const li = document.createElement("li");
    li.innerText = newTodoText.value;
    todoListEl.appendChild(li);
    // console.log(li, "newTodo");
    li.addEventListener("click", () => {
      todoListEl.removeChild(li);
    });
    newTodoText.value = "";
  }