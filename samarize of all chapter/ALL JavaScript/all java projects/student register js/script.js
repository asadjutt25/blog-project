const form = document.getElementById('authForm');
const toggleForm = document.getElementById('toggleForm');
const toggleText = document.getElementById('toggleText');
const formTitle = document.getElementById('formTitle');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');

let isLogin = true;

toggleForm.addEventListener('click', (e) => {
  e.preventDefault();
  isLogin = !isLogin;

  formTitle.textContent = isLogin ? 'Student Login' : 'Student Registration';
  nameInput.style.display = isLogin ? 'none' : 'block';
  submitBtn.textContent = isLogin ? 'Login' : 'Register';
  toggleText.innerHTML = isLogin
    ? `Don't have an account? <a href="#" id="toggleForm">Register here</a>`
    : `Already have an account? <a href="#" id="toggleForm">Login here</a>`;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (isLogin) {
    const storedUser = JSON.parse(localStorage.getItem(email));
    if (storedUser && storedUser.password === password) {
      message.style.color = 'green';
      message.textContent = `Welcome, ${storedUser.name}!`;
    } else {
      message.style.color = 'red';
      message.textContent = 'Invalid email or password.';
    }
  } else {
    if (localStorage.getItem(email)) {
      message.style.color = 'red';
      message.textContent = 'User already exists!';
    } else {
      const user = { name, email, password };
      localStorage.setItem(email, JSON.stringify(user));
      message.style.color = 'green';
      message.textContent = 'Registration successful! You can now login.';
      form.reset();
      nameInput.style.display = 'none';
      isLogin = true;
      formTitle.textContent = 'Student Login';
      submitBtn.textContent = 'Login';
    }
  }
});
