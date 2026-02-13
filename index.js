const Form = document.getElementById("formId");
const question = document.getElementById("message");
const questionLimit = document.getElementById("1500char");
const FirstName = document.getElementById("fname")
const FnameLimit = document.getElementById("FnameError");
const LastName = document.getElementById("lname")
const LnameLimit = document.getElementById("LnameError");

const email = document.getElementById("email");
const emailLimit = document.getElementById("emailError");

const button = document.getElementById("submitButton");

function validateEmail(theEmail) {
   const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return regex.test(theEmail);
}

var active = false;



question.addEventListener("input", () => {
   if (question.value.length > 1500) {
      question.value = question.value.slice(0, 1500);
      questionLimit.classList.add("visible");
      question.classList.add("redBox");
      active = true;


   }
   else {
      active = false;
      questionLimit.classList.remove("visible");
      question.classList.remove("redBox");
   }

})


FirstName.addEventListener("input", () => {
   if (FirstName.value.length > 50) {
      FirstName.value = FirstName.value.slice(0, 50);
      FnameLimit.classList.add("visible");
      FirstName.classList.add("redBox");
      active = true;
   }
   else {
      FnameLimit.classList.remove("visible");
      FirstName.classList.remove("redBox");
      active = false;
   }

})


LastName.addEventListener("input", () => {

   if (LastName.value.length > 50) {
      LastName.value = LastName.value.slice(0, 50);
      LnameLimit.classList.add("visible");
      LastName.classList.add("redBox");
      active = true;
   }
   else {
      LnameLimit.classList.remove("visible");
      LastName.classList.remove("redBox");
      active = false;
   }
})


email.addEventListener("input", () => {

   if (validateEmail(email.value) == false && email.value !== "") {
      emailLimit.classList.add("visible");
      email.classList.add("redBox");
      active = true;
   } else {
      emailLimit.classList.remove("visible");
      email.classList.remove("redBox");
      active = false;
   }


})


button.addEventListener("click", (event) => {



   if ((FirstName.value) == "" || (LastName.value) == "" || (question.value) == "" || (email.value) == "") {
      alert("Please provide all required information!");
      event.preventDefault();
   } else if (active == true) {
      alert("Fill in details correctly!");
      event.preventDefault();
   } else {

      alert("Question submitted Successfully!");
      question.value = "";
      FirstName.value = "";
      LastName.value = "";
      email.value = "";
   }



})


