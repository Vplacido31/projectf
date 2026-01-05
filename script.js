document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting default

    // Get input elements
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    // Reset previous errors
    resetErrors([firstName, lastName, email, password]);

    let isValid = true;
    const formData = {};

    // Validation for each field
    if (isEmpty(firstName.value)) {
      showError(firstName, "First Name cannot be empty");
      isValid = false;
    } else {
      formData.firstName = firstName.value;
    }

    if (isEmpty(lastName.value)) {
      showError(lastName, "Last Name cannot be empty");
      isValid = false;
    } else {
      formData.lastName = lastName.value;
    }

    if (isEmpty(email.value)) {
      showError(email, "Email Address cannot be empty");
      isValid = false;
    } else if (!isEmail(email.value)) {
      showError(email, "Looks like this is not an email.");
      isValid = false;
    } else {
      formData.email = email.value;
    }

    if (isEmpty(password.value)) {
      showError(password, "Password cannot be empty");
      isValid = false;
    } else {
      formData.password = password.value;
    }

    // If form is valid, log the data to the console
    if (isValid) {
      console.log("Form Data Submitted:", formData);

      form.reset(); // Optionally reset the form after successful submission
    }
  });

  // Helper functions
  function isEmpty(value) {
    return value.trim() === "";
  }

  function isEmail(email) {
    // Simple regex for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function showError(inputElement, message) {
    const formGroup = inputElement.parentElement;
    const errorMessage = formGroup.querySelector(".error-message");

    inputElement.classList.add("error-border");
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }

  function resetErrors(inputElements) {
    inputElements.forEach((input) => {
      input.classList.remove("error-border");
      const formGroup = input.parentElement;
      const errorMessage = formGroup.querySelector(".error-message");
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
    });
  }
});
