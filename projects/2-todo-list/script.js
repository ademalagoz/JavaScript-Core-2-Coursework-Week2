
function populateTodoList(todos) {
  let list = document.getElementById('todo-list');//ul tag
  
  for (let todo of todos) {
    
    //Create list Elements
    let listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerText = todo.task;
    list.appendChild(listItem);

    //Create span Element
    let spanEl = document.createElement("span");
    spanEl.className = "badge bg-primary rounded-pill";
    listItem.appendChild(spanEl);


    //Create check and trash elements
    let trashButton = document.createElement("i");
    trashButton.className = "fa fa-trash";
    let checkButton = document.createElement("i");
    checkButton.className = "fa fa-check";
    spanEl.append(checkButton,trashButton);
    
    //check button event listener 
     checkButton.addEventListener("click", () => {
       if (listItem.style.textDecoration === "none") {
        listItem.style.textDecoration = "line-through"; 
        todo.completed = true; 

       } 
       else {
         listItem.style.textDecoration = "none";
         todo.completed = false;         
       }

     });

    //check button event listener 
     trashButton.addEventListener("click", () => {
       listItem.remove();
     });

  };

}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

function addNewTodo(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#todoInput");
  
  if (inputElement.value !== "") {
    let newTodo = {};
    newTodo.task = inputElement.value;
    newTodo.completed = false;
    todos.push(newTodo);
    let addedTodo = todos.slice(todos.length - 1);
    populateTodoList(addedTodo);
    inputElement.value = "";
  }
}


// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
 
}
