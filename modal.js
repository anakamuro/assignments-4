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


// close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

const form = document.getElementById('form');

form.addEventListener("submit", (e)=>{
e.preventDefault();
alert('Thank you for your submission');
closeModal();
})

function validate(){
const btnSubmit = document.getElementById('btn-submit');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');

if((document.getElementById('checkbox1').checked == false)){
  alert("You need to check the agreement")
}
if(quantity.value == ""){
  alert("You need to write the quantity");
  return false;
 }
if((document.getElementById('location1').checked == false) && (document.getElementById('location2').checked == false) && (document.getElementById('location3').checked == false) && (document.getElementById('location4').checked == false) && (document.getElementById('location5').checked == false) && (document.getElementById('location6').checked == false)){
  alert("you need to choose your location");
  return false;
}
if(!isNaN(first.value) && !isNaN(last.value)){
  alert("name should be character");
  return false;
 }
  if(first.value == ""){
  alert("You need to write your first name");
  return false;
  }
  if(last.value == ""){
    alert("You need to write your last name");
    return false;
   }
   if(email.value == ""){
    alert("You need to write your email");
    return false;
   }
   var at = email.indexOf("@");
   var dot = email.lastIndexzOf(".");

   if(at<1 || dot < at + 2 || dot + 2 >= email.length){
     alert("Not a valid email");
     return false;
   }
   if(quantity.value == ""){
    alert("You need to write the quantity");
    return false;
   }
   if(birthdate.value == ""){
    alert("You need to write your birthdate");
    return false;
   }
}

