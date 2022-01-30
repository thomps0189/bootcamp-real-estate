async function signupFormHandler(event) {
    event.preventDefault();

    // getting data from the form
    const first_name = document.querySelector('#firstname-signup').value.trim();
    const last_name = document.querySelector('#lastname-signup').value.trim();
    const username = first_name.concat(last_name);
    const phone = document.querySelector('#phone-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (first_name && email && password) {
        const response = await fetch('/api/tenants', {
            method: 'post',
            body: JSON.stringify({
                username,
                first_name,
                last_name,
                phone,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        // check the response status
        if (response.ok) {
            console.log('success');
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler); 