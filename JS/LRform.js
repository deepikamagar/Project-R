
      function validateLogin(event) {
        event.preventDefault();

        // Fetching input values
        var Email = document.getElementById("loginUsername").value;
        var password = document.getElementById("loginPassword").value;
        var rememberMe = document.getElementById("rememberMe").checked;

        // Validation  email
        if (!Email || !password) {
          alert("Please enter a valid email and password.");
          return;
        }

        // Successful login
        alert("Login successful!");
      }

      function validateRegistration(event) {
        event.preventDefault();

        // Fetching input values
        var fullName = document.getElementById("fullName").value;
        var email = document.getElementById("regEmail").value;
        var address = document.getElementById("address").value;
        var city = document.getElementById("city").value;
        var password = document.getElementById("regPassword").value;
        var confirmPassword = document.getElementById("confirmPassword").value;
        var acceptTerms = document.getElementById("acceptTerms").checked;

        // Basic validation
        if (
          !fullName ||
          !email ||
          !address ||
          !city ||
          !password ||
          !confirmPassword ||
          !acceptTerms
        ) {
          alert("Please fill in all fields for registration.");
          return;
        }

        // Validate full name format
        var nameRegx = /^[a-zA-Z\s]+$/;
        if (!nameRegx.test(fullName)) {
          alert("Please enter a valid Name");
          return;
        }

        // Validate email format
        var emailRegx = /^\S+@\S+\.\S+$/;
        if (!emailRegx.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }

        // Validate password strength
        var passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegx.test(password)) {
          alert(
            "Password must contain at least one number, one lowercase, and one uppercase letter, and at least 8 or more characters."
          );
          return;
        }

        if (password !== confirmPassword) {
          alert("Passwords do not match. Please re-enter your password.");
          return;
        }

        // Successful registration
        alert("Registration successful!");
      }

      function forgotPassword() {
        // Fetching input values
        var email = prompt("Enter your email to reset your password:");

        // Basic validation
        if (!email) {
          alert("Please enter a valid email address.");
          return;
        }

        // Forgot password
        // Show an alert for password reset
        alert("Password reset instructions sent to " + email);
      }

      function toggleForms() {
        var loginForm = document.getElementById("loginForm");
        var registrationForm = document.getElementById("registrationForm");

        if (loginForm.style.display === "none") {
          loginForm.style.display = "block";
          registrationForm.style.display = "none";
        } else {
          loginForm.style.display = "none";
          registrationForm.style.display = "block";
        }
      }
    