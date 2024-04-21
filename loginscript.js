// Function to redirect to index page
function redirectToIndexPage() {
    window.location.href = "index.html";
  }
  
  // Login form submission handling
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform login authentication if needed
    // For simplicity, we'll directly redirect to the index page
    redirectToIndexPage();
  });
  
  // Signup form submission handling
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform signup process if needed
    // For simplicity, we'll directly redirect to the index page
    redirectToIndexPage();
  });
  