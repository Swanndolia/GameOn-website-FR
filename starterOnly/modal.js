function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close");

const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const brithDate = document.querySelector("#birthdate");
const howManyConstest = document.querySelector("#quantity");
const acceptCGU = document.querySelector("#checkbox-cgu");
const acceptNews = document.querySelector("#checkbox-news");

//get all location as array instead nodelist to process with some later
const contestList = [...document.querySelectorAll('[name="location"]')];

//modal informations are valids
function modalsInformationAreValids(event){
  let errorMessage = "";
  //not really valid cause some special character are valids in locale part of email, this is more for demonstration cause recomendation are to just check for something like x@x.x 
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  if(firstName.value.length < 2){
    event.preventDefault();
    errorMessage += "Vérifier le champ prénom, il doit comporter au moins deux charactères\n\n"
  }
  if(lastName.value.length < 2){
    event.preventDefault();
    errorMessage += "Vérifier le champ nom, il doit comporter au moins deux charactères\n\n"
  }
  if(!email.value.match(emailRegex)){
    event.preventDefault();
    errorMessage += "Vérifier le champ email, celui ci n'est pas valide\n\n"
  }
  if(isNaN(howManyConstest.value)){
    event.preventDefault();
    errorMessage += "Veuillez indiquer le nombre de tournoi au quel vous avez participé\n\n"
  }
  if(!acceptCGU.checked){
    event.preventDefault();
    errorMessage += "Vous devez accepter les CGUs\n\n"
  }
  if(!contestList.some(element => element.checked)){
    event.preventDefault();
    errorMessage += "Veuiller choisir le tournoi au quel vous voulez participez\n\n"
  }
  if(errorMessage != ""){
    alert(errorMessage);
    errorMessage = "";
  } 
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal event
modalCloseBtn.addEventListener("click", closeModal);

//close modal form
function closeModal(){
  modalbg.style.display = "none";
}