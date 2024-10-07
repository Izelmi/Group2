document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let errors = [];
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let errorElement = document.getElementById('errors');

    if (email.trim() === '') {
        errors.push("Email is required.");
    } else if (!email.includes('@')) {
        errors.push("Email must be valid.");
    }

    
    if (password.trim().length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }

    
    if (errors.length > 0) {
        errorElement.innerHTML = errors.join('<br>');
    } else {
        errorElement.innerHTML = "Registration successful!";
        document.getElementById('loginform').reset();
    }
});
