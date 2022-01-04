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

// redirect to homepage
function redirect(){
  window.location.href="index.html";
}

//close Modal and clear thank you screen and redirect to homepage

const button2 = document.getElementById('btn-submit2');
button2.onclick = function (){
  modalbg.style.display = "none";
  redirect();
}
var button = document.getElementById("close");
button.onclick = function (){
  modalbg.style.display = "none";
  redirect();
}
// close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// go to thank you screen 
async function sayThanks() {
  document.querySelector('form').style.display ="none";
  document.getElementById("form2").style.display = "inline-block";
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

// validate form and submit form 
form.addEventListener("submit", (e)=>{
e.preventDefault();
validate();
return true;
}
)
/*
function reset() {
  document.getElementById("form2").style.display = "none";
  document.querySelector('form').style.display ="inline-block";
}
reset();
*/

// validate function
function validate(){
const firstValue= document.getElementById('first').value.trim();
const lastValue = document.getElementById('last').value.trim();
const emailValue = document.getElementById('email').value.trim();
const birthDateValue = document.getElementById('birthdate').value.trim();
const quantityValue = document.getElementById('quantity').value.trim();
//const checkbox1Value = document.getElementById('checkbox1').value.trim();

if(firstValue == ""){
  document.getElementById('first').style.borderColor ="red";
  errorHandler(first, 'First Name can not be blank');
} else if (firstValue <= 2) {
  document.getElementById('first').style.borderColor ="red";
  errorHandler(first, 'First Name must be at least 2 characters');
  } else if (!isNaN(firstValue)) {
  document.getElementById('first').style.borderColor ="red";
  errorHandler(first, 'First Name can not be number');
} else {
  document.getElementById('first').style.borderColor ="black";
  successHandler(email);
}

  if(lastValue == ""){
    document.getElementById('last').style.borderColor ="red";
    errorHandler(last, 'Last Name can not be blank');
  } else if (lastValue <= 2) {
    document.getElementById('last').style.borderColor ="red";
    errorHandler(last, 'Last Name must be at least 2 characters');
  } else if (!isNaN(lastValue)) {
    document.getElementById('last').style.borderColor ="red";
    errorHandler(last, 'Last Name can not be number');
    } else {
      document.getElementById('last').style.borderColor ="black";
      successHandler(last);
    }

   if(emailValue == ""){
    document.getElementById('email').style.borderColor ="red";
    errorHandler(email, 'Your email can not be blank');
   }  else {
    document.getElementById('first').style.borderColor ="black";
    successHandler(email);
  }
   
  if(birthDateValue == ""){
    document.getElementById('birthdate').style.borderColor ="red";
    errorHandler(birthdate, 'Your birthdate can not be blank');
   } else {
    document.getElementById('birthdate').style.borderColor ="black";
    successHandler(birthdate);
  }
  if(quantityValue == ""){
    document.getElementById('quantity').style.borderColor ="red";
    errorHandler(quantity, 'Your need to write how many times you attended');
  } else if (isNaN(quantityValue)) {
    document.getElementById('quantity').style.borderColor ="red";
    errorHandler(quantity, 'quantity must be number');
   } else {
    document.getElementById('quantity').style.borderColor ="black";
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
  document.getElementById('place').style.display = "inline-block";
  formData.className = 'formData error';
  return false;
} else {
  document.getElementById('place').style.display = "none";
}
if(document.getElementById('checkbox1').checked == false){
  document.getElementById('pass').style.display = "inline-block";
  formData.className = 'formData error';
  return false;
}
sayThanks();
}