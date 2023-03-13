// Get elements
let form = document.querySelector('form');
let errorMessage = document.querySelector('#error');
let banner = document.querySelector('#banner');
let subtitle = document.querySelector('#subtitle');
let index = 0;

// List of subtitles to cycle through
let subtitles = [
  'Software Developer in Training',
  'CS Student at Portland State University',
  "Printing 'Hello World'",
  'Still Clicking?',
  'Writing Programs...',
  'Debugging Code...',
  'Executing Files...',
];

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

// When the form is reset, hide the error message
form.addEventListener('reset', (event) => {
  errorMessage.style.display = 'none';
});

// When the banner is clicked, cycle through the list of subtitles
banner.addEventListener('click', (event) => {
  subtitle.textContent = subtitles[index];
  index++;

  // Reset to the beginning of the array once you hit the end
  if (index == subtitles.length) index = 0;
});
