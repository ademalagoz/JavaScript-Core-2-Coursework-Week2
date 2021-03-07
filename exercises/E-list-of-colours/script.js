function listOfColours(colours) {
  let content = document.querySelector("#content");
  let selectElement = document.createElement("select");//create select element
  let pElement = document.createElement("p");//create p element
  content.append(selectElement,pElement);//append them to content
 
for(let colour of colours){ //iterate colours
  
  let option = document.createElement("option");
  option.innerText = colour; //array colour
  selectElement.appendChild(option);
 
}// for ..of closing

 selectElement.addEventListener("click",()=> {//click+function(choose the colour with value parameter)
  pElement.innerText = `You have selected :${selectElement.value}`;
  pElement.style.color = selectElement.value;
  });

}//function closing

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
