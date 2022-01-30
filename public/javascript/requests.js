async function requestFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#username-request').value.trim();
    const property_id = document.querySelector('#property-request').value.trim();
    const email = document.querySelector('#email-request').value.trim();
    const request_message = document.querySelector('#message-request').value.trim();

    if (name && message) {
        const response = await fetch('/api/requests', {
            method: 'post',
            body: JSON.stringify({
                name,
                property_id,
                email,
                request_message,
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