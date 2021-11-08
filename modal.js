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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

const form = documemt.getElementById('form');

form.addEventListener("submit", (e)=>{
e.preventDefault();
alert('Thank you for your submission');
})

window.onload = function(){
const btnSubmit = document.getElementById('btn-submit');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');


btnSubmit.addEventListener('click', function(event){

  let message = [];
  if(first.value == ""){
   message.push("You need to write your first name");
  }
  if(last.value == ""){
    message.push("You need to write your last name");
   }
   if(email.value == ""){
    message.push("You need to write your email");
   }
   if(quantity.value == ""){
    message.push("You need to write the quantity");
   }
   if(birthdate.value == ""){
    message.push("You need to write your birthdate");
   }
})
}

