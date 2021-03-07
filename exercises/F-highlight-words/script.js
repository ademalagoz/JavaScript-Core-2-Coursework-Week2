function highlightWords(paragraph, colours) {
  let content = document.querySelector("#content");
  let pElement = document.createElement("p");
  let selectEl = document.createElement("select");
  content.append(selectEl,pElement);
 
  // for(let colour of colours ){

  // let optionEl = document.createElement("option");
  // optionEl.innerText = colour;
  // selectEl.appendChild(optionEl);
  // } //for ..of closing

colours.forEach(colour => {
  let optionEl = document.createElement("option");
  optionEl.innerText = colour;
  selectEl.appendChild(optionEl)
  
});  //for each closing

let pArray = paragraph.split(' ');//now paragraph is an array

for(let word of pArray ){
   let spanEl = document.createElement("span");
   spanEl.innerText = `${word} -`;
   spanEl.addEventListener("click",backGround)//click+function
  //()=> selectEl.value ==='none' ? spanEl.style.backgroundColor = 'transparent': spanEl.style.backgroundColor = selectEl.value);
  function backGround(){
  if(selectEl.value ==='none'){
    spanEl.style.backgroundColor = '';
  }
  else {spanEl.style.backgroundColor = selectEl.value};
  }
pElement.appendChild(spanEl)

}//for ..of closing

}//function closing

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
