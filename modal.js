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
const closeBtn = document.getElementById("close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

closeBtn.addEventListener("click", closeModal);

var button = document.getElementById("close");
button.onclick = function (){
  modalbg.style.display = "none";
}
// close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
/*
function firstError(){
  const firstInput = document.getElementById('first');
  firstInput.innerHTML = "You need to write your first name";
  firstInput.style.borderColor = red;
}
*/

async function sayThanks() {
  document.getElementById("thank-you").style.display = "inline-block";
  document.getElementById("form").style.display = "none";
  document.getElementById("thank-you").classList.add("#close");
  console.log('calling');
  const result = await closeModal();
  console.log(result);
  // expected output: "resolved"
}
function closeModal() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 3000);
  });
}
const form = document.getElementById('form');


form.addEventListener("submit", (e)=>{
e.preventDefault();
validate();
}
)



function validate(){
const firstValue= document.getElementById('first').value.trim();
const lastValue = document.getElementById('last').value.trim();
const emailValue = document.getElementById('email').value.trim();
const birthDateValue = document.getElementById('birthdate').value.trim();
const quantityValue = document.getElementById('quantity').value.trim();
const checkbox1Value = document.getElementById('checkbox1').value


if(firstValue == ""){
  errorHandler(first, 'First Name can not be blank');
} else if (firstValue >= 2) {
  errorHandler(first, 'First Name must be at least 2 characters');
  } else if (!isNaN(firstValue)) {
  errorHandler(first, 'First Name can not be number');
} else {
  successHandler(email);
}

  if(lastValue == ""){
    errorHandler(last, 'Last Name can not be blank');
  } else if (lastValue >= 2) {
    errorHandler(last, 'Last Name must be at least 2 characters');
  } else if (!isNaN(lastValue)) {
    errorHandler(last, 'Last Name can not be number');
    } else {
      successHandler(email);
    }

   if(emailValue == ""){
    errorHandler(email, 'Your email can not be blank');
   } else {
    successHandler(email);
  }
   
  if(birthDateValue == ""){
    errorHandler(birthdate, 'Your birthdate can not be blank');
   } else {
    successHandler(birthdate);
  }
  if(quantityValue == ""){
    errorHandler(quantity, 'Your need to write how many times you attended');
  } else if (isNaN(quantityValue)) {
    errorHandler(last, 'Last Name can not be number');
   } else {
    successHandler(quantity);
  }
 function errorHandler(input, message){
   const formData = input.parentElement;
   const small = formData.querySelector('small');
   small.innerText = message;
   formData.className = 'formData error';
   valid: false;
 }

 function successHandler(input){
  const formData = input.parentElement;
  formData.className = 'formData success'
}
if(document.querySelectorAll('[name=location]:checked').length == 0){
  const formData = input.parentElement;
  const small = formData.querySelector('small');
  small.innerHTML = "hello";
  formData.className = 'formData error';
  return false;
} 

if(checkbox1Value.checked == false){
  const must = document.getElementById('must');
  must.innerHTML = "hello";
  formData.className = 'formData error';
  return false;
}
sayThanks();
}

