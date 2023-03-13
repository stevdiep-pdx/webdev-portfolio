// Get the form
let form = document.querySelector('form');

// Get the error message
let errorMessage = document.querySelector('#error');

// When the form is submitted, check its values
form.addEventListener('submit', (event) => {
  // Check to see if any of the textboxes are empty
  if (
    form.elements.name.value == '' ||
    form.elements.email.value == '' ||
    form.elements.message.value == ''
  ) {
    // Override the default behavior so that the invalid message isn't sent
    event.preventDefault();

    // Show the error message when there is an error
    errorMessage.style.display = 'block';
  }

  // If the input is good, hide the error message
  else {
    errorMessage.style.display = 'none';
  }
});
