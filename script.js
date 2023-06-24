const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error-msg');
const signupModal = document.getElementById('signup-modal');
const signupForm = document.getElementById('signup-form');
const signupUsernameInput = document.getElementById('signup-username');
const signupPasswordInput = document.getElementById('signup-password');
const signupEmailInput = document.getElementById('signup-email');
const signupErrorMsg = document.getElementById('signup-error-msg');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === '' || password === '') {
    errorMsg.textContent = 'Username or password is empty';
  } else {
    // Perform login logic here
    console.log('Logged in successfully');
    // Clear input fields
    usernameInput.value = '';
    passwordInput.value = '';
    errorMsg.textContent = '';
  }
});

function openSignupModal() {
  signupModal.style.display = 'block';
}

function closeSignupModal() {
  signupModal.style.display = 'none';
  // Clear input fields and error message
  signupUsernameInput.value = '';
  signupPasswordInput.value = '';
  signupEmailInput.value = '';
  signupErrorMsg.textContent = '';
}

signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const signupUsername = signupUsernameInput.value.trim();
  const signupPassword = signupPasswordInput.value.trim();
  const signupEmail = signupEmailInput.value.trim();

  if (signupUsername === '' || signupPassword === '' || signupEmail === '') {
    signupErrorMsg.textContent = 'Please fill in all the details';
  } else {
    // Display filled details in the modal
    signupErrorMsg.textContent = '';
    const details = `Username: ${signupUsername}<br>Password: ${signupPassword}<br>Email: ${signupEmail}`;
    signupForm.innerHTML = `<h3>Submitted Details:</h3>${details}`;
  }
});
