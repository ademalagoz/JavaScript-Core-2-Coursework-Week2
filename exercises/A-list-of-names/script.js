function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

// 1) for loop and innerHTML
for(let i = 0; i < people.length; i++){

  let h1Tag = document.createElement("h1");
  let h2Tag = document.createElement("h2");

  h1Tag.innerHTML = people[i].name;
  h2Tag.innerHTML = people[i].job;
  
  content.appendChild(h1Tag);
  content.appendChild(h2Tag);

// OR >> content.append(h1Tag,h2Tag)

} //for closing 

 //2) forEach Array and innerText
 /*
 arrayOfPeople.forEach(person => {
  let h1Tag = document.createElement("h1");
  let h2Tag = document.createElement("h2");

  h1Tag.innerText = person.name;
  h2Tag.innerText = person.job;
  
 content.append(h1Tag,h2Tag)

})
*/ 

} //function closing 

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
