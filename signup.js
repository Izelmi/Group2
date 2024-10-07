document.getElementById('signupform').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let errors = [];
    let email = document.getElementById('email').value;
    let errorElement = document.getElementById('errors');
    let password = document.getElementById('pass').value;
    let conpass = document.getElementById('conpass').value;
    let name = document.getElementById('name').value;

    if (email.trim() === '') {
        errors.push("Email is required.");
    } else if (!email.includes('@')) {
        errors.push("Email must be valid.");
    }

    if (password === '') {
        errors.push('Password is required.');
    } else if (password !== conpass) {
        errors.push('Passwords do not match.');
    } else if (password.length < 8) {
        errors.push('Password must be at least 8 characters long.');
    }

    if (name.trim() === '') {
        errors.push("Name is required. Please enter your name for validation.");
    }

    
    if (errors.length > 0) {
        errorElement.innerHTML = errors.join('<br>');
    } else {
        errorElement.innerHTML = "Registration successful!";
        document.getElementById('signupform').reset();
    }
});
