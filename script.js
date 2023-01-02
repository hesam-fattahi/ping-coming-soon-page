"use strict";

const containerForm = document.querySelector(".form");
const inputEmail = document.querySelector("#email-input");
const errorEl = document.querySelector(".error-message");
const btnSubmit = document.querySelector(".btn-submit");

let emailValidation = (str) => {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return regex.test(str);
};

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputEmail.value) {
    if (emailValidation(inputEmail.value)) {
      inputEmail.value = "";
      containerForm.classList.remove("error");
    } else {
      errorEl.textContent = "Please provide a valid email address";
      containerForm.classList.add("error");
    }
  } else {
    errorEl.textContent = "Whoops! It looks like you forgot to add your email";
    containerForm.classList.add("error");
  }
});
