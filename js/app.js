// Login function
function login() {
  // Get the username and password values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if fields are empty
  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  // Example credentials for validation
  const validUsername = "user";
  const validPassword = "password";

  // Validate credentials
  if (username === validUsername && password === validPassword) {
    alert("Login successful!");
    // Redirect to another page (example: dashboard.html)
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password.");
  }
}

// Attach event listener to the login button

