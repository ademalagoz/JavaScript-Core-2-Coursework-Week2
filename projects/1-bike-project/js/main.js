//## Part 1

// get color buttons

let blueBtn = document.querySelector("#blueBtn");
let orangeBtn = document.querySelector("#orangeBtn");
let greenBtn = document.querySelector("#greenBtn");

// get jumbotron families

let jumbotron = document.querySelector(".jumbotron");
let donateBike = document.querySelector(".jumbotron .btn-primary");
let volunteer = document.querySelector(".jumbotron .btn-secondary");


//Change the colors
blueBtn.addEventListener("click",blueFunc);

function blueFunc(){
    jumbotron.style.backgroundColor = `#588fbd`;
    donateBike.style.backgroundColor = `#ffa500`;
    volunteer.style.backgroundColor = `black`;
    volunteer.style.color = `white`;
}

orangeBtn.addEventListener("click",orangeFunc);

function orangeFunc(){
    jumbotron.style.backgroundColor = `#f0ad4e`;
    donateBike.style.backgroundColor = `#5751fd`;
    volunteer.style.backgroundColor = `#31b0d5`;
    volunteer.style.color = `white`;
}

greenBtn.addEventListener("click",greenFunc);

function greenFunc(){
    jumbotron.style.backgroundColor = `#87ca8a`;
    donateBike.style.backgroundColor = `black`;
    volunteer.style.backgroundColor = `#8c9c08`;

}


//## Part 2

let submitBtn = document.querySelector('form button');
let emailField = document.querySelector("#exampleInputEmail1");
let nameField = document.querySelector("#example-text-input");
let describeField = document.querySelector("#exampleTextarea");

let arrayOfFields = [emailField,nameField,describeField];

submitBtn.addEventListener('click', (event)=>{
    event.preventDefault();

    for(let field of arrayOfFields){

        if(field.value.length === 0 || !field.value.includes('@')){
            field.style.backgroundColor = 'red';

        }//if closing

        else {
         alert("thank you for filling out the form");
         emailField.value = "";
         describeField.value = "";
         nameField.value = "";
         email.style.backgroundColor = "white";
         
    
        }//else closing

    }//for..of closing


}//arrow closing


);//addeventL closing
