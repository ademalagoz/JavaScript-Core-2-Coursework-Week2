function shoppingList(arrayOfShopping) {

  let content = document.querySelector("#content");

  //1- for loop an innerHTML 
  let ulTag = document.createElement("ul");
  
  for(let i = 0; i < shopping.length; i++){

  let liTag = document.createElement("li");

  liTag.innerHTML = shopping[i];
  
  ulTag.appendChild(liTag);
  content.appendChild(ulTag);  
 
  }

  //2- for ..of loop and innerText

  /*
  for(let food of arrayOfShopping){

     let liTag = document.createElement("li");

     liTag.innerText = food;
  
     ulTag.appendChild(liTag);

  }
     content.append(ulTag); 
     */ 
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);

// ## Exercise

// * You should use an unordered list: `<ul>`.
// * Each item from the array should be in a `<li>` tag.
// * All of your HTML should go inside the `<div>` with the id **"content"**.