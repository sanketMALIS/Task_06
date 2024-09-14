document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    let errorMessages = '';
  
    // Name validation
    if (name === '') {
      errorMessages += '<p>Name is required.</p>';
    }
  
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMessages += '<p>Please enter a valid email address.</p>';
    }
  
    // Password validation
    if (password.length < 6) {
      errorMessages += '<p>Password must be at least 6 characters long.</p>';
    } else if (password !== confirmPassword) {
      errorMessages += '<p>Passwords do not match.</p>';
    }
  
    // Display error messages
    if (errorMessages) {
      document.getElementById('errorMessages').innerHTML = errorMessages;
    } else {
      // Form is valid, proceed with form submission (or further processing)
      alert('Form submitted successfully!');
      document.getElementById('registrationForm').reset();  // Reset the form
      document.getElementById('errorMessages').innerHTML = '';  // Clear any error messages
    }
  });
  