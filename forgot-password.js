document.getElementById('resetpassform').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let errors = [];
    let email = document.getElementById('email').value;
    let errorElement = document.getElementById('errors');

    
    if (email.trim() === '') {
        errors.push("Email is required.");
    } else if (!email.includes('@')) {
        errors.push("Email must be valid.");
    }

        if (errors.length > 0) {
        errorElement.innerHTML = errors.join('<br>');
    } else {
                errorElement.innerHTML = "Password reset instructions sent!";
        
        
        document.getElementById('resetpassform').reset();
        
        
        setTimeout(function() {
            window.location.href = "login.html";
        }, 2000); 
    }
});
