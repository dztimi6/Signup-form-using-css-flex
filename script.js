"use script";

const form = document.querySelector(".form");
const inputEls = document.querySelectorAll("input");
const loginButton = document.querySelector(".login-button");
const inputFields = document.querySelectorAll(".input");
const icons = document.querySelectorAll("i");
const inputLabels = document.querySelectorAll(".input-label");
const email = document.querySelector("#email");
console.log(email);

//Changes the border color of input field if empty
const changeBorder = function (inputFields) {
  inputFields.forEach(function (inputField) {
    inputField.style.border = "1px solid var(--red)";
  });
};

// Removes the class "hidden" to show the label when input field is empty
// const removeHiddenClass = function (inputLabel) {
//   inputLabel.classList.remove("hidden");
// };

const isValidEmail = function (email) {
  // Regular expression for a simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regular expression
  return emailRegex.test(email);
};

// const toggleClassList = function (inputEls, inputLabels, icons) {};

const inputCheck = function (inputEls, inputLabels, icons) {
  inputEls.forEach(function (input, i) {
    if (input.value === "") {
      // check for email placeholder and test if email is valid
      if (input.placeholder === "Email Address") {
        console.log("hi");
        input.placeholder = "email@example.com";
        if (input.value !== "") {
          input.placeholder = "email@example.com";
          isValidEmail(input.value);
        }
        // return;
      }
      if (
        input.id === inputLabels[i].classList[1] &&
        input.id === icons[i].classList[2]
      ) {
        // console.log(icons[i]);

        input.classList.add("b-color");
        icons[i].style.visibility = "visible";
        inputLabels[i].style.visibility = "visible";
        console.log(input, icons[i]);
        // return;
      }
      //   return;
    } else {
      icons[i].style.visibility = "hidden";
      inputLabels[i].style.visibility = "hidden";
      input.classList.remove("b-color");
    }
  });
};

const formValidation = function (e) {
  inputEls.forEach(function (input) {
    if (input.value === "") {
      // Prevent form from submitting
      e.preventDefault();
      inputCheck(inputEls, inputLabels, icons);
      return;
    }
  });
};

loginButton.addEventListener("click", formValidation);
