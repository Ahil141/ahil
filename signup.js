document.getElementById('signup-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formData = { name, email, password };

    try {
        const response = await fetch('http://localhost:3000/signup', {  // Adjusted URL to match server port
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            window.location.href = '/index.html'; // Redirect to index.html after successful signup
        } else {
            console.error('Signup failed', response.statusText);
        }
    } catch (error) {
        console.error('Error occurred during signup', error);
    }
});
