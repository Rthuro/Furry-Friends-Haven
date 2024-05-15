const cancelButton = document.querySelector('button[type="cancel"]:first-of-type');


cancelButton.addEventListener('click', () => {

  const inputs = document.querySelectorAll('input[value]');


  inputs.forEach(input => {
    input.value = input.defaultValue;
  });
});


// Get the form elements
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const verificationInput = document.querySelector('#verification');
const sendVerificationButton = document.querySelector('#send-verification');
const verificationContainer = document.querySelector('#verification-container');

// Set up the event listener for the Send Verification Code button
sendVerificationButton.addEventListener('click', () => {
  // Generate a random verification code
  const verificationCode = Math.floor(100000 + Math.random() * 900000);

  // Send the verification code to the user's email address
  // You will need to implement this function using your email service
  sendVerificationCodeToEmail(emailInput.value, verificationCode);

  // Display the verification code to the user
  verificationInput.value = verificationCode;
});

// Set up the event listener for the email input
emailInput.addEventListener('change', () => {
  // Show the verification input and send button if the email has been changed
  if (emailInput.value !== 'beverlyheal@gmail.com') {
    verificationContainer.style.display = 'block';
  } else {
    verificationContainer.style.display = 'none';
    verificationInput.value = '';
  }
});

// Set up the event listener for the form submission
form.addEventListener('submit', (event) => {
  // Check if the email address has been changed
  if (emailInput.value !== 'beverlyheal@gmail.com') {
    // Check if the verification code matches the one sent to the user's email address
    if (verificationInput.value === '') {
      // Verification code has not been entered
      event.preventDefault();
      alert('Please enter the verification code sent to your email address.');
    } else if (verificationInput.value !== '123456') {
      // Verification code is invalid
      event.preventDefault();
      alert('Invalid verification code. Please try again.');
    }
  }
});



