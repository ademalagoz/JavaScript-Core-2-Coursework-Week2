function todoList(todos) {

  let content = document.querySelector("#content");//getting content id
  let ulTag = document.createElement("ul");//creating ultag
  

  for(let task of todos){
    let liTag = document.createElement("li");// creating litag
    liTag.innerText = task.todo;// assign todo to the litag
    ulTag.appendChild(liTag);
    
liTag.addEventListener("click", linethrough);//adding eventlistener+function
    function linethrough(){
      if(liTag.style.textDecorationLine === "line-through"){
        
        liTag.style.textDecorationLine = "initial";
      } 
      
      else {
      liTag.style.textDecorationLine = "line-through";//First click do line-through
    }

      liTag.remove = "none";//If you click second time, remove it
  }

  }// for ..of closing
  content.appendChild(ulTag);
}// function closing

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);
