const overlay = document.getElementById("overlay");
const loginBox = document.getElementById("loginBox");
const loginBtn = document.getElementById("loginBtn");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.style.display = "flex";
  setTimeout(() => loginBox.classList.add("active"), 10);
});

function closeLogin() {
  loginBox.classList.remove("active");
  setTimeout(() => (overlay.style.display = "none"), 300);
}

function showRegister() {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
}

function showLogin() {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
}

// LOGIN VALIDATION
function login() {
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (!email || !pass) {
    alert("Please fill all fields!");
    return;
  }
  if (!email.endsWith("@gmail.com")) {
    alert("Email must end with @gmail.com");
    return;
  }

  const hasNumber = /\d/.test(pass);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
  const hasLetter = /[a-zA-Z]/.test(pass);

  if (pass.length < 6 || !hasNumber || !hasSpecial || !hasLetter) {
    alert("Password must include letters, numbers, and a special character!");
    return;
  }

  alert(`Welcome back, ${email}!`);
  closeLogin();
}

// REGISTER VALIDATION
function register() {
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const pass = document.getElementById("regPassword").value.trim();
  const confirm = document.getElementById("confirmPassword").value.trim();

  if (!name || !email || !pass || !confirm) {
    alert("Please fill all fields!");
    return;
  }

  if (!email.endsWith("@gmail.com")) {
    alert("Email must end with @gmail.com");
    return;
  }

  const hasNumber = /\d/.test(pass);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
  const hasLetter = /[a-zA-Z]/.test(pass);

  if (pass.length < 6 || !hasNumber || !hasSpecial || !hasLetter) {
    alert(
      "Password must contain letters, numbers, and at least one special character!"
    );
    return;
  }

  if (pass !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  alert(`Account created successfully for ${name}!`);
  showLogin();
}
function scrollToMore() {
  document.getElementById("moreSection").scrollIntoView({ behavior: "smooth" });
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.animated-line').classList.add('active');
});