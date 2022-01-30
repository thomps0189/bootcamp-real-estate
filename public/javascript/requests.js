async function requestFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#username-request').value.trim();
    const property = document.querySelector('#property-request').value.trim();
    const email = document.querySelector('#email-request').value.trim();
    const message = document.querySelector('#message-request').value.trim();

    if (name && message) {
        const response = await fetch('/api/request-routes', {
            method: 'post',
            body: JSON.stringify({
                name,
                property,
                email,
                message
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.request-form').addEventListener('submit', requestFormHandler);