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
const modalBody = document.querySelector(".modal-body");

const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const howManyConstest = document.querySelector("#quantity");
const acceptCGU = document.querySelector("#checkbox-cgu");
const acceptNews = document.querySelector("#checkbox-news");

const firstNameError = document.querySelector("#firstname-error-msg");
const lastNameError = document.querySelector("#lastname-error-msg");
const emailError = document.querySelector("#email-error-msg");
const brithDateError = document.querySelector("#birthdate-error-msg");
const howManyConstestError = document.querySelector("#contest-amount-error-msg");
const selectContestError = document.querySelector("#select-contest-error-msg");
const acceptCguError = document.querySelector("#cgu-error-msg");


//get all location as array instead nodelist to process with some later, same for errorMsg
const contestList = [...document.querySelectorAll('[name="location"]')];
const errorMsgList = [...document.querySelectorAll('.error-msg')];

let modalHeight = null;

//modal informations are valids
//the way we append error message take in account that we DON'T add new fields to the form or change their orders
function modalsInformationAreValids(event) {
  //reset all element to block style
  errorMsgList.forEach(element => element.style.display = "none");
  //not really valid cause some special character are valids in locale part of email, this is more for demonstration cause recomendation are to just check for something like x@x.x 
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  // if (firstName.value.length < 2)
  //   firstNameError.style.display = "block";
  // if (lastName.value.length < 2)
  //   lastNameError.style.display = "block";
  // if (!email.value.match(emailRegex))
  //   emailError.style.display = "block";
  // if (birthDate.value == "")
  //   brithDateError.style.display = "block";
  // if (isNaN(howManyConstest.value) || howManyConstest.value == "")
  //   howManyConstestError.style.display = "block";
  // if (!contestList.some(element => element.checked))
  //   selectContestError.style.display = "block";
  // if (!acceptCGU.checked)
  //   acceptCguError.style.display = "block";
  if (errorMsgList.some(element => window.getComputedStyle(element).display === "block"))
    event.preventDefault();
  else 
    confirmInscription();
}

function confirmInscription() {
  confirmInscription,
  modalBody.style.height = modalHeight.toString() + "px";
  modalBody.style.display = "flex";
  modalBody.style.flexDirection = "column";
  modalBody.style.justifyContent = "space-between";
  modalBody.innerHTML = "<p class='thanks-signup'>Merci pour votre inscription<p> <button class='btn-close-confirm' onClick='closeModal();  location.reload()'>Fermer</button>"
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalHeight = modalBody.clientHeight;
}

//close modal event
modalCloseBtn.addEventListener("click", closeModal);

//close modal form
function closeModal() {
  modalbg.style.display = "none";
}