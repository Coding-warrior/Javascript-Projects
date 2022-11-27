const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const button = document.querySelector("button");

let passwordMatch = false;
let isvalid;

function validateForm() {
  isvalid = form.checkValidity();
  if (!isvalid) {
    alert("Form details are not valid");
    return;
  }
  if (password1El.value === password2El.value) {
    passwordMatch = true;
  } else {
    passwordMatch = false;
    alert("bhai password match krva yr tu pehle");
  }
  //if form valid and password Match
  if (isvalid && passwordMatch) {
    alert("han bhai ho gya submit");
    console.log("bhai chal gya");
  }

  // alert("aare maza aa gya");
}

function processFormData(e) {
  e.preventDefault();
  validateForm();
}

form.addEventListener("submit", processFormData);
